(function(){requireAdmin();const box=document.getElementById('src');const run=async fn=>{try{await fn();draw()}catch(er){toast(er.message)}};
function draw(){box.innerHTML=`<table><tr><th>Name</th><th>Type</th><th>Trusted</th><th></th></tr>${allSources().map(s=>`<tr><td>${esc(s.name)}</td><td>${esc(s.type)}</td><td><input type="checkbox" data-t="${s.id}" ${s.trusted?'checked':''}></td><td><button data-d="${s.id}">Remove</button></td></tr>`).join('')}</table>
<form class="form" id="sf"><input name="name" placeholder="Source name" required><input name="type" placeholder="Type (Company/Platform/Government)" required><button class="btn">Add source</button></form>`;
box.querySelectorAll('[data-t]').forEach(c=>c.onchange=()=>run(()=>DB.setTrusted(+c.dataset.t,c.checked)));
box.querySelectorAll('[data-d]').forEach(b=>b.onclick=()=>run(()=>DB.removeSource(+b.dataset.d)));
document.getElementById('sf').onsubmit=e=>{e.preventDefault();const f=e.target;run(()=>DB.addSource({name:f.name.value,type:f.type.value,trusted:false}))}}draw()})();
