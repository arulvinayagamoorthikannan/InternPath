(function(){const $=id=>document.getElementById(id);
$('f-domain').innerHTML='<option value="">All domains</option>'+DOMAINS.map(d=>`<option value="${d.slug}">${d.name}</option>`).join('');
const preset=document.body.dataset.preset;if(preset){const [k,v]=preset.split('=');$('f-'+k).value=v}
function run(){const f={domain:$('f-domain').value,type:$('f-type').value,mode:$('f-mode').value,year:$('f-year').value,duration:$('f-duration').value,
verified:!!document.getElementById('f-verified')&&document.getElementById('f-verified').checked,
expired:!!document.getElementById('f-expired')&&document.getElementById('f-expired').checked};
const out=searchList(filterList(catalogueInternships(),f),$('q').value);$('count').textContent=out.length+' internship(s) found';
$('grid').innerHTML=out.map(renderCard).join('')||'<p>No internships match these filters.</p>'}
document.querySelectorAll('.filters input,.filters select').forEach(e=>e.addEventListener('input',run));run()})();
