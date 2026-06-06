import { Database, Workflow, BrainCircuit } from "lucide-react";
import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";
import DisplayCards from "@/components/ui/display-cards";
import { layers } from "@/lib/content";

const icons = [
  <Database key="d" className="size-4 text-teal-bright" />,
  <Workflow key="w" className="size-4 text-teal-bright" />,
  <BrainCircuit key="b" className="size-4 text-teal-bright" />,
];

export function Solution() {
  const cards = layers.items.map((l, i) => ({
    icon: icons[i],
    title: l.title,
    description: l.desc,
    date: l.tag,
    className: [
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
      "[grid-area:stack] translate-x-14 translate-y-12 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
      "[grid-area:stack] translate-x-28 translate-y-24 hover:translate-y-12",
    ][i],
  }));

  return (
    <section id="solucao" className="relative py-28 md:py-36">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow>{layers.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
              {layers.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              {layers.intro}
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {layers.items.map((l, i) => (
              <Reveal
                key={l.title}
                delay={0.12 + i * 0.06}
                className="flex gap-4 border-l border-border pl-5"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-teal-bright">
                      {l.tag}
                    </span>
                    <span className="text-base font-medium text-foreground">
                      {l.title}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {l.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.15}
          className="flex min-h-[20rem] items-center justify-center overflow-hidden sm:min-h-[26rem]"
        >
          <div className="origin-center scale-[0.62] sm:scale-[0.82] lg:scale-100">
            <DisplayCards cards={cards} />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
