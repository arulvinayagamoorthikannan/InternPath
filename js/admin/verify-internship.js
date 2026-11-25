async function toggleVerify(id){const i=allInternships().find(x=>x.id==id);await DB.saveInternship({...i,adminVerified:!i.adminVerified})}
