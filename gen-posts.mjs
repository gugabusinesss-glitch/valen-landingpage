import { chromium } from 'playwright';
import fs from 'fs';
const lamInk='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-ink.png').toString('base64');
const lamCream='data:image/png;base64,'+fs.readFileSync('public/brand/lambda-cream.png').toString('base64');

const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;font-family:'Geist',sans-serif;padding:78px 74px;display:flex;flex-direction:column}
.light{background:#f3efe5;color:#15201c}.dark{background:#080b0a;color:#ece7dc}
.grid{position:absolute;inset:0;background-image:linear-gradient(var(--g) 1px,transparent 1px),linear-gradient(90deg,var(--g) 1px,transparent 1px);background-size:74px 74px;-webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 42%,#000 12%,transparent 78%)}
.light .grid{--g:#d6cfbf;opacity:.5}.dark .grid{--g:#23302c;opacity:.5}
.wm{position:absolute;right:-80px;bottom:-60px;width:520px;opacity:.045}
header{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between}
.brand{display:flex;align-items:center;gap:13px}.brand img{height:35px}.brand .dv{width:1px;height:27px}
.light .dv{background:#cdc6b6}.dark .dv{background:#2a3a35}.brand .wn{font-size:22px;font-weight:600;letter-spacing:.32em}
.count{font-family:'Geist Mono',monospace;font-size:15px;letter-spacing:.15em}.light .count{color:#9a9384}.dark .count{color:#5e6b64}
main{position:relative;z-index:3;flex:1;display:flex;flex-direction:column;justify-content:center}
em{font-family:'Playfair Display',serif;font-style:italic;font-weight:600}.light em{color:#157065}.dark em{color:#3bb7a6}
b{font-weight:700}.light b{color:#157065}.dark b{color:#3bb7a6}
footer{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;font-size:19px}
.light footer{color:#8a857a}.dark footer{color:#8a958e}.fl{font-weight:600;opacity:.8}.fr{font-weight:700}.light .fr{color:#15201c}.dark .fr{color:#ece7dc}
.kick{font-family:'Geist Mono',monospace;font-size:18px;letter-spacing:.18em;text-transform:uppercase;color:#1b7a6f;margin-bottom:24px;display:flex;align-items:center;gap:11px}.dark .kick{color:#3bb7a6}.kick .dot{width:9px;height:9px;border-radius:50%;background:currentColor;box-shadow:0 0 14px currentColor}
.chook{font-size:88px;font-weight:800;line-height:1.03;letter-spacing:-.02em}
.csub{font-size:30px;font-weight:500;margin-top:24px;max-width:760px}.light .csub{color:#5d655e}.dark .csub{color:#93a09a}
.body{font-size:66px;font-weight:600;line-height:1.12;letter-spacing:-.01em;max-width:880px}
.src{font-family:'Geist Mono',monospace;font-size:18px;letter-spacing:.03em;margin-top:30px;display:inline-flex;align-items:center;gap:9px;color:#1b7a6f}.dark .src{color:#3bb7a6}.src::before{content:'↳'}
.bignum{font-size:330px;font-weight:900;line-height:.84;letter-spacing:-.04em;background:linear-gradient(180deg,#3bb7a6,#15625b);-webkit-background-clip:text;background-clip:text;color:transparent}
.statsub{font-size:44px;font-weight:500;line-height:1.18;margin-top:18px;max-width:800px}.dark .statsub{color:#c7cdc7}.light .statsub{color:#3f4a45}
.ctapill{display:inline-flex;align-items:center;gap:12px;background:#1c7268;color:#f6f3ea;font-weight:700;font-size:30px;padding:22px 38px;border-radius:999px;margin-top:38px}
/* whatsapp */
.wtitle{font-size:54px;font-weight:700;line-height:1.08;margin-bottom:24px;max-width:840px}.wstage{flex:1;display:flex;align-items:center;justify-content:center}
.wphone{width:540px;height:700px;border-radius:42px;background:#0b141a;border:10px solid #11201c;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.22)}
.wbar{background:#1f2c33;color:#e9edef;display:flex;align-items:center;gap:11px;padding:24px 20px 16px}.wav{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#2a8c81,#3bb7a6);display:flex;align-items:center;justify-content:center}.wav img{height:22px}
.wbar .nm{font-weight:700;font-size:20px}.wbar .on{font-size:14px;color:#8fb3a9}.wbody{background:#0b141a;padding:20px 18px;display:flex;flex-direction:column;gap:12px}
.bub{max-width:80%;padding:14px 16px;border-radius:15px;font-size:19px;line-height:1.3}.inc{align-self:flex-start;background:#202c33;color:#e9edef;border-top-left-radius:4px}.out{align-self:flex-end;background:#005c4b;color:#e9edef;border-top-right-radius:4px}
.tme{font-size:12px;opacity:.6;margin-top:5px;text-align:right}.sysn{align-self:center;background:#182229;color:#9fd0c4;font-size:14px;padding:7px 14px;border-radius:9px}
/* receipt */
.receipt{background:#0e1614;border:1px solid #1e2a26;border-radius:22px;padding:38px 42px;max-width:780px}.light .receipt{background:#fbf9f3;border-color:#e4ddcd}
.rrow{display:flex;justify-content:space-between;align-items:baseline;font-size:30px;padding:18px 0}.dark .rrow .lab{color:#93a09a}.light .rrow .lab{color:#5d655e}.rrow strong{font-weight:700}.dark .rrow strong{color:#ece7dc}.light .rrow strong{color:#15201c}
.rdiv{height:1px;margin:10px 0}.dark .rdiv{background:#1e2a26}.light .rdiv{background:#e4ddcd}
.rtot{display:flex;justify-content:space-between;align-items:baseline;margin-top:10px}.rtot .lab{font-size:24px;text-transform:uppercase;letter-spacing:.08em;color:#93a09a}.light .rtot .lab{color:#5d655e}.rtot .val{font-size:72px;font-weight:900;background:linear-gradient(180deg,#3bb7a6,#15625b);-webkit-background-clip:text;background-clip:text;color:transparent}
.exlbl{font-family:'Geist Mono',monospace;font-size:17px;margin-top:18px;color:#8a958e}.light .exlbl{color:#9a9384}
/* def cards */
.dtitle{font-size:60px;font-weight:800;line-height:1.05;margin-bottom:26px;letter-spacing:-.01em}
.cards{display:flex;flex-direction:column;gap:16px}
.def{padding:30px 32px;border-radius:22px;border:1px solid}.dark .def{background:#0f1614;border-color:#1e2a26}.light .def{background:#fbf9f3;border-color:#e4ddcd}
.def .dico{width:48px;height:48px;border-radius:13px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:14px}.dark .def .dico{background:#123f39;color:#3bb7a6}.light .def .dico{background:#e3efe9;color:#157065}
.def h3{font-size:33px;font-weight:700;margin-bottom:8px}.def p{font-size:23px;line-height:1.33}.dark .def p{color:#93a09a}.light .def p{color:#5d655e}.def .ex{font-style:italic;opacity:.85}
`;

const head=(t,c)=>`<header><div class="brand"><img src="${t==='dark'?lamCream:lamInk}"><div class="dv"></div><span class="wn">VALEN</span></div><span class="count">${c}</span></header>`;
const foot=(t,r)=>`<footer><span class="fl">@valen</span><span class="fr">${r}</span></footer>`;

function render(post,i){
 const s=post.slides[i];const t=s.theme;
 const c=`${String(i+1).padStart(2,'0')} / ${String(post.slides.length).padStart(2,'0')}`;
 const last=i===post.slides.length-1;
 const fr=last?(post.foot||'link na bio'):'arraste →';
 let m='';
 if(s.type==='cover') m=`<div class="kick"><span class="dot"></span>${s.kick}</div><h1 class="chook">${s.hook}</h1>${s.sub?`<p class="csub">${s.sub}</p>`:''}`;
 if(s.type==='body') m=`<p class="body">${s.text}</p>`;
 if(s.type==='stat') m=`<div class="bignum">${s.big}</div><p class="statsub">${s.sub}</p>${s.src?`<div class="src">${s.src}</div>`:''}`;
 if(s.type==='cta') m=`<p class="body">${s.text}</p><div><span class="ctapill">${s.cta} →</span></div>`;
 if(s.type==='whatsapp') m=`<h2 class="wtitle">${s.title}</h2><div class="wstage"><div class="wphone"><div class="wbar"><div class="wav"><img src="${lamCream}"></div><div><div class="nm">Paciente · Lead novo</div><div class="on">online agora</div></div></div><div class="wbody"><div class="sysn">Hoje, 23:14</div><div class="bub inc">Oi, vcs atendem harmonização? 😊</div><div class="bub out">Oi! Atendemos sim. Posso já ver um horário pra sua avaliação?<div class="tme">23:14 ✓✓</div></div><div class="bub inc">Pode!</div><div class="bub out">Agendei quinta, 15h. Confirmo no dia 👋<div class="tme">23:15 ✓✓</div></div><div class="sysn">✓ Agendado em 47 segundos</div></div></div></div>`;
 if(s.type==='receipt') m=`<h2 class="dtitle">Quanto custa um paciente que <em>some?</em></h2><div class="receipt"><div class="rrow"><span class="lab">1 paciente que não volta</span><strong>R$ 1.200</strong></div><div class="rrow"><span class="lab">Some por mês (média)</span><strong>× 8</strong></div><div class="rdiv"></div><div class="rtot"><span class="lab">Por ano, no ralo</span><span class="val">R$ 115 mil</span></div></div><div class="exlbl">* exemplo ilustrativo — faça a conta com os seus números</div>`;
 if(s.type==='defpair'){const card=(x)=>`<div class="def"><div class="dico">${x.ic||'◆'}</div><h3>${x.t}</h3><p>${x.d}${x.ex?` <span class="ex">${x.ex}</span>`:''}</p></div>`;
   m=`<h2 class="dtitle">${s.title}</h2><div class="cards">${card(s.a)}${card(s.b)}</div>`;}
 return `<div class="slide ${t}"><div class="grid"></div><img class="wm" src="${t==='dark'?lamCream:lamInk}">${head(t,c)}<main>${m}</main>${foot(t,fr)}</div>`;
}

const posts=[
 {id:'wa',foot:'Diagnóstico no link',slides:[
  {type:'cover',theme:'light',kick:'Bastidores do agente',hook:'O paciente te chamou às <em>23h.</em> Quem respondeu?'},
  {type:'stat',theme:'dark',big:'21x',sub:'mais chance de fechar o lead quando a resposta sai em até 5 minutos.',src:'Fonte: Harvard Business Review'},
  {type:'body',theme:'dark',text:'Só que <b>93%</b> das empresas demoram mais que isso. O lead não espera: vai pro concorrente.'},
  {type:'whatsapp',theme:'light',title:'Enquanto você dorme, a <em>Valen agenda.</em>'},
  {type:'body',theme:'light',text:'O agente atende, qualifica e agenda <b>24 horas por dia</b>. Sem secretária de plantão, sem lead perdido.'},
  {type:'cta',theme:'light',text:'Quer um agente desses atendendo a sua clínica?',cta:'Diagnóstico no link'},
 ]},
 {id:'roi',foot:'Descubra no diagnóstico',slides:[
  {type:'cover',theme:'dark',kick:'A conta que ninguém faz',hook:'A conta que nenhuma clínica <em>quer fazer.</em>'},
  {type:'body',theme:'dark',text:'Um paciente que some não te avisa. Ele só <em>não volta.</em>'},
  {type:'receipt',theme:'dark'},
  {type:'body',theme:'light',text:'Não é falta de paciente novo. É falta de <b>follow-up</b> nos que você já tem.'},
  {type:'body',theme:'light',text:'O agente da Valen chama cada um no prazo certo. <em>Todo dia, sem falhar.</em>'},
  {type:'cta',theme:'light',text:'Quanto a sua clínica deixa no ralo por mês?',cta:'Descubra no diagnóstico'},
 ]},
 {id:'dic',foot:'Agende um diagnóstico',slides:[
  {type:'cover',theme:'light',kick:'O dicionário da clínica',hook:'O dicionário de quem <em>escala</em> clínica.',sub:'Salva esse post pra não esquecer.'},
  {type:'defpair',theme:'dark',title:'Quem chega e por onde passa',a:{ic:'◎',t:'Lead',d:'Quem demonstrou interesse na clínica.',ex:'Ex: pediu orçamento no WhatsApp.'},b:{ic:'⟋',t:'Funil de vendas',d:'As etapas até o paciente fechar.',ex:'Ex: anúncio → conversa → avaliação.'}},
  {type:'defpair',theme:'light',title:'O que organiza o caos',a:{ic:'▦',t:'CRM',d:'O sistema que centraliza leads e pacientes no lugar da planilha.'},b:{ic:'↺',t:'Follow-up',d:'Retomar contato com quem ficou no meio do caminho.'}},
  {type:'defpair',theme:'dark',title:'Os números que importam',a:{ic:'$',t:'CAC',d:'Custo pra trazer um paciente novo.',ex:'Ex: R$800 de anúncio ÷ 8 = R$100 cada.'},b:{ic:'↗',t:'ROI',d:'Quanto volta pra cada real investido.'}},
  {type:'body',theme:'light',text:'Saber os termos é o começo. <em>Implementar</em> é o que muda o jogo.'},
  {type:'cta',theme:'light',text:'A Valen monta tudo isso sob medida pra sua clínica.',cta:'Agende um diagnóstico'},
 ]},
];

const browser=await chromium.launch();
const page=await browser.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:2});
for(const post of posts){
 for(let i=0;i<post.slides.length;i++){
  await page.setContent(`<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${render(post,i)}</body></html>`,{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(200);
  await page.locator('.slide').screenshot({path:`posts/${post.id}-${String(i+1).padStart(2,'0')}.png`});
  console.log('rendered',post.id,i+1);
 }
}
await browser.close();console.log('ALL DONE');
