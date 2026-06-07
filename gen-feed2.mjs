import { chromium } from 'playwright';
import fs from 'fs';
const lamInk='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-ink.png').toString('base64');
const lamCream='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-cream.png').toString('base64');

const BASE=`
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:'Geist',sans-serif;padding:78px 74px;display:flex;flex-direction:column}
.light{background:#f3efe5;color:#15201c}.dark{background:#080b0a;color:#ece7dc}
.grid{position:absolute;inset:0;background-image:linear-gradient(var(--g) 1px,transparent 1px),linear-gradient(90deg,var(--g) 1px,transparent 1px);background-size:74px 74px;-webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 42%,#000 12%,transparent 78%)}
.light .grid{--g:#d6cfbf;opacity:.5}.dark .grid{--g:#23302c;opacity:.5}
header{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:13px}.brand img{height:35px}.brand .dv{width:1px;height:27px}
.light .dv{background:#cdc6b6}.dark .dv{background:#2a3a35}.brand .wn{font-size:22px;font-weight:600;letter-spacing:.32em}
.pill{font-family:'Geist Mono',monospace;font-size:15px;letter-spacing:.12em;text-transform:uppercase;padding:9px 17px;border-radius:999px;border:1px solid}
.light .pill{border-color:#cdc6b6;color:#1b7a6f;background:#fbf9f3}.dark .pill{border-color:#23302c;color:#3bb7a6;background:#0d1312}
main{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;justify-content:center}
em{font-family:'Playfair Display',serif;font-style:italic;font-weight:600}.light em{color:#157065}.dark em{color:#3bb7a6}
footer{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;font-size:19px}
.light footer{color:#8a857a}.dark footer{color:#8a958e}.fl{font-weight:600;opacity:.8}.fr{font-weight:700}.light .fr{color:#15201c}.dark .fr{color:#ece7dc}
/* manifesto */.manifesto{font-family:'Playfair Display',serif;font-weight:500;font-size:88px;line-height:1.13;letter-spacing:-.01em}
/* stat */.bignum{font-size:360px;font-weight:900;line-height:.82;letter-spacing:-.04em;background:linear-gradient(180deg,#3bb7a6,#15625b);-webkit-background-clip:text;background-clip:text;color:transparent}
.bignum small{font-size:84px;font-weight:700;-webkit-text-fill-color:#3bb7a6}.statsub{font-size:42px;font-weight:500;line-height:1.18;color:#c7cdc7;margin-top:22px;max-width:780px}
/* whatsapp */.wtitle{font-size:56px;font-weight:700;line-height:1.08;margin-bottom:26px;max-width:820px}.wstage{flex:1;display:flex;align-items:center;justify-content:center}
.wphone{width:540px;height:680px;border-radius:42px;background:#0b141a;border:10px solid #11201c;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.22)}
.wbar{background:#1f2c33;color:#e9edef;display:flex;align-items:center;gap:11px;padding:24px 20px 16px}.wav{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#2a8c81,#3bb7a6);display:flex;align-items:center;justify-content:center}.wav img{height:22px}
.wbar .nm{font-weight:700;font-size:20px}.wbar .on{font-size:14px;color:#8fb3a9}.wbody{background:#0b141a;padding:20px 18px;display:flex;flex-direction:column;gap:12px}
.bub{max-width:80%;padding:14px 16px;border-radius:15px;font-size:19px;line-height:1.3}.inc{align-self:flex-start;background:#202c33;color:#e9edef;border-top-left-radius:4px}.out{align-self:flex-end;background:#005c4b;color:#e9edef;border-top-right-radius:4px}
.tme{font-size:12px;opacity:.6;margin-top:5px;text-align:right}.sysn{align-self:center;background:#182229;color:#9fd0c4;font-size:14px;padding:7px 14px;border-radius:9px}
/* comparativo */.cmpwrap{display:flex;gap:18px;flex:1}.col{flex:1;border-radius:24px;padding:36px 30px;display:flex;flex-direction:column}.col.bad{background:#0f1413;color:#9aa39c;border:1px solid #20302c}.col.good{background:#fbf9f3;color:#15201c;border:1px solid #1c7268;box-shadow:0 30px 70px rgba(28,114,104,.18)}
.col h3{font-family:'Geist Mono',monospace;font-size:17px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:22px}.col.bad h3{color:#6b756e}.col.good h3{color:#1b7a6f}
.col li{list-style:none;font-size:25px;line-height:1.3;display:flex;gap:11px;padding:13px 0;border-top:1px solid}.col.bad li{border-color:#1c2a26}.col.good li{border-color:#e4ddcd;font-weight:500}.ic{font-weight:800}.bad .ic{color:#6b756e}.good .ic{color:#1c7268}.cmptitle{font-size:62px;font-weight:800;line-height:1.04;margin-bottom:28px}
/* checklist */.cktitle{font-size:64px;font-weight:800;line-height:1.05;margin-bottom:12px}.cksub{font-size:27px;color:#5d655e;margin-bottom:30px}.ckitem{display:flex;align-items:center;gap:18px;padding:20px 0;border-top:1px solid #ddd6c6;font-size:31px;font-weight:500}.ckbox{width:40px;height:40px;border-radius:11px;border:2px solid #1c7268;display:flex;align-items:center;justify-content:center;color:#fff;background:#1c7268;font-size:22px;flex-shrink:0}.ckbox.off{background:transparent;color:transparent;border-color:#c9c1b0}
/* generic big heading */.h-bg{font-size:66px;font-weight:800;line-height:1.05;letter-spacing:-.01em;margin-bottom:30px}
/* ROI receipt */.receipt{background:#0e1614;border:1px solid #1e2a26;border-radius:22px;padding:40px 44px;max-width:760px}
.rrow{display:flex;justify-content:space-between;align-items:baseline;font-size:30px;padding:18px 0;color:#c7cdc7}.rrow .lab{color:#93a09a}.rrow b{font-weight:700;color:#ece7dc}
.rdiv{height:1px;background:#1e2a26;margin:10px 0}.rtot{display:flex;justify-content:space-between;align-items:baseline;margin-top:10px}.rtot .lab{font-size:26px;color:#93a09a;text-transform:uppercase;letter-spacing:.08em}.rtot .val{font-size:74px;font-weight:900;background:linear-gradient(180deg,#3bb7a6,#15625b);-webkit-background-clip:text;background-clip:text;color:transparent}
/* mito stamp */.mitostatement{font-size:70px;font-weight:700;line-height:1.08;max-width:840px;position:relative;display:inline-block}
.stamp{position:absolute;right:-10px;top:30px;transform:rotate(-12deg);border:5px solid #b4452f;color:#b4452f;font-family:'Geist Mono',monospace;font-weight:600;font-size:60px;letter-spacing:.1em;padding:8px 26px;border-radius:14px;opacity:.92}
.verdade{margin-top:46px;font-size:34px;line-height:1.3;color:#3f4a45;max-width:820px}.verdade b{color:#157065}
/* alerta */.alert{background:#140d0b;border:1px solid #6b2f24;border-radius:20px;padding:34px 38px;max-width:780px;margin-bottom:18px}
.alert .at{display:flex;align-items:center;gap:14px;color:#e8a079;font-size:26px;font-weight:700;margin-bottom:14px}.alert p{font-size:38px;font-weight:600;line-height:1.2;color:#ece7dc}.alert .zero{color:#e06a4a}
/* depoimento */.quote{font-family:'Playfair Display',serif;font-style:italic;font-weight:500;font-size:72px;line-height:1.18}.stars{color:#1c7268;font-size:34px;letter-spacing:6px;margin-bottom:30px}.qby{margin-top:40px;font-size:26px;color:#5d655e}.qby b{color:#15201c;font-weight:700}
/* timeline */.tl{display:flex;flex-direction:column;gap:0;margin-top:10px}.tlstep{display:flex;gap:26px;align-items:flex-start;padding-bottom:34px;position:relative}
.tlstep:not(:last-child)::before{content:'';position:absolute;left:25px;top:54px;bottom:-6px;width:2px;background:#cdc6b6}
.tlnode{width:52px;height:52px;border-radius:50%;border:2px solid #1c7268;background:#fbf9f3;color:#157065;display:flex;align-items:center;justify-content:center;font-family:'Geist Mono',monospace;font-weight:600;font-size:22px;flex-shrink:0;z-index:2}
.tlc .rg{font-family:'Geist Mono',monospace;font-size:18px;color:#1b7a6f;text-transform:uppercase;letter-spacing:.1em}.tlc h4{font-size:36px;font-weight:700;margin:4px 0 4px}.tlc p{font-size:23px;color:#5d655e}
/* dicionario */.cards{display:flex;flex-direction:column;gap:16px;margin-top:26px}.def{padding:28px 30px;border-radius:22px;border:1px solid;background:#0f1614;border-color:#1e2a26}.def .dico{width:46px;height:46px;border-radius:13px;background:#123f39;color:#3bb7a6;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:14px}.def h3{font-size:32px;font-weight:700;margin-bottom:7px}.def p{font-size:22px;line-height:1.32;color:#93a09a}.def .ex{font-style:italic;opacity:.85}
/* CRM browser */.browser{width:880px;margin:6px auto 0;border-radius:20px;overflow:hidden;border:1px solid #1e2a26;box-shadow:0 44px 90px rgba(0,0,0,.22)}
.bbar{height:48px;background:#0e1614;display:flex;align-items:center;padding:0 18px;gap:9px}.bdot{width:12px;height:12px;border-radius:50%;background:#2a3a35}.burl{margin-left:14px;font-family:'Geist Mono',monospace;font-size:14px;color:#7c8a83;background:#0a1210;padding:6px 16px;border-radius:8px}
.bscr{background:#080b0a;color:#ece7dc;padding:26px}.btop{display:flex;align-items:center;gap:10px;margin-bottom:18px}.btop img{height:22px}.btop span{font-weight:700;letter-spacing:.18em;font-size:15px}.btop .badge{margin-left:auto;background:#123f39;color:#3bb7a6;font-size:14px;padding:6px 13px;border-radius:999px}
.bkpis{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:16px}.bk{background:#0e1614;border:1px solid #1e2a26;border-radius:14px;padding:16px}.bk .l{color:#7c8a83;font-size:13px;text-transform:uppercase;letter-spacing:.08em}.bk .v{font-size:30px;font-weight:800;margin-top:5px}.bk .v.t{color:#3bb7a6}
.bcols{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.bcol{background:#0c1211;border:1px solid #1a2622;border-radius:13px;padding:11px}.bcol .ch{font-size:13px;color:#3bb7a6;margin-bottom:8px;font-weight:600}.bcard{background:#0f1614;border:1px solid #1e2a26;border-radius:9px;padding:9px;margin-bottom:7px;font-size:14px;font-weight:600}
`;

