/**
 * ┌─────────────────────────────────────────────────────────────┐
 * │  VALEN — BRAND CONFIG (single source of truth)               │
 * │                                                             │
 * │  Tudo que é "marca" mora aqui. Quando o briefing chegar,    │
 * │  é só trocar estes valores que a landing inteira re-skina.  │
 * │  Cores reais ficam em globals.css (tokens CSS).             │
 * │                                                             │
 * │  >>> PLACEHOLDERS — aguardando briefing da Valen <<<        │
 * └─────────────────────────────────────────────────────────────┘
 */

export const brand = {
  name: "Valen",
  // TODO(briefing): tagline oficial em 1 frase
  tagline: "O segundo cérebro que faz sua clínica escalar.",
  // TODO(briefing): descrição/posicionamento
  description:
    "Sistemas sob medida, agentes de IA e CRM dedicado para clínicas que querem crescer sem perder o controle.",
  domain: "valen.app", // TODO(briefing): domínio real
  // TODO(briefing): CTA principal — demo? venda? lead?
  cta: {
    primary: "Agendar demonstração",
    secondary: "Ver o sistema por dentro",
  },
} as const;

export type Brand = typeof brand;
