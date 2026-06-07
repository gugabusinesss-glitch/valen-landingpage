import { chromium } from 'playwright';
import fs from 'fs';
const lamInk='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-ink.png').toString('base64');
const lamCream='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-cream.png').toString('base64');

const BASE=`
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:'Geist',sans-serif;padding:80px 76px;display:flex;flex-direction:column}
.light{background:#f3efe5;color:#15201c}.dark{background:#080b0a;color:#ece7dc}
.grid{position:absolute;inset:0;background-image:linear-gradient(var(--g) 1px,transparent 1px),linear-gradient(90deg,var(--g) 1px,transparent 1px);background-size:74px 74px;-webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 42%,#000 12%,transparent 78%)}
.light .grid{--g:#d6cfbf;opacity:.5}.dark .grid{--g:#23302c;opacity:.5}
header{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:14px}.brand img{height:36px}.brand .dv{width:1px;height:28px}
.light .dv{background:#cdc6b6}.dark .dv{background:#2a3a35}
.brand .wn{font-size:23px;font-weight:600;letter-spacing:.32em}
.pill{font-family:'Geist Mono',monospace;font-size:16px;letter-spacing:.12em;text-transform:uppercase;padding:10px 18px;border-radius:999px;border:1px solid}
.light .pill{border-color:#cdc6b6;color:#1b7a6f;background:#fbf9f3}.dark .pill{border-color:#23302c;color:#3bb7a6;background:#0d1312}
main{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;justify-content:center}
em{font-family:'Playfair Display',serif;font-style:italic;font-weight:600}.light em{color:#157065}.dark em{color:#3bb7a6}
footer{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;font-size:20px}
.light footer{color:#8a857a}.dark footer{color:#8a958e}.footer .c{font-weight:700}
.fl{font-weight:600;opacity:.8}.fr{font-weight:700}.light .fr{color:#15201c}.dark .fr{color:#ece7dc}

/* A: manifesto editorial */
.manifesto{font-family:'Playfair Display',serif;font-weight:500;font-size:90px;line-height:1.12;letter-spacing:-.01em}
/* B: stat gigante */
.bignum{font-size:380px;font-weight:900;line-height:.82;letter-spacing:-.04em;background:linear-gradient(180deg,#3bb7a6,#15625b);-webkit-background-clip:text;background-clip:text;color:transparent}
.bignum small{font-size:90px;font-weight:700;-webkit-text-fill-color:#3bb7a6}
.statsub{font-size:44px;font-weight:500;line-height:1.18;color:#c7cdc7;margin-top:24px;max-width:780px}
/* C: whatsapp */
.wtitle{font-size:58px;font-weight:700;line-height:1.08;margin-bottom:30px;max-width:820px}
.wstage{flex:1;display:flex;align-items:center;justify-content:center}
.wphone{width:560px;height:720px;border-radius:46px;background:#0b141a;border:11px solid #11201c;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.25)}
.wbar{background:#1f2c33;color:#e9edef;display:flex;align-items:center;gap:12px;padding:26px 22px 18px}
.wav{width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,#2a8c81,#3bb7a6);display:flex;align-items:center;justify-content:center}
.wav img{height:24px}
.wbar .nm{font-weight:700;font-size:22px}.wbar .on{font-size:15px;color:#8fb3a9}
.wbody{background:#0b141a;padding:24px 20px;height:100%;display:flex;flex-direction:column;gap:14px}
.bub{max-width:78%;padding:16px 18px;border-radius:16px;font-size:21px;line-height:1.3}
.inc{align-self:flex-start;background:#202c33;color:#e9edef;border-top-left-radius:4px}
.out{align-self:flex-end;background:#005c4b;color:#e9edef;border-top-right-radius:4px}
.tme{font-size:13px;opacity:.6;margin-top:6px;text-align:right}
.sysn{align-self:center;background:#182229;color:#9fd0c4;font-size:15px;padding:8px 16px;border-radius:10px}
/* D: comparativo */
.cmpwrap{display:flex;gap:20px;flex:1;align-items:stretch}
.col{flex:1;border-radius:26px;padding:40px 34px;display:flex;flex-direction:column}
.col.bad{background:#0f1413;color:#9aa39c;border:1px solid #20302c}
.col.good{background:#fbf9f3;color:#15201c;border:1px solid #1c7268;box-shadow:0 30px 70px rgba(28,114,104,.18)}
.col h3{font-family:'Geist Mono',monospace;font-size:18px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:26px}
.col.bad h3{color:#6b756e}.col.good h3{color:#1b7a6f}
.col li{list-style:none;font-size:26px;line-height:1.3;display:flex;gap:12px;padding:14px 0;border-top:1px solid}
.col.bad li{border-color:#1c2a26}.col.good li{border-color:#e4ddcd;font-weight:500}
.col .ic{font-weight:800}.bad .ic{color:#6b756e}.good .ic{color:#1c7268}
.cmptitle{font-size:64px;font-weight:800;line-height:1.04;margin-bottom:30px}
/* E: checklist */
.cktitle{font-size:66px;font-weight:800;line-height:1.05;margin-bottom:14px}
.cksub{font-size:28px;color:#5d655e;margin-bottom:34px}
.ckitem{display:flex;align-items:center;gap:20px;padding:22px 0;border-top:1px solid #ddd6c6;font-size:32px;font-weight:500}
.ckbox{width:42px;height:42px;border-radius:12px;border:2px solid #1c7268;display:flex;align-items:center;justify-content:center;color:#fff;background:#1c7268;font-size:24px;flex-shrink:0}
.ckbox.off{background:transparent;color:transparent;border-color:#c9c1b0}
`;

