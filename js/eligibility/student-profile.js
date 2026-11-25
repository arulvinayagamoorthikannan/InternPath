const getProfile=()=>DB.c.profile;
const saveProfile=p=>DB.saveProfile(p);
function profileFormHTML(){const p=getProfile()||{},u=DB.user||{},year=+(p.year||u.year||1),department=p.department||u.department||'';return `${u.collegeName?`<p class="muted">College: ${esc(u.collegeName)}. Complete your degree, skills, and availability to continue.</p>`:''}<form id="pf" class="form"><label>Academic year<select name="year"><option ${year===1?'selected':''}>1</option><option ${year===2?'selected':''}>2</option><option ${year===3?'selected':''}>3</option><option ${year===4?'selected':''}>4</option></select></label>
<label>Degree<input name="degree" value="${esc(p.degree||'')}" placeholder="B.E / B.Tech / BBA…" required></label><label>Department<input name="department" value="${esc(department)}" placeholder="CSE, ECE, MECH…" required></label>
<label>Skills (comma separated)<input name="skills" placeholder="html, css, python" required></label><label>Availability (months)<input name="months" type="number" min="1" max="12" value="3" required></label>
<label>Preferred mode<select name="mode"><option value="">Any</option><option>remote</option><option>onsite</option><option>hybrid</option></select></label><button class="btn">Save profile</button></form>`}
function bindProfileForm(el,after){el.innerHTML=profileFormHTML();const f=el.querySelector('form'),p=getProfile();
if(p){f.year.value=p.year;f.degree.value=p.degree;f.department.value=p.department;f.skills.value=p.skills.join(', ');f.months.value=p.months;f.mode.value=p.mode}
f.onsubmit=async e=>{e.preventDefault();try{await saveProfile({year:+f.year.value,degree:f.degree.value.trim(),department:f.department.value.trim().toUpperCase(),skills:csv(f.skills.value),months:+f.months.value,mode:f.mode.value});toast('Profile saved');after&&after()}catch(err){toast(err.message)}}
}
