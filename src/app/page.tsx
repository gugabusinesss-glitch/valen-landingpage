"use client";

import { motion } from "motion/react";
import { brand } from "@/lib/brand";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "var(--accent)" }}
      />
      {/* grid sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, #000 30%, transparent 75%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-[var(--fg-muted)]"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          fundação pronta · aguardando briefing
        </motion.span>

        <h1 className="bg-gradient-to-b from-white to-white/50 bg-clip-text text-7xl font-bold tracking-tight text-transparent sm:text-8xl">
          {brand.name}
        </h1>

        <p className="mt-5 max-w-md text-lg text-[var(--fg-muted)]">
          {brand.tagline}
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 font-mono text-xs text-[var(--fg-subtle)]"
      >
        Next.js · Framer Motion · Tailwind · {brand.domain}
      </motion.p>
    </main>
  );
}
