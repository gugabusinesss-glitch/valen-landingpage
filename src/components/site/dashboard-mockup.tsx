import {
  LayoutDashboard,
  Users,
  KanbanSquare,
  HeartPulse,
  Bot,
  BarChart3,
  Search,
  ArrowUpRight,
  Circle,
} from "lucide-react";
import { LambdaMark } from "./primitives";

const sidebar = [
  { icon: LayoutDashboard, label: "Visão geral", active: true },
  { icon: Users, label: "Leads" },
  { icon: KanbanSquare, label: "Pipeline" },
  { icon: HeartPulse, label: "Pós-venda" },
  { icon: Bot, label: "Agentes IA" },
  { icon: BarChart3, label: "Relatórios" },
];

const kpis = [
  { label: "Leads hoje", value: "38", delta: "+12%" },
  { label: "Conversão", value: "27%", delta: "+4pp" },
  { label: "Receita no mês", value: "R$ 184k", delta: "+31%" },
  { label: "1ª resposta", value: "0:08", delta: "−96%" },
];

const columns: { title: string; tone: string; cards: { name: string; tag: string }[] }[] = [
  {
    title: "Novo",
    tone: "text-muted-foreground",
    cards: [
      { name: "Marina A.", tag: "Botox · Instagram" },
      { name: "Dr. Caio R.", tag: "Geriatria · Google" },
    ],
  },
  {
    title: "Qualificado",
    tone: "text-teal-bright",
    cards: [
      { name: "Helena M.", tag: "Laser · indicação" },
      { name: "Paulo T.", tag: "Check-up · WhatsApp" },
    ],
  },
  {
    title: "Agendado",
    tone: "text-teal-bright",
    cards: [{ name: "Sofia L.", tag: "Harmonização · 14h" }],
  },
  {
    title: "Fechado",
    tone: "text-foreground",
    cards: [
      { name: "Clínica Vérte", tag: "R$ 12.400" },
      { name: "Renata F.", tag: "Pacote 4 sessões" },
    ],
  },
];

const agentFeed = [
  "Lead respondido em 8s e qualificado.",
  "Retorno de 12 pacientes agendado p/ amanhã.",
  "3 clientes inativos reativados hoje.",
  "Relatório semanal enviado à diretoria.",
];

export function DashboardMockup() {
  return (
    <div className="flex h-full w-full flex-col bg-background text-left">
      {/* topbar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2.5">
          <LambdaMark size={16} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            Valen CRM
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[10px] text-muted-foreground sm:flex">
            <Search className="size-3" />
            Buscar paciente, lead, métrica…
          </div>
          <div className="size-6 rounded-full bg-gradient-to-br from-teal to-teal-deep" />
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* sidebar */}
        <aside className="hidden w-44 shrink-0 flex-col gap-1 border-r border-border p-3 md:flex">
          {sidebar.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs ${
                item.active
                  ? "bg-teal-deep/40 text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              <item.icon className="size-3.5" />
              {item.label}
            </div>
          ))}
          <div className="mt-auto rounded-lg border border-border bg-card p-3">
            <div className="flex items-center gap-2 text-[10px] text-teal-bright">
              <Bot className="size-3" /> Agente ativo
            </div>
            <p className="mt-1 text-[10px] leading-snug text-muted-foreground">
              Operando 24/7 · 0 falhas hoje
            </p>
          </div>
        </aside>

        {/* main */}
        <main className="min-w-0 flex-1 overflow-hidden p-4">
          {/* kpis */}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-border bg-card p-3"
              >
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {k.label}
                </div>
                <div className="mt-1 flex items-end justify-between">
                  <span className="font-mono text-lg font-semibold text-foreground">
                    {k.value}
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] text-teal-bright">
                    <ArrowUpRight className="size-2.5" />
                    {k.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* pipeline + agente */}
          <div className="mt-3 grid gap-3 lg:grid-cols-[1fr_auto]">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {columns.map((col) => (
                <div key={col.title} className="rounded-xl border border-border bg-card/60 p-2">
                  <div className={`mb-2 flex items-center gap-1.5 text-[10px] font-medium ${col.tone}`}>
                    <Circle className="size-1.5 fill-current" />
                    {col.title}
                  </div>
                  <div className="space-y-1.5">
                    {col.cards.map((c) => (
                      <div
                        key={c.name}
                        className="rounded-lg border border-border bg-background p-2"
                      >
                        <div className="text-[11px] font-medium text-foreground">
                          {c.name}
                        </div>
                        <div className="mt-0.5 text-[9px] text-muted-foreground">
                          {c.tag}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden w-56 rounded-xl border border-border bg-card p-3 lg:block">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                <Bot className="size-3.5 text-teal-bright" /> Atividade do agente
              </div>
              <div className="mt-3 space-y-2.5">
                {agentFeed.map((line, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-teal-bright" />
                    <p className="text-[10px] leading-snug text-muted-foreground">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
