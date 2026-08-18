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
      className="border-line text-muted-3 hover:bg-sand cursor-pointer rounded-lg border px-3 py-[7px] text-[13.5px] font-semibold transition-colors"
    >
      Chiqish
    </button>
  );
}
