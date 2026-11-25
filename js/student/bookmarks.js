const savedIds=()=>DB.c.saved;
const isSaved=id=>DB.c.saved.includes(+id);
function toggleSave(id){return DB.toggleSaved(+id)}
if(document.body.dataset.page==='saved'){requireLogin();document.getElementById('grid').innerHTML=allInternships().filter(i=>isSaved(i.id)).map(renderCard).join('')||'<p>No saved internships yet.</p>'}
