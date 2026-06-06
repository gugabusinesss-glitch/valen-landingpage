import { Container, Logo } from "./primitives";
import { brand } from "@/lib/brand";
import { nav } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <Container className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {brand.tagline} Sistemas sob medida de automação e IA para clínicas
            e negócios premium.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-subtle sm:flex-row sm:items-center">
        <span className="font-mono uppercase tracking-[0.18em]">
          {brand.signature}
        </span>
        <span>
          © {new Date().getFullYear()} {brand.name}. Todos os direitos
          reservados.
        </span>
      </Container>
    </footer>
  );
}
