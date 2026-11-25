(function(){requireAdmin();const tbl=document.getElementById('tbl'),form=document.getElementById('formbox');internshipForm(form);
function draw(){tbl.innerHTML=`<table><thead><tr><th>Title</th><th>Status</th><th>Deadline</th><th>Actions</th></tr></thead><tbody>${allInternships().map(i=>`<tr><td>${esc(i.title)}</td><td>${badge(i)}</td><td>${i.deadline}</td><td><button data-a="edit" data-id="${i.id}">Edit</button> <button data-a="link" data-id="${i.id}">Check link</button> <button data-a="ver" data-id="${i.id}">${i.adminVerified?'Unverify':'Verify'}</button> <button data-a="exp" data-id="${i.id}">${i.expired?'Reopen':'Mark expired'}</button> <button data-a="del" data-id="${i.id}">Delete</button></td></tr>`).join('')}</tbody></table>`}
tbl.onclick=async e=>{const b=e.target.closest('button');if(!b)return;const a=b.dataset.a,id=+b.dataset.id,i=allInternships().find(x=>x.id===id);
try{if(a==='edit'){internshipForm(form,i);form.scrollIntoView();return}
if(a==='link'){toast('Checking link…');const r=await DB.checkLink(id);toast(r.ok?'Link OK ('+r.status+')':'Link failed '+(r.status||r.error||''))}
if(a==='ver')await toggleVerify(id);
if(a==='exp')await DB.saveInternship({...i,expired:!i.expired});
if(a==='del'){if(!confirm('Delete this internship?'))return;await DB.deleteInternship(id)}
draw()}catch(er){toast(er.message)}};draw()})();
