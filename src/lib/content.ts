/**
 * Conteúdo da landing — derivado do Debriefing Estratégico da Valen.
 * Centralizado aqui pra editar copy sem mexer em componente.
 */

export const nav = [
  { label: "O problema", href: "#problema" },
  { label: "Como funciona", href: "#solucao" },
  { label: "O sistema", href: "#sistema" },
  { label: "Processo", href: "#processo" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

export const hero = {
  eyebrow: "Oficina de Software · IA & Automação",
  titleTop: "Menos planilha.",
  titleAccent: "Mais paciente.",
  sub: "A Valen implementa sistemas sob medida de automação e IA para clínicas e negócios premium. Atendimento que responde em segundos, follow-up que não esquece ninguém e um CRM que aposenta as suas 12 planilhas.",
  proof: "Especialistas em saúde e estética premium · Entrega em 30 dias · Suporte direto",
} as const;

export const stats = [
  { value: "5 min", label: "é o limite. Depois disso, o lead converte 80% menos." },
  { value: "30 dias", label: "do contrato ao sistema no ar — com data no contrato." },
  { value: "24/7", label: "atendimento e follow-up que não falta, não dorme, não some." },
] as const;

export const problem = {
  eyebrow: "O problema",
  title: "Seu negócio cresceu. E agora trava em você.",
  intro:
    "Você construiu algo que funciona — mas tudo ainda passa pela sua mão. Quando você não está, a operação para. Escalar virou sinônimo de trabalhar mais.",
  quote: "Eu prefiro fazer eu mesmo do que ensinar alguém e ainda ter que corrigir depois.",
  quoteNote: "Esse é o pensamento de 8 em cada 10 donos. É exatamente contra ele que a Valen trabalha.",
  pains: [
    {
      title: "Tudo depende de você",
      body: "Cada decisão, cada atendimento, cada mensagem passa por você. Férias são impossíveis, fim de semana é meio-expediente.",
    },
    {
      title: "Lead morre no WhatsApp",
      body: "Chega lead e ninguém responde na hora. Quando a secretária volta, ele já foi pro concorrente ou perdeu o interesse.",
    },
    {
      title: "A equipe vive na planilha",
      body: "Horas por dia copiando dado de um lugar pro outro — e mesmo assim sempre escapa um erro.",
    },
    {
      title: "O paciente some entre sessões",
      body: "A primeira sessão acontece. A segunda — onde está o lucro — depende de alguém lembrar de chamar. E ninguém lembra.",
    },
    {
      title: "Você decide no escuro",
      body: "Sem métrica de conversão, custo por cliente ou retorno por canal. Investe em tráfego sem saber o que volta.",
    },
    {
      title: "Já tentou delegar e deu errado",
      body: "Contratou atendente, se frustrou. A pessoa faltou, dormiu no expediente, não entregou no padrão. Criou trauma.",
    },
  ],
} as const;

export const layers = {
  eyebrow: "Como funciona",
  title: "A Valen não vende ferramenta. Entrega uma operação rodando.",
  intro: "Cada implementação soma três camadas que trabalham juntas:",
  items: [
    {
      tag: "Camada 1",
      title: "Organização",
      desc: "CRM personalizado no lugar da planilha. Pipeline de leads, histórico de cada paciente e receita em tempo real.",
    },
    {
      tag: "Camada 2",
      title: "Automação",
      desc: "Primeiro contato, qualificação e follow-up automáticos. Confirmação de consulta e reativação no prazo certo.",
    },
    {
      tag: "Camada 3",
      title: "Inteligência",
      desc: "Agentes de IA que leem conversas, sugerem ações, fazem remarketing por contexto e entregam relatório semanal sozinhos.",
    },
  ],
} as const;

export const beforeAfter = {
  eyebrow: "O que muda na prática",
  title: "Antes da Valen × Depois da Valen",
  rows: [
    { before: "Lead chega e espera horas por resposta", after: "Lead atendido e qualificado em segundos" },
    { before: "Secretária atualiza 12 planilhas por dia", after: "CRM atualiza sozinho a cada ação" },
    { before: "Dono no WhatsApp respondendo tudo", after: "Sistema só te passa quem está pronto pra fechar" },
    { before: "Paciente some entre sessões sem chamado", after: "Agente chama no prazo certo, todo dia" },
    { before: "Decisão no achismo, sem números", after: "Dashboard com leads, conversão e receita ao vivo" },
    { before: "Delegação que dependia de pessoa", after: "Sistema que opera sem depender de ninguém" },
  ],
} as const;

export const process = {
  eyebrow: "O processo",
  title: "Do contrato ao sistema rodando em 30 dias.",
  steps: [
    {
      range: "Dias 1–3",
      title: "Diagnóstico",
      desc: "Mapeamos a operação atual, o fluxo de atendimento e os gargalos. Definimos o que será automatizado.",
    },
    {
      range: "Dias 4–7",
      title: "Arquitetura",
      desc: "Desenhamos o sistema específico do seu negócio: CRM, pipeline, fluxos de automação e scripts.",
    },
    {
      range: "Dias 8–21",
      title: "Implementação",
      desc: "Construção do CRM, automações, agentes de IA e integrações. Você acompanha cada etapa.",
    },
    {
      range: "Dias 22–30",
      title: "Go-live & Suporte",
      desc: "Sistema no ar, equipe treinada, operação monitorada. Ajustes finos com base no uso real.",
    },
  ],
} as const;

export const differentiators = {
  eyebrow: "Por que a Valen",
  title: "O que nenhum concorrente combina ao mesmo tempo.",
  items: [
    {
      title: "Sistema, não pessoa",
      desc: "A solução não depende de ninguém físico. Não falta, não dorme, não some. Derruba o maior trauma de quem já tentou delegar.",
    },
    {
      title: "Especialista no seu nicho",
      desc: "Conhecemos o fluxo de clínica, estética e laser. Chegamos já sabendo a dor — sem semanas pra entender o negócio.",
    },
    {
      title: "Entrega em 30 dias",
      desc: "Agência grande demora 60–90 dias, freelancer não tem prazo. A Valen entrega em 30 — com data no contrato.",
    },
    {
      title: "Relacionamento, não ticket",
      desc: "Suporte no WhatsApp direto, não em formulário. Você fala comigo — não com atendente de primeiro nível.",
    },
  ],
} as const;

export const objections = {
  eyebrow: "Dúvidas honestas",
  title: "O que todo mundo pergunta antes de fechar.",
  items: [
    {
      q: "É caro?",
      a: "Quanto vale uma sessão no seu negócio? Se a gente recuperar 3 clientes que sumiriam, o sistema se paga no primeiro mês.",
    },
    {
      q: "Já tentei delegar e não funcionou.",
      a: "Entendo. A diferença é que não estou te vendendo uma pessoa — e sim um sistema. Sistema não falta, não dorme, não some.",
    },
    {
      q: "Será que funciona pro meu nicho?",
      a: "Implementamos especificamente para clínicas e estética. Conheço o fluxo do seu negócio antes mesmo da call.",
    },
    {
      q: "Não tenho tempo pra implementar.",
      a: "Você não implementa nada. Eu faço tudo. Você só me explica como funciona hoje — e recebe o sistema pronto.",
    },
    {
      q: "Tenho uma proposta mais barata.",
      a: "Proposta mais barata entrega ferramenta. Eu entrego operação funcionando. São coisas diferentes.",
    },
    {
      q: "Preciso pensar.",
      a: "Sem problema. Posso te mostrar em 15 minutos como funciona num caso parecido com o seu — sem compromisso.",
    },
  ],
} as const;

export const finalCta = {
  eyebrow: "Vamos conversar",
  title: "Seu negócio começa a funcionar quando você não está presente.",
  sub: "Em 15 minutos eu te mostro como ficaria a operação da sua clínica rodando no automático. Sem compromisso.",
  tagline: "Menos planilha, mais paciente.",
} as const;
