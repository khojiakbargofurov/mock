import { redirect } from "next/navigation";
import { currentAdmin } from "@/lib/auth";
import { LoginBox } from "@/components/login-box";

export default async function LoginPage() {
  if (await currentAdmin()) redirect("/");

  return (
    <main className="grid min-h-screen place-items-center px-6 py-10">
      <div className="border-line bg-surface w-full max-w-[420px] rounded-[18px] border p-7">
        <div className="mb-5 flex items-center gap-3">
          <span className="bg-ink text-paper font-display grid h-10 w-10 place-items-center rounded-[11px] text-[16px] font-bold">
            A
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[17px] font-bold">
              Admin panel
            </span>
            <span className="text-muted-2 text-[13px]">prufung.uz</span>
          </div>
        </div>

        <p className="text-muted-3 mb-5 text-[14.5px] leading-[1.6]">
          Telegram orqali kiring. Faqat ruxsat berilgan hisoblar o‘tadi —
          boshqa foydalanuvchilar bu panelni ko‘ra olmaydi.
        </p>

        <LoginBox />
      </div>
    </main>
  );
}
