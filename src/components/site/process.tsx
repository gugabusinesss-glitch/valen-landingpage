import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section id="processo" className="relative border-y border-border bg-card/30 py-28 md:py-36">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{process.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {process.title}
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* linha conectora */}
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-gradient-to-r from-border via-teal/40 to-border md:block" />
          {process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative">
              <div className="flex items-center gap-3 md:block">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-teal/50 bg-background font-mono text-sm text-teal-bright">
                  {i + 1}
                </span>
              </div>
              <div className="mt-4 md:mt-6">
                <div className="font-mono text-xs uppercase tracking-wider text-teal-bright">
                  {step.range}
                </div>
                <h3 className="mt-2 text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
