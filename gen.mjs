import { chromium } from 'playwright';
import fs from 'fs';

const lam = 'data:image/png;base64,' + fs.readFileSync('public/brand/lambda-ink.png').toString('base64');

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@500&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;background:#f3efe5;color:#15201c;font-family:'Geist',sans-serif;padding:80px 76px;display:flex;flex-direction:column}
.glow{position:absolute;width:1000px;height:1000px;border-radius:50%;background:radial-gradient(circle,rgba(28,114,104,.16),transparent 60%);filter:blur(20px);top:-280px;left:50%;transform:translateX(-50%)}
.glow.b{top:auto;bottom:-380px;left:28%;background:radial-gradient(circle,rgba(42,140,129,.13),transparent 60%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(#d6cfbf 1px,transparent 1px),linear-gradient(90deg,#d6cfbf 1px,transparent 1px);background-size:74px 74px;opacity:.55;-webkit-mask-image:radial-gradient(ellipse 75% 65% at 50% 40%,#000 12%,transparent 76%)}
.wm-lam{position:absolute;right:-80px;bottom:-60px;width:560px;opacity:.05}
header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:15px}
.brand img{height:40px}
.brand .dv{width:1px;height:32px;background:#cdc6b6}
.brand .wm{font-size:25px;font-weight:600;letter-spacing:.32em;color:#15201c}
.count{font-family:'Geist Mono',monospace;font-size:16px;letter-spacing:.15em;color:#9a9384}
main{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center}
.kicker{font-family:'Geist Mono',monospace;font-size:19px;letter-spacing:.2em;text-transform:uppercase;color:#1b7a6f;margin-bottom:26px;display:flex;align-items:center;gap:12px}
.kicker .dot{width:9px;height:9px;border-radius:50%;background:#1b7a6f;box-shadow:0 0 14px rgba(27,122,111,.6)}
em{font-family:'Playfair Display',serif;font-style:italic;font-weight:600;color:#157065}
b{color:#157065;font-weight:700}
.h-cover{font-size:96px;font-weight:800;line-height:1.02;letter-spacing:-.02em}
.h-body{font-size:70px;font-weight:600;line-height:1.1;letter-spacing:-.01em}
.h-sol{font-size:74px;font-weight:700;line-height:1.06;letter-spacing:-.01em}
.big-stat{font-size:300px;font-weight:900;line-height:.9;letter-spacing:-.04em;background:linear-gradient(180deg,#1c9486,#15625b);-webkit-background-clip:text;background-clip:text;color:transparent}
.stat-sub{font-size:46px;font-weight:500;line-height:1.15;color:#3f4a45;margin-top:18px;max-width:760px}
.muted .ln{font-size:50px;font-weight:500;line-height:1.1;color:#9a9c93}
.vs{font-family:'Playfair Display',serif;font-style:italic;font-size:30px;color:#157065;margin:22px 0}
.pill{display:inline-flex;align-items:center;gap:12px;background:#1c7268;color:#f6f3ea;font-weight:700;font-size:30px;padding:22px 38px;border-radius:999px;margin-top:40px}
footer{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;font-size:21px;color:#8a857a}
footer .cta{color:#15201c;font-weight:700;letter-spacing:.02em}
.handle{font-weight:600;color:#6f6a5f}
`;

function mainHTML(s){
  if(s.type==='cover') return `<main><div class="kicker"><span class="dot"></span>${s.kick||'Atenção'}</div><h1 class="h-cover">${s.text}</h1></main>`;
  if(s.type==='body')  return `<main><h2 class="h-body">${s.text}</h2></main>`;
  if(s.type==='stat')  return `<main><div class="big-stat">${s.big}</div><p class="stat-sub">${s.text}</p></main>`;
  if(s.type==='solution') return `<main><div class="kicker"><span class="dot"></span>A virada</div><h2 class="h-sol">${s.text}</h2></main>`;
  if(s.type==='cta')   return `<main><h2 class="h-body">${s.text}</h2><div><span class="pill">${s.cta} →</span></div></main>`;
  if(s.type==='impact')return `<main><div class="muted"><div class="kicker" style="color:#9a9c93">Software de prateleira</div><p class="ln">A clínica tem que se moldar ao sistema.</p></div><div class="vs">e na Valen?</div><div><div class="kicker"><span class="dot"></span>Com a Valen</div><h2 class="h-sol">O sistema se molda <em>à sua clínica.</em></h2></div></main>`;
  return '<main></main>';
}

function slideHTML(post,i,s){
  const n=String(i+1).padStart(2,'0'), total=String(post.slides.length).padStart(2,'0');
  const right = post.slides.length>1 ? `<span class="count">${n} / ${total}</span>` : `<span></span>`;
  const foot = (i < post.slides.length-1 && post.slides.length>1) ? `<span class="cta">arraste →</span>` : `<span class="cta">@valen</span>`;
  return `<div class="slide"><div class="glow"></div><div class="glow b"></div><div class="grid"></div><img class="wm-lam" src="${lam}">
  <header><div class="brand"><img src="${lam}"><div class="dv"></div><span class="wm">VALEN</span></div>${right}</header>
  ${mainHTML(s)}
  <footer><span class="handle">@valen</span>${foot}</footer></div>`;
}

const posts = [
 { id:'p3', slides:[
   {type:'cover', kick:'A dor que ninguém vê', text:'Sua clínica perde paciente <em>todo dia.</em><br>E ninguém percebe.'},
   {type:'body', text:'Um lead chega no WhatsApp às <b>14h03</b> querendo agendar.'},
   {type:'body', text:'A secretária está atendendo. Ninguém responde na hora.'},
   {type:'stat', big:'80%', text:'menos chance de o lead fechar depois de só <b>5 minutos</b> sem resposta.'},
   {type:'body', text:'Ele não esperou. Foi pro concorrente que respondeu na hora.'},
   {type:'solution', text:'A Valen responde, qualifica e agenda <em>em segundos.</em> 24 horas por dia.'},
   {type:'cta', text:'Quantos pacientes sumiram essa semana sem você saber?', cta:'Diagnóstico no link'},
 ]},
 { id:'p2', slides:[ {type:'impact'} ]},
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport:{width:1080,height:1350}, deviceScaleFactor:2 });
for(const post of posts){
  for(let i=0;i<post.slides.length;i++){
    const html=`<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${slideHTML(post,i,post.slides[i])}</body></html>`;
    await page.setContent(html,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(250);
    const f=`posts/${post.id}-${String(i+1).padStart(2,'0')}.png`;
    await page.locator('.slide').screenshot({path:f});
    console.log('rendered',f);
  }
}
await browser.close();
console.log('ALL DONE');
