(async function(){const B=document.body.dataset.base||'';
const load=src=>new Promise((ok,no)=>{const s=document.createElement('script');s.src=src;s.onload=ok;s.onerror=()=>no(new Error('Could not load '+src));document.head.appendChild(s)});
const COMMON=['data/roadmaps','data/practice-internships','main','verification/source-check','verification/link-check','verification/deadline-check','verification/verification-status','internships/search','internships/filters','eligibility/student-profile','eligibility/eligibility-checker','applications/validation','applications/tracker','student/bookmarks','roadmaps/progress'];
try{await load('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js');await load(B+'js/config.js');await load(B+'js/db.js');await DB.init();
for(const s of [...COMMON,...(document.body.dataset.scripts||'').split(',').filter(Boolean)])await load(B+'js/'+s+'.js')}
catch(e){console.error(e);const n=document.getElementById('nav')||document.getElementById('auth-error');if(n)n.innerHTML='<div style="background:#c53030;color:#fff;padding:1rem">⚠ '+String(e.message).replace(/</g,'&lt;')+'</div>'}})();
