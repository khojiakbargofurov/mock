import type { MetadataRoute } from "next";

/**
 * PWA manifesti — telefonda "asosiy ekranga qo'shish" uchun.
 * Ranglar dizayn tizimidan: papier fon, tinte sarlavha paneli.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "prufung.uz — Goethe va telc imtihoni",
    short_name: "Mock Test",
    description:
      "Goethe va telc formatidagi mashq imtihonlari: A1–B2, xatolar daftari va lug'at.",
    start_url: "/uebersicht",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f6f2eb",
    theme_color: "#14191f",
    lang: "uz",
    categories: ["education"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
