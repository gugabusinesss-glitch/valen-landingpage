import { ArrowRight } from "lucide-react";
import { Container, Eyebrow, LambdaMark } from "./primitives";
import { Reveal } from "./reveal";
import { Button } from "@/components/ui/button";
import { brand } from "@/lib/brand";
import { finalCta } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[130px]"
        style={{ background: "var(--teal)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 55% 55% at 50% 50%, #000 20%, transparent 72%)",
        }}
      />

      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <LambdaMark size={48} className="mx-auto mb-7 drop-shadow-[0_4px_30px_var(--glow)]" />
        </Reveal>
        <Reveal delay={0.05}>
          <Eyebrow className="justify-center">{finalCta.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {finalCta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {finalCta.sub}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9">
            <Button href={brand.whatsapp} size="lg">
              {brand.cta.primary}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-12 font-serif text-2xl italic text-foreground/80 md:text-3xl">
            {finalCta.tagline}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
