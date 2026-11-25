(function(){const d=document.getElementById('doms');if(!d)return;const hp=BASE+'pages/domains/';
d.innerHTML=DOMAINS.map(x=>`<a class="card domain" href="${hp}${x.slug}.html"><span class="d-ico">${x.icon||'📁'}</span><span>${esc(x.name)}</span></a>`).join('');
document.getElementById('latest').innerHTML=allInternships().filter(i=>computeStatus(i).status==='Verified').slice(0,3).map(renderCard).join('')||'<p class="muted">No verified internships yet.</p>'})();
