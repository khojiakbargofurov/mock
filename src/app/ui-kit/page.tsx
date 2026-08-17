"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Badge, Chip, Overline } from "@/components/ui/badge";
import { ProgressBar, SkillRow, SegmentBar } from "@/components/ui/progress";
import { Toggle, SettingRow } from "@/components/ui/toggle";
import { Card, StatCard, Avatar } from "@/components/ui/card";
import { ScoreRing } from "@/components/ui/score-ring";
import {
  Skeleton,
  Spinner,
  LoadingLine,
  EmptyState,
} from "@/components/ui/feedback";

/**
 * Dizayn faylidagi "06 · UI kit" freymining tirik versiyasi.
 * Har bir komponent shu yerda vizual tekshiriladi.
 */
export default function UiKitPage() {
  const [pw, setPw] = useState("Passwort12");
  const [email, setEmail] = useState("anna.mueller@mail.de");
  const [filter, setFilter] = useState("all");
  const [timeLimit, setTimeLimit] = useState(true);
  const [instant, setInstant] = useState(false);
  const [focus, setFocus] = useState(true);

  return (
    <main className="bg-canvas min-h-screen px-12 py-14">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-14">
        <header className="flex flex-col gap-3">
          <h1 className="font-display m-0 text-[44px] font-extrabold">
            UI kit
          </h1>
          <Overline>German Mock Test · dizayn tizimi</Overline>
        </header>

        {/* Tipografiya */}
        <Card className="flex flex-col gap-4 p-[34px]">
          <Overline>Tipografiya</Overline>
          <span className="font-display text-[40px] leading-[1.1] font-extrabold">
            Prüfung · 40 / 800
          </span>
          <span className="font-display text-[28px] font-bold">
            Wechselpräpositionen · 28 / 700
          </span>
          <span className="text-[19px] font-semibold">
            Größe, Straße, Ärzte · 19 / 600
          </span>
          <span className="text-slate text-[16px] leading-[1.6]">
            Ich möchte die Übung später wiederholen, weil ich die Dativformen
            noch üben muss. · 16 / 400
          </span>
          <Overline>Overline · 12 / 500 · .16em</Overline>
        </Card>

        {/* Tugmalar + maydonlar */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="flex flex-col gap-4 p-[34px]">
            <Overline>Tugmalar</Overline>
            <div className="flex flex-wrap gap-[10px]">
              <Button>Primary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap items-center gap-[10px]">
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </div>
          </Card>

          <Card className="flex flex-col gap-4 p-[34px]">
            <Overline>Maydonlar</Overline>
            <Input
              label="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              label="Passwort"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              showStrength
              hint="Kamida 8 belgi, bitta raqam va bitta katta harf."
            />
            <Input
              label="Xato holati"
              defaultValue="qisqa"
              error="Kamida 8 belgi kerak."
            />
          </Card>

          <Card className="flex flex-col gap-4 p-[34px]">
            <Overline>Nishonlar va holatlar</Overline>
            <div className="flex flex-wrap gap-[9px]">
              <Badge tone="ok">Richtig</Badge>
              <Badge tone="bad">Falsch</Badge>
              <Badge tone="marked">Markiert</Badge>
              <Badge tone="ink">B1</Badge>
              <Badge tone="new">Neu</Badge>
            </div>
            <Overline className="mt-2">Filtr chiplari</Overline>
            <div className="flex flex-wrap gap-[9px]">
              <Chip active={filter === "all"} onClick={() => setFilter("all")}>
                Barchasi
              </Chip>
              <Chip
                active={filter === "gr"}
                count={18}
                onClick={() => setFilter("gr")}
              >
                Grammatik
              </Chip>
              <Chip
                active={filter === "wo"}
                count={9}
                onClick={() => setFilter("wo")}
              >
                Wortschatz
              </Chip>
              <Chip
                active={filter === "ho"}
                count={7}
                onClick={() => setFilter("ho")}
              >
                Hörverstehen
              </Chip>
            </div>
            <Overline className="mt-2">Kartochka · natija</Overline>
            <Card tone="paper" className="flex flex-col gap-3 p-5">
              <div className="flex items-center justify-between">
                <span className="text-[15.5px] font-semibold">
                  Hörverstehen
                </span>
                <span className="tnum text-danger text-[15px] font-bold">
                  64%
                </span>
              </div>
              <ProgressBar value={64} />
              <span className="text-muted-3 text-[13.5px]">
                O‘tish balli 60% · yaqin chegara
              </span>
            </Card>
          </Card>
        </div>

        {/* Progress, toggle, statistika */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card className="flex flex-col gap-4 p-[34px]">
            <Overline>Ko‘nikmalar</Overline>
            <SkillRow name="Grammatik" value={72} />
            <SkillRow name="Wortschatz" value={85} />
            <SkillRow name="Leseverstehen" value={80} />
            <SkillRow name="Hörverstehen" value={64} />
            <Overline className="mt-2">Sinov segmentlari</Overline>
            <SegmentBar
              total={12}
              current={4}
              answered={[true, true, true, true, ...Array(8).fill(false)]}
            />
          </Card>

          <Card className="flex flex-col gap-5 p-[34px]">
            <Overline>Toggle va sozlamalar</Overline>
            <SettingRow
              title="Vaqt cheklovi"
              description="Har savol uchun taymer ko‘rsatiladi"
              checked={timeLimit}
              onChange={setTimeLimit}
            />
            <SettingRow
              title="Darhol javobni ko‘rsatish"
              description="Sinov oxirida emas, har savoldan keyin"
              checked={instant}
              onChange={setInstant}
              divider
            />
            <div className="border-line-soft flex items-center gap-[9px] border-t pt-4 text-[13.5px] font-semibold">
              <Toggle
                size="sm"
                checked={focus}
                onChange={setFocus}
                label="Fokus-Modus"
              />
              Fokus-Modus {focus ? "yoqilgan" : "o‘chirilgan"}
            </div>
            <Overline className="mt-2">KPI kartalari</Overline>
            <div className="grid grid-cols-3 gap-[14px]">
              <StatCard label="O‘rtacha ball" value="78%" />
              <StatCard label="Testlar" value="24" />
              <StatCard label="Yangi so‘zlar" value="412" />
            </div>
            <div className="flex items-center gap-3">
              <Avatar initials="AZ" size={32} />
              <Avatar initials="AZ" size={76} />
            </div>
          </Card>

          <Card tone="ink" className="flex flex-col items-center gap-5 p-[30px]">
            <Overline className="text-on-dark-muted self-start">
              Ball halqasi
            </Overline>
            <ScoreRing score={78} caption="28 / 36 to‘g‘ri" />
            <div className="border-on-dark/14 flex w-full justify-around border-t pt-[6px]">
              {[
                ["Vaqt", "31:04"],
                ["O‘rtacha", "52 s"],
                ["O‘tish balli", "60%"],
              ].map(([k, v]) => (
                <span key={k} className="flex flex-col items-center gap-[3px]">
                  <span className="text-on-dark-muted text-[12px]">{k}</span>
                  <span className="tnum text-[19px] font-bold">{v}</span>
                </span>
              ))}
            </div>
          </Card>
        </div>

        {/* Bo'sh va yuklanish holatlari */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card tone="paper" className="p-0">
            <EmptyState
              title="Fehlerbuch hozircha bo‘sh"
              body="Birinchi mock testni yakunlaganingizdan so‘ng, xato qilgan savollar izohlari bilan shu yerda to‘planadi."
              primary={{ label: "Sinovni boshlash" }}
              secondary={{ label: "Qanday ishlaydi?" }}
            />
          </Card>

          <Card tone="paper" className="flex flex-col gap-5 p-[34px]">
            <LoadingLine text="Savollar tayyorlanmoqda…" />
            <div className="grid grid-cols-3 gap-3">
              <Skeleton className="h-[74px]" />
              <Skeleton className="h-[74px]" delay={0.12} />
              <Skeleton className="h-[74px]" delay={0.24} />
            </div>
            <Card className="flex flex-1 flex-col gap-[14px] rounded-3xl">
              <Skeleton className="h-3 w-[26%] rounded-xs" />
              <Skeleton className="h-6 w-[88%] rounded-sm" delay={0.1} />
              <Skeleton className="h-6 w-[62%] rounded-sm" delay={0.2} />
              <div className="mt-auto grid grid-cols-2 gap-3">
                {[0.1, 0.2, 0.3, 0.4].map((d) => (
                  <Skeleton key={d} className="h-[58px]" delay={d} />
                ))}
              </div>
            </Card>
            <div className="flex items-center gap-3">
              <Spinner />
              <span className="text-muted-2 text-[13.5px]">
                Spinner komponenti
              </span>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
