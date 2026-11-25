(function(){const box=document.getElementById('road'),slug=box.dataset.slug||'';
if(!slug){box.classList.add('roadmap-grid');box.innerHTML=ROADMAPS.map(r=>{const total=roadmapSkills(r).length,done=doneSteps(r.slug).filter(n=>n<total).length,percent=roadmapPercent(r);
return `<article class="card roadmap-tile"><p class="roadmap-eyebrow">${r.stages.length} learning stages</p><h2>${esc(r.title)}</h2><p>${esc(r.summary)}</p><div class="bar" role="progressbar" aria-label="${esc(r.title)} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><i style="width:${percent}%"></i></div><p class="roadmap-count">${done} completed · ${total-done} remaining</p><a class="btn" href="${r.slug}.html">Open roadmap <span aria-hidden="true">→</span></a></article>`}).join('');return}
const r=ROADMAPS.find(x=>x.slug===slug);if(!r){box.innerHTML='<p class="bad">Roadmap not found.</p>';return}
function draw(){const skills=roadmapSkills(r),done=doneSteps(slug).filter(n=>n<skills.length),percent=roadmapPercent(r);let offset=0;
const stages=r.stages.map(s=>{const rows=s.skills.map(item=>({item,index:offset++}));return {title:s.title,rows}});
box.innerHTML=`<header class="roadmap-hero"><p class="roadmap-eyebrow">LEARNING ROADMAP</p><h1>${esc(r.title)}</h1><p>${esc(r.summary)}</p><a class="btn ghost" href="index.html">All roadmaps</a></header>
<section class="roadmap-progress-panel" aria-label="Roadmap progress"><div class="roadmap-progress-head"><div><p class="roadmap-eyebrow">YOUR PROGRESS</p><strong>${percent}%</strong></div><p>${done.length} completed · ${skills.length-done.length} remaining skills</p></div><div class="bar" role="progressbar" aria-label="Overall roadmap progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}"><i style="width:${percent}%"></i></div></section>
${stages.map((s,stageIndex)=>`<section class="roadmap-stage"><div class="roadmap-stage-heading"><span>Stage ${stageIndex+1}</span><h2>${esc(s.title)}</h2></div>
${s.rows.map(({item,index})=>`<article class="card roadmap-skill"><div class="roadmap-skill-heading"><div><p class="roadmap-eyebrow">SKILL ${index+1}</p><h3>${esc(item.name)}</h3></div><span class="roadmap-level">${esc(item.level)}</span></div>
<label class="roadmap-complete"><input type="checkbox" data-step="${index}" ${done.includes(index)?'checked':''}> <span>Mark this skill complete</span></label>
<p>${esc(item.learn)}</p><p class="roadmap-meta"><strong>Estimated time:</strong> ${esc(item.duration)}</p>
<h4>Topics in order</h4><ol class="roadmap-topics">${item.topics.map(topic=>`<li>${esc(topic)}</li>`).join('')}</ol>
<h4>Learning resources</h4><ul class="roadmap-resources">${item.resources.map(resource=>`<li><a href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">${esc(resource.name)} <span aria-hidden="true">↗</span></a><span class="resource-access">${esc(resource.access)}</span></li>`).join('')}</ul>
<h4>Practice exercises</h4><p>${esc(item.practice)}</p><h4>Mini project</h4><p>${esc(item.miniProject)}</p></article>`).join('')}</section>`).join('')}
<section class="roadmap-project card"><p class="roadmap-eyebrow">FINAL PROJECT</p><h2>${esc(r.project.title)}</h2><p>${esc(r.project.brief)}</p><h3>Suggested deliverables</h3><ul>${r.project.deliverables.map(item=>`<li>${esc(item)}</li>`).join('')}</ul></section>`;
box.querySelectorAll('input[data-step]').forEach(check=>check.onchange=()=>{const result=toggleStep(slug,+check.dataset.step);draw();result.catch(error=>{toast('Could not save roadmap progress: '+error.message);draw()})})}
draw()})();
