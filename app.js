
var T={en:{brand:"Bawwaba",tag:"School pickup gate",gate:"Gate",review:"Review",vehicles:"Vehicles",log:"Log",
live:"Gate live",paused:"Gate paused",released:"Released",manual_review:"Needs review",no_match:"Not registered",rejected:"Rejected",
sReleased:"Released today",sReview:"Waiting for review",sNo:"Unknown plates",sAvg:"Avg. confidence",
now:"At the gate",wait:"No car at the gate. The next scan appears here.",scan:"Simulate scan",pause:"Pause gate",resume:"Resume gate",
conf:"Camera confidence",gateN:"Gate",guardian:"Guardian",students:"Students",recent:"Recent scans",none:"No scans yet.",
approve:"Release students",reject:"Hold students",qEmpty:"Nothing to review. The queue is clear.",
search:"Search plate, guardian or student",addT:"Register a vehicle",plateRaw:"Plate (Arabic)",plateCode:"Code (ABJ-1234)",gName:"Guardian name",rel:"Relation",stu:"Students, comma separated",add:"Add vehicle",
Father:"Father",Mother:"Mother",Driver:"Driver",Relative:"Relative",Other:"Other",del:"Remove",all:"All",
rLow:"Low camera confidence. Check the plate and the guardian.",rOk:"Plate and guardian matched.",rNo:"No vehicle with this plate is registered.",rApp:"Approved by staff.",rRej:"Held by staff.",
added:"Vehicle added",removed:"Vehicle removed",relMsg:"Students released",heldMsg:"Students held",need:"Enter the plate code, guardian name and at least one student.",
syncErr:"Could not reach Base44. Check the connection and keys.",board:"Pickup board",full:"Full screen",handed:"Handed over",hdone:"Students handed over",undo:"Undo",perMin:"Scans per minute, last 10 minutes",boardEmpty:"No students waiting. Released cars appear here.",badCode:"Use the format ABJ-1234: 1 to 3 letters, a dash, then numbers.",dup:"This plate is already registered.",settings:"Settings",thr:"Auto-release above",snd:"Alert sound and vibration",inst:"Install app",iosH:"On iPhone: tap Share, then Add to Home Screen.",lkp:"Type a plate code, e.g. ABJ-1234",lkb:"Look up",rMan:"Checked by staff at the gate.",reset:"Reset demo data",thH:"Reads below this confidence go to the review queue.",
note:"Demo data runs in this page only. Connect it to your Base44 Vehicle, LprEvent and User entities to go live."},
ar:{brand:"بوابة",tag:"بوابة استلام الطلاب",gate:"البوابة",review:"المراجعة",vehicles:"المركبات",log:"السجل",
live:"البوابة تعمل",paused:"البوابة متوقفة",released:"تم التسليم",manual_review:"تحتاج مراجعة",no_match:"غير مسجّلة",rejected:"مرفوضة",
sReleased:"سُلّم اليوم",sReview:"بانتظار المراجعة",sNo:"لوحات مجهولة",sAvg:"متوسط الدقة",
now:"عند البوابة",wait:"لا توجد سيارة عند البوابة. ستظهر القراءة التالية هنا.",scan:"محاكاة قراءة",pause:"إيقاف البوابة",resume:"تشغيل البوابة",
conf:"دقة الكاميرا",gateN:"البوابة",guardian:"ولي الأمر",students:"الطلاب",recent:"آخر القراءات",none:"لا توجد قراءات بعد.",
approve:"تسليم الطلاب",reject:"إيقاف التسليم",qEmpty:"لا شيء للمراجعة. الطابور فارغ.",
search:"ابحث باللوحة أو ولي الأمر أو الطالب",addT:"تسجيل مركبة",plateRaw:"اللوحة (بالعربية)",plateCode:"الرمز (ABJ-1234)",gName:"اسم ولي الأمر",rel:"الصلة",stu:"الطلاب، افصل بفاصلة",add:"إضافة مركبة",
Father:"الأب",Mother:"الأم",Driver:"السائق",Relative:"قريب",Other:"آخر",del:"حذف",all:"الكل",
rLow:"دقة الكاميرا منخفضة. تحقّق من اللوحة وولي الأمر.",rOk:"تطابقت اللوحة مع ولي الأمر.",rNo:"لا توجد مركبة مسجّلة بهذه اللوحة.",rApp:"اعتمده الموظف.",rRej:"أوقفه الموظف.",
added:"تمت إضافة المركبة",removed:"تم حذف المركبة",relMsg:"تم تسليم الطلاب",heldMsg:"تم إيقاف التسليم",need:"أدخل رمز اللوحة واسم ولي الأمر وطالبًا واحدًا على الأقل.",
syncErr:"تعذّر الاتصال بـ Base44. تحقّق من الاتصال والمفاتيح.",board:"لوحة النداء",full:"ملء الشاشة",handed:"تم التسليم للوالد",hdone:"تم تسليم الطلاب",undo:"تراجع",perMin:"القراءات في الدقيقة، آخر 10 دقائق",boardEmpty:"لا يوجد طلاب بالانتظار. تظهر هنا السيارات المصرّح لها.",badCode:"استخدم الصيغة ABJ-1234: من 1 إلى 3 أحرف ثم شرطة ثم أرقام.",dup:"هذه اللوحة مسجّلة مسبقًا.",settings:"الإعدادات",thr:"تسليم تلقائي فوق",snd:"صوت واهتزاز للتنبيه",inst:"تثبيت التطبيق",iosH:"على الآيفون: اضغط مشاركة ثم إضافة إلى الشاشة الرئيسية.",lkp:"اكتب رمز اللوحة مثل ABJ-1234",lkb:"بحث",rMan:"تحقّق منه الموظف عند البوابة.",reset:"إعادة ضبط البيانات التجريبية",thH:"القراءات الأقل من هذه الدقة تذهب إلى طابور المراجعة.",
note:"البيانات تجريبية وتعمل داخل هذه الصفحة فقط. اربطها بكيانات Base44 (Vehicle وLprEvent وUser) لتعمل فعليًا."}};
var lang="en",tab="gate",running=true,timer,q="";
var V=[
{id:"v1",raw:"أ ب ج ١٢٣٤",code:"ABJ-1234",g:"Khalid Al-Mansoori",rel:"Father",st:["Omar","Layla"]},
{id:"v2",raw:"د هـ و ٥٦٧٨",code:"DHW-5678",g:"Mariam Al-Suwaidi",rel:"Mother",st:["Yousef"]},
{id:"v3",raw:"ز ح ط ٩٠١٢",code:"ZHT-9012",g:"Saeed Ahmed",rel:"Driver",st:["Noor","Hamad","Sara"]},
{id:"v4",raw:"ي ك ل ٣٤٥٦",code:"YKL-3456",g:"Fatima Al-Hosani",rel:"Mother",st:["Rashid"]},
{id:"v5",raw:"م ن س ٧٨٩٠",code:"MNS-7890",g:"Ali Hassan",rel:"Relative",st:["Aisha"]},
{id:"v6",raw:"ع ف ص ٢٣٤٥",code:"AFS-2345",g:"Hind Al-Kaabi",rel:"Mother",st:["Majid","Dana"]}];
var E=[],cur=null,nid=100,S={th:.9,snd:true},dp=null;
function save(){try{localStorage.setItem("bw-data",JSON.stringify({V:V,E:E.slice(0,200),S:S,nid:nid}))}catch(e){}}
try{var sv=JSON.parse(localStorage.getItem("bw-data")||"null");if(sv){V=sv.V;E=sv.E;S=sv.S;nid=sv.nid;cur=E[0]||null}}catch(e){}
function ping(){if(!S.snd)return;try{navigator.vibrate&&navigator.vibrate([120,60,120])}catch(e){}try{var a=new(window.AudioContext||window.webkitAudioContext)(),o=a.createOscillator(),g=a.createGain();o.connect(g);g.connect(a.destination);o.frequency.value=880;g.gain.value=.08;o.start();o.stop(a.currentTime+.18)}catch(e){}}
function t(k){return T[lang][k]}
function rs(e){return T[lang][e.reason]||e.reason||""}
function $(s){return document.querySelector(s)}
function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML}
function ago(ts){var s=Math.round((Date.now()-ts)/1000);if(s<5)return lang==="en"?"now":"الآن";if(s<60)return s+(lang==="en"?"s":" ث");return Math.round(s/60)+(lang==="en"?" min":" د")}
function scan(){if(window.BW&&BW.enabled)return;
 var r=Math.random(),ev={id:"e"+(nid++),ts:Date.now(),gate:"G"+(1+Math.floor(Math.random()*2))};
 if(r<.15){var n=["QRT-"+(1000+Math.floor(Math.random()*8999)),"TTR-"+(1000+Math.floor(Math.random()*8999))][0];
  Object.assign(ev,{code:n,raw:"؟ ؟ ؟ "+n.slice(-4),conf:.78+Math.random()*.2,status:"no_match",reason:"rNo",g:"",st:[],rel:""})}
 else{var v=V[Math.floor(Math.random()*V.length)];if(!v)return;var c=r<.4?.62+Math.random()*.25:.9+Math.random()*.09;
  Object.assign(ev,{code:v.code,raw:v.raw,conf:c,status:c>=S.th?"released":"manual_review",reason:c>=S.th?"rOk":"rLow",vid:v.id,g:v.g,rel:v.rel,st:v.st})}
 E.unshift(ev);cur=ev;sync(ev);if(ev.status==="manual_review")ping();render()}
