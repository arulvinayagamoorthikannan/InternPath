const STATUSES=['Submitted','Applied (external)','In review','Interview','Offer','Rejected'];
const apps=()=>DB.c.apps,myApps=()=>apps().filter(a=>a.email===(session()||{}).email);
const trackerFind=id=>myApps().find(a=>a.internshipId==id);
function trackerAdd(internshipId,status,extra={}){return DB.addApp(+internshipId,status,extra)}
function setStatus(id,s){DB.setAppStatus(id,s)}
function trackerTable(list,admin){const rows=list.map(a=>{const i=allInternships().find(x=>x.id==a.internshipId)||{title:'(removed)'};return `<tr><td>${esc(i.title)}</td>${admin?`<td>${esc(a.email)}</td>`:''}<td>${a.date}</td><td><select data-id="${a.id}">${STATUSES.map(s=>`<option ${s===a.status?'selected':''}>${s}</option>`).join('')}</select></td></tr>`}).join('');
return `<table><thead><tr><th>Internship</th>${admin?'<th>Student</th>':''}<th>Date</th><th>Status</th></tr></thead><tbody>${rows||'<tr><td colspan=4>No applications yet.</td></tr>'}</tbody></table>`}
function mountTracker(el,list,admin){el.innerHTML=trackerTable(list,admin);el.querySelectorAll('select').forEach(s=>s.onchange=()=>{setStatus(s.dataset.id,s.value);toast('Status updated')})}
if(document.body.dataset.page==='tracker'){requireLogin();mountTracker(document.getElementById('tbl'),myApps(),false)}
