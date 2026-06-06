/**
 * VALEN — BRAND CONFIG (single source of truth)
 * Paleta e identidade reais extraídas do logo + debriefing.
 */
export const brand = {
  name: "Valen",
  lambda: "λ",
  tagline: "Menos planilha, mais paciente.",
  description:
    "A Valen implementa sistemas sob medida de automação e IA para clínicas e negócios premium. Atendimento que não dorme, follow-up que não falha e um CRM que substitui suas planilhas.",
  domain: "valen.app", // TODO: confirmar domínio real
  signature: "Oficina de Software · MMXXVI · São Paulo",
  cta: {
    primary: "Agendar diagnóstico",
    secondary: "Ver como funciona",
  },
  // canal de contato
  whatsapp: "https://wa.me/5511964781002",
} as const;

export type Brand = typeof brand;
