import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Ulashish kartochkasi — Telegram, WhatsApp va qidiruv natijalarida
 * ko'rinadigan rasm. Brend palitrasi va shriftlari saqlanadi.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "prufung.uz — Goethe va telc imtihoniga tayyorgarlik";

export default async function OpengraphImage() {
  const dir = join(process.cwd(), "src/app/og-fonts");
  const [display, body] = await Promise.all([
    readFile(join(dir, "display-800.ttf")),
    readFile(join(dir, "body-400.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F6F2EB",
          padding: "68px 72px",
          fontFamily: "Source Sans 3",
          color: "#14191F",
        }}
      >
        {/* Yuqori qator: logotip */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 18,
              background: "#14191F",
              color: "#F6F2EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bricolage Grotesque",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            G
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "Bricolage Grotesque",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              prufung.uz
            </span>
            <span style={{ fontSize: 19, color: "#7A6E5D", letterSpacing: 2 }}>
              GOETHE · TELC
            </span>
          </div>
        </div>

        {/* Asosiy matn */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Bricolage Grotesque",
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 940,
            }}
          >
            <span>Imtihon formatida</span>
            <span style={{ color: "#C98A3E" }}>haqiqiy mashq</span>
          </div>
          <span style={{ fontSize: 30, color: "#3C4650", maxWidth: 900 }}>
            Modullar, Teil’lar, taymer va rasmiy ball hisobi. Xatolar
            daftarga tushadi, so‘zlar takrorlash jadvaliga chiqadi.
          </span>
        </div>

        {/* Pastki qator: raqamlar */}
        <div style={{ display: "flex", gap: 56, alignItems: "flex-end" }}>
          {[
            ["28", "to‘liq imtihon varianti"],
            ["1 484", "imtihon topshirig‘i"],
            ["640", "so‘z, takrorlash bilan"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span
                style={{
                  fontFamily: "Bricolage Grotesque",
                  fontSize: 46,
                  fontWeight: 800,
                  lineHeight: 1,
                }}
              >
                {value}
              </span>
              <span style={{ fontSize: 21, color: "#7A6E5D" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage Grotesque", data: display, style: "normal", weight: 800 },
        { name: "Source Sans 3", data: body, style: "normal", weight: 400 },
      ],
    },
  );
}
