import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Problem } from "@/components/site/problem";
import { Solution } from "@/components/site/solution";
import { Showcase } from "@/components/site/showcase";
import { BeforeAfter } from "@/components/site/before-after";
import { Process } from "@/components/site/process";
import { Differentiators } from "@/components/site/differentiators";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Stats />
        <Problem />
        <Solution />
        <Showcase />
        <BeforeAfter />
        <Process />
        <Differentiators />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
