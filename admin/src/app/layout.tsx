import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: [
    { path: "./fonts/bricolage-grotesque-latin.woff2", style: "normal" },
    { path: "./fonts/bricolage-grotesque-latin-ext.woff2", style: "normal" },
  ],
  variable: "--font-display-local",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "./fonts/source-sans-3-latin.woff2", style: "normal" },
    { path: "./fonts/source-sans-3-latin-ext.woff2", style: "normal" },
  ],
  variable: "--font-body-local",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin · prufung.uz",
  description: "Ichki panel",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
