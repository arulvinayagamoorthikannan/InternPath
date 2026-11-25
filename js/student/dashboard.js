requireLogin();(function(){const p=getProfile(),m=myApps(),el=document.getElementById('dash');
const top=p?allInternships().filter(i=>!isExpired(i)).map(i=>({i,s:checkEligibility(p,i).score})).sort((a,b)=>b.s-a.s).slice(0,3):[];
el.innerHTML=`<div class="stats"><div class="card"><b>${savedIds().length}</b><br>Saved</div><div class="card"><b>${m.length}</b><br>Applications</div><div class="card"><b>${p?'Complete':'Incomplete'}</b><br>Profile</div></div>
<h2>Top matches</h2>${top.length?top.map(t=>`<p><a href="${BASE}pages/internships/details.html?id=${t.i.id}">${esc(t.i.title)}</a> – ${t.s}%</p>`).join(''):'<p><a href="../eligibility/checker.html">Build your profile</a> to get matches.</p>'}
<h2>Roadmap progress</h2><ul>${ROADMAPS.map(r=>`<li>${r.title}: ${roadmapPercent(r)}%</li>`).join('')}</ul><h2>Recent applications</h2><div id="t"></div>`;mountTracker(document.getElementById('t'),m.slice(-5),false)})();
