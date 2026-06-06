"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { DashboardMockup } from "./dashboard-mockup";
import { Eyebrow } from "./primitives";

export function Showcase() {
  return (
    <section id="sistema" className="relative -mt-10 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center">
            <Eyebrow className="justify-center">O sistema por dentro</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              Um segundo cérebro pra sua{" "}
              <span className="font-serif font-normal italic text-teal-bright">
                clínica
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Comercial, pós-venda, repasse médico e agentes de IA — tudo num
              painel feito sob medida pra você.
            </p>
          </div>
        }
      >
        <DashboardMockup />
      </ContainerScroll>
    </section>
  );
}
