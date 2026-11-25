(function(){requireLogin();const i=findInternship(qs('id')),box=document.getElementById('form');
if(!i){document.getElementById('ttl').textContent='Internship not found';box.innerHTML='<p>This internship could not be found. Return to the <a href="../internships/all.html">internship listings</a>.</p>';return}
if(i&&i.practice){document.getElementById('ttl').textContent='Practice application exercise';
box.innerHTML=`<p><strong>${esc(i.title)}</strong> · ${esc(i.companyName)}</p><p class="catalogue-note">This exercise is for practice only. It is not sent to an employer and does not create an employer application or application-tracker entry.</p>
<form class="form" id="practice-form" novalidate><label>Why are you interested in this role?<textarea name="response" rows="5" required></textarea></label><p class="bad" id="err"></p><button class="btn">Complete practice exercise</button></form>`;
document.getElementById('practice-form').onsubmit=e=>{e.preventDefault();const f=e.target,err=document.getElementById('err');
if(!V.min(f.response.value,30)){err.textContent='Write at least 30 characters to complete the exercise.';return}
try{localStorage.setItem('internpath.practiceApplication.'+i.id,new Date().toISOString());
box.innerHTML='<p class="ok"><strong>Practice exercise completed.</strong> Your response was not stored or sent to an employer.</p><a class="btn ghost" href="'+BASE+'pages/internships/details.html?id='+encodeURIComponent(i.id)+'">Return to internship details</a>'}
catch(error){err.textContent='Could not save your practice completion on this device: '+error.message}};
return}
if(computeStatus(i).status!=='Verified'){document.getElementById('ttl').textContent='Application unavailable';box.innerHTML='<p>This listing is not currently verified, so an application cannot be submitted through InternPath.</p><a class="btn ghost" href="../internships/details.html?id='+encodeURIComponent(i.id)+'">Return to internship details</a>';return}
if(i.applyMode!=='internal'){document.getElementById('ttl').textContent='Apply on the official portal';box.innerHTML=`<p>This internship accepts applications through its external portal.</p><a class="btn" href="${esc(i.applyUrl)}" target="_blank" rel="noopener noreferrer">Open official application portal ↗</a><p><a href="../internships/details.html?id=${encodeURIComponent(i.id)}">Return to internship details</a></p>`;return}
const s=session();document.getElementById('ttl').textContent='Apply: '+i.title;
box.innerHTML=`<form class="form" id="af" novalidate><label>Full name<input name="name" value="${esc(s.name)}"></label><label>Email<input name="email" value="${esc(s.email)}"></label><label>Phone (10 digits)<input name="phone"></label><label>Why this internship?<textarea name="why" rows="4"></textarea></label><label>Resume link (optional)<input name="resume" type="url"></label><p class="bad" id="err"></p><button class="btn">Submit application</button></form>`;
document.getElementById('af').onsubmit=e=>{e.preventDefault();const f=e.target,er=[];
if(!V.min(f.name.value,2))er.push('Enter your name');if(!V.email(f.email.value))er.push('Invalid email');if(!V.phone(f.phone.value))er.push('Invalid phone');if(!V.min(f.why.value,30))er.push('Write at least 30 characters');
if(er.length)return document.getElementById('err').textContent=er.join(' · ');
if(trackerFind(i.id))return document.getElementById('err').textContent='You already applied.';
trackerAdd(i.id,'Submitted',{phone:f.phone.value,why:f.why.value,resume:f.resume.value}).then(()=>location.href='confirmation.html?id='+i.id).catch(x=>document.getElementById('err').textContent=x.message)}})();
