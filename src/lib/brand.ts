/**
 * VALEN · BRAND CONFIG (single source of truth)
 * Paleta e identidade reais extraídas do logo + debriefing.
 */

// ── Contato / WhatsApp ──────────────────────────────────────────────
// Número e mensagem isolados pra facilitar tracking depois
// (ex.: trocar a mensagem por origem: site, instagram, anúncio X...).
const WHATSAPP_NUMBER = "5511964781002";
const WHATSAPP_MESSAGE = "Oii, vim pelo site da Valen e gostaria de saber mais";

/** Monta o link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

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
  // canal de contato — link com mensagem pré-pronta
  whatsapp: whatsappLink(),
} as const;

export type Brand = typeof brand;
