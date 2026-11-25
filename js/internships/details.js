(function(){const i=findInternship(qs('id')),box=document.getElementById('detail');
if(!i){box.innerHTML='<p>Internship not found.</p>';return}
if(i.practice){box.innerHTML=`<div class="row"><h1>${esc(i.title)}</h1>${badge(i)}</div><p class="muted">${esc(i.companyName)} · ${esc(domainName(i.domain))}</p>
<div class="grid2"><section class="card"><h3>Internship overview</h3><p>${esc(i.description)}</p><ul>
<li>Duration: ${i.months} months</li><li>Status: ${i.type==='paid'?'Paid':'Unpaid'}</li><li>Stipend: ${esc(i.stipend)}</li><li>Work mode: ${esc(modeName(i.mode))}</li>
<li>Eligibility: ${esc(eligibilitySummary(i))}</li><li>Required skills: ${esc(i.skills.join(', '))}</li>
<li>Application deadline: ${esc(i.applicationDeadline)}</li></ul></section>
<section class="card"><h3>Practice application</h3><p>${esc(i.applicationMethod)}</p><p class="muted">${esc(i.sourceInformation)}</p>
<a class="btn" href="${BASE}pages/applications/apply.html?id=${encodeURIComponent(i.id)}">Start practice application</a></section></div>
<a class="btn ghost" href="${BASE}pages/internships/all.html">Back to internship catalogue</a><div id="elig"></div>`;
const p=session()&&getProfile();if(p)document.getElementById('elig').innerHTML=eligibilityHTML(checkEligibility(p,i));return}
const c=companyOf(i.companyId),v=computeStatus(i),src=allSources().find(s=>s.id==i.sourceId);
box.innerHTML=`<div class="row"><h1>${esc(i.title)}</h1>${badge(i)}</div><p class="muted">${esc(c.name)} · ${esc(c.location)} · ${esc(c.site)}</p>
<div class="grid2"><section class="card"><h3>Overview</h3><p>${esc(i.description)}</p><ul><li>Domain: ${esc(domainName(i.domain))}</li><li>Type: ${esc(i.type)} (${esc(i.stipend)})</li><li>Mode: ${esc(modeName(i.mode))}</li><li>Duration: ${i.months} months</li><li>Years: ${i.years.join(', ')}</li><li>Departments / courses: ${esc(i.departments.join(', '))}</li><li>Eligible degrees: ${esc((i.degrees||['ANY']).join(', '))}</li><li>Skills: ${esc(i.skills.join(', '))}</li><li>Deadline: ${esc(i.deadline)}</li></ul></section>
<section class="card"><h3>Verification</h3><p>Source: ${esc(src?src.name:'Unknown')}</p><ul class="checks">${v.checks.map(c=>`<li class="${c.ok?'ok':'bad'}">${c.ok?'✔':'✖'} ${esc(c.label)}</li>`).join('')}</ul></section></div>
${v.status==='Verified'?`<div class="actions"><button class="btn" id="save">${session()&&isSaved(i.id)?'★ Saved':'☆ Save'}</button>
<a class="btn" id="apply" href="${i.applyMode==='internal'?BASE+'pages/applications/apply.html?id='+i.id:esc(i.applyUrl)}" ${i.applyMode==='internal'?'':'target="_blank" rel="noopener"'}>${i.applyMode==='internal'?'Apply via InternPath':'Apply on official portal ↗'}</a>
<a class="btn ghost" href="${BASE}pages/eligibility/checker.html">Check my eligibility</a></div>`:`<p class="bad">Applying is disabled until the company, source, application link, and listing are verified.</p>`}<div id="elig"></div>`;
if(v.status==='Verified')document.getElementById('save').onclick=e=>{if(!session())return requireLogin();toggleSave(i.id);e.target.textContent=isSaved(i.id)?'★ Saved':'☆ Save'};
if(v.status==='Verified'&&i.applyMode==='external')document.getElementById('apply').addEventListener('click',()=>{if(session()&&!trackerFind(i.id))trackerAdd(i.id,'Applied (external)').catch(error=>toast('Could not update your application tracker: '+error.message))});
const p=session()&&getProfile();if(p)document.getElementById('elig').innerHTML=eligibilityHTML(checkEligibility(p,i))})();