const head=(t,p)=>`<header><div class="brand"><img src="${t==='dark'?lamCream:lamInk}"><div class="dv"></div><span class="wn">VALEN</span></div><span class="pill">${p}</span></header>`;
const foot=(t,r)=>`<footer><span class="fl">@valen</span><span class="fr">${r||'arraste →'}</span></footer>`;
const wrap=(t,p,inner,fr)=>`<div class="slide ${t}"><div class="grid"></div>${head(t,p)}<main>${inner}</main>${foot(t,fr)}</div>`;

const dash=`<div class="browser"><div class="bbar"><div class="bdot"></div><div class="bdot"></div><div class="bdot"></div><div class="burl">app.valen.com.br/crm</div></div>
<div class="bscr"><div class="btop"><img src="${lamCream}"><span>VALEN CRM</span><span class="badge">● Agente ativo 24/7</span></div>
<div class="bkpis"><div class="bk"><div class="l">Leads hoje</div><div class="v">38</div></div><div class="bk"><div class="l">Conversão</div><div class="v t">27%</div></div><div class="bk"><div class="l">Receita/mês</div><div class="v">R$184k</div></div><div class="bk"><div class="l">1ª resposta</div><div class="v t">0:08</div></div></div>
<div class="bcols">
<div class="bcol"><div class="ch">Novo</div><div class="bcard">Marina A.</div><div class="bcard">Dr. Caio R.</div></div>
<div class="bcol"><div class="ch">Qualificado</div><div class="bcard">Helena M.</div><div class="bcard">Paulo T.</div></div>
<div class="bcol"><div class="ch">Agendado</div><div class="bcard">Sofia L.</div></div>
<div class="bcol"><div class="ch">Fechado</div><div class="bcard">Renata F.</div><div class="bcard">Cl. Vérte</div></div></div></div></div>`;

