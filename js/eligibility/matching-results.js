(function(){requireLogin();const p=getProfile(),box=document.getElementById('results');
if(!p){box.innerHTML='<p>Please <a href="checker.html">complete your profile</a> first.</p>';return}
const rows=allInternships().filter(i=>!isExpired(i)).map(i=>({i,r:checkEligibility(p,i)})).sort((a,b)=>b.r.score-a.r.score);
box.innerHTML=rows.map(({i,r})=>`<div class="card"><div class="row"><h3><a href="${BASE}pages/internships/details.html?id=${i.id}">${esc(i.title)}</a></h3>${badge(i)}</div><p class="muted">${esc(companyOf(i.companyId).name)}</p>${eligibilityHTML(r)}</div>`).join('')})();