function live(){return !!(window.BW&&BW.enabled)}
function fail(){toast(t("syncErr"))}
function sync(ev){if(live())BW.createEvent(ev).then(function(r){if(r&&r.id)ev.rid=r.id}).catch(fail)}
function upd(e){if(live()&&e.rid)BW.updateEvent(e.rid,e).catch(fail)}
function mark(e,v){S.dn=S.dn||{};if(v)S.dn[e.id]=1;else delete S.dn[e.id]}
function poll(){BW.listEvents().then(function(l){S.dn=S.dn||{};l.forEach(function(e){e.done=!!S.dn[e.id]});var o=E.map(function(e){return e.id+e.status+e.done}).join(),n=l.map(function(e){return e.id+e.status+e.done}).join();if(o===n)return;var seen={};E.forEach(function(e){seen[e.id]=1});if(E.length&&l.some(function(e){return !seen[e.id]&&e.status==="manual_review"}))ping();E=l;cur=E[0]||null;render()}).catch(function(){})}
function lookup(raw){var code=raw.toUpperCase().replace(/\s/g,"");if(!code)return;var v=V.find(function(x){return x.code===code});
 var ev={id:"e"+(nid++),ts:Date.now(),gate:"G1",code:code,raw:v?v.raw:code,conf:1};
 if(v)Object.assign(ev,{status:"released",reason:"rMan",vid:v.id,g:v.g,rel:v.rel,st:v.st});else Object.assign(ev,{status:"no_match",reason:"rNo",g:"",rel:"",st:[]});
 E.unshift(ev);cur=ev;sync(ev);render()}
