import { chromium } from 'playwright';
import fs from 'fs';
const lamInk='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-ink.png').toString('base64');
const lamCream='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-cream.png').toString('base64');

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:'Geist',sans-serif;background:#f3efe5;color:#15201c;padding:74px 70px;display:flex;flex-direction:column}
.grid{position:absolute;inset:0;background-image:linear-gradient(#d6cfbf 1px,transparent 1px),linear-gradient(90deg,#d6cfbf 1px,transparent 1px);background-size:74px 74px;opacity:.5;-webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 42%,#000 12%,transparent 78%)}
.wm{position:absolute;right:-80px;bottom:-60px;width:520px;opacity:.045}
header{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:13px}.brand img{height:35px}.brand .dv{width:1px;height:27px;background:#cdc6b6}.brand .wn{font-size:22px;font-weight:600;letter-spacing:.32em}
.count{font-family:'Geist Mono',monospace;font-size:15px;letter-spacing:.15em;color:#9a9384}
em{font-family:'Playfair Display',serif;font-style:italic;font-weight:600;color:#157065}
main{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;justify-content:flex-start}
.wtitle{font-size:52px;font-weight:700;line-height:1.07;margin:8px 0 20px;max-width:880px}
.wstage{flex:1;display:flex;align-items:center;justify-content:center}
.wphone{width:560px;height:880px;border-radius:42px;background:#0b141a;border:10px solid #11201c;overflow:hidden;box-shadow:0 44px 90px rgba(0,0,0,.24)}
.wbar{background:#1f2c33;color:#e9edef;display:flex;align-items:center;gap:11px;padding:22px 20px 15px}
.wav{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#2a8c81,#3bb7a6);display:flex;align-items:center;justify-content:center}.wav img{height:22px}
.wbar .nm{font-weight:700;font-size:19px}.wbar .on{font-size:13px;color:#8fb3a9}
.wbody{background:#0b141a;padding:18px 16px;display:flex;flex-direction:column;gap:9px}
.bub{max-width:82%;padding:12px 15px;border-radius:15px;font-size:17.5px;line-height:1.3}
.inc{align-self:flex-start;background:#202c33;color:#e9edef;border-top-left-radius:4px}
.out{align-self:flex-end;background:#005c4b;color:#e9edef;border-top-right-radius:4px}
.tme{font-size:11px;opacity:.6;margin-top:4px;text-align:right}
.sysn{align-self:center;background:#182229;color:#9fd0c4;font-size:13px;padding:6px 13px;border-radius:9px;text-align:center;max-width:90%}
footer{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;font-size:19px;color:#8a857a}
footer .fr{font-weight:700;color:#15201c}.fl{font-weight:600;opacity:.8}
`;

const slide=`<div class="slide"><div class="grid"></div><img class="wm" src="${lamInk}">
<header><div class="brand"><img src="${lamInk}"><div class="dv"></div><span class="wn">VALEN</span></div><span class="count">04 / 06</span></header>
<main>
 <h2 class="wtitle">Ela só queria o preço.<br>Saiu <em>agendada.</em></h2>
 <div class="wstage"><div class="wphone">
  <div class="wbar"><div class="wav"><img src="${lamCream}"></div><div><div class="nm">Novo contato · Lead</div><div class="on">online agora</div></div></div>
  <div class="wbody">
   <div class="sysn">Hoje · 23:14 · ninguém da equipe acordado</div>
   <div class="bub inc">Oi! Vi vocês no Instagram 👀 quanto custa a consulta?</div>
   <div class="bub out">Oi! Que bom que você chamou 😊 antes, como posso te chamar?<div class="tme">23:14 ✓✓</div></div>
   <div class="bub inc">Marina</div>
   <div class="bub out">Prazer, Marina! É pra harmonização? E seria a sua primeira vez na clínica?<div class="tme">23:14 ✓✓</div></div>
   <div class="bub inc">Isso, primeira vez. Queria entender melhor antes 🙂</div>
   <div class="bub out">Perfeito. A avaliação com a Dra. é R$ 350 e já sai com um plano feito só pra você. Posso reservar um horário?<div class="tme">23:15 ✓✓</div></div>
   <div class="bub inc">Pode sim!</div>
   <div class="bub out">Prontinho: quinta, 15h ✓ te confirmo no dia. Qualquer dúvida é só chamar 👋<div class="tme">23:16 ✓✓</div></div>
   <div class="sysn">✓ Lead qualificado e agendado — em 1min42s</div>
  </div>
 </div></div>
</main>
<footer><span class="fl">@valen</span><span class="fr">arraste →</span></footer></div>`;

const b=await chromium.launch();
const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
await p.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${slide}</body></html>`,{waitUntil:'networkidle'});
await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(300);
await p.locator('.slide').screenshot({path:'posts/wa-04.png'});
await b.close();console.log('ok');
