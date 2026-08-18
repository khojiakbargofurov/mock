"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        void fetch("/api/logout", { method: "POST" }).then(() => {
          router.replace("/login");
          router.refresh();
        });
      }}
      className="text-on-dark-dim hover:text-paper mt-3 w-full cursor-pointer rounded-lg border border-white/10 px-3 py-[7px] text-[13px] font-semibold transition-colors hover:bg-white/[.06]"
    >
      Chiqish
    </button>
  );
}