const slides=[
 {id:'01',t:'dark',h:wrap('dark','◆ O número',`<div class="bignum">5<small>min</small></div><p class="statsub">é o tempo que você tem pra responder um lead. Depois disso, ele já foi pro concorrente.</p>`)},
 {id:'02',t:'light',h:wrap('light','◆ Bastidores do agente',`<h2 class="wtitle">Enquanto você dorme, a <em>Valen agenda.</em></h2><div class="wstage"><div class="wphone"><div class="wbar"><div class="wav"><img src="${lamCream}"></div><div><div class="nm">Paciente · Lead novo</div><div class="on">online agora</div></div></div><div class="wbody"><div class="sysn">Hoje, 23:14</div><div class="bub inc">Oi, vcs atendem harmonização? 😊</div><div class="bub out">Oi! Atendemos sim. Posso já ver um horário pra sua avaliação?<div class="tme">23:14 ✓✓</div></div><div class="bub inc">Pode!</div><div class="bub out">Agendei quinta, 15h. Confirmo no dia 👋<div class="tme">23:15 ✓✓</div></div><div class="sysn">✓ Agendado em 47 segundos</div></div></div></div>`)},
 {id:'03',t:'light',h:wrap('light','◆ Manifesto',`<p class="manifesto">A sua clínica não precisa de <em>mais esforço.</em> Precisa de <em>sistema.</em></p>`)},
 {id:'04',t:'light',h:wrap('light','◆ Antes × Depois',`<h2 class="cmptitle">O mesmo dia, duas <em>clínicas.</em></h2><div class="cmpwrap"><div class="col bad"><h3>Sem sistema</h3><li><span class="ic">×</span> Lead esperando horas</li><li><span class="ic">×</span> 12 planilhas pra atualizar</li><li><span class="ic">×</span> Paciente some sem follow-up</li><li><span class="ic">×</span> Decisão no achismo</li></div><div class="col good"><h3>Com a Valen</h3><li><span class="ic">✓</span> Resposta em segundos</li><li><span class="ic">✓</span> CRM atualiza sozinho</li><li><span class="ic">✓</span> Agente chama de volta</li><li><span class="ic">✓</span> Dashboard ao vivo</li></div></div>`)},
 {id:'05',t:'dark',h:wrap('dark','◆ A conta que ninguém faz',`<h2 class="h-bg">Quanto custa um paciente que <em>some?</em></h2><div class="receipt"><div class="rrow"><span class="lab">1 paciente que não volta</span><b>R$ 1.200</b></div><div class="rrow"><span class="lab">Somem por mês (média)</span><b>× 8</b></div><div class="rdiv"></div><div class="rtot"><span class="lab">Por ano, no ralo</span><span class="val">R$ 115 mil</span></div></div>`)},
 {id:'06',t:'light',h:wrap('light','◆ Faça o teste',`<h2 class="cktitle">Sua clínica precisa de um <em>sistema?</em></h2><p class="cksub">Marque quantos são a sua realidade:</p><div class="ckitem"><span class="ckbox">✓</span> Tudo importante passa por você</div><div class="ckitem"><span class="ckbox">✓</span> A equipe vive na planilha</div><div class="ckitem"><span class="ckbox off">✓</span> Paciente some e ninguém chama</div><div class="ckitem"><span class="ckbox">✓</span> Você não sabe sua conversão</div>`,'marcou 2+? arraste →')},
 {id:'07',t:'light',h:wrap('light','◆ Mito ou verdade',`<div class="mitostatement">"A IA vai demitir a minha secretária."<span class="stamp">MITO</span></div><p class="verdade">A verdade: a IA assume o <b>operacional</b> que ninguém gosta de fazer. Sua secretária sobra pra <b>fechar venda</b> e cuidar do paciente.</p>`)},
 {id:'08',t:'light',h:wrap('light','◆ Por dentro do sistema',`<h2 class="wtitle" style="text-align:center;margin:0 auto 22px">O CRM que vira o <em>segundo cérebro</em> da clínica.</h2>${dash}`)},
 {id:'09',t:'dark',h:wrap('dark','◆ O que a planilha esconde',`<h2 class="h-bg">A sua planilha não te <em>avisa.</em></h2><div class="alert"><div class="at">⚠ Alerta de retorno</div><p>8 pacientes passaram do prazo. Follow-ups feitos hoje: <span class="zero">0</span></p></div><div class="alert" style="border-color:#5a4520"><div class="at" style="color:#d9b25a">⚠ Receita parada</div><p>R$ 9.600 esperando uma mensagem que ninguém mandou.</p></div>`)},
 {id:'10',t:'dark',h:wrap('dark','◆ O dicionário da clínica',`<h2 class="h-bg">Quem chega <em>e por onde passa.</em></h2><div class="cards"><div class="def"><div class="dico">◎</div><h3>Lead</h3><p>Quem demonstrou interesse na clínica. <span class="ex">Ex: pediu orçamento no WhatsApp.</span></p></div><div class="def"><div class="dico">⟋</div><h3>Funil de vendas</h3><p>As etapas até fechar. <span class="ex">Ex: anúncio → conversa → avaliação → procedimento.</span></p></div></div>`)},
 {id:'11',t:'light',h:wrap('light','◆ Caso real',`<div class="stars">★★★★★</div><p class="quote">"Em 30 dias, a clínica parou de perder paciente sem a gente perceber."</p><p class="qby"><b>Clínica de geriatria e longevidade</b><br>cliente Valen · São Paulo</p>`,'ver o caso →')},
 {id:'12',t:'light',h:wrap('light','◆ Como funciona',`<h2 class="cmptitle" style="font-size:56px">Do contrato ao sistema: <em>30 dias.</em></h2><div class="tl"><div class="tlstep"><div class="tlnode">1</div><div class="tlc"><div class="rg">Dias 1–3</div><h4>Diagnóstico</h4><p>Mapeia a operação e os gargalos.</p></div></div><div class="tlstep"><div class="tlnode">2</div><div class="tlc"><div class="rg">Dias 4–7</div><h4>Arquitetura</h4><p>Desenha o sistema sob medida.</p></div></div><div class="tlstep"><div class="tlnode">3</div><div class="tlc"><div class="rg">Dias 8–21</div><h4>Implementação</h4><p>CRM, automações e agentes de IA.</p></div></div><div class="tlstep"><div class="tlnode">4</div><div class="tlc"><div class="rg">Dias 22–30</div><h4>Go-live</h4><p>No ar, equipe treinada, monitorado.</p></div></div></div>`,'agende no link')},
];

