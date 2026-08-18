import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { Shell } from "@/components/shell";
import { Card, Empty } from "@/components/ui";
import { UsersTable } from "@/components/users-table";
import { recentUsers } from "@/lib/stats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function UsersPage() {
  const admin = await currentAdmin();
  if (!admin) redirect("/login");

  const users = await recentUsers(200);

  return (
    <Shell
      admin={admin}
      current="/foydalanuvchilar"
      eyebrow={`${users.length} yozuv`}
      title="Foydalanuvchilar"
    >
      {users.length === 0 ? (
        <Card>
          <Empty
            title="Hali foydalanuvchi yo‘q"
            body="Birinchi foydalanuvchi Telegram orqali kirgach, shu yerda ro‘yxat paydo bo‘ladi."
          />
        </Card>
      ) : (
        <UsersTable users={users} />
      )}
    </Shell>
  );
}
