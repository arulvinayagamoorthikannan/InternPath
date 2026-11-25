(function(){const content=document.getElementById('reset-content'),updating=qs('mode')==='update';
if(updating){document.getElementById('reset-description').textContent='Choose a new password for your InternPath account.';
content.innerHTML=`<form class="form auth-form" id="password-form" novalidate><label>New password<span class="password-control"><input name="password" type="password" autocomplete="new-password" required><button class="password-toggle" type="button" data-password-toggle="password" aria-pressed="false">Show</button></span></label><label>Confirm new password<span class="password-control"><input name="confirmPassword" type="password" autocomplete="new-password" required><button class="password-toggle" type="button" data-password-toggle="confirmPassword" aria-pressed="false">Show</button></span></label><p class="form-message" id="err" role="alert" aria-live="polite"></p><button class="btn auth-primary auth-submit" type="submit">Update Password</button></form>`;
document.querySelectorAll('[data-password-toggle]').forEach(button=>button.onclick=()=>{const input=document.querySelector(`[name="${button.dataset.passwordToggle}"]`),show=input.type==='password';input.type=show?'text':'password';button.textContent=show?'Hide':'Show';button.setAttribute('aria-pressed',String(show))});
document.getElementById('password-form').onsubmit=async e=>{e.preventDefault();const f=e.target,err=document.getElementById('err'),submit=f.querySelector('[type="submit"]');err.textContent='';
if(!V.password(f.password.value)){err.textContent='Use at least 8 characters, including letters and numbers.';return}
if(f.password.value!==f.confirmPassword.value){err.textContent='Your passwords do not match.';return}
submit.disabled=true;submit.textContent='Updating password…';
try{const {error}=await DB.sb.auth.updateUser({password:f.password.value});if(error){err.textContent=error.message;return}
content.innerHTML='<p class="form-message success">Your password has been updated. You can now sign in with it.</p><a class="btn auth-primary auth-submit" href="login.html">Continue to Sign In</a>'}
catch(error){err.textContent=error.message||'Password update failed. Please try again.'}
finally{if(submit.isConnected){submit.disabled=false;submit.textContent='Update Password'}}};
return}
content.innerHTML=`<form class="form auth-form" id="reset-form" novalidate><label>Email address<input name="email" type="email" autocomplete="email" placeholder="you@college.edu" required></label><p class="form-message" id="err" role="alert" aria-live="polite"></p><button class="btn auth-primary auth-submit" type="submit">Send Reset Link</button></form>`;
document.getElementById('reset-form').onsubmit=async e=>{e.preventDefault();const f=e.target,err=document.getElementById('err'),submit=f.querySelector('[type="submit"]'),email=f.email.value.trim().toLowerCase();err.textContent='';
if(!V.email(email)){err.textContent='Enter a valid email address.';return}
submit.disabled=true;submit.textContent='Sending…';
try{const redirectTo=new URL(BASE+'pages/account/reset-password.html?mode=update',location.href).href,{error}=await DB.sb.auth.resetPasswordForEmail(email,{redirectTo});
if(error){err.textContent=error.message;return}err.className='form-message success';err.textContent='If an account exists for this address, a password-reset link is on its way.'}
catch(error){err.textContent=error.message||'Could not send the reset link. Check your connection and try again.'}
finally{submit.disabled=false;submit.textContent='Send Reset Link'}}})();
