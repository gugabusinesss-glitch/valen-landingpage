import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";
import { problem } from "@/lib/content";

export function Problem() {
  return (
    <section id="problema" className="relative py-28 md:py-36">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">{problem.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {problem.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {problem.intro}
            </p>
          </Reveal>
        </div>

        {/* pull quote */}
        <Reveal delay={0.1}>
          <figure className="mx-auto mt-14 max-w-3xl rounded-[var(--radius)] border border-border bg-card/60 p-8 text-center md:p-10">
            <blockquote className="font-serif text-2xl italic leading-snug text-foreground md:text-3xl">
              “{problem.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              {problem.quoteNote}
            </figcaption>
          </figure>
        </Reveal>

        {/* grid de dores */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {problem.pains.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 0.08}
              className="group bg-card p-7 transition-colors hover:bg-muted"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-teal-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-foreground">
                  {p.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
