import { chromium } from 'playwright';
import fs from 'fs';
const lamInk = 'data:image/png;base64,'+fs.readFileSync('public/brand/lambda-ink.png').toString('base64');
const lamCream = 'data:image/png;base64,'+fs.readFileSync('public/brand/lambda-cream.png').toString('base64');

const BASE = `
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@500&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:'Geist',sans-serif;padding:78px 74px;display:flex;flex-direction:column}
.light{background:#f3efe5;color:#15201c}
.dark{background:#080b0a;color:#ece7dc}
.grid{position:absolute;inset:0;background-image:linear-gradient(var(--gl) 1px,transparent 1px),linear-gradient(90deg,var(--gl) 1px,transparent 1px);background-size:74px 74px;-webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 40%,#000 12%,transparent 78%)}
.light .grid{--gl:#d6cfbf;opacity:.55}.dark .grid{--gl:#23302c;opacity:.5}
header{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:14px}.brand img{height:38px}
.brand .dv{width:1px;height:30px}.light .dv{background:#cdc6b6}.dark .dv{background:#2a3a35}
.brand .wm{font-size:24px;font-weight:600;letter-spacing:.32em}
.count{font-family:'Geist Mono',monospace;font-size:15px;letter-spacing:.15em}.light .count{color:#9a9384}.dark .count{color:#5e6b64}
.pill-tag{display:inline-flex;align-items:center;gap:10px;font-family:'Geist Mono',monospace;font-size:17px;letter-spacing:.12em;text-transform:uppercase;padding:12px 20px;border-radius:999px;border:1px solid;align-self:flex-start}
.light .pill-tag{border-color:#cdc6b6;color:#1b7a6f;background:#fbf9f3}.dark .pill-tag{border-color:#23302c;color:#3bb7a6;background:#0d1312}
main{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;justify-content:center}
em{font-family:'Playfair Display',serif;font-style:italic;font-weight:600}.light em{color:#157065}.dark em{color:#3bb7a6}
.h2t{font-size:84px;font-weight:800;line-height:1.03;letter-spacing:-.02em}
.h2t .mut{font-weight:600}.light .h2t .mut{color:#b3b3a3}.dark .h2t .mut{color:#4a554f}
.sub{font-size:30px;font-weight:500;margin-top:26px;max-width:720px}.light .sub{color:#5d655e}.dark .sub{color:#93a09a}
footer{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;font-size:20px}
.light footer{color:#8a857a}.dark footer{color:#8a958e}
footer .cta{font-weight:700}.light footer .cta{color:#15201c}.dark footer .cta{color:#ece7dc}

/* elemento holografico */
.holo-wrap{position:relative;display:flex;justify-content:center;margin:10px 0}
.holo{width:300px;height:300px;border-radius:47% 53% 50% 50%/55% 45% 55% 45%;
 background:conic-gradient(from 200deg,#7fe8d6,#dfeede,#b9a8ff,#6fd0c0,#f0e8d7,#8fd9ff,#7fe8d6);
 filter:saturate(1.15);position:relative;
 box-shadow:inset 0 34px 60px rgba(255,255,255,.55),inset 0 -34px 70px rgba(16,63,57,.45),0 40px 90px rgba(28,114,104,.4)}
.holo::after{content:'';position:absolute;top:13%;left:16%;width:42%;height:28%;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.9),transparent);filter:blur(8px)}
.holo-glow{position:absolute;inset:-40px;border-radius:50%;background:radial-gradient(circle,rgba(59,183,166,.35),transparent 65%);filter:blur(30px);z-index:-1}

/* cards de conceito */
.cards{display:flex;flex-direction:column;gap:18px;margin-top:30px}
.def{padding:30px 32px;border-radius:24px;border:1px solid}
.light .def{background:#fbf9f3;border-color:#e4ddcd}.dark .def{background:#0f1614;border-color:#1e2a26}
.def .ico{width:50px;height:50px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:16px}
.light .def .ico{background:#e3efe9;color:#157065}.dark .def .ico{background:#123f39;color:#3bb7a6}
.def h3{font-size:34px;font-weight:700;margin-bottom:8px}
.def p{font-size:23px;line-height:1.35}.light .def p{color:#5d655e}.dark .def p{color:#93a09a}
.def .ex{margin-top:6px;font-style:italic;opacity:.8}

/* celular */
.stage{flex:1;display:flex;align-items:center;justify-content:center;position:relative;margin-top:18px}
.stage-bg{position:absolute;width:640px;height:760px;border-radius:50px;background:linear-gradient(150deg,#2a8c81,#3bb7a6 40%,#9fb8ff);filter:blur(2px);transform:rotate(5deg);opacity:.9}
.phone{position:relative;width:420px;height:860px;border-radius:62px;background:#05100e;border:13px solid #11201c;box-shadow:0 50px 110px rgba(0,0,0,.45);overflow:hidden;transform:rotate(-4deg)}
.phone .island{position:absolute;top:20px;left:50%;transform:translateX(-50%);width:118px;height:32px;background:#000;border-radius:20px;z-index:4}
.scr{position:absolute;inset:0;background:#080b0a;color:#ece7dc;padding:64px 22px 22px;font-size:13px}
.scr .top{display:flex;align-items:center;gap:8px;margin-bottom:16px}.scr .top img{height:18px}.scr .top span{font-weight:700;letter-spacing:.18em;font-size:12px}
.scr .kpis{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px}
.scr .kpi{background:#0e1614;border:1px solid #1e2a26;border-radius:14px;padding:14px}
.scr .kpi .l{color:#7c8a83;font-size:10px;text-transform:uppercase;letter-spacing:.1em}
.scr .kpi .v{font-size:24px;font-weight:800;margin-top:4px}.scr .kpi .v.t{color:#3bb7a6}
.scr .row{background:#0e1614;border:1px solid #1e2a26;border-radius:12px;padding:12px 14px;margin-bottom:9px;display:flex;justify-content:space-between;align-items:center}
.scr .row .n{font-weight:600;font-size:14px}.scr .row .tag{font-size:10px;color:#3bb7a6}
.scr .badge{display:inline-block;background:#123f39;color:#3bb7a6;font-size:10px;padding:4px 10px;border-radius:999px;margin-bottom:12px}
`;

