import { chromium } from 'playwright';
import fs from 'fs';
const lamInk='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-ink.png').toString('base64');

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@500&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;background:#f3efe5;color:#15201c;font-family:'Geist',sans-serif;padding:80px 76px;display:flex;flex-direction:column}
.glow{position:absolute;width:1000px;height:1000px;border-radius:50%;background:radial-gradient(circle,rgba(28,114,104,.15),transparent 60%);filter:blur(20px);top:-300px;left:50%;transform:translateX(-50%)}
.grid{position:absolute;inset:0;background-image:linear-gradient(#d6cfbf 1px,transparent 1px),linear-gradient(90deg,#d6cfbf 1px,transparent 1px);background-size:74px 74px;opacity:.5;-webkit-mask-image:radial-gradient(ellipse 78% 68% at 50% 42%,#000 12%,transparent 78%)}
.wm{position:absolute;right:-80px;bottom:-60px;width:540px;opacity:.05}
header{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:14px}.brand img{height:38px}.brand .dv{width:1px;height:30px;background:#cdc6b6}
.brand .wn{font-size:24px;font-weight:600;letter-spacing:.32em}
.num{font-family:'Geist Mono',monospace;font-size:15px;letter-spacing:.15em;color:#9a9384}
main{position:relative;z-index:2;flex:1;display:flex;flex-direction:column;justify-content:center}
.kick{font-family:'Geist Mono',monospace;font-size:19px;letter-spacing:.18em;text-transform:uppercase;color:#1b7a6f;margin-bottom:26px;display:flex;align-items:center;gap:12px}
.kick .dot{width:9px;height:9px;border-radius:50%;background:#1b7a6f;box-shadow:0 0 14px rgba(27,122,111,.6)}
.hook{font-size:88px;font-weight:800;line-height:1.02;letter-spacing:-.02em}
em{font-family:'Playfair Display',serif;font-style:italic;font-weight:600;color:#157065}
footer{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;font-size:20px;color:#8a857a}
footer .c{color:#15201c;font-weight:700}
`;
function cover(c){
 return `<div class="slide"><div class="glow"></div><div class="grid"></div><img class="wm" src="${lamInk}">
 <header><div class="brand"><img src="${lamInk}"><div class="dv"></div><span class="wn">VALEN</span></div><span class="num">${c.n}</span></header>
 <main><div class="kick"><span class="dot"></span>${c.kick}</div><h1 class="hook">${c.hook}</h1></main>
 <footer><span style="font-weight:600;opacity:.8">@valen</span><span class="c">${c.foot||'arraste →'}</span></footer></div>`;
}

const covers=[
 {n:'01',kick:'O dicionário da clínica',hook:'Os termos que separam a clínica que <em>escala</em> da que trava.'},
 {n:'02',kick:'A conta que ninguém faz',hook:'Quanto custa, de verdade, um paciente que <em>some?</em>'},
 {n:'03',kick:'Mito ou verdade',hook:'Não: a IA não veio <em>demitir</em> a sua secretária.'},
 {n:'04',kick:'A dor que ninguém vê',hook:'Sua clínica perde paciente <em>todo dia.</em> E ninguém percebe.'},
 {n:'05',kick:'Bastidores',hook:'Como a Valen monta o sistema de uma clínica em <em>30 dias.</em>'},
 {n:'06',kick:'Por dentro do sistema',hook:'O CRM que vira o <em>segundo cérebro</em> da sua clínica.'},
 {n:'07',kick:'Faça o teste',hook:'7 sinais de que sua clínica já passou da hora de ter <em>sistema.</em>'},
 {n:'08',kick:'A pergunta difícil',hook:'Se você sumir uma semana, a clínica <em>para junto?</em>'},
 {n:'09',kick:'Prateleira × Valen',hook:'No fim, quem se adapta a quem: você ou o <em>software?</em>'},
 {n:'10',kick:'Atenção',hook:'5 erros que fazem a clínica <em>perder paciente</em> sem ninguém ver.'},
 {n:'11',kick:'Caso real',hook:'Como uma clínica de geriatria <em>organizou o caos.</em>'},
 {n:'12',kick:'Vamos conversar',hook:'15 minutos pra ver a sua clínica rodando no <em>automático.</em>',foot:'link na bio'},
];

const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
const b64=[];
for(let i=0;i<covers.length;i++){
 const html=`<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${cover(covers[i])}</body></html>`;
 await page.setContent(html,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready); await page.waitForTimeout(180);
 const f=`posts/feed-${String(i+1).padStart(2,'0')}.png`;
 await page.locator('.slide').screenshot({path:f});
 b64.push('data:image/png;base64,'+fs.readFileSync(f).toString('base64'));
 console.log('cover',i+1);
}
// mockup do feed (perfil IG)
const tiles=b64.map(s=>`<div class="t"><img src="${s}"></div>`).join('');
const profile=`<!doctype html><html><head><meta charset="utf-8"><style>
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box;font-family:'Geist',sans-serif}
body{width:1080px;background:#fbf9f5;color:#15201c;padding:48px}
.head{display:flex;align-items:center;gap:40px;padding:0 16px 30px}
.av{width:150px;height:150px;border-radius:50%;background:#15201c;display:flex;align-items:center;justify-content:center}
.av img{height:78px;filter:invert(1)}
.meta h1{font-size:38px;font-weight:700;letter-spacing:.02em}
.stats{display:flex;gap:42px;margin:14px 0 12px;font-size:24px}
.stats b{font-weight:700}.stats span{color:#8a857a;font-size:19px}
.bio{font-size:23px;line-height:1.4;color:#3f4a45;max-width:620px}
.bio .h{font-weight:700}
.gridf{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:24px}
.t{aspect-ratio:1080/1350;overflow:hidden;background:#eee}
.t img{width:100%;height:100%;object-fit:cover;display:block}
</style></head><body>
<div class="head"><div class="av"><img src="${lamInk}"></div>
<div class="meta"><h1>valen</h1>
<div class="stats"><div><b>12</b> <span>posts</span></div><div><b>1.240</b> <span>seguidores</span></div><div><b>87</b> <span>seguindo</span></div></div>
<div class="bio"><span class="h">Valen · Oficina de Software</span><br>Sistemas sob medida de IA pra clínica escalar sem depender de você.<br>Menos planilha, mais paciente. 👇</div></div></div>
<div class="gridf">${tiles}</div></body></html>`;
const p2=await browser.newPage({viewport:{width:1080,height:600},deviceScaleFactor:2});
await p2.setContent(profile,{waitUntil:'networkidle'});
await p2.evaluate(()=>document.fonts.ready); await p2.waitForTimeout(300);
await p2.locator('body').screenshot({path:'posts/feed-mockup.png'});
await browser.close();
console.log('DONE');