function decide(id,ok){var e=E.find(function(x){return x.id===id});if(!e)return;
 var p=[e.status,e.reason];e.status=ok?"released":"rejected";e.reason=ok?"rApp":"rRej";toast(ok?t("relMsg"):t("heldMsg"),function(){e.status=p[0];e.reason=p[1];upd(e);render()});upd(e);render()}
function plate(e){return '<div class="plate"><div class="a">UAE</div><div class="t"><b>'+esc(e.code)+'</b><span>'+esc(e.raw)+'</span></div></div>'}
function tabs(){var n=E.filter(function(e){return e.status==="manual_review"}).length;
 $("#tabs").innerHTML=["gate","board","review","vehicles","log","settings"].map(function(k){var ic={gate:"🚧",board:"📣",review:"🔔",vehicles:"🚗",log:"📋",settings:"⚙️"}[k];return '<button role="tab" aria-selected="'+(tab===k)+'" data-k="'+k+'"><span class="ic" aria-hidden="true">'+ic+'</span>'+t(k)+(function(){var c=k==="review"?n:k==="board"?E.filter(function(e){return e.status==="released"&&!e.done}).length:0;return c?'<span class="badge">'+c+'</span>':''})()+'</button>'}).join("");
 $("#tabs").querySelectorAll("button").forEach(function(b){b.onclick=function(){tab=b.dataset.k;render()}})}
