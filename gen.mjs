// Gerador de artes de Instagram da Valen (1080x1350, versao clara).
// Requer playwright: pnpm add -D playwright && pnpm exec playwright install chromium
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
.h-cover{font-size:94px;font-weight:800;line-height:1.02;letter-spacing:-.02em}
.h-body{font-size:70px;font-weight:600;line-height:1.1;letter-spacing:-.01em}
.h-body.sm{font-size:56px;line-height:1.14}
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
  if(s.type==='cover') return `<main><div class="kicker"><span class="dot"></span>${s.kick||''}</div><h1 class="h-cover">${s.text}</h1></main>`;
  if(s.type==='body')  return `<main><h2 class="h-body ${s.sm?'sm':''}">${s.text}</h2></main>`;
  if(s.type==='stat')  return `<main><div class="big-stat">${s.big}</div><p class="stat-sub">${s.text}</p></main>`;
  if(s.type==='solution') return `<main><div class="kicker"><span class="dot"></span>${s.kick||'A virada'}</div><h2 class="h-sol">${s.text}</h2></main>`;
  if(s.type==='cta')   return `<main><h2 class="h-body ${s.sm?'sm':''}">${s.text}</h2><div><span class="pill">${s.cta} →</span></div></main>`;
  return '<main></main>';
}
function slideHTML(post,i,s){
  const n=String(i+1).padStart(2,'0'), total=String(post.slides.length).padStart(2,'0');
  const last = i===post.slides.length-1;
  const right = `<span class="count">${n} / ${total}</span>`;
  const foot = last ? `<span class="cta">${post.foot||'Link na bio'}</span>` : `<span class="cta">arraste →</span>`;
  return `<div class="slide"><div class="glow"></div><div class="glow b"></div><div class="grid"></div><img class="wm-lam" src="${lam}">
  <header><div class="brand"><img src="${lam}"><div class="dv"></div><span class="wm">VALEN</span></div>${right}</header>
  ${mainHTML(s)}
  <footer><span class="handle">@valen</span>${foot}</footer></div>`;
}

const posts = [
 { id:'p1', foot:'Seguir @valen', slides:[
   {type:'cover', kick:'Quem é a Valen', text:'A maioria das clínicas trava sempre no mesmo lugar: <em>no operacional.</em>'},
   {type:'body', text:'Quanto mais a clínica cresce, mais coisa passa pela mão do dono.', sm:true},
   {type:'body', text:'Lead parado no WhatsApp. Planilha da secretária. Paciente que some entre consultas.', sm:true},
   {type:'solution', kick:'A verdade', text:'Não falta marketing. <em>Falta sistema.</em>'},
   {type:'body', text:'A Valen constrói o sistema que faz a clínica rodar <b>sem depender de ninguém.</b>', sm:true},
   {type:'body', text:'Comercial, pós-venda, repasse médico e agentes de IA. Tudo <em>sob medida.</em>', sm:true},
   {type:'cta', text:'Esse perfil vai mostrar como virar a sua clínica do avesso.', cta:'Seguir @valen', sm:true},
 ]},
 { id:'p5', foot:'Diagnóstico no link', slides:[
   {type:'cover', kick:'A pergunta difícil', text:'Se você parar uma semana, a sua clínica <em>para junto?</em>'},
   {type:'body', text:'Esse é o sinal de que a clínica depende de você pra <b>tudo.</b>'},
   {type:'body', text:'Cada decisão, cada atendimento, cada mensagem passa pela sua mão.', sm:true},
   {type:'body', text:'Crescer, assim, vira sinônimo de <em>trabalhar mais.</em> Não de ganhar mais.', sm:true},
   {type:'solution', kick:'A virada', text:'A saída não é se esforçar mais. É montar <em>processo e sistema.</em>'},
   {type:'body', text:'A Valen cria a estrutura que faz a clínica operar <b>mesmo sem você presente.</b>', sm:true},
   {type:'cta', text:'Sua clínica trabalha pra você, ou você trabalha pra ela?', cta:'Diagnóstico no link'},
 ]},
 { id:'p6', foot:'Agende no link', slides:[
   {type:'cover', kick:'Como funciona', text:'Da planilha ao sistema rodando: <em>30 dias.</em>'},
   {type:'body', text:'<b>Dias 1 a 3.</b> A Valen mapeia a sua operação e os gargalos.', sm:true},
   {type:'body', text:'<b>Dias 4 a 7.</b> Desenha o sistema sob medida da sua clínica.', sm:true},
   {type:'body', text:'<b>Dias 8 a 21.</b> Constrói CRM, automações e agentes de IA.', sm:true},
   {type:'body', text:'<b>Dias 22 a 30.</b> Sistema no ar, equipe treinada, operação monitorada.', sm:true},
   {type:'solution', kick:'O melhor', text:'Sem você implementar nada. <em>A Valen faz tudo.</em>'},
   {type:'cta', text:'Quer ver como isso ficaria na sua clínica?', cta:'Agende um diagnóstico'},
 ]},
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport:{width:1080,height:1350}, deviceScaleFactor:2 });
for(const post of posts){
  for(let i=0;i<post.slides.length;i++){
    const html=`<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${slideHTML(post,i,post.slides[i])}</body></html>`;
    await page.setContent(html,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    await page.waitForTimeout(220);
    const f=`posts/${post.id}-${String(i+1).padStart(2,'0')}.png`;
    await page.locator('.slide').screenshot({path:f});
    console.log('rendered',f);
  }
}
await browser.close();
console.log('ALL DONE');
