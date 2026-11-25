// Admin = a signed-in user whose id is in the `admins` table (see supabase/schema.sql). No passwords live in the front-end.
(function(){const box=document.getElementById('admin-gate');if(!box)return;
if(DB.isAdmin){box.remove();document.getElementById('admin-body').hidden=false;return}
if(session()){box.innerHTML='<div class="card"><h2>Not an admin</h2><p>Signed in as '+esc(session().email)+'. Add this user to the <code>admins</code> table in Supabase.</p></div>';return}
box.innerHTML=`<form class="form" id="al"><h2>Admin login</h2><label>Email<input name="email" type="email"></label><label>Password<input name="password" type="password"></label><p class="bad" id="err"></p><button class="btn">Login</button></form>`;
document.getElementById('al').onsubmit=async e=>{e.preventDefault();const f=e.target;const {error}=await DB.sb.auth.signInWithPassword({email:f.email.value.trim(),password:f.password.value});error?document.getElementById('err').textContent=error.message:location.reload()}})();
