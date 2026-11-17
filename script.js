'use strict';

const ICONS = {
  'arrow-right':'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  'arrow-up-right':'<path d="M7 17 17 7M8 7h9v9"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'chevron-left':'<path d="m15 18-6-6 6-6"/>',
  'chevron-right':'<path d="m9 18 6-6-6-6"/>',
  'play':'<path d="m8 5 11 7-11 7z"/>',
  'monitor':'<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/>',
  'mobile':'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  'clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  'layers':'<path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/>',
  'archive':'<rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v12h14V8M9 12h6"/>',
  'lock':'<rect x="5" y="11" width="14" height="11" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v3"/>',
  'search':'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
  'chart':'<path d="M4 20V11M10 20V5M16 20v-8M22 20V2"/>',
  'trophy':'<path d="M7 3h10v8a5 5 0 0 1-10 0V3ZM7 5H3v3a4 4 0 0 0 4 4M17 5h4v3a4 4 0 0 1-4 4M12 16v4M7 21h10"/>',
  'document':'<path d="M6 2h9l5 5v15H6V2ZM15 2v5h5M9 12h8M9 16h8"/>',
  'github':'<path d="M9 19c-4 1-4-2-6-2"/><path d="M15 22v-3.5c0-.9.2-1.4.7-1.8 3.5-.3 5.3-2.1 5.3-5.9 0-1.2-.4-2.1-1.1-2.9.3-1 .2-2-.1-3-1-.1-2.1.6-3 1.3A12 12 0 0 0 7 6.2C6.1 5.5 5 4.8 4 4.9c-.3 1-.4 2-.1 3A4.4 4.4 0 0 0 2.8 11c0 3.8 1.8 5.6 5.3 5.9.5.4.7.9.7 1.8V22"/>',
  'check':'<path d="m4 12 5 5L20 6"/>',
  'check-circle':'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
  'download':'<path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/>',
  'database':'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  'package':'<path d="m12 2 9 5-9 5-9-5 9-5ZM3 7v10l9 5 9-5V7M12 12v10M7 4.5l9 5"/>',
  'sparkle':'<path d="m12 2 2.7 6.9L22 12l-7.3 3.1L12 22l-2.7-6.9L2 12l7.3-3.1L12 2Z"/>',
  'calendar':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3"/>',
  'shield':'<path d="M12 2 4 5v6c0 5.4 3 8.7 8 11 5-2.3 8-5.6 8-11V5l-8-3ZM9 12l2 2 4-4"/>',
  'info':'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>',
};
function icon(name, cls=''){
 return `<svg class="${cls}" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]||ICONS.info}</svg>`;
}
function paintIcons(context=document){
 context.querySelectorAll('[data-icon]').forEach(node => {const name=node.getAttribute('data-icon');node.innerHTML=icon(name);node.removeAttribute('data-icon');});
}
function renderChrome(){
 const page = document.body.dataset.page || 'overview';
 const nav=[['overview','Overview','index.html'],['benchmark','Benchmark','benchmark.html'],['videos','More videos',null],['leaderboard','Leaderboard','leaderboard.html']];
 const navHTML=nav.map(([id,title,url])=>url?`<a class="nav-link ${page===id?'active':''}" href="${url}" ${page===id?'aria-current="page"':''}>${title}</a>`:`<a class="nav-link" data-more-videos role="link" aria-disabled="true" tabindex="0" title="External video collection · link pending">${title}</a>`).join('');
 document.getElementById('site-header').innerHTML=`<header class="site-header"><div class="header-inner wrapper"><a class="brand" href="index.html" aria-label="ScreenMem home"><span class="brand-mark" aria-hidden="true"></span><span>ScreenMem</span></a><nav class="nav-links" id="site-nav" aria-label="Main navigation">${navHTML}</nav><div class="nav-actions"><span class="soon-chip" title="Paper is not publicly available yet">${icon('document')} Paper · Soon</span><span class="soon-chip" title="Code has not been released yet">${icon('github')} Code · Soon</span></div><button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open menu" aria-controls="site-nav" aria-expanded="false">${icon('menu')}</button></div></header>`;
 document.getElementById('site-footer').innerHTML=`<footer class="site-footer"><div class="wrapper"><div class="footer-top"><div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark" aria-hidden="true"></span><span>ScreenMem</span></a><p>Benchmarking proactive memory maintenance over long-horizon computer-use streams.</p></div><div class="footer-links"><a href="benchmark.html">Benchmark</a><a data-more-videos role="link" aria-disabled="true" tabindex="0" title="External video collection · link pending">More videos</a><a href="leaderboard.html">Leaderboard</a><span class="muted-link">Paper · Soon</span></div></div><div class="footer-bottom"><span>ScreenMem · Research project</span><span>© 2026 ScreenMem</span></div></div></footer>`;
 const button=document.getElementById('menu-toggle');
 button.addEventListener('click',()=>{const header=document.querySelector('.site-header');const opened=header.classList.toggle('menu-open');button.setAttribute('aria-expanded', String(opened));button.setAttribute('aria-label',opened?'Close menu':'Open menu');});
 document.querySelectorAll('.nav-link').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.site-header')?.classList.remove('menu-open');}));
}
const SYSTEMS=[
 ['SimpleStream','Recent-context memory',3.2,1.7,2.7],
 ['InfiniPot-V','Implicit visual memory',3.8,4.1,3.9],
 ['StreamForest','Implicit visual memory',7.1,2.9,5.6],
 ['ReKV','Implicit visual memory',3.5,4.7,3.9],
 ['HERMES','Implicit visual memory',2.6,4.1,3.1],
 ['FluxMem','Implicit visual memory',3.8,0.0,2.5],
 ['MIRIX','Explicit multimodal memory',21.5,9.9,17.4],
 ['M3-Agent','Explicit multimodal memory',25.0,18.6,22.7],
 ['WorldMM','Explicit multimodal memory',7.4,15.1,10.1],
 ['EventMemAgent','Explicit multimodal memory',2.2,5.8,3.5],
 ['OASIS','Explicit multimodal memory',15.7,21.5,17.8],
 ['A-MEM','Generic text memory',21.8,12.2,18.4],
 ['Mem0','Generic text memory',27.6,19.8,24.8],
 ['MemOS','Generic text memory',29.2,35.5,31.4],
 ['EverMemOS','Generic text memory',29.2,14.0,23.8],
];
const RETRIEVAL=[['Caption-RAG','Retrieval-only baselines',30.1,22.7,27.5],['OCR-RAG','Retrieval-only baselines',24.7,16.9,21.9]];
function initLeaderboard(){
 const table=document.getElementById('leaderboard-body');if(!table)return;
 const search=document.getElementById('lb-search'),type=document.getElementById('lb-type'),count=document.getElementById('lb-count'),check=document.getElementById('lb-baselines');
 let sort='overall';
 const idx={pc:2,mobile:3,overall:4};
 function render(){
  const full=[...SYSTEMS,...(check?.checked?RETRIEVAL:[])];
  const filtered=full.filter(x=>x[0].toLowerCase().includes(search.value.trim().toLowerCase())&&(type.value==='all'||x[1]===type.value));
  filtered.sort((a,b)=>(b[idx[sort]]-a[idx[sort]])||a[0].localeCompare(b[0]));
  table.innerHTML=filtered.map((x,i)=>`<tr class="${x[0]==='MemOS'?'best-row':''}"><td class="rank">${String(i+1).padStart(2,'0')}</td><td><span class="system-name">${x[0]}</span>${x[0]==='MemOS'?'<span class="tiny-badge">BEST</span>':''}</td><td class="type-cell">${x[1]}</td><td class="${sort==='pc'?'focus-col':''}">${x[2].toFixed(1)}%</td><td class="${sort==='mobile'?'focus-col':''}">${x[3].toFixed(1)}%</td><td class="score-col ${sort==='overall'?'focus-col':''}">${x[4].toFixed(1)}%</td></tr>`).join('');
  if(!filtered.length)table.innerHTML='<tr><td class="lb-empty" colspan="6">No matching methods. Try a different search or category.</td></tr>';
  count.textContent=`Showing ${filtered.length} of ${full.length} methods`;
  document.querySelectorAll('.lb-switch').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.sort===sort)));
  ['pc','mobile','overall'].forEach(s=>{const th=document.querySelector(`[data-th="${s}"]`);if(th)th.setAttribute('aria-sort',sort===s?'descending':'none');});
 }
 search.addEventListener('input',render);type.addEventListener('change',render);check?.addEventListener('change',render);
 document.querySelectorAll('.lb-switch').forEach(b=>b.addEventListener('click',()=>{sort=b.dataset.sort;render();}));
 document.getElementById('lb-download').addEventListener('click',()=>{
  const rows=[['Method','Category','PC (%)','Mobile (%)','Overall (%)'],...SYSTEMS.map(([n,t,p,m,o])=>[n,t,p.toFixed(1),m.toFixed(1),o.toFixed(1)])];
  const csv=rows.map(row=>row.map(v=>`"${String(v).replaceAll('"','""')}"`).join(',')).join('\r\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='screenmem-memory-system-results.csv';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
 });
 render();
}
function initConstructionWalkthrough() {
 const walkthrough = document.querySelector('[data-construction-walkthrough]');
 if (!walkthrough) return;

 const controls = walkthrough.querySelector('[data-construction-controls]');
 const toggle = walkthrough.querySelector('[data-construction-toggle]');
 const steps = Array.from(controls.querySelectorAll('[data-duration]'), button => {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  return {
   button,
   panel,
   duration: Number(button.dataset.duration),
   activities: Array.from(panel.querySelectorAll('[data-activity]')),
   videos: Array.from(panel.querySelectorAll('video')),
   progress: panel.querySelector('[data-construction-progress]'),
  };
 });
 const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
 const hasObserver = 'IntersectionObserver' in window;
 let enabled = !reducedMotion.matches;
 let inView = !hasObserver;
 let index = 0;
 let elapsed = 0;
 let previousFrame = null;
 let frameId = null;

 const canAdvance = () => enabled && inView && !document.hidden;

 function updateMotion() {
  const { duration, activities, progress } = steps[index];
  const fraction = Math.min(1, elapsed / duration);
  const active = Math.min(activities.length - 1, Math.floor(fraction * activities.length));
  activities.forEach((activity, i) => activity.classList.toggle('is-active', i === active));
  if (progress) progress.style.setProperty('--progress', fraction);
 }

 function playFootage() {
  steps[index].videos.forEach(video => { video.play().catch(() => {}); });
 }

 function selectStep(next) {
  const previous = steps[index];
  previous.videos.forEach(video => video.pause());
  previous.panel.hidden = true;
  previous.button.removeAttribute('aria-current');

  index = next;
  elapsed = 0;
  previousFrame = null;
  const selected = steps[index];
  selected.panel.hidden = false;
  selected.button.setAttribute('aria-current', 'step');
  selected.videos.forEach(video => { video.currentTime = 0; });
  updateMotion();
  if (canAdvance()) playFootage();
 }

 function tick(now) {
  if (previousFrame !== null) elapsed += now - previousFrame;
  previousFrame = now;
  if (elapsed >= steps[index].duration) selectStep((index + 1) % steps.length);
  else updateMotion();
  frameId = requestAnimationFrame(tick);
 }

 function updatePlayback() {
  toggle.textContent = enabled ? 'Pause' : 'Play';
  toggle.setAttribute('aria-label', enabled ? 'Pause walkthrough' : 'Play walkthrough');
  if (canAdvance()) {
   if (frameId !== null) return;
   frameId = requestAnimationFrame(tick);
   playFootage();
  } else {
   if (frameId !== null) cancelAnimationFrame(frameId);
   frameId = null;
   previousFrame = null;
   steps[index].videos.forEach(video => video.pause());
  }
 }

 steps.forEach(({ button }, next) => button.addEventListener('click', () => selectStep(next)));
 toggle.addEventListener('click', () => {
  enabled = !enabled;
  updatePlayback();
 });
 document.addEventListener('visibilitychange', updatePlayback);
 reducedMotion.addEventListener('change', () => {
  enabled = !reducedMotion.matches;
  updatePlayback();
 });
 if (hasObserver) {
  const observer = new IntersectionObserver(([entry]) => {
   inView = entry.isIntersecting;
   updatePlayback();
  }, { threshold: 0.1 });
  observer.observe(walkthrough.querySelector('.construction-panels'));
 }
 controls.hidden = false;
 updateMotion();
 updatePlayback();
}