function stats(){var rel=E.filter(function(e){return e.status==="released"}).length,rv=E.filter(function(e){return e.status==="manual_review"}).length,nm=E.filter(function(e){return e.status==="no_match"}).length;
 var avg=E.length?Math.round(E.reduce(function(a,e){return a+e.conf},0)/E.length*100)+"%":"-";
 return '<div class="stats"><div class="stat"><b>'+rel+'</b><span>'+t("sReleased")+'</span></div><div class="stat"><b>'+rv+'</b><span>'+t("sReview")+'</span></div><div class="stat"><b>'+nm+'</b><span>'+t("sNo")+'</span></div><div class="stat"><b>'+avg+'</b><span>'+t("sAvg")+'</span></div></div>'}
function sb(s){return '<span class="sbadge s-'+s+'">'+t(s)+'</span>'}
function detail(e,act){return plate(e)+'<div class="big">'+(e.g?esc(e.g):t("no_match"))+'</div><div class="meta">'+(e.rel?t(e.rel)+' · ':'')+t("gateN")+' '+e.gate+' · '+sb(e.status)+'</div>'+
 (e.st.length?'<div class="kids" aria-label="'+t("students")+'">'+e.st.map(function(s){return '<span class="kid">'+esc(s)+'</span>'}).join("")+'</div>':'')+
 '<div class="meta">'+esc(rs(e))+'</div><div class="meta" style="margin-top:8px">'+t("conf")+' '+Math.round(e.conf*100)+'%</div><div class="bar"><i style="width:'+Math.round(e.conf*100)+'%"></i></div>'+
 (act&&e.status==="manual_review"?'<div class="actions"><button class="b go" data-ok="'+e.id+'">'+t("approve")+'</button><button class="b stop" data-no="'+e.id+'">'+t("reject")+'</button></div>':'')}
