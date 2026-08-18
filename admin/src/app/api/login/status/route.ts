import { cookies } from "next/headers";
import { db } from "@/lib/db";
import {
  ADMIN_COOKIE,
  cookieOptions,
  createToken,
  isAllowed,
} from "@/lib/auth";

const TTL_MS = 5 * 60 * 1000;

/**
 * Brauzer shu manzilni so'rab turadi. Bot tokenni tasdiqlagach,
 * foydalanuvchi ruxsat ro'yxatida bo'lsa — admin sessiyasi beriladi.
 */
export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("token");
  if (!token) return Response.json({ status: "unknown" });

  const { data: req } = await db()
    .from("login_requests")
    .select("token, created_at, approved_user_id")
    .eq("token", token)
    .maybeSingle();

  if (!req) return Response.json({ status: "unknown" });

  if (Date.parse(req.created_at) + TTL_MS < Date.now()) {
    return Response.json({ status: "expired" });
  }

  if (!req.approved_user_id) return Response.json({ status: "pending" });

  const { data: user } = await db()
    .from("users")
    .select("telegram_id, first_name, username")
    .eq("id", req.approved_user_id)
    .maybeSingle();

  if (!user) return Response.json({ status: "pending" });

  // Tokenni darhol kuydiramiz — bir marta ishlatiladi
  await db().from("login_requests").delete().eq("token", token);

  if (!isAllowed(Number(user.telegram_id))) {
    return Response.json({ status: "denied" });
  }

  const store = await cookies();
  store.set(
    ADMIN_COOKIE,
    createToken({
      telegramId: Number(user.telegram_id),
      firstName: user.first_name,
      username: user.username ?? undefined,
    }),
    cookieOptions(),
  );

  return Response.json({ status: "approved" });
}
