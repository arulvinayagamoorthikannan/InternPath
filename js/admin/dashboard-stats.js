(function(){const el=document.getElementById('st');if(!el||!DB.isAdmin)return;const l=allInternships();
el.innerHTML=[['Listings',l.length],['Verified',l.filter(i=>computeStatus(i).status==='Verified').length],['Expired',l.filter(isExpired).length],['Applications',apps().length]].map(x=>`<div class="card"><b>${x[1]}</b><br>${x[0]}</div>`).join('')})();