function brand(t){const i=t==='dark'?lamCream:lamInk;return `<div class="brand"><img src="${i}"><div class="dv"></div><span class="wn">VALEN</span></div>`;}
function foot(t,r){return `<footer><span class="fl">@valen</span><span class="fr">${r||'arraste →'}</span></footer>`;}
function head(t,pill){return `<header>${brand(t)}<span class="pill">${pill}</span></header>`;}

const slides=[
{id:'A',theme:'light',html:t=>`<div class="slide light"><div class="grid"></div>${head('light','◆ Manifesto')}
 <main><p class="manifesto">A sua clínica não precisa de <em>mais esforço.</em> Precisa de <em>sistema.</em></p></main>${foot('light')}</div>`},

{id:'B',theme:'dark',html:t=>`<div class="slide dark"><div class="grid"></div>${head('dark','◆ O número')}
 <main><div class="bignum">5<small>min</small></div><p class="statsub">é o tempo que você tem pra responder um lead. Depois disso, ele já foi pro concorrente.</p></main>${foot('dark')}</div>`},

{id:'C',theme:'light',html:t=>`<div class="slide light"><div class="grid"></div>${head('light','◆ Bastidores do agente')}
 <main><h2 class="wtitle">Enquanto você dorme, a <em>Valen agenda.</em></h2>
 <div class="wstage"><div class="wphone">
   <div class="wbar"><div class="wav"><img src="${lamCream}"></div><div><div class="nm">Paciente · Lead novo</div><div class="on">online agora</div></div></div>
   <div class="wbody">
     <div class="sysn">Hoje, 23:14</div>
     <div class="bub inc">Oi, vcs atendem harmonização? Queria um orçamento 😊</div>
     <div class="bub out">Oi! Atendemos sim. Posso já verificar um horário pra sua avaliação. Prefere manhã ou tarde?<div class="tme">23:14 ✓✓</div></div>
     <div class="bub inc">Tarde seria ótimo</div>
     <div class="bub out">Fechado! Agendei sua avaliação pra quinta, 15h. Confirmo no dia 👋<div class="tme">23:15 ✓✓</div></div>
     <div class="sysn">✓ Lead qualificado e agendado em 47 segundos</div>
   </div>
 </div></div></main>${foot('light')}</div>`},

{id:'D',theme:'light',html:t=>`<div class="slide light"><div class="grid"></div>${head('light','◆ Antes × Depois')}
 <main><h2 class="cmptitle">O mesmo dia, duas <em>clínicas.</em></h2>
 <div class="cmpwrap">
  <div class="col bad"><h3>Sem sistema</h3>
   <li><span class="ic">×</span> Lead esperando horas</li><li><span class="ic">×</span> 12 planilhas pra atualizar</li><li><span class="ic">×</span> Paciente some sem follow-up</li><li><span class="ic">×</span> Decisão no achismo</li></div>
  <div class="col good"><h3>Com a Valen</h3>
   <li><span class="ic">✓</span> Resposta em segundos</li><li><span class="ic">✓</span> CRM atualiza sozinho</li><li><span class="ic">✓</span> Agente chama de volta</li><li><span class="ic">✓</span> Dashboard ao vivo</li></div>
 </div></main>${foot('light')}</div>`},

{id:'E',theme:'light',html:t=>`<div class="slide light"><div class="grid"></div>${head('light','◆ Faça o teste')}
 <main><h2 class="cktitle">Sua clínica precisa de um <em>sistema?</em></h2><p class="cksub">Marque quantos são a sua realidade hoje:</p>
  <div class="ckitem"><span class="ckbox">✓</span> Tudo importante passa por você</div>
  <div class="ckitem"><span class="ckbox">✓</span> A equipe vive na planilha</div>
  <div class="ckitem"><span class="ckbox off">✓</span> Paciente some e ninguém chama</div>
  <div class="ckitem"><span class="ckbox">✓</span> Você não sabe sua taxa de conversão</div>
 </main>${foot('light','marcou 2+? arraste →')}</div>`},
];

const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
for(const s of slides){
 await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${BASE}</style></head><body>${s.html(s.theme)}</body></html>`,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready); await page.waitForTimeout(250);
 await page.locator('.slide').screenshot({path:`posts/var-${s.id}.png`});
 console.log('var',s.id);
}
await browser.close();console.log('DONE');
