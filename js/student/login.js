document.querySelectorAll('[data-password-toggle]').forEach(button=>button.onclick=()=>{
const input=document.querySelector(`[name="${button.dataset.passwordToggle}"]`),show=input.type==='password';
input.type=show?'text':'password';button.textContent=show?'Hide':'Show';button.setAttribute('aria-pressed',String(show))});
const LF=document.getElementById('lf');
if(LF)LF.onsubmit=async e=>{e.preventDefault();const f=e.target,err=document.getElementById('err'),submit=f.querySelector('[type="submit"]');
err.className='form-message';err.textContent='';
const email=f.email.value.trim().toLowerCase();
if(!V.email(email)||!f.password.value){err.textContent='Enter a valid email address and password.';return}
submit.disabled=true;submit.textContent='Signing in…';
try{const {error}=await DB.sb.auth.signInWithPassword({email,password:f.password.value});
if(error){err.textContent=error.message;return}
let target=BASE+'pages/student/dashboard.html';const next=qs('next');
if(next&&(next===location.origin||next.startsWith(location.origin+'/')))target=next;
location.href=target}
catch(error){err.textContent=error.message||'Sign-in failed. Check your connection and try again.'}
finally{submit.disabled=false;submit.innerHTML='Sign In <span aria-hidden="true">→</span>'}};
