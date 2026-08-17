import Link from "next/link";
import { Logo } from "@/components/app-shell";

/**
 * Kirish ekranlari uchun alohida sahifa qolipi — yon panel va pastki
 * navigatsiyasiz, markazlashgan bitta ustun.
 */
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-paper flex min-h-screen flex-col">
      <header className="flex items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/">
          <Logo />
        </Link>
        <Link
          href="/"
          className="text-muted-2 hover:text-ink text-[14px] font-semibold transition-colors"
        >
          Ilovaga qaytish →
        </Link>
      </header>

      <main className="flex flex-1 items-start justify-center px-6 pb-16 lg:items-center lg:pb-24">
        <div className="w-full max-w-[440px]">{children}</div>
      </main>
    </div>
  );
}