function rows(list){return list.length?list.map(function(e){return '<div class="row"><span class="mini">'+esc(e.code)+'</span><div class="m"><b>'+(e.g?esc(e.g):'—')+'</b><span class="meta">'+t(e.status)+' · '+Math.round(e.conf*100)+'%</span></div><time>'+ago(e.ts)+'</time></div>'}).join(""):'<div class="empty">'+t("none")+'</div>'}
function render(){
 tabs();var h="";
 if(tab==="gate"){
  h=stats()+'<div class="gate"><div class="card now '+(cur?cur.status:"")+'"><h2>'+t("now")+'</h2>'+(cur?detail(cur,true):'<div class="empty">'+t("wait")+'</div>')+
   '<form class="lk" id="lf"><input id="lq" placeholder="'+t("lkp")+'" aria-label="'+t("lkp")+'"><button class="b bus" type="submit">'+t("lkb")+'</button></form><div class="actions"><button class="b bus" id="sc">'+t("scan")+'</button><button class="b ghost" id="pz">'+(running?t("pause"):t("resume"))+'</button></div></div>'+
   '<div class="card"><h2>'+t("recent")+'</h2>'+rows(E.slice(0,8))+'</div></div>'}
 if(tab==="review"){var l=E.filter(function(e){return e.status==="manual_review"});
  h='<div class="gate" style="grid-template-columns:1fr">'+(l.length?l.map(function(e){return '<div class="card now manual_review">'+detail(e,true)+'</div>'}).join(""):'<div class="card empty">'+t("qEmpty")+'</div>')+'</div>'}
 if(tab==="vehicles"){var f=V.filter(function(v){return !q||(v.code+v.raw+v.g+v.st.join(" ")).toLowerCase().indexOf(q.toLowerCase())>-1});
  h='<div class="card" style="margin-bottom:16px"><h2>'+t("addT")+'</h2><form class="add" id="af"><input name="raw" placeholder="'+t("plateRaw")+'" dir="rtl"><input name="code" placeholder="'+t("plateCode")+'" dir="ltr"><input name="g" placeholder="'+t("gName")+'"><select name="rel">'+["Father","Mother","Driver","Relative","Other"].map(function(r){return '<option value="'+r+'">'+t(r)+'</option>'}).join("")+'</select><input name="st" placeholder="'+t("stu")+'"><button class="b bus" type="submit">'+t("add")+'</button></form></div>'+
   '<div class="tools"><input id="qs" type="search" placeholder="'+t("search")+'" value="'+esc(q)+'" aria-label="'+t("search")+'"></div><div class="card">'+f.map(function(v){return '<div class="row"><span class="mini">'+esc(v.code)+'</span><div class="m"><b>'+esc(v.g)+'</b><span class="meta">'+t(v.rel)+' · '+esc(v.st.join(", "))+'</span></div><button class="b ghost" data-del="'+v.id+'" style="padding:6px 14px">'+t("del")+'</button></div>'}).join("")+'</div>'}
 if(tab==="board"){var w=E.filter(function(e){return e.status==="released"&&!e.done}).reverse();
  h='<div class="tools"><button class="b ghost" id="fs">'+t("full")+'</button></div>'+(w.length?'<div class="board">'+w.map(function(e){return '<div class="card now released bcard">'+plate(e)+'<div class="big">'+esc(e.g)+'</div><div class="meta">'+(e.rel?t(e.rel)+' · ':'')+ago(e.ts)+'</div><div class="kids">'+e.st.map(function(x){return '<span class="kid">'+esc(x)+'</span>'}).join("")+'</div><div class="actions"><button class="b go" data-done="'+e.id+'">'+t("handed")+'</button></div></div>'}).join("")+'</div>':'<div class="card empty">'+t("boardEmpty")+'</div>')}
 if(tab==="settings"){h='<div class="card set"><h2>'+t("settings")+'</h2><label><span>'+t("thr")+' <b id="tv">'+Math.round(S.th*100)+'%</b></span><input type="range" id="th" min="60" max="99" value="'+Math.round(S.th*100)+'"></label><div class="meta">'+t("thH")+'</div><label><span>'+t("snd")+'</span><input type="checkbox" id="sn" '+(S.snd?"checked":"")+'></label><div class="actions" style="margin:0"><button class="b bus" id="ins" style="display:'+(dp?"block":"none")+'">'+t("inst")+'</button><button class="b ghost" id="rs">'+t("reset")+'</button></div><div class="meta">'+t("iosH")+'</div></div>'}
 if(tab==="log"){var bk=[];for(var i=9;i>=0;i--){var a=Date.now()-(i+1)*60000,b=Date.now()-i*60000;bk.push(E.filter(function(e){return e.ts>=a&&e.ts<b}).length)}var mx=Math.max.apply(null,bk.concat([1]));
  h='<div class="card" style="margin-bottom:16px"><h2>'+t("perMin")+'</h2><div class="chart" role="img" aria-label="'+t("perMin")+'">'+bk.map(function(n){return '<div><i style="height:'+Math.round(n/mx*85)+'%"></i><span>'+n+'</span></div>'}).join("")+'</div></div><div class="card"><h2>'+t("log")+'</h2>'+rows(E)+'</div>'}
 h+='<p class="note">'+t("note")+'</p>';
 $("#main").innerHTML=h;
 var s=$("#sc");if(s)s.onclick=scan;var p=$("#pz");if(p)p.onclick=function(){running=!running;clock();render()};
 document.querySelectorAll("[data-ok]").forEach(function(b){b.onclick=function(){decide(b.dataset.ok,true)}});
 document.querySelectorAll("[data-no]").forEach(function(b){b.onclick=function(){decide(b.dataset.no,false)}});
 document.querySelectorAll("[data-del]").forEach(function(b){b.onclick=function(){if(live())BW.deleteVehicle(b.dataset.del).catch(fail);V=V.filter(function(v){return v.id!==b.dataset.del});toast(t("removed"));render()}});
 var qs=$("#qs");if(qs)qs.oninput=function(){q=qs.value;var pos=qs.selectionStart;render();var n=$("#qs");n.focus();n.setSelectionRange(pos,pos)};
 var af=$("#af");if(af)af.onsubmit=function(e){e.preventDefault();var d=new FormData(af),st=d.get("st").split(/[,،]/).map(function(x){return x.trim()}).filter(Boolean),code=d.get("code").trim().toUpperCase();
  if(!code||!d.get("g").trim()||!st.length){toast(t("need"));return}if(!/^[A-Z]{1,3}-\d{1,5}$/.test(code)){toast(t("badCode"));return}if(V.some(function(v){return v.code===code})){toast(t("dup"));return}
  var nv={id:"v"+(nid++),raw:d.get("raw").trim()||code,code:code,g:d.get("g").trim(),rel:d.get("rel"),st:st};V.unshift(nv);if(live())BW.createVehicle(nv).then(function(r){if(r&&r.id)nv.id=r.id}).catch(fail);toast(t("added"));render()};
 document.querySelectorAll("[data-done]").forEach(function(b){b.onclick=function(){var e=E.find(function(x){return x.id===b.dataset.done});if(!e)return;e.done=true;mark(e,1);toast(t("hdone"),function(){e.done=false;mark(e,0);render()});render()}});
 var fs=$("#fs");if(fs)fs.onclick=function(){try{document.documentElement.requestFullscreen()}catch(e){}};
 var lf=$("#lf");if(lf)lf.onsubmit=function(e){e.preventDefault();lookup($("#lq").value)};
 var th=$("#th");if(th){th.oninput=function(){S.th=th.value/100;$("#tv").textContent=th.value+"%";save()};$("#sn").onchange=function(){S.snd=this.checked;save()};$("#rs").onclick=function(){try{localStorage.removeItem("bw-data")}catch(e){}location.reload()};var ib=$("#ins");if(ib)ib.onclick=function(){dp.prompt();dp=null;render()}}
 save();
 $("#livet").textContent=running?t("live"):t("paused");$("#live").className="live"+(running?"":" off")}