function brand(theme){const img=theme==='dark'?lamCream:lamInk;return `<div class="brand"><img src="${img}"><div class="dv"></div><span class="wm">VALEN</span></div>`;}
function shell(theme,inner,count,foot){
 return `<div class="slide ${theme}"><div class="grid"></div>
  <header>${brand(theme)}<span class="count">${count}</span></header>
  ${inner}
  <footer><span style="font-weight:600;opacity:.8">@valen</span><span class="cta">${foot}</span></footer></div>`;
}

const phoneInner = `
<div class="scr">
  <div class="top"><img src="${lamCream}"><span>VALEN CRM</span></div>
  <div class="badge">● Agente ativo 24/7</div>
  <div class="kpis">
    <div class="kpi"><div class="l">Leads hoje</div><div class="v">38</div></div>
    <div class="kpi"><div class="l">Conversão</div><div class="v t">27%</div></div>
    <div class="kpi"><div class="l">Receita/mês</div><div class="v">R$184k</div></div>
    <div class="kpi"><div class="l">1ª resposta</div><div class="v t">0:08</div></div>
  </div>
  <div class="row"><span class="n">Marina A.</span><span class="tag">Qualificado</span></div>
  <div class="row"><span class="n">Dr. Caio R.</span><span class="tag">Agendado</span></div>
  <div class="row"><span class="n">Helena M.</span><span class="tag">Fechado</span></div>
  <div class="row"><span class="n">Paulo T.</span><span class="tag">Retorno 60d</span></div>
</div>`;

const slides = [
 // capa clara, dois tons + holo
 {theme:'light', count:'01 / 08', foot:'arraste →', inner:`
  <span class="pill-tag">◆ O dicionário da clínica</span>
  <main>
   <h1 class="h2t"><span class="mut">Os termos que separam</span><br>a clínica que <em>escala</em><br>da que trava.</h1>
   <p class="sub">8 conceitos que todo dono de clínica devia dominar. Salva esse post.</p>
   <div class="holo-wrap"><div class="holo-glow"></div><div class="holo"></div></div>
  </main>`},
 // dicionario escuro + cards
 {theme:'dark', count:'02 / 08', foot:'arraste →', inner:`
  <main>
   <h2 class="h2t" style="font-size:64px"><span class="mut">Quem chega</span><br>e por onde passa.</h2>
   <div class="cards">
    <div class="def"><div class="ico">◎</div><h3>Lead</h3><p>A pessoa que demonstrou interesse na sua clínica.<br><span class="ex">Ex: alguém que pediu orçamento no WhatsApp.</span></p></div>
    <div class="def"><div class="ico">⟋</div><h3>Funil de vendas</h3><p>As etapas até o paciente fechar.<br><span class="ex">Ex: anúncio → conversa → avaliação → procedimento.</span></p></div>
   </div>
  </main>`},
 // produto no celular, claro
 {theme:'light', count:'03 / 08', foot:'Ver no link →', inner:`
  <span class="pill-tag">◆ O sistema por dentro</span>
  <main>
   <h2 class="h2t" style="font-size:58px"><span class="mut">É assim que a Valen</span><br>organiza <em>tudo.</em></h2>
   <div class="stage"><div class="stage-bg"></div><div class="phone"><div class="island"></div>${phoneInner}</div></div>
  </main>`},
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport:{width:1080,height:1350}, deviceScaleFactor:2 });
for(let i=0;i<slides.length;i++){
  const s=slides[i];
  const html=`<!doctype html><html><head><meta charset="utf-8"><style>${BASE}</style></head><body>${shell(s.theme,s.inner,s.count,s.foot)}</body></html>`;
  await page.setContent(html,{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  await page.waitForTimeout(300);
  await page.locator('.slide').screenshot({path:`posts/v2-${String(i+1).padStart(2,'0')}.png`});
  console.log('rendered v2-'+(i+1));
}
await browser.close();console.log('DONE');
