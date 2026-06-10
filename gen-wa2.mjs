import { chromium } from 'playwright';
import fs from 'fs';
const lamInk='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-ink.png').toString('base64');
const lamCream='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-cream.png').toString('base64');

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:'Geist',sans-serif;padding:74px 70px;display:flex;flex-direction:column}
.light{background:#f3efe5;color:#15201c}.dark{background:#080b0a;color:#ece7dc}
.grid{position:absolute;inset:0;background-image:linear-gradient(var(--g) 1px,transparent 1px),linear-gradient(90deg,var(--g) 1px,transparent 1px);background-size:74px 74px;-webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 42%,#000 12%,transparent 78%)}
.light .grid{--g:#d6cfbf;opacity:.5}.dark .grid{--g:#23302c;opacity:.5}
.wm{position:absolute;right:-80px;bottom:-60px;width:500px;opacity:.045}
header{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:13px}.brand img{height:34px}.brand .dv{width:1px;height:26px}.light .dv{background:#cdc6b6}.dark .dv{background:#2a3a35}.brand .wn{font-size:21px;font-weight:600;letter-spacing:.32em}
.count{font-family:'Geist Mono',monospace;font-size:15px;letter-spacing:.15em}.light .count{color:#9a9384}.dark .count{color:#5e6b64}
em{font-family:'Playfair Display',serif;font-style:italic;font-weight:600}.light em{color:#157065}.dark em{color:#3bb7a6}
b{font-weight:700}.light b{color:#157065}.dark b{color:#3bb7a6}
main{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;justify-content:center}
.kick{font-family:'Geist Mono',monospace;font-size:18px;letter-spacing:.18em;text-transform:uppercase;color:#1b7a6f;margin-bottom:22px;display:flex;align-items:center;gap:11px}.dark .kick{color:#3bb7a6}.kick .dot{width:9px;height:9px;border-radius:50%;background:currentColor;box-shadow:0 0 14px currentColor}
.chook{font-size:84px;font-weight:800;line-height:1.03;letter-spacing:-.02em}
.csub{font-size:29px;font-weight:500;margin-top:22px;max-width:780px}.light .csub{color:#5d655e}.dark .csub{color:#93a09a}
.body{font-size:64px;font-weight:600;line-height:1.12;letter-spacing:-.01em;max-width:880px}
.bsub{font-size:30px;font-weight:500;margin-top:22px;max-width:760px}.light .bsub{color:#5d655e}.dark .bsub{color:#93a09a}
.ctapill{display:inline-flex;align-items:center;gap:12px;background:#1c7268;color:#f6f3ea;font-weight:700;font-size:30px;padding:22px 38px;border-radius:999px;margin-top:38px}
.ctitle{font-size:46px;font-weight:700;line-height:1.08;margin-bottom:18px;max-width:880px}
.ctitle .step{font-family:'Geist Mono',monospace;font-size:17px;letter-spacing:.14em;text-transform:uppercase;color:#1b7a6f;display:block;margin-bottom:10px}
.wstage{flex:1;display:flex;align-items:center;justify-content:center}
.wphone{width:600px;height:900px;border-radius:44px;background:#0b141a;border:11px solid #11201c;overflow:hidden;box-shadow:0 44px 90px rgba(0,0,0,.24)}
.wbar{background:#1f2c33;color:#e9edef;display:flex;align-items:center;gap:11px;padding:22px 20px 15px}
.wav{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#2a8c81,#3bb7a6);display:flex;align-items:center;justify-content:center}.wav img{height:22px}
.wbar .nm{font-weight:700;font-size:19px}.wbar .on{font-size:13px;color:#8fb3a9}
.wbody{background:#0b141a;padding:18px 16px;display:flex;flex-direction:column;gap:9px}
.bub{max-width:84%;padding:12px 15px;border-radius:15px;font-size:18px;line-height:1.32}
.inc{align-self:flex-start;background:#202c33;color:#e9edef;border-top-left-radius:4px}
.out{align-self:flex-end;background:#005c4b;color:#e9edef;border-top-right-radius:4px}
.tme{font-size:11px;opacity:.6;margin-top:4px;text-align:right}
.sysn{align-self:center;background:#182229;color:#9fd0c4;font-size:13px;padding:6px 13px;border-radius:9px;text-align:center;max-width:92%}
footer{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;font-size:19px}.light footer{color:#8a857a}.dark footer{color:#8a958e}
footer .fr{font-weight:700}.light .fr{color:#15201c}.dark .fr{color:#ece7dc}.fl{font-weight:600;opacity:.8}
`;
const head=(t,c)=>`<header><div class="brand"><img src="${t==='dark'?lamCream:lamInk}"><div class="dv"></div><span class="wn">VALEN</span></div><span class="count">${c}</span></header>`;
const foot=(t,r)=>`<footer><span class="fl">@valen</span><span class="fr">${r}</span></footer>`;
function bubbles(arr){return arr.map(b=>{
  if(b.s) return `<div class="sysn">${b.s}</div>`;
  const tm=b.t?`<div class="tme">${b.t} ✓✓</div>`:'';
  return `<div class="bub ${b.who}">${b.x}${tm}</div>`;
}).join('');}
function phone(contact,arr){return `<div class="wphone"><div class="wbar"><div class="wav"><img src="${lamCream}"></div><div><div class="nm">${contact}</div><div class="on">online agora</div></div></div><div class="wbody">${bubbles(arr)}</div></div>`;}

const slides=[
 {t:'light',c:'01 / 06',r:'arraste',m:`<div class="kick"><span class="dot"></span>Atendimento</div><h1 class="chook">Parece a sua melhor secretária. <em>É a Valen.</em></h1><p class="csub">Veja a IA atendendo um lead, do "oi" ao agendamento. (conversa ilustrativa)</p>`},
 {t:'light',c:'02 / 06',r:'arraste',m:`<h2 class="ctitle"><span class="step">Parte 1 · acolhe e entende</span>Ela mandou "oi". A IA <em>assumiu.</em></h2><div class="wstage">${phone('Lead · novo contato',[
   {s:'Hoje · 15:25'},
   {who:'inc',x:'Olá! Vim pelo Instagram, queria mais informações sobre a consulta 🙂'},
   {who:'out',x:'Olá! Sou a assistente da clínica e vou cuidar do seu atendimento. Como posso te chamar?',t:'15:25'},
   {who:'inc',x:'Danielle'},
   {who:'out',x:'Prazer, Danielle! Antes de te explicar como funciona, me conta: o que te motivou a buscar a consulta agora?',t:'15:26'},
   {who:'inc',x:'Comecei a academia e preciso de um atestado. No último exame minha pressão tava alta e hoje não faço acompanhamento.'},
   {who:'out',x:'Entendi, Danielle 💚 Esse cuidado é muito importante, ainda mais com histórico de pressão. Você está no caminho certo.',t:'15:27'},
 ])}</div>`},
 {t:'light',c:'03 / 06',r:'arraste',m:`<h2 class="ctitle"><span class="step">Parte 2 · mostra o valor e fecha</span>Explicou primeiro. Cobrou <em>depois.</em></h2><div class="wstage">${phone('Lead · novo contato',[
   {who:'out',x:'A consulta com a Dra. é completa (1h a 1h30): avalia histórico, hábitos, exames e saúde cardiovascular. Depois, monta um plano só pra você, com acompanhamento direto.',t:'15:37'},
   {who:'out',x:'Esse tipo de acompanhamento faz sentido pra você?',t:'15:37'},
   {who:'inc',x:'Faz sim!'},
   {who:'out',x:'Que ótimo! 😊 A consulta é R$ 900 no cartão, ou R$ 850 à vista no Pix. Já inclui retorno em até 45 dias e nota fiscal.',t:'16:01'},
   {who:'out',x:'A próxima agenda da Dra. é dia 26/06, às 08h30. Posso reservar pra você?',t:'16:01'},
   {who:'inc',x:'Pode! 🙌'},
   {s:'✓ Acolhida, qualificada e agendada. Sem ninguém da equipe disponível.'},
 ])}</div>`},
 {t:'dark',c:'04 / 06',r:'arraste',m:`<div class="kick"><span class="dot"></span>O que aconteceu ali</div><p class="body">Acolheu. Entendeu a dor. Mostrou o valor <em>antes</em> do preço. E fechou.</p><p class="bsub">Tudo que a sua melhor secretária faria. Só que sem depender de ninguém e sem nunca dormir.</p>`},
 {t:'dark',c:'05 / 06',r:'arraste',m:`<div class="kick"><span class="dot"></span>A diferença</div><p class="body">Enquanto a maioria demora horas, a Valen já <em>acolheu, qualificou e agendou.</em></p><p class="bsub">Atendimento na hora, todo dia, sem depender de ninguém da equipe.</p>`},
 {t:'light',c:'06 / 06',r:'Diagnóstico no link',m:`<p class="body">Quer esse atendimento rodando na sua clínica <em>24 horas por dia?</em></p><div><span class="ctapill">Diagnóstico no link →</span></div>`},
];

const b=await chromium.launch();
const page=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
for(let i=0;i<slides.length;i++){const s=slides[i];
 const html=`<div class="slide ${s.t}"><div class="grid"></div><img class="wm" src="${s.t==='dark'?lamCream:lamInk}">${head(s.t,s.c)}<main>${s.m}</main>${foot(s.t,s.r)}</div>`;
 await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${html}</body></html>`,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(220);
 await page.locator('.slide').screenshot({path:`posts/wa-${String(i+1).padStart(2,'0')}.png`});
 console.log('wa',i+1);
}
await b.close();console.log('DONE');
