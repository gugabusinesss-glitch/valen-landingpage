import { ShieldCheck, Stethoscope, CalendarClock, MessagesSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";
import { differentiators } from "@/lib/content";

const icons = [ShieldCheck, Stethoscope, CalendarClock, MessagesSquare];

export function Differentiators() {
  return (
    <section className="relative py-28 md:py-36">
      <Container>
        <Card className="relative overflow-hidden border-border bg-[#0a0f0e] p-8 md:p-14">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="var(--teal-bright)" />

          <div className="relative z-10">
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>{differentiators.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
                  {differentiators.title}
                </h2>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius)] border border-border bg-border sm:grid-cols-2">
              {differentiators.items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <Reveal
                    key={item.title}
                    delay={(i % 2) * 0.08}
                    className="bg-[#0c1211] p-7"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-full bg-teal-deep/50 text-teal-bright">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
