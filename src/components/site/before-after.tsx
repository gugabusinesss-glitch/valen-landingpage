import { X, Check } from "lucide-react";
import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";
import { beforeAfter } from "@/lib/content";

export function BeforeAfter() {
  return (
    <section className="relative py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">{beforeAfter.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {beforeAfter.title}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[var(--radius)] border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="border-b border-border px-6 py-4 text-sm font-medium text-muted-foreground sm:border-b sm:border-r">
                Antes da Valen
              </div>
              <div className="hidden px-6 py-4 text-sm font-medium text-teal-bright sm:block">
                Depois da Valen
              </div>
            </div>
            {beforeAfter.rows.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 border-t border-border sm:grid-cols-2"
              >
                <div className="flex items-start gap-3 px-6 py-5 sm:border-r sm:border-border">
                  <X className="mt-0.5 size-4 shrink-0 text-subtle" />
                  <span className="text-sm text-muted-foreground">
                    {row.before}
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-teal-deep/15 px-6 py-5">
                  <Check className="mt-0.5 size-4 shrink-0 text-teal-bright" />
                  <span className="text-sm text-foreground">{row.after}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
