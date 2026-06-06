import {
  PencilRuler,
  ShieldCheck,
  Stethoscope,
  CalendarClock,
  MessagesSquare,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";
import { differentiators } from "@/lib/content";
import { cn } from "@/lib/utils";

const icons = [
  PencilRuler,
  ShieldCheck,
  Stethoscope,
  CalendarClock,
  MessagesSquare,
];

export function Differentiators() {
  return (
    <section className="relative py-28 md:py-36">
      <Container>
        <Card className="relative overflow-hidden border-border bg-card p-8 md:p-14">
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
                const featured = i === 0;
                return (
                  <Reveal
                    key={item.title}
                    delay={(i % 2) * 0.08}
                    className={cn(
                      "bg-muted p-7",
                      featured &&
                        "bg-gradient-to-br from-teal-deep/40 via-muted to-muted sm:col-span-2 sm:p-9",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex items-center justify-center rounded-full bg-teal-deep/50 text-teal-bright",
                        featured ? "size-12" : "size-10",
                      )}
                    >
                      <Icon className={featured ? "size-6" : "size-5"} />
                    </span>
                    <h3
                      className={cn(
                        "mt-4 font-medium text-foreground",
                        featured ? "text-xl md:text-2xl" : "text-lg",
                      )}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-2 leading-relaxed text-muted-foreground",
                        featured ? "max-w-2xl text-sm md:text-base" : "text-sm",
                      )}
                    >
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