const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
const b64=[];
for(const s of slides){
 await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${BASE}</style></head><body>${s.h}</body></html>`,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready); await page.waitForTimeout(200);
 const f=`posts/F-${s.id}.png`; await page.locator('.slide').screenshot({path:f});
 b64.push('data:image/png;base64,'+fs.readFileSync(f).toString('base64')); console.log('feed',s.id);
}
const tiles=b64.map(s=>`<div class="t"><img src="${s}"></div>`).join('');
const prof=`<!doctype html><html><head><meta charset="utf-8"><style>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap');*{margin:0;padding:0;box-sizing:border-box;font-family:'Geist',sans-serif}
body{width:1080px;background:#fbf9f5;color:#15201c;padding:46px}.head{display:flex;align-items:center;gap:38px;padding:0 14px 28px}
.av{width:148px;height:148px;border-radius:50%;background:#15201c;display:flex;align-items:center;justify-content:center}.av img{height:76px;filter:invert(1)}
.meta h1{font-size:37px;font-weight:700;letter-spacing:.02em}.stats{display:flex;gap:40px;margin:13px 0 11px;font-size:23px}.stats b{font-weight:700}.stats span{color:#8a857a;font-size:18px}
.bio{font-size:22px;line-height:1.4;color:#3f4a45;max-width:640px}.bio .h{font-weight:700;color:#15201c}
.gridf{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:22px}.t{aspect-ratio:1080/1350;overflow:hidden;background:#eee}.t img{width:100%;height:100%;object-fit:cover;display:block}
</style></head><body><div class="head"><div class="av"><img src="${lamInk}"></div><div class="meta"><h1>valen</h1>
<div class="stats"><div><b>12</b> <span>posts</span></div><div><b>1.240</b> <span>seguidores</span></div><div><b>87</b> <span>seguindo</span></div></div>
<div class="bio"><span class="h">Valen · Oficina de Software</span><br>Sistemas sob medida de IA pra clínica escalar sem depender de você.<br>Menos planilha, mais paciente. 👇</div></div></div><div class="gridf">${tiles}</div></body></html>`;
const p2=await browser.newPage({viewport:{width:1080,height:600},deviceScaleFactor:2});
await p2.setContent(prof,{waitUntil:'networkidle'}); await p2.evaluate(()=>document.fonts.ready); await p2.waitForTimeout(300);
await p2.locator('body').screenshot({path:'posts/feed-mockup-v2.png'});
await browser.close();console.log('DONE');
