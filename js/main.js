const BASE=document.body.dataset.base||'';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const qs=n=>new URLSearchParams(location.search).get(n);
const session=()=>DB.user;
const adminSession=()=>DB.isAdmin;
const allInternships=()=>DB.c.internships;
const findInternship=id=>allInternships().find(i=>String(i.id)===String(id))||PRACTICE_INTERNSHIPS.find(i=>i.id===String(id));
const catalogueInternships=()=>DOMAINS.flatMap(d=>{
const verified=DB.c.internships.filter(i=>i.domain===d.slug&&computeStatus(i).status==='Verified').slice(0,5);
const practice=PRACTICE_INTERNSHIPS.filter(i=>i.domain===d.slug).slice(0,Math.max(0,5-verified.length));
return [...verified,...practice]});
const allSources=()=>DB.c.sources;
const companyOf=id=>DB.c.companies.find(c=>c.id==id)||{name:'Unknown',site:'#',location:''};
const domainName=s=>(DB.c.domains.find(d=>d.slug===s)||{name:s}).name;
const csv=s=>String(s||'').split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);
const modeName=m=>({remote:'Remote',hybrid:'Hybrid',onsite:'On-site'}[m]||m);
const eligibilitySummary=i=>i.eligibility||`Open to year ${i.years.join(', ')} students in ${i.departments.join(', ')}; eligible degrees: ${(i.degrees||['ANY']).join(', ')}.`;
function requireLogin(){if(!session()){location.href=BASE+'pages/account/login.html?next='+encodeURIComponent(location.href);throw 0}}
function requireAdmin(){if(!adminSession()){location.href=BASE+'pages/admin/dashboard.html?login=1';throw 0}}
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2500)}
function renderNav(){const nav=document.getElementById('nav');if(!nav)return;const s=session(),p=BASE+'pages/';
nav.innerHTML=`<nav class="navbar"><a class="brand" href="${BASE}index.html">Intern<span>Path</span></a><button id="burger" aria-label="Menu">☰</button><div class="links" id="links"><a href="${p}internships/all.html">Internships</a><a href="${p}eligibility/checker.html">Eligibility</a><a href="${p}roadmaps/index.html">Roadmaps</a><a href="${p}verification/trusted-sources.html">Trusted Sources</a>${s?`<a href="${p}student/dashboard.html">Dashboard</a><a href="#" id="logout">Logout (${esc(s.name.split(' ')[0])})</a>`:`<a href="${p}account/login.html">Login</a><a class="btn" href="${p}account/register.html">Sign up</a>`}<a href="${p}admin/dashboard.html" class="muted">Admin</a></div></nav>`;
document.getElementById('burger').onclick=()=>document.getElementById('links').classList.toggle('open');
const lo=document.getElementById('logout');if(lo)lo.onclick=e=>{e.preventDefault();DB.sb.auth.signOut().then(()=>location.href=BASE+'index.html')}}
function renderFooter(){const footer=document.getElementById('footer');if(footer)footer.innerHTML='<footer>© InternPath — Discover Opportunities. Verify Sources. Build Skills. Shape Your Career.<br><small>Eligibility results are guidance only and do not guarantee selection.</small></footer>'}
function badge(i){if(i.practice)return '<span class="badge warn">Practice listing</span>';const v=computeStatus(i);const c={Verified:'ok','Partially Verified':'warn',Expired:'bad',Unverified:'bad'}[v.status];return `<span class="badge ${c}">${v.status}</span>`}
function renderCard(i){const c=i.practice?{name:i.companyName}:companyOf(i.companyId);return `<article class="card"><div class="row"><h3>${esc(i.title)}</h3>${badge(i)}</div><p class="muted">${esc(c.name)} · ${esc(domainName(i.domain))}</p><p><span class="tag">${i.practice?'Practice':esc(i.type==='paid'?'Paid':'Unpaid')}</span> <span class="tag">${esc(modeName(i.mode))}</span> <span class="tag">${i.months} months</span></p><p><strong>Stipend:</strong> ${esc(i.stipend||'Not specified')}</p><p>${esc(i.description||'')}</p><p><strong>Eligibility:</strong> ${esc(eligibilitySummary(i))}</p><p class="muted"><strong>Application deadline:</strong> ${esc(i.practice?i.applicationDeadline:i.deadline)}</p><a class="btn" href="${BASE}pages/internships/details.html?id=${encodeURIComponent(i.id)}">View details</a></article>`}
renderNav();renderFooter();
