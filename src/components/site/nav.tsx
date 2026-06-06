"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { brand } from "@/lib/brand";
import { nav } from "@/lib/content";
import { Logo } from "./primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 md:px-6",
          scrolled
            ? "border-border bg-background/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <a href="#top" aria-label={brand.name}>
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

        <Button href={brand.whatsapp} size="default" className="shrink-0">
          {brand.cta.primary}
        </Button>
      </div>
    </motion.header>
  );
}
