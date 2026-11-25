// Supabase data layer. Public data and the signed-in user's data are loaded into DB.c once per page,
// so the UI code can keep reading synchronously; writes go to Supabase (optimistic where safe).
const DB={sb:null,user:null,isAdmin:false,c:{internships:[],companies:[],domains:[],sources:[],saved:[],apps:[],profile:null,progress:{}}};
const _ok=r=>{if(r.error)throw r.error;return r.data};
const mapI=r=>({id:r.id,title:r.title,companyId:r.company_id,domain:r.domain,type:r.type,stipend:r.stipend,mode:r.mode,months:r.months,years:r.years||[],departments:r.departments||[],degrees:r.degrees||['ANY'],skills:r.skills||[],deadline:r.deadline,sourceId:r.source_id,applyMode:r.apply_mode,applyUrl:r.apply_url,adminVerified:r.admin_verified,expired:r.expired,description:r.description,linkOk:r.link_ok,linkCheckedAt:r.link_checked_at});
const toRow=i=>({title:i.title,company_id:i.companyId,domain:i.domain,type:i.type,stipend:i.stipend,mode:i.mode,months:i.months,years:i.years,departments:i.departments,degrees:i.degrees||['ANY'],skills:i.skills,deadline:i.deadline,source_id:i.sourceId,apply_mode:i.applyMode,apply_url:i.applyUrl,admin_verified:!!i.adminVerified,expired:!!i.expired,description:i.description,link_ok:i.linkOk,link_checked_at:i.linkCheckedAt});
const mapA=r=>({id:r.id,internshipId:r.internship_id,email:r.student_email,name:r.student_name,status:r.status,date:(r.created_at||'').slice(0,10)});
DB.init=async()=>{if(!SUPABASE_URL||SUPABASE_URL.includes('YOUR-PROJECT'))throw new Error('Set SUPABASE_URL and SUPABASE_ANON_KEY in js/config.js');
const remember=document.getElementById('remember'),options=remember&&!remember.checked?{auth:{storage:window.sessionStorage}}:{};
DB.sb=supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY,options);const {data:{session}}=await DB.sb.auth.getSession();if(session)await DB.loadUser(session.user);await DB.loadPublic()};
DB.loadPublic=async()=>{const q=t=>DB.sb.from(t).select('*');const [i,c,d,s]=await Promise.all([q('internships').order('id'),q('companies').order('id'),q('domains').order('sort_order'),q('sources').order('id')]);
DB.c.internships=_ok(i).map(mapI);DB.c.companies=_ok(c);DB.c.domains=_ok(d);DB.c.sources=_ok(s);window.COMPANIES=DB.c.companies;window.DOMAINS=DB.c.domains};
DB.loadUser=async u=>{const t=n=>DB.sb.from(n).select('*');
const [p,a,sv,ap,pr]=await Promise.all([t('profiles').eq('user_id',u.id).maybeSingle(),t('admins').eq('user_id',u.id).maybeSingle(),t('saved_internships'),t('applications').order('created_at'),t('roadmap_progress')]);
const prof=_ok(p),meta=u.user_metadata||{};DB.user={id:u.id,email:u.email,name:(prof&&prof.name)||meta.name||u.email.split('@')[0],collegeName:meta.college_name||'',department:(prof&&prof.department)||meta.department||'',year:(prof&&prof.academic_year)||meta.academic_year||''};DB.isAdmin=!!_ok(a);
DB.c.profile=prof&&prof.degree?{year:prof.academic_year,degree:prof.degree,department:prof.department,skills:prof.skills||[],months:prof.availability_months,mode:prof.preferred_mode||''}:null;
DB.c.saved=_ok(sv).map(r=>r.internship_id);DB.c.apps=_ok(ap).map(mapA);DB.c.progress={};_ok(pr).forEach(r=>(DB.c.progress[r.slug]=DB.c.progress[r.slug]||[]).push(r.step))};
DB.saveProfile=async p=>{_ok(await DB.sb.from('profiles').upsert({user_id:DB.user.id,academic_year:p.year,degree:p.degree,department:p.department,skills:p.skills,availability_months:p.months,preferred_mode:p.mode||null,updated_at:new Date().toISOString()}));DB.c.profile=p};
DB.toggleSaved=async id=>{const had=DB.c.saved.includes(id);DB.c.saved=had?DB.c.saved.filter(x=>x!==id):[...DB.c.saved,id];const m={user_id:DB.user.id,internship_id:id};
const r=had?await DB.sb.from('saved_internships').delete().match(m):await DB.sb.from('saved_internships').insert(m);if(r.error)toast(r.error.message)};
DB.addApp=async(iid,status,x={})=>{const r=await DB.sb.from('applications').insert({user_id:DB.user.id,internship_id:iid,student_name:DB.user.name,student_email:DB.user.email,status,phone:x.phone||null,why:x.why||null,resume:x.resume||null}).select().single();DB.c.apps.push(mapA(_ok(r)))};
DB.setAppStatus=async(id,s)=>{const a=DB.c.apps.find(x=>x.id==id);if(a)a.status=s;const r=await DB.sb.from('applications').update({status:s}).eq('id',id);if(r.error)toast(r.error.message)};
DB.toggleStep=async(slug,n)=>{const l=DB.c.progress[slug]=DB.c.progress[slug]||[],k=l.indexOf(n),wasDone=k>=0;
wasDone?l.splice(k,1):l.push(n);
const rollback=()=>{if(wasDone){if(!l.includes(n))l.splice(k,0,n)}else{const index=l.indexOf(n);if(index>=0)l.splice(index,1)}};
if(!DB.user){try{localStorage.setItem('internpath.roadmap.'+slug,JSON.stringify(l))}catch(error){rollback();throw error}return}
const m={user_id:DB.user.id,slug,step:n};
const r=wasDone?await DB.sb.from('roadmap_progress').delete().match(m):await DB.sb.from('roadmap_progress').insert(m);
if(r.error){rollback();throw r.error}};
// ---- admin (enforced by RLS: non-admin calls are rejected by the database) ----
DB.saveInternship=async i=>{_ok(await(i.id?DB.sb.from('internships').update(toRow(i)).eq('id',i.id):DB.sb.from('internships').insert(toRow(i))));await DB.loadPublic()};
DB.deleteInternship=async id=>{_ok(await DB.sb.from('internships').delete().eq('id',id));await DB.loadPublic()};
DB.addSource=async s=>{_ok(await DB.sb.from('sources').insert(s));await DB.loadPublic()};
DB.removeSource=async id=>{_ok(await DB.sb.from('sources').delete().eq('id',id));await DB.loadPublic()};
DB.setTrusted=async(id,v)=>{if(!v)_ok(await DB.sb.from('sources').update({trusted:false}).eq('id',id));
_ok(await DB.sb.from('internships').update({admin_verified:false,link_ok:null,link_checked_at:null}).eq('source_id',id));
if(v)_ok(await DB.sb.from('sources').update({trusted:true}).eq('id',id));await DB.loadPublic()};
DB.addCompany=async c=>{_ok(await DB.sb.from('companies').insert({...c,verified:false}));await DB.loadPublic()};
DB.setCompanyVerified=async(id,v)=>{if(!v)_ok(await DB.sb.from('companies').update({verified:false}).eq('id',id));
_ok(await DB.sb.from('internships').update({admin_verified:false,link_ok:null,link_checked_at:null}).eq('company_id',id));
if(v)_ok(await DB.sb.from('companies').update({verified:true}).eq('id',id));await DB.loadPublic()};
DB.checkLink=async id=>{const i=DB.c.internships.find(x=>x.id==id);const {data,error}=await DB.sb.functions.invoke('check-link',{body:{url:i.applyUrl}});if(error)throw error;
_ok(await DB.sb.from('internships').update({link_ok:!!data.ok,link_checked_at:new Date().toISOString()}).eq('id',id));await DB.loadPublic();return data};
