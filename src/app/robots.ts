import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Ichki yo'llar indekslanmasin
      disallow: ["/api/", "/modul/", "/result/", "/ui-kit"],
    },
    sitemap: "https://prufung.uz/sitemap.xml",
    host: "https://prufung.uz",
  };
}
