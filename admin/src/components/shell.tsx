import { Nav } from "@/components/ui";
import { LogoutButton } from "@/components/logout-button";
import type { AdminUser } from "@/lib/auth";

export function Shell({
  admin,
  current,
  title,
  hint,
  children,
}: {
  admin: AdminUser;
  current: string;
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-line bg-paper border-b">
        <div className="mx-auto flex w-full max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="bg-ink text-paper font-display grid h-9 w-9 place-items-center rounded-[10px] text-[15px] font-bold">
              A
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[16px] font-bold">
                prufung.uz
              </span>
              <span className="text-muted-2 text-[12.5px]">Admin panel</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-muted-3 text-[13.5px]">
              {admin.firstName}
              {admin.username ? ` · @${admin.username}` : ""}
            </span>
            <LogoutButton />
          </div>
        </div>
        <div className="mx-auto w-full max-w-[1180px] px-6 pb-3">
          <Nav current={current} />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-[1180px] flex-col gap-7 px-6 py-8">
        <div className="flex flex-col gap-1">
          <h1 className="font-display m-0 text-[27px] font-extrabold">
            {title}
          </h1>
          {hint && (
            <p className="text-muted-3 m-0 text-[14.5px]">{hint}</p>
          )}
        </div>
        {children}
      </main>
    </div>
  );
}
