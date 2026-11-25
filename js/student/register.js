document.querySelectorAll('[data-password-toggle]').forEach(button=>button.onclick=()=>{
const input=document.querySelector(`[name="${button.dataset.passwordToggle}"]`),show=input.type==='password';
input.type=show?'text':'password';button.textContent=show?'Hide':'Show';button.setAttribute('aria-pressed',String(show))});
const RF=document.getElementById('rf');
if(RF)RF.onsubmit=async e=>{e.preventDefault();const f=e.target,err=document.getElementById('err'),submit=f.querySelector('[type="submit"]');
err.className='form-message';err.textContent='';
const name=f.name.value.trim(),email=f.email.value.trim().toLowerCase(),college=f.college.value.trim(),department=f.department.value.trim(),year=Number(f.year.value);
if(!V.min(name,2)||!V.email(email)||!V.min(college,2)||!V.min(department,2))return err.textContent='Complete your name, a valid email, college, and department.';
if(!Number.isInteger(year)||year<1||year>4)return err.textContent='Select your current year of study.';
if(!V.password(f.password.value))return err.textContent='Use at least 8 characters, including letters and numbers.';
if(f.password.value!==f.confirmPassword.value)return err.textContent='Your passwords do not match.';
submit.disabled=true;submit.textContent='Creating account…';
try{const {data,error}=await DB.sb.auth.signUp({email,password:f.password.value,options:{data:{name,college_name:college,department,academic_year:year}}});
if(error){err.textContent=error.message;return}
if(!data.session){err.className='form-message success';err.textContent='Your account was created. Check your email to confirm it, then sign in to finish setting up your student profile.';return}
location.href=BASE+'pages/eligibility/checker.html?setup=1'}
catch(error){err.textContent=error.message||'Account creation failed. Check your connection and try again.'}
finally{submit.disabled=false;submit.innerHTML='Create Account <span aria-hidden="true">→</span>'}};
