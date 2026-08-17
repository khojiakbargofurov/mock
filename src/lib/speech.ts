"use client";

import * as React from "react";

/**
 * Brauzer TTS (nemis ovozi) — Hörverstehen savollari va Wortschatz kartochkalari
 * shu hookdan foydalanadi. Audio fayl saqlanmaydi, matn brauzerda o'qiladi.
 */
const noopSubscribe = () => () => {};
const speechSupported = () =>
  typeof window !== "undefined" && "speechSynthesis" in window;

export function useSpeech(text?: string) {
  const [speaking, setSpeaking] = React.useState(false);
  // Server renderda "qo'llab-quvvatlanmaydi" — brauzerda darhol aniqlanadi
  const supported = React.useSyncExternalStore(
    noopSubscribe,
    speechSupported,
    () => false,
  );

  React.useEffect(() => {
    return () => {
      if (speechSupported()) window.speechSynthesis.cancel();
    };
  }, []);

  const speak = React.useCallback(
    (override?: string) => {
      // `onClick={speak}` bo'lib qolsa hodisa obyekti o'qilib ketmasin
      const value = typeof override === "string" ? override : text;
      if (!value || !speechSupported()) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(value);
      utterance.lang = "de-DE";
      utterance.rate = 0.95;
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    },
    [text],
  );

  return { speak, speaking, supported };
}

/** Ekran almashganda oldingi o'qishni to'xtatadi */
export function cancelSpeech() {
  if (speechSupported()) window.speechSynthesis.cancel();
}

/* ── Ko'p ovozli skript (Hörverstehen) ──────────────────────────────────── */

export type VoiceRole =
  | "narrator"
  | "male"
  | "female"
  | "male2"
  | "female2";

export interface ScriptLine {
  voice: VoiceRole;
  text: string;
}

/** Rol → ovoz sozlamalari. Brauzerda bir nechta nemis ovozi bo'lmasa,
 *  ohang (pitch) va tezlik orqali personajlar farqlanadi. */
const ROLE_TUNING: Record<VoiceRole, { pitch: number; rate: number }> = {
  narrator: { pitch: 1.0, rate: 0.92 },
  female: { pitch: 1.14, rate: 0.95 },
  male: { pitch: 0.82, rate: 0.93 },
  female2: { pitch: 1.24, rate: 0.98 },
  male2: { pitch: 0.72, rate: 0.9 },
};

function germanVoices(): SpeechSynthesisVoice[] {
  if (!speechSupported()) return [];
  return window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang.toLowerCase().startsWith("de"));
}

/** Rolga barqaror ovoz biriktiradi — bir skript ichida personaj o'zgarmaydi */
function voiceFor(role: VoiceRole, voices: SpeechSynthesisVoice[]) {
  if (voices.length === 0) return undefined;
  const order: VoiceRole[] = ["narrator", "female", "male", "female2", "male2"];
  return voices[order.indexOf(role) % voices.length];
}

/**
 * Dialogni ketma-ket o'qiydi. Imtihon qoidasi bo'yicha to'xtatib bo'lmaydi —
 * shuning uchun faqat "boshlash" va "hammasini bekor qilish" bor.
 */
export function useScriptSpeech() {
  const [playing, setPlaying] = React.useState(false);
  const [lineIndex, setLineIndex] = React.useState(-1);
  const cancelled = React.useRef(false);

  const supported = React.useSyncExternalStore(
    noopSubscribe,
    speechSupported,
    () => false,
  );

  React.useEffect(() => {
    return () => {
      cancelled.current = true;
      cancelSpeech();
    };
  }, []);

  const play = React.useCallback((lines: ScriptLine[], onDone?: () => void) => {
    if (!speechSupported() || lines.length === 0) return;

    cancelled.current = false;
    window.speechSynthesis.cancel();
    const voices = germanVoices();
    setPlaying(true);

    const speakAt = (i: number) => {
      if (cancelled.current) return;
      if (i >= lines.length) {
        setPlaying(false);
        setLineIndex(-1);
        onDone?.();
        return;
      }

      setLineIndex(i);
      const line = lines[i];
      const tuning = ROLE_TUNING[line.voice];
      const utterance = new SpeechSynthesisUtterance(line.text);
      utterance.lang = "de-DE";
      utterance.pitch = tuning.pitch;
      utterance.rate = tuning.rate;
      const voice = voiceFor(line.voice, voices);
      if (voice) utterance.voice = voice;

      // Gaplar orasida kichik pauza — tabiiy dialog ohangi uchun
      utterance.onend = () => window.setTimeout(() => speakAt(i + 1), 320);
      utterance.onerror = () => {
        setPlaying(false);
        setLineIndex(-1);
        onDone?.();
      };

      window.speechSynthesis.speak(utterance);
    };

    speakAt(0);
  }, []);

  const stop = React.useCallback(() => {
    cancelled.current = true;
    cancelSpeech();
    setPlaying(false);
    setLineIndex(-1);
  }, []);

  return { play, stop, playing, lineIndex, supported };
}