function initExampleMedia(){
 const config=window.SCREENMEM_MEDIA;
 if(!config)return;
 const videos=[];
 const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const visibilityObserver='IntersectionObserver' in window?new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   const video=entry.target;
   if(entry.isIntersecting&&!document.hidden&&!reducedMotion.matches)video.play().catch(()=>{video.controls=true;});
   else video.pause();
  });
 },{threshold:0.1}):null;
 document.querySelectorAll('[data-media-slot]').forEach(slot=>{
  const item=config[slot.dataset.mediaSlot];
  if(!item?.src)return;
  const pending=slot.querySelector('[data-media-pending]');
  const isImage=item.type==='image';
  const media=document.createElement(isImage?'img':'video');
  media.className='example-media';
  media.setAttribute('aria-label',item.label||'ScreenMem example');
  const show=()=>{pending.hidden=true;slot.classList.add('has-media');};
  media.addEventListener('error',()=>{
   slot.classList.remove('has-media');
   pending.hidden=false;
   pending.querySelector('h3, h4').textContent='Media unavailable';
   pending.querySelector('p').textContent='Please try again later.';
   pending.querySelector('.media-format')?.remove();
  });
  if(isImage){
   media.alt=item.label||'ScreenMem interaction example';
   media.addEventListener('load',show,{once:true});
  }else{
   media.autoplay=!reducedMotion.matches;
   media.muted=true;
   media.defaultMuted=true;
   media.loop=true;
   media.playsInline=true;
   media.preload='metadata';
   media.controls=reducedMotion.matches;
   media.setAttribute('muted','');
   media.setAttribute('playsinline','');
   if(item.poster)media.poster=item.poster;
   media.addEventListener('loadeddata',show,{once:true});
   videos.push(media);
  }
  slot.appendChild(media);
  media.src=item.src;
  if(!isImage)visibilityObserver?.observe(media);
 });
 document.addEventListener('visibilitychange',()=>{
  videos.forEach(video=>{
   if(document.hidden)video.pause();
   else if(!reducedMotion.matches){
    const r=video.getBoundingClientRect();
    if(r.bottom>0&&r.top<window.innerHeight)video.play().catch(()=>{video.controls=true;});
   }
  });
 });
 if(config.moreVideosUrl){
  try{
   const url=new URL(config.moreVideosUrl);
   if(!['https:','http:'].includes(url.protocol))return;
   document.querySelectorAll('[data-more-videos]').forEach(link=>{
    link.href=url.href;
    link.target='_blank';
    link.rel='noopener noreferrer';
    link.removeAttribute('aria-disabled');
    link.removeAttribute('aria-label');
    link.title='Explore the video collection';
   });
  }catch{/* Leave the placeholder links disabled until a valid URL is supplied. */}
 }
}
function renderHomeMiniBars(){
 document.querySelectorAll('[data-bar]').forEach(n=>{const v=parseFloat(n.dataset.bar);n.style.width=`${Math.max(1,Math.min(v/35*100,100))}%`;});
}
renderChrome();paintIcons();renderHomeMiniBars();initLeaderboard();initExampleMedia();initConstructionWalkthrough();
