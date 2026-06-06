"use client";

import { motion } from "motion/react";
import ShaderBackground from "@/components/ui/shader-background";
import { Button } from "@/components/ui/button";
import { Container, Eyebrow, LambdaMark } from "./primitives";
import { brand } from "@/lib/brand";
import { hero } from "@/lib/content";
import { ArrowRight, Play } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* fundo vivo */}
      <div className="absolute inset-0 -z-20">
        <ShaderBackground className="h-full w-full opacity-90" />
      </div>
      {/* overlays de leitura */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/55 to-background" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 38%, transparent 0%, rgba(8,11,10,0.35) 70%, var(--background) 100%)",
        }}
      />

      <Container className="relative flex min-h-screen flex-col items-center justify-center pb-24 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <LambdaMark size={56} className="mx-auto mb-8 drop-shadow-[0_4px_30px_var(--glow)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          <Eyebrow className="justify-center">{hero.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="mt-6 text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-cream-gradient">{hero.titleTop}</span>
          <br />
          <span className="font-serif font-normal italic text-foreground">
            {hero.titleAccent}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Button href={brand.whatsapp} size="lg">
            {brand.cta.primary}
            <ArrowRight className="size-4" />
          </Button>
          <Button href="#sistema" variant="outline" size="lg">
            <Play className="size-4" />
            {brand.cta.secondary}
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-subtle"
        >
          {hero.proof}
        </motion.p>
      </Container>

      {/* divisória pro próximo bloco */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
