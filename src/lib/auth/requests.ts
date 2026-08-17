import crypto from "node:crypto";
import type { SessionUser } from "@/lib/auth/session";
import { dbReady } from "@/lib/db/client";
import {
  dbApproveLoginRequest,
  dbCreateLoginRequest,
  dbLoginStatus,
  dbTakeApprovedUser,
  findUser,
  upsertUser,
} from "@/lib/db/repo";

/**
 * Kirish so'rovlari (Telegram deep-link oqimi):
 * brauzer token yaratadi → foydalanuvchi botda "Start" bosadi →
 * bot tokenni tasdiqlaydi → brauzer holatni so'rab, sessiyani oladi.
 *
 * Supabase sozlangan bo'lsa — hammasi bazada (bir nechta server nusxasi
 * bo'lsa ham ishlaydi). Sozlanmagan bo'lsa — xotirada, faqat lokal
 * ishlab chiqish uchun.
 */
export const LOGIN_REQUEST_TTL_SEC = 5 * 60;

export type LoginStatus = "pending" | "approved" | "expired" | "unknown";

interface LoginRequest {
  token: string;
  createdAt: number;
  user?: SessionUser;
}

interface MemoryStore {
  requests: Map<string, LoginRequest>;
  users: Map<string, SessionUser>;
}

const globalStore = globalThis as unknown as { __gmtAuth?: MemoryStore };
const memory: MemoryStore = (globalStore.__gmtAuth ??= {
  requests: new Map(),
  users: new Map(),
});

function prune() {
  const deadline = Date.now() - LOGIN_REQUEST_TTL_SEC * 1000;
  for (const [token, request] of memory.requests) {
    if (request.createdAt < deadline) memory.requests.delete(token);
  }
}

export async function createLoginRequest(): Promise<{
  token: string;
  expiresIn: number;
}> {
  const token = crypto.randomBytes(16).toString("base64url");

  if (dbReady() && (await dbCreateLoginRequest(token))) {
    return { token, expiresIn: LOGIN_REQUEST_TTL_SEC };
  }

  prune();
  memory.requests.set(token, { token, createdAt: Date.now() });
  return { token, expiresIn: LOGIN_REQUEST_TTL_SEC };
}

/** Bot tomonidan tasdiqlash. Token noto'g'ri yoki eskirgan bo'lsa false. */
export async function approveLoginRequest(
  token: string,
  user: SessionUser,
): Promise<boolean> {
  if (dbReady()) return dbApproveLoginRequest(token, user);

  prune();
  const request = memory.requests.get(token);
  if (!request) return false;

  const known = memory.users.get(user.id);
  const merged: SessionUser = known
    ? { ...user, createdAt: known.createdAt }
    : user;

  memory.users.set(user.id, merged);
  memory.requests.set(token, { ...request, user: merged });
  return true;
}

export async function loginStatus(token: string): Promise<LoginStatus> {
  if (dbReady()) {
    const status = await dbLoginStatus(token);
    if (status) return status;
  }

  prune();
  const request = memory.requests.get(token);
  if (!request) return "unknown";
  if (request.user) return "approved";
  return Date.now() - request.createdAt > LOGIN_REQUEST_TTL_SEC * 1000
    ? "expired"
    : "pending";
}

/**
 * Tasdiqlangan foydalanuvchini oladi va so'rovni o'chiradi —
 * bitta token faqat bir marta sessiyaga aylanadi.
 */
export async function takeApprovedUser(
  token: string,
): Promise<SessionUser | null> {
  if (dbReady()) return dbTakeApprovedUser(token);

  const request = memory.requests.get(token);
  if (!request?.user) return null;
  memory.requests.delete(token);
  return request.user;
}

/** Foydalanuvchini ro'yxatga qo'shadi (Login Widget oqimi uchun) */
export async function rememberUser(user: SessionUser): Promise<SessionUser> {
  if (dbReady()) {
    const saved = await upsertUser(user);
    if (saved) return saved.user;
  }

  const known = memory.users.get(user.id);
  const merged: SessionUser = known
    ? { ...user, createdAt: known.createdAt }
    : user;
  memory.users.set(user.id, merged);
  return merged;
}

/** Bu Telegram hisobi ilgari kirganmi (ro'yxatdan o'tganmi) */
export async function isKnownUser(id: string): Promise<boolean> {
  if (dbReady()) return (await findUser(id)) !== null;
  return memory.users.has(id);
}
