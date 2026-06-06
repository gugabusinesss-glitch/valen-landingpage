import { Plus } from "lucide-react";
import { Container, Eyebrow } from "./primitives";
import { Reveal } from "./reveal";
import { objections } from "@/lib/content";

export function Faq() {
  return (
    <section id="duvidas" className="relative py-28 md:py-36">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <Eyebrow>{objections.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-sm text-4xl font-semibold tracking-tight md:text-5xl">
              {objections.title}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="divide-y divide-border border-y border-border">
          {objections.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
                <span className="text-base font-medium text-foreground md:text-lg">
                  {item.q}
                </span>
                <Plus className="size-5 shrink-0 text-teal-bright transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
