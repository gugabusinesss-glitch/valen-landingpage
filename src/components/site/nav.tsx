"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { brand } from "@/lib/brand";
import { nav } from "@/lib/content";
import { Logo, LambdaMark } from "./primitives";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <div
          className={cn(
            "flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 md:px-6",
            scrolled || open
              ? "border-border bg-background/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a href="#top" aria-label={brand.name} onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <Button
              href={brand.whatsapp}
              size="default"
              className="hidden shrink-0 md:inline-flex"
            >
              {brand.cta.primary}
            </Button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─── Menu mobile em tela cheia ─── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-background/95 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden"
          >
            {/* λ watermark gigante */}
            <div className="pointer-events-none absolute -right-6 bottom-10 opacity-[0.06]">
              <LambdaMark size={300} />
            </div>

            <nav className="flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease }}
                  className="flex items-center justify-between border-b border-border py-5 text-2xl font-medium text-foreground"
                >
                  {item.label}
                  <ArrowUpRight className="size-5 text-teal-bright" />
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + nav.length * 0.06, duration: 0.5, ease }}
              className="mt-auto"
            >
              <Button
                href={brand.whatsapp}
                size="lg"
                className="w-full"
              >
                {brand.cta.primary}
                <ArrowUpRight className="size-4" />
              </Button>
              <p className="mt-6 text-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-subtle">
                {brand.signature}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