function clock(){clearInterval(timer);if(running&&!live())timer=setInterval(function(){if(tab!=="vehicles")scan()},7000)}
var tt;function toast(m,u){var e=$("#toast");e.textContent=m+" ";if(u){var b=document.createElement("button");b.textContent=t("undo");b.className="ub";b.onclick=function(){u();e.classList.remove("show")};e.appendChild(b)}e.classList.add("show");clearTimeout(tt);tt=setTimeout(function(){e.classList.remove("show")},u?6000:2400)}
function apply(){document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";
 document.querySelectorAll("[data-t]").forEach(function(e){e.textContent=t(e.dataset.t)});
 $("#lang").textContent=lang==="en"?"العربية":"English";document.title=lang==="en"?"Bawwaba | School pickup gate":"بوابة | بوابة استلام الطلاب";render()}
$("#lang").onclick=function(){lang=lang==="en"?"ar":"en";try{localStorage.setItem("bw-lang",lang)}catch(e){}apply()};
try{var s=localStorage.getItem("bw-lang");if(s==="ar"||s==="en")lang=s}catch(e){}
window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();dp=e;if(tab==="settings")render()});
if("serviceWorker" in navigator)navigator.serviceWorker.register("sw.js").catch(function(){});
document.addEventListener("keydown",function(e){if(/INPUT|SELECT|TEXTAREA/.test(e.target.tagName)||e.ctrlKey||e.metaKey)return;var m=["gate","board","review","vehicles","log","settings"][+e.key-1];if(m){tab=m;render()}else if(e.key==="s")scan()});
apply();if(live()){E=[];cur=null;document.body.classList.add("live");BW.listVehicles().then(function(l){V=l;render()}).catch(fail);poll();setInterval(poll,3000)}else if(!E.length)scan();clock();setTimeout(function(){$("#splash").classList.add("hide")},900);
