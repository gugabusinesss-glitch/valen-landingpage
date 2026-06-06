import { Container } from "./primitives";
import { Reveal } from "./reveal";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-border bg-card/40">
      <Container className="grid gap-px sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal
            key={s.value}
            delay={i * 0.1}
            className="px-2 py-12 text-center sm:px-8 sm:text-left"
          >
            <div className="text-4xl font-semibold tracking-tight text-teal-bright md:text-5xl">
              {s.value}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {s.label}
            </p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
