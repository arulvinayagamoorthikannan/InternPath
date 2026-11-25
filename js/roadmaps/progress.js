const roadmapSkills=r=>r.stages.flatMap(s=>s.skills);
const doneSteps=slug=>{if(!session()){const raw=localStorage.getItem('internpath.roadmap.'+slug);if(raw!==null){const saved=JSON.parse(raw);if(!Array.isArray(saved)||saved.some(n=>!Number.isInteger(n)||n<0))throw new Error('Saved roadmap progress is invalid.');DB.c.progress[slug]=[...new Set(saved)]}}
return DB.c.progress[slug]||[]};
const roadmapPercent=r=>{const total=roadmapSkills(r).length,done=doneSteps(r.slug).filter(n=>n<total).length;return total?Math.round(100*done/total):0};
function toggleStep(slug,n){return DB.toggleStep(slug,n)}
