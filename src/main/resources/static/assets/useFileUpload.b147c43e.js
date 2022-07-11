import{u as qt,d as _t,e as K,f as Ht,g as Gt,E as z,h as qe,i as Wt,j as Ze}from"./request.fbc656d8.js";import{d as Zt,r as I,c as P,o as Xt,ae as Xe,a as Q,b as ye,e as Re,Q as Je,R as Qe,p as oe,n as Y,q as Jt,k as be,t as Ye,i as et,g as Qt,f as tt,F as Yt,j as en,h as Et,T as tn,X as $e,m as nn,ao as nt,ap as Tt,$ as _e,aq as an,V as He,w as rn,Y as at,ar as ee}from"./index.b4965edf.js";import{c as V}from"./common.8c8d61d6.js";import{E as Z}from"./index.15e73748.js";import{b as ln,d as Se,E as sn,a8 as on,u as un,a7 as rt,_ as cn,K as fn,a4 as xe,L as dn,F as gn,a1 as lt,a9 as hn}from"./base.dd187116.js";import{v as st,L as ot}from"./directive.a3352099.js";const pn={install(t){t.directive("loading",st),t.config.globalProperties.$loading=ot},directive:st,service:ot},Lt=["success","info","warning","error"],mn=ln({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:Se([String,Object]),default:""},id:{type:String,default:""},message:{type:Se([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:Se(Function),default:()=>{}},onClose:{type:Se(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...Lt,""],default:""},zIndex:{type:Number,default:0}}),vn={destroy:()=>!0},yn=Zt({name:"ElNotification",components:{ElIcon:sn,...on},props:mn,emits:vn,setup(t){const e=un("notification"),n=I(!1);let a;const r=P(()=>{const S=t.type;return S&&rt[t.type]?e.m(S):""}),s=P(()=>rt[t.type]||t.icon||""),l=P(()=>t.position.endsWith("right")?"right":"left"),i=P(()=>t.position.startsWith("top")?"top":"bottom"),u=P(()=>({[i.value]:`${t.offset}px`,zIndex:t.zIndex}));function d(){t.duration>0&&({stop:a}=fn(()=>{n.value&&m()},t.duration))}function g(){a==null||a()}function m(){n.value=!1}function v({code:S}){S===xe.delete||S===xe.backspace?g():S===xe.esc?n.value&&m():d()}return Xt(()=>{d(),n.value=!0}),qt(document,"keydown",v),{ns:e,horizontalClass:l,typeClass:r,iconComponent:s,positionStyle:u,visible:n,close:m,clearTimer:g,startTimer:d}}}),bn=["id"],Sn=["textContent"],Cn={key:0},wn=["innerHTML"];function kn(t,e,n,a,r,s){const l=Xe("el-icon"),i=Xe("close");return Q(),ye(tn,{name:t.ns.b("fade"),onBeforeLeave:t.onClose,onAfterLeave:e[3]||(e[3]=u=>t.$emit("destroy")),persisted:""},{default:Re(()=>[Je(oe("div",{id:t.id,class:Y([t.ns.b(),t.customClass,t.horizontalClass]),style:et(t.positionStyle),role:"alert",onMouseenter:e[0]||(e[0]=(...u)=>t.clearTimer&&t.clearTimer(...u)),onMouseleave:e[1]||(e[1]=(...u)=>t.startTimer&&t.startTimer(...u)),onClick:e[2]||(e[2]=(...u)=>t.onClick&&t.onClick(...u))},[t.iconComponent?(Q(),ye(l,{key:0,class:Y([t.ns.e("icon"),t.typeClass])},{default:Re(()=>[(Q(),ye(Jt(t.iconComponent)))]),_:1},8,["class"])):be("v-if",!0),oe("div",{class:Y(t.ns.e("group"))},[oe("h2",{class:Y(t.ns.e("title")),textContent:Ye(t.title)},null,10,Sn),Je(oe("div",{class:Y(t.ns.e("content")),style:et(t.title?void 0:{margin:0})},[Qt(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(Q(),tt(Yt,{key:1},[be(" Caution here, message could've been compromized, nerver use user's input as message "),be(" eslint-disable-next-line "),oe("p",{innerHTML:t.message},null,8,wn)],2112)):(Q(),tt("p",Cn,Ye(t.message),1))])],6),[[Qe,t.message]]),t.showClose?(Q(),ye(l,{key:0,class:Y(t.ns.e("closeBtn")),onClick:en(t.close,["stop"])},{default:Re(()=>[Et(i)]),_:1},8,["class","onClick"])):be("v-if",!0)],2)],46,bn),[[Qe,t.visible]])]),_:3},8,["name","onBeforeLeave"])}var En=cn(yn,[["render",kn],["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const Le={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},ze=16;let Tn=1;const le=function(t={},e=null){if(!dn)return{close:()=>{}};(typeof t=="string"||$e(t))&&(t={message:t});const n=t.position||"top-right";let a=t.offset||0;Le[n].forEach(({vm:m})=>{var v;a+=(((v=m.el)==null?void 0:v.offsetHeight)||0)+ze}),a+=ze;const{nextZIndex:r}=gn(),s=`notification_${Tn++}`,l=t.onClose,i={zIndex:r(),offset:a,...t,id:s,onClose:()=>{Ln(s,n,l)}};let u=document.body;lt(t.appendTo)?u=t.appendTo:nn(t.appendTo)&&(u=document.querySelector(t.appendTo)),lt(u)||(u=document.body);const d=document.createElement("div"),g=Et(En,i,$e(i.message)?{default:()=>i.message}:null);return g.appContext=e!=null?e:le._context,g.props.onDestroy=()=>{nt(null,d)},nt(g,d),Le[n].push({vm:g}),u.appendChild(d.firstElementChild),{close:()=>{g.component.proxy.visible=!1}}};Lt.forEach(t=>{le[t]=(e={})=>((typeof e=="string"||$e(e))&&(e={message:e}),le({...e,type:t}))});function Ln(t,e,n){const a=Le[e],r=a.findIndex(({vm:d})=>{var g;return((g=d.component)==null?void 0:g.props.id)===t});if(r===-1)return;const{vm:s}=a[r];if(!s)return;n==null||n(s);const l=s.el.offsetHeight,i=e.split("-")[0];a.splice(r,1);const u=a.length;if(!(u<1))for(let d=r;d<u;d++){const{el:g,component:m}=a[d].vm,v=Number.parseInt(g.style[i],10)-l-ze;m.props.offset=v}}function Fn(){for(const t of Object.values(Le))t.forEach(({vm:e})=>{e.component.proxy.visible=!1})}le.closeAll=Fn;le._context=null;const Pn=hn(le,"$notify"),Ft=Tt("storageConfigStore",{state:()=>({config:{siteName:"",directLinkPrefix:"",defaultSwitchToImgMode:!1,infoEnable:!1,showLinkBtn:!1,recordDownloadLog:!1,showShortLink:!1,showPathLink:!1,tableSize:"small",rootShowStorage:!0,fileClickMode:"dbclick",showDocument:!1,debugMode:!1,domain:"",icp:"123",avatar:"",announcement:"",layout:"full",showAnnouncement:!1,searchEnable:!1,showLogin:!1}}),actions:{updateConfig(t){this.config=t}}}),{width:it,height:An}=_t();function Fa(){const t=P(()=>it.value<768),e=P(()=>it.value>=768);return{isMobile:t,isNotMobile:e,height:An}}const Pe=Tt("fileDataStore",{state:()=>({currentClickRow:{},currentRightClickRow:{},currentStorageSource:{id:null,type:{description:"",key:""}},imgMode:!1,newImgMode:!1,oldStorageKey:null,searchParam:"",fileListSource:[],audioArray:[],audioIndex:0}),getters:{filterFileByType:t=>e=>t.fileListSource.filter(function(n){if(n.type==="BACK")return!1;let a=n.name,r=a.substr(a.lastIndexOf(".")+1).toLowerCase();return V.constant.fileTypeMap[e].indexOf(r)!==-1}),fileList:t=>{let e=t.fileListSource;return e.forEach(n=>{if(n.icon||(n.icon=V.getFileIconName(n)),n.preview!==null){var a=V.getFileType(n.name);a?(n.fileType=a,n.preview=V.constant.previewFileType.indexOf(a)!==-1):n.preview=!1}}),e}},actions:{updateCurrentStorageSource(t){this.currentStorageSource=t},updateAudioIndex(t){this.audioIndex=t},updateAudioList(t){this.audioArray=t},updateCurrentClickRow(t){this.currentClickRow=t},updateCurrentRightClickRow(t){this.currentRightClickRow=t},updateFileList(t){this.fileListSource=t},updateNewImgMode(t){this.newImgMode=t},updateOldStorageKey(t){this.oldStorageKey=t},updateSearchParam(t){this.searchParam=t},switchImgMode(t){this.imgMode=t}}});var me={};Object.defineProperty(me,"__esModule",{value:!0});var ve=me.removeDuplicateSlashes=me.transform=void 0;const Dn=/(?!^)\/{2,}/g;function Rn(t){return t.map(e=>Pt(e))}me.transform=Rn;function Pt(t){return t.replace(Dn,"/")}ve=me.removeDuplicateSlashes=Pt;const xn=t=>K({url:"/api/file/operator/mkdir",method:"post",data:t}),Mn=t=>K({url:"/api/file/operator/delete/file",method:"post",data:t}),On=t=>K({url:"/api/file/operator/delete/folder",method:"post",data:t}),In=t=>K({url:"/api/file/operator/rename/file",method:"post",data:t}),Bn=t=>K({url:"/api/file/operator/rename/folder",method:"post",data:t}),$n=t=>K({url:"/api/file/operator/upload/file",method:"post",data:t}),zn=typeof process=="object"&&process&&process.platform==="win32";var jn=zn?{sep:"\\"}:{sep:"/"},Un=At;function At(t,e,n){t instanceof RegExp&&(t=ut(t,n)),e instanceof RegExp&&(e=ut(e,n));var a=Dt(t,e,n);return a&&{start:a[0],end:a[1],pre:n.slice(0,a[0]),body:n.slice(a[0]+t.length,a[1]),post:n.slice(a[1]+e.length)}}function ut(t,e){var n=e.match(t);return n?n[0]:null}At.range=Dt;function Dt(t,e,n){var a,r,s,l,i,u=n.indexOf(t),d=n.indexOf(e,u+1),g=u;if(u>=0&&d>0){if(t===e)return[u,d];for(a=[],s=n.length;g>=0&&!i;)g==u?(a.push(g),u=n.indexOf(t,g+1)):a.length==1?i=[a.pop(),d]:(r=a.pop(),r<s&&(s=r,l=d),d=n.indexOf(e,g+1)),g=u<d&&u>=0?u:d;a.length&&(i=[s,l])}return i}var Rt=Un,Nn=qn,xt="\0SLASH"+Math.random()+"\0",Mt="\0OPEN"+Math.random()+"\0",Ge="\0CLOSE"+Math.random()+"\0",Ot="\0COMMA"+Math.random()+"\0",It="\0PERIOD"+Math.random()+"\0";function Me(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function Kn(t){return t.split("\\\\").join(xt).split("\\{").join(Mt).split("\\}").join(Ge).split("\\,").join(Ot).split("\\.").join(It)}function Vn(t){return t.split(xt).join("\\").split(Mt).join("{").split(Ge).join("}").split(Ot).join(",").split(It).join(".")}function Bt(t){if(!t)return[""];var e=[],n=Rt("{","}",t);if(!n)return t.split(",");var a=n.pre,r=n.body,s=n.post,l=a.split(",");l[l.length-1]+="{"+r+"}";var i=Bt(s);return s.length&&(l[l.length-1]+=i.shift(),l.push.apply(l,i)),e.push.apply(e,l),e}function qn(t){return t?(t.substr(0,2)==="{}"&&(t="\\{\\}"+t.substr(2)),de(Kn(t),!0).map(Vn)):[]}function _n(t){return"{"+t+"}"}function Hn(t){return/^-?0\d/.test(t)}function Gn(t,e){return t<=e}function Wn(t,e){return t>=e}function de(t,e){var n=[],a=Rt("{","}",t);if(!a)return[t];var r=a.pre,s=a.post.length?de(a.post,!1):[""];if(/\$$/.test(a.pre))for(var l=0;l<s.length;l++){var i=r+"{"+a.body+"}"+s[l];n.push(i)}else{var u=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(a.body),d=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(a.body),g=u||d,m=a.body.indexOf(",")>=0;if(!g&&!m)return a.post.match(/,.*\}/)?(t=a.pre+"{"+a.body+Ge+a.post,de(t)):[t];var v;if(g)v=a.body.split(/\.\./);else if(v=Bt(a.body),v.length===1&&(v=de(v[0],!1).map(_n),v.length===1))return s.map(function(D){return a.pre+v[0]+D});var S;if(g){var b=Me(v[0]),F=Me(v[1]),A=Math.max(v[0].length,v[1].length),T=v.length==3?Math.abs(Me(v[2])):1,h=Gn,p=F<b;p&&(T*=-1,h=Wn);var f=v.some(Hn);S=[];for(var o=b;h(o,F);o+=T){var c;if(d)c=String.fromCharCode(o),c==="\\"&&(c="");else if(c=String(o),f){var w=A-c.length;if(w>0){var C=new Array(w+1).join("0");o<0?c="-"+C+c.slice(1):c=C+c}}S.push(c)}}else{S=[];for(var k=0;k<v.length;k++)S.push.apply(S,de(v[k],!1))}for(var k=0;k<S.length;k++)for(var l=0;l<s.length;l++){var i=r+S[k]+s[l];(!e||g||i)&&n.push(i)}}return n}const $=$t=(t,e,n={})=>(Fe(e),!n.nocomment&&e.charAt(0)==="#"?!1:new Ae(e,n).match(t));var $t=$;const je=jn;$.sep=je.sep;const j=Symbol("globstar **");$.GLOBSTAR=j;const Zn=Nn,ct={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},Ue="[^/]",Oe=Ue+"*?",Xn="(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?",Jn="(?:(?!(?:\\/|^)\\.).)*?",zt=t=>t.split("").reduce((e,n)=>(e[n]=!0,e),{}),ft=zt("().*{}+?[]^$\\!"),Qn=zt("[.("),dt=/\/+/;$.filter=(t,e={})=>(n,a,r)=>$(n,t,e);const q=(t,e={})=>{const n={};return Object.keys(t).forEach(a=>n[a]=t[a]),Object.keys(e).forEach(a=>n[a]=e[a]),n};$.defaults=t=>{if(!t||typeof t!="object"||!Object.keys(t).length)return $;const e=$,n=(a,r,s)=>e(a,r,q(t,s));return n.Minimatch=class extends e.Minimatch{constructor(r,s){super(r,q(t,s))}},n.Minimatch.defaults=a=>e.defaults(q(t,a)).Minimatch,n.filter=(a,r)=>e.filter(a,q(t,r)),n.defaults=a=>e.defaults(q(t,a)),n.makeRe=(a,r)=>e.makeRe(a,q(t,r)),n.braceExpand=(a,r)=>e.braceExpand(a,q(t,r)),n.match=(a,r,s)=>e.match(a,r,q(t,s)),n};$.braceExpand=(t,e)=>jt(t,e);const jt=(t,e={})=>(Fe(t),e.nobrace||!/\{(?:(?!\{).)*\}/.test(t)?[t]:Zn(t)),Yn=1024*64,Fe=t=>{if(typeof t!="string")throw new TypeError("invalid pattern");if(t.length>Yn)throw new TypeError("pattern is too long")},Ce=Symbol("subparse");$.makeRe=(t,e)=>new Ae(t,e||{}).makeRe();$.match=(t,e,n={})=>{const a=new Ae(e,n);return t=t.filter(r=>a.match(r)),a.options.nonull&&!t.length&&t.push(e),t};const ea=t=>t.replace(/\\(.)/g,"$1"),ta=t=>t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");class Ae{constructor(e,n){Fe(e),n||(n={}),this.options=n,this.set=[],this.pattern=e,this.windowsPathsNoEscape=!!n.windowsPathsNoEscape||n.allowWindowsEscape===!1,this.windowsPathsNoEscape&&(this.pattern=this.pattern.replace(/\\/g,"/")),this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.partial=!!n.partial,this.make()}debug(){}make(){const e=this.pattern,n=this.options;if(!n.nocomment&&e.charAt(0)==="#"){this.comment=!0;return}if(!e){this.empty=!0;return}this.parseNegate();let a=this.globSet=this.braceExpand();n.debug&&(this.debug=(...r)=>console.error(...r)),this.debug(this.pattern,a),a=this.globParts=a.map(r=>r.split(dt)),this.debug(this.pattern,a),a=a.map((r,s,l)=>r.map(this.parse,this)),this.debug(this.pattern,a),a=a.filter(r=>r.indexOf(!1)===-1),this.debug(this.pattern,a),this.set=a}parseNegate(){if(this.options.nonegate)return;const e=this.pattern;let n=!1,a=0;for(let r=0;r<e.length&&e.charAt(r)==="!";r++)n=!n,a++;a&&(this.pattern=e.substr(a)),this.negate=n}matchOne(e,n,a){var r=this.options;this.debug("matchOne",{this:this,file:e,pattern:n}),this.debug("matchOne",e.length,n.length);for(var s=0,l=0,i=e.length,u=n.length;s<i&&l<u;s++,l++){this.debug("matchOne loop");var d=n[l],g=e[s];if(this.debug(n,d,g),d===!1)return!1;if(d===j){this.debug("GLOBSTAR",[n,d,g]);var m=s,v=l+1;if(v===u){for(this.debug("** at the end");s<i;s++)if(e[s]==="."||e[s]===".."||!r.dot&&e[s].charAt(0)===".")return!1;return!0}for(;m<i;){var S=e[m];if(this.debug(`
globstar while`,e,m,n,v,S),this.matchOne(e.slice(m),n.slice(v),a))return this.debug("globstar found match!",m,i,S),!0;if(S==="."||S===".."||!r.dot&&S.charAt(0)==="."){this.debug("dot detected!",e,m,n,v);break}this.debug("globstar swallow a segment, and continue"),m++}return!!(a&&(this.debug(`
>>> no match, partial?`,e,m,n,v),m===i))}var b;if(typeof d=="string"?(b=g===d,this.debug("string match",d,g,b)):(b=g.match(d),this.debug("pattern match",d,g,b)),!b)return!1}if(s===i&&l===u)return!0;if(s===i)return a;if(l===u)return s===i-1&&e[s]==="";throw new Error("wtf?")}braceExpand(){return jt(this.pattern,this.options)}parse(e,n){Fe(e);const a=this.options;if(e==="**")if(a.noglobstar)e="*";else return j;if(e==="")return"";let r="",s=!!a.nocase,l=!1;const i=[],u=[];let d,g=!1,m=-1,v=-1,S,b,F;const A=e.charAt(0)==="."?"":a.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",T=()=>{if(d){switch(d){case"*":r+=Oe,s=!0;break;case"?":r+=Ue,s=!0;break;default:r+="\\"+d;break}this.debug("clearStateChar %j %j",d,r),d=!1}};for(let f=0,o;f<e.length&&(o=e.charAt(f));f++){if(this.debug("%s	%s %s %j",e,f,r,o),l){if(o==="/")return!1;ft[o]&&(r+="\\"),r+=o,l=!1;continue}switch(o){case"/":return!1;case"\\":T(),l=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s	%s %s %j <-- stateChar",e,f,r,o),g){this.debug("  in class"),o==="!"&&f===v+1&&(o="^"),r+=o;continue}this.debug("call clearStateChar %j",d),T(),d=o,a.noext&&T();continue;case"(":if(g){r+="(";continue}if(!d){r+="\\(";continue}i.push({type:d,start:f-1,reStart:r.length,open:ct[d].open,close:ct[d].close}),r+=d==="!"?"(?:(?!(?:":"(?:",this.debug("plType %j %j",d,r),d=!1;continue;case")":if(g||!i.length){r+="\\)";continue}T(),s=!0,b=i.pop(),r+=b.close,b.type==="!"&&u.push(b),b.reEnd=r.length;continue;case"|":if(g||!i.length){r+="\\|";continue}T(),r+="|";continue;case"[":if(T(),g){r+="\\"+o;continue}g=!0,v=f,m=r.length,r+=o;continue;case"]":if(f===v+1||!g){r+="\\"+o;continue}S=e.substring(v+1,f);try{RegExp("["+S+"]")}catch{F=this.parse(S,Ce),r=r.substr(0,m)+"\\["+F[0]+"\\]",s=s||F[1],g=!1;continue}s=!0,g=!1,r+=o;continue;default:T(),ft[o]&&!(o==="^"&&g)&&(r+="\\"),r+=o;break}}for(g&&(S=e.substr(v+1),F=this.parse(S,Ce),r=r.substr(0,m)+"\\["+F[0],s=s||F[1]),b=i.pop();b;b=i.pop()){let f;f=r.slice(b.reStart+b.open.length),this.debug("setting tail",r,b),f=f.replace(/((?:\\{2}){0,64})(\\?)\|/g,(c,w,C)=>(C||(C="\\"),w+w+C+"|")),this.debug(`tail=%j
   %s`,f,f,b,r);const o=b.type==="*"?Oe:b.type==="?"?Ue:"\\"+b.type;s=!0,r=r.slice(0,b.reStart)+o+"\\("+f}T(),l&&(r+="\\\\");const h=Qn[r.charAt(0)];for(let f=u.length-1;f>-1;f--){const o=u[f],c=r.slice(0,o.reStart),w=r.slice(o.reStart,o.reEnd-8);let C=r.slice(o.reEnd);const k=r.slice(o.reEnd-8,o.reEnd)+C,D=c.split("(").length-1;let R=C;for(let E=0;E<D;E++)R=R.replace(/\)[+*?]?/,"");C=R;const y=C===""&&n!==Ce?"$":"";r=c+w+C+y+k}if(r!==""&&s&&(r="(?=.)"+r),h&&(r=A+r),n===Ce)return[r,s];if(!s)return ea(e);const p=a.nocase?"i":"";try{return Object.assign(new RegExp("^"+r+"$",p),{_glob:e,_src:r})}catch{return new RegExp("$.")}}makeRe(){if(this.regexp||this.regexp===!1)return this.regexp;const e=this.set;if(!e.length)return this.regexp=!1,this.regexp;const n=this.options,a=n.noglobstar?Oe:n.dot?Xn:Jn,r=n.nocase?"i":"";let s=e.map(l=>(l=l.map(i=>typeof i=="string"?ta(i):i===j?j:i._src).reduce((i,u)=>(i[i.length-1]===j&&u===j||i.push(u),i),[]),l.forEach((i,u)=>{i!==j||l[u-1]===j||(u===0?l.length>1?l[u+1]="(?:\\/|"+a+"\\/)?"+l[u+1]:l[u]=a:u===l.length-1?l[u-1]+="(?:\\/|"+a+")?":(l[u-1]+="(?:\\/|\\/"+a+"\\/)"+l[u+1],l[u+1]=j))}),l.filter(i=>i!==j).join("/"))).join("|");s="^(?:"+s+")$",this.negate&&(s="^(?!"+s+").*$");try{this.regexp=new RegExp(s,r)}catch{this.regexp=!1}return this.regexp}match(e,n=this.partial){if(this.debug("match",e,this.pattern),this.comment)return!1;if(this.empty)return e==="";if(e==="/"&&n)return!0;const a=this.options;je.sep!=="/"&&(e=e.split(je.sep).join("/")),e=e.split(dt),this.debug(this.pattern,"split",e);const r=this.set;this.debug(this.pattern,"set",r);let s;for(let l=e.length-1;l>=0&&(s=e[l],!s);l--);for(let l=0;l<r.length;l++){const i=r[l];let u=e;if(a.matchBase&&i.length===1&&(u=[s]),this.matchOne(u,i,n))return a.flipNegate?!0:!this.negate}return a.flipNegate?!1:this.negate}static defaults(e){return $.defaults(e).Minimatch}}$.Minimatch=Ae;var na=$t;const aa=t=>K({url:"/api/storage/files",method:"post",data:t,config:{showDefaultMsg:!1}}),Aa=()=>K({url:"/api/site/config/global",method:"get"}),ra=t=>K({url:"/api/site/config/storage",method:"post",data:t}),Da=t=>K({url:"/api/short-link",method:"get",data:t});function U(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function gt(t,e){for(var n="",a=0,r=-1,s=0,l,i=0;i<=t.length;++i){if(i<t.length)l=t.charCodeAt(i);else{if(l===47)break;l=47}if(l===47){if(!(r===i-1||s===1))if(r!==i-1&&s===2){if(n.length<2||a!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){var u=n.lastIndexOf("/");if(u!==n.length-1){u===-1?(n="",a=0):(n=n.slice(0,u),a=n.length-1-n.lastIndexOf("/")),r=i,s=0;continue}}else if(n.length===2||n.length===1){n="",a=0,r=i,s=0;continue}}e&&(n.length>0?n+="/..":n="..",a=2)}else n.length>0?n+="/"+t.slice(r+1,i):n=t.slice(r+1,i),a=i-r-1;r=i,s=0}else l===46&&s!==-1?++s:s=-1}return n}function la(t,e){var n=e.dir||e.root,a=e.base||(e.name||"")+(e.ext||"");return n?n===e.root?n+a:n+t+a:a}var re={resolve:function(){for(var e="",n=!1,a,r=arguments.length-1;r>=-1&&!n;r--){var s;r>=0?s=arguments[r]:(a===void 0&&(a=process.cwd()),s=a),U(s),s.length!==0&&(e=s+"/"+e,n=s.charCodeAt(0)===47)}return e=gt(e,!n),n?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(U(e),e.length===0)return".";var n=e.charCodeAt(0)===47,a=e.charCodeAt(e.length-1)===47;return e=gt(e,!n),e.length===0&&!n&&(e="."),e.length>0&&a&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return U(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,n=0;n<arguments.length;++n){var a=arguments[n];U(a),a.length>0&&(e===void 0?e=a:e+="/"+a)}return e===void 0?".":re.normalize(e)},relative:function(e,n){if(U(e),U(n),e===n||(e=re.resolve(e),n=re.resolve(n),e===n))return"";for(var a=1;a<e.length&&e.charCodeAt(a)===47;++a);for(var r=e.length,s=r-a,l=1;l<n.length&&n.charCodeAt(l)===47;++l);for(var i=n.length,u=i-l,d=s<u?s:u,g=-1,m=0;m<=d;++m){if(m===d){if(u>d){if(n.charCodeAt(l+m)===47)return n.slice(l+m+1);if(m===0)return n.slice(l+m)}else s>d&&(e.charCodeAt(a+m)===47?g=m:m===0&&(g=0));break}var v=e.charCodeAt(a+m),S=n.charCodeAt(l+m);if(v!==S)break;v===47&&(g=m)}var b="";for(m=a+g+1;m<=r;++m)(m===r||e.charCodeAt(m)===47)&&(b.length===0?b+="..":b+="/..");return b.length>0?b+n.slice(l+g):(l+=g,n.charCodeAt(l)===47&&++l,n.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(U(e),e.length===0)return".";for(var n=e.charCodeAt(0),a=n===47,r=-1,s=!0,l=e.length-1;l>=1;--l)if(n=e.charCodeAt(l),n===47){if(!s){r=l;break}}else s=!1;return r===-1?a?"/":".":a&&r===1?"//":e.slice(0,r)},basename:function(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');U(e);var a=0,r=-1,s=!0,l;if(n!==void 0&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var i=n.length-1,u=-1;for(l=e.length-1;l>=0;--l){var d=e.charCodeAt(l);if(d===47){if(!s){a=l+1;break}}else u===-1&&(s=!1,u=l+1),i>=0&&(d===n.charCodeAt(i)?--i===-1&&(r=l):(i=-1,r=u))}return a===r?r=u:r===-1&&(r=e.length),e.slice(a,r)}else{for(l=e.length-1;l>=0;--l)if(e.charCodeAt(l)===47){if(!s){a=l+1;break}}else r===-1&&(s=!1,r=l+1);return r===-1?"":e.slice(a,r)}},extname:function(e){U(e);for(var n=-1,a=0,r=-1,s=!0,l=0,i=e.length-1;i>=0;--i){var u=e.charCodeAt(i);if(u===47){if(!s){a=i+1;break}continue}r===-1&&(s=!1,r=i+1),u===46?n===-1?n=i:l!==1&&(l=1):n!==-1&&(l=-1)}return n===-1||r===-1||l===0||l===1&&n===r-1&&n===a+1?"":e.slice(n,r)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return la("/",e)},parse:function(e){U(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return n;var a=e.charCodeAt(0),r=a===47,s;r?(n.root="/",s=1):s=0;for(var l=-1,i=0,u=-1,d=!0,g=e.length-1,m=0;g>=s;--g){if(a=e.charCodeAt(g),a===47){if(!d){i=g+1;break}continue}u===-1&&(d=!1,u=g+1),a===46?l===-1?l=g:m!==1&&(m=1):l!==-1&&(m=-1)}return l===-1||u===-1||m===0||m===1&&l===u-1&&l===i+1?u!==-1&&(i===0&&r?n.base=n.name=e.slice(1,u):n.base=n.name=e.slice(i,u)):(i===0&&r?(n.name=e.slice(1,l),n.base=e.slice(1,u)):(n.name=e.slice(i,l),n.base=e.slice(i,u)),n.ext=e.slice(l,u)),i>0?n.dir=e.slice(0,i-1):r&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};re.posix=re;var we=re;let te=null;function Ut(t,e){return te===null&&t&&(te=t),{tableRef:te,clearSelection:()=>{te.value.clearSelection()},toggleRowSelection:(s,l)=>{(s==null?void 0:s.type)!=="BACK"&&te.value.toggleRowSelection(s,l)},toggleAllSelection:()=>{te.value.toggleAllSelection()}}}let ht=_e(),Ie=Pe(),pt=I(!1),mt=I(!1),vt=I(!1);function sa(){return{openVideo:()=>{pt.value=!0},dialogVideoVisible:pt,openText:()=>{mt.value=!0},dialogTextVisible:mt,openOffice:s=>{if(V.getFileSuffix(s.name)==="pdf")vt.value=!0;else{let l=ht.zfileConfig.officePreview.previewUrl(s.url);window.open(l)}},dialogOfficeVisible:vt,openImage:s=>{let l=[],i=0;ht.zfileConfig.imagePreview.mode==="only"?l.push({alt:s.name,src:s.url}):Ie.filterFileByType("image").forEach((d,g)=>{s.name===d.name&&(i=g),l.push({alt:d.name,src:d.url})}),an({options:{initialViewIndex:i},images:l})},openAudio:()=>{Ie.updateAudioList(Ie.filterFileByType("audio"))}}}const ne=Ht("zfile-pwd-cache",{});let ie=Pe(),Ne=Ft();const yt=Gt(Ne.config.siteName);let ke=_e();const{clearSelection:oa}=Ut(),{openAudio:ia,openImage:ua,openOffice:Ra,openText:ca,openVideo:fa}=sa(),N=I([]),ue=I(!1),bt=I(!1);let St=He([]),_=He({path:"",password:"",orderBy:"",orderDirection:""});const Ct=I({}),wt=I(!1);function We(t,e){const n=o=>o.type==="FILE"||o.type==="FOLDER",a=({prop:o,order:c})=>{_.orderBy=o,_.orderDirection=c==="descending"?"desc":"asc",l()},r=P(()=>e.params.fullpath?"/"+e.params.fullpath.join("/"):"/"),s=P(()=>e.params.storageKey),l=o=>{if(!s.value)return;ue.value=!0,_.path=r.value;let c=o||{};c.storageKey=s.value,c.path=r.value,c.password=c.password||T(),c.orderBy=_.orderBy,c.orderDirection=_.orderDirection;let w=s.value;aa(c).then(C=>{let k=C.data.passwordPattern;if(h(k,c.password),w!==s.value)return;s.value!==ie.oldStorageKey&&ie.updateOldStorageKey(s.value);let D=C.data.files,R=_.path;if(R!==""&&R!=="/"){let y=we.basename(we.resolve(r.value,"../"));D.unshift({name:y||"/",path:we.resolve(R,"../"),type:"BACK"})}ie.updateFileList(D),ue.value=!1,bt.value=!0,N.value=[],e.params.fullpath?yt.value=Ne.config.siteName+" | "+e.params.fullpath[e.params.fullpath.length-1]:yt.value=Ne.config.siteName+" | \u9996\u9875"}).catch(C=>{let k=C.response.data;k.code===V.responseCode.INVALID_PASSWORD?(z.warning("\u5BC6\u7801\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01"),A()):k.code===V.responseCode.REQUIRED_PASSWORD?(z.warning("\u6B64\u6587\u4EF6\u5939\u9700\u8981\u5BC6\u7801\uFF0C\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"),A()):z.error(k.msg)})},i=()=>{let o={storageKey:e.params.storageKey,path:r.value};ra(o).then(c=>{Ct.value=c.data}).finally(()=>{wt.value=!0})},u=o=>{if(!!o.name)if(ie.updateCurrentClickRow(o),o.type==="FILE"){const{batchDownloadFile:c}=Nt(t,e);switch(o.fileType){case"video":fa();break;case"image":ua(o);break;case"text":ca();break;case"audio":ia(o);break;default:c(o)}oa()}else if(o.type==="ROOT")t.push(o.path);else if(o.type==="BACK"){if(ke.zfileConfig.fileList.backHandler==="dbclick"){let c=ve("/"+s.value+"/"+o.path);t.push(c)}}else{let c=ve("/"+s.value+"/"+o.path+"/"+o.name);t.push(c)}},d=({row:o,rowIndex:c})=>(o.index=c,N.value.indexOf(o)!==-1?"select-row":""),g=P(()=>N.value.length>0?N.value[N.value.length-1]:null),m=P(()=>N.value.filter(o=>o.type==="FILE")),v=P(()=>N.value.filter(o=>o.type==="FOLDER")),S=o=>{N.value=o};let b=P(()=>{let o=ke.zfileConfig.skeleton.enable,c=ke.zfileConfig.skeleton.show;return o?c==="always"?ue.value:bt.value?!1:ue.value:!1});for(let o=0;o<ke.zfileConfig.skeleton.size;o++)St.push({});let F=P(()=>b.value?!1:ue.value),A=()=>{Z.prompt("\u8BF7\u8F93\u5165\u5BC6\u7801","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",inputValidator(o){return!!o},inputErrorMessage:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A."}).then(({value:o})=>{l({password:o})}).catch(()=>{t.push("/"+s.value+we.resolve(_.path,"../"))})},T=()=>{for(let o of Object.keys(ne.value))if(o===s.value){for(let c of Object.keys(ne.value[o]))if(na(r.value,c))return ne.value[o][c]}return""},h=(o,c)=>{o&&(ne.value[s.value]||(ne.value[s.value]={}),ne.value[s.value][o]=c)};const p=P(()=>{let o=0,c=0,w=0,C=0,k=ie.fileList;for(let D=0;D<k.length;D++){let R=k[D];R.type==="FOLDER"?C++:R.type==="FILE"&&(w++,c+=R.size)}return o=C+w,{total:o,size:c,fileCount:w,dirCount:C}}),f=P(()=>{let o=N.value.length,c=m.value.length,w=v.value.length,C=o===1,k=o>1;return{isSingleSelect:C,isMultiSelect:k,isAllFile:c===o,isAllFolder:w===o}});return{currentPath:r,storageKey:s,loadFile:l,openRow:u,searchParam:_,sortChangeMethod:a,checkSelectable:n,selectRow:g,selectRows:N,selectFiles:m,selectFolders:v,selectRowsChange:S,tableRowClassName:d,skeletonLoading:b,skeletonData:St,basicLoading:F,statistics:p,selectStatistics:f,storageConfig:Ct,initStorageConfig:wt,loadFileConfig:i}}const ae=I([]),kt=I(!1);function Nt(t,e){const{currentPath:n,storageKey:a,loadFile:r,storageConfig:s,selectRows:l,selectRow:i,selectFolders:u,selectFiles:d}=We(t,e),g=p=>{if(!l.value&&l.value.length===0){z.warning("\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6");return}let f;if(p.name)f=`\u662F\u5426\u786E\u8BA4\u4E0B\u8F7D\u6587\u4EF6 ${p.name}\uFF1F`;else if(l.value.length===1){debugger;f=`\u662F\u5426\u786E\u8BA4\u4E0B\u8F7D\u6587\u4EF6 ${l.value[0].name}\uFF1F`}else l.value.length>1&&(f=`\u662F\u5426\u786E\u8BA4\u6279\u91CF\u4E0B\u8F7D ${l.value.length} \u4E2A\u6587\u4EF6\uFF1F`);Z.confirm(f,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"info",callback:o=>{o==="confirm"&&(p.name?m(p.url):l.value.forEach(c=>{c.type==="FILE"&&m(c.url)}))}})},m=p=>{const f=document.createElement("iframe");f.style.display="none",f.style.height=0,f.src=p,document.body.appendChild(f),setTimeout(()=>{f.remove()},5*60*1e3)},v=()=>{Z.prompt(`\u5728 <b>${n.value}</b> \u4E0B\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u8BF7\u8F93\u5165\u8981\u521B\u5EFA\u7684\u6587\u4EF6\u5939\u540D\u79F0`,"\u63D0\u793A",{dangerouslyUseHTMLString:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",draggable:!0,inputValidator(p){return p?p.includes("/")?"\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u5305\u542B /":!0:"\u6587\u4EF6\u5939\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}}).then(({value:p})=>{let f={storageKey:a.value,path:n.value,name:p};xn(f).then(()=>{z.success("\u521B\u5EFA\u6210\u529F")}).finally(()=>{r()})})},S=()=>{let p=i.value;if(p===null){z.warning("\u8BF7\u5148\u9009\u4E2D\u4E00\u4E2A\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF01");return}Z.prompt(`\u5C06 <b>${p.name}</b> \u4FEE\u6539\u4E3A\uFF1A`,"\u63D0\u793A",{dangerouslyUseHTMLString:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",inputValue:p.name,inputValidator(f){return!!f},inputErrorMessage:"\u6A21\u677F\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A."}).then(({value:f})=>{let o={storageKey:a.value,path:n.value,name:p.name,newName:f},c;p.type==="FILE"?c=In:p.type==="FOLDER"&&(c=Bn),c(o).then(()=>{z.success("\u91CD\u547D\u540D\u6210\u529F")}).finally(()=>{r()})})},b=()=>{z.warning("\u6682\u672A\u5B9E\u73B0")},F=()=>{z.warning("\u6682\u672A\u5B9E\u73B0")},A=()=>{if(!s.value.enableFileOperator)return;if(l.value.length===0){z.warning("\u8BF7\u5148\u81F3\u5C11\u9009\u4E2D\u4E00\u4E2A\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF01");return}let p="\u662F\u5426\u786E\u8BA4\u6279\u91CF\u5220\u9664 ";u.value.length>0&&(p+=" "+u.value.length+" \u4E2A\u6587\u4EF6\u5939(\u5982\u6587\u4EF6\u5939\u975E\u7A7A\uFF0C\u53EF\u80FD\u4F1A\u5220\u9664\u5931\u8D25)"),u.value.length>0&&d.value.length>0&&(p+="\uFF0C"),d.value.length>0&&(p+=d.value.length+" \u4E2A\u6587\u4EF6"),p+="?",ae.value=[],Z.confirm(p,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",draggable:!0,callback:o=>{o==="confirm"&&(l.value.length>1?(kt.value=!0,l.value.forEach(c=>{f(c).then(()=>{ae.value.push({name:c.name,status:!0})}).catch(()=>{ae.value.push({name:c.name,status:!1})})})):f(i.value).then(c=>{z.success("\u5220\u9664\u6210\u529F"),r()}))}});const f=o=>{let c={storageKey:a.value,path:n.value,name:o.name};return o.type==="FOLDER"?On(c):Mn(c)}},T=()=>{ae.value=[],r()},h=P(()=>Math.floor(ae.value.length/l.value.length*100));return{batchDownloadFile:g,rename:S,newFolder:v,moveTo:b,copyTo:F,batchDelete:A,batchDeleteResult:ae,batchDeleteDialogShow:kt,batchDeleteCloseAction:T,batchDeletePercentage:h}}let da=_e(),ga=Ft(),W=Pe();const{clearSelection:Ke,toggleRowSelection:Ee,toggleAllSelection:ha}=Ut(),pa=qe("Meta"),ma=qe("Control"),va=qe("Shift");let ya=P(()=>pa.value||ma.value),Ve,Te;window.addEventListener("keydown",function(t){var e;t.key==="Escape"&&ge()?Ke():t.key==="a"&&(t.metaKey||t.ctrlKey)&&ge()?(t.preventDefault(),ha()):t.key==="Delete"&&ge()?Ve&&((e=Te==null?void 0:Te.value)==null?void 0:e.length)>0&&(t.preventDefault(),Ve()):t.key==="Backspace"&&ge()&&W.fileList.length>0&&W.fileList[0].type==="BACK"&&Kt(W.fileList[0])},!1);const ge=()=>document.querySelector(".zfile-index-body:hover")&&!document.querySelector(".el-popup-parent--hidden"),he=I(-1),pe=I(-1),{pressed:ba}=Wt();rn(()=>ba.value,(t,e)=>{t===!1&&e===!0&&(he.value=-1,pe.value=-1)});let Kt;function xa(t,e){const{storageKey:n,skeletonLoading:a,openRow:r,selectRows:s,selectRow:l,currentPath:i}=We(t,e);Ve=Nt(t,e).batchDelete,Te=s;const u=(v,S)=>{var A;let b=S.type==="selection";if(v.type==="BACK"){if(da.zfileConfig.fileList.backHandler==="click"){let T=ve("/"+n.value+"/"+v.path);t.push(T)}return}if(!b&&ga.config.fileClickMode==="click"){r(v);return}if(a.value)return;let F=s.value.length===1&&((A=l.value)==null?void 0:A.name)===v.name;if(va.value){let T=W.fileList.findIndex(h=>h.name===l.value.name);if(T!==null){let h=W.fileList.findIndex(o=>o.name===v.name),p=Math.min(h,T),f=Math.max(h,T);for(let o=p+1;o<f;o++){let c=W.fileList[o];Ee(c,!0)}}}else!ya.value&&!F&&!b&&Ke();Ee(v)};return Kt=u,{tableClickRow:u,tableDbClickRow:v=>{a.value||r(v)},tableHoverRow:(v,S,b,F)=>{if(F.buttons===1&&he.value!==-1){if(pe.value===-1){Ke();let f=W.fileList[he.value];Ee(f,!0)}let A=v.index,T=pe.value>=0?pe.value:A-1,h=Math.min(T,A),p=Math.max(T,A);for(let f=h;f<=p;f++){let o=W.fileList[f];Ee(o,!0)}pe.value=A}},tableLeaveRow:(v,S,b,F)=>{F.buttons===1&&he.value===-1&&(he.value=v.index)}}}const H=I(!1),G=He([]),J=new Map,Be=new Map;let Sa=0,ce=Pe(),fe=I(!1);function Ma(t,e){const{currentPath:n,storageKey:a,storageConfig:r}=We(t,e),s=h=>{h=document.querySelector("body");const p=y=>{var M,B;if(w(),fe.value=!1,!ge()||r.value.enableFileOperator===!1||!a.value||H.value)return;y.stopPropagation(),y.preventDefault();const E=pn.service({text:"\u6587\u4EF6\u8BFB\u53D6\u4E2D...",background:"rgba(0, 0, 0, .3)"}),L=((M=y.clipboardData)==null?void 0:M.items)||((B=y.dataTransfer)==null?void 0:B.items);o(L).then(x=>{if(at(()=>{E.close()}),x.length===0)return;let O=[];x.forEach((X,se)=>{X.name===".DS_Store"&&O.push(se)});const De=()=>{H.value=!0,x.forEach(X=>{A({file:X})})};O.length>0?Z.confirm(`\u68C0\u6D4B\u5230\u6709 ${O.length} \u4E2A .DS_Store \u6587\u4EF6\uFF0C\u662F\u5426\u4E0A\u4F20\u65F6\u8DF3\u8FC7\u8FD9\u4E9B\u6587\u4EF6`,"\u63D0\u793A",{confirmButtonText:"\u8DF3\u8FC7\u8FD9\u4E9B\u6587\u4EF6",cancelButtonText:"\u4F9D\u65E7\u4E0A\u4F20",type:"success",callback:X=>{if(X==="confirm")for(let se=O.length-1;se>=0;se--){let Vt=O[se];x.splice(Vt,1)}De()}}):x.length>100?Z.confirm(`\u6587\u4EF6\u6570\u91CF\u4E3A ${x.length} \u4E2A\uFF0C\u662F\u5426\u786E\u8BA4\u4E0A\u4F20\uFF1F`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:X=>{X==="confirm"&&De()}}):De()})};let f=null;h.addEventListener("dragenter",y=>{!a.value||H.value||r.value.enableFileOperator!==!1&&(f=y.target,c(),y.stopPropagation(),y.preventDefault(),fe.value=!0)},!1),h.addEventListener("dragover",function(y){!a.value||H.value||r.value.enableFileOperator!==!1&&(y.stopPropagation(),y.preventDefault(),fe.value=!0)},!1),h.addEventListener("dragleave",function(y){!a.value||H.value||r.value.enableFileOperator!==!1&&(f===y.target&&(w(),fe.value=!1),y.stopPropagation(),y.preventDefault())},!1),h.addEventListener("drop",p,!1),h.addEventListener("paste",p,!1);const o=async y=>{let E=[],L=[];if(y){let M=new Array(...y);for(let B=0;B<M.length;B++){let x=M[B],O=null;if(x.webkitGetAsEntry)O=x.webkitGetAsEntry();else if(x.getAsEntry)O=x.getAsEntry();else{z.warning("\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u62D6\u62FD\u4E0A\u4F20");return}L.push(O)}if(L.length>0)for(let B=0;B<L.length;B++){let x=L[B];if(x){let O=await R(x);Array.isArray(O)?D(O,E):E.push(O)}}}return E},c=()=>{h.classList.add("dragging-over")},w=()=>{h.classList.remove("dragging-over")};function C(y){return new Promise((E,L)=>{y.file(M=>{E(M)})})}function k(y){return new Promise((E,L)=>{y.readEntries(M=>{E(M)})})}function D(y,E){for(let L=0;L<y.length;L++)Array.isArray(y[L])?D(y[L],E):E.push(y[L])}async function R(y){let E=y.fullPath||"",L=[];if(y.isFile){let M=await C(y);return M.dropUploadPath=E,M}else if(y.isDirectory){let M=y.createReader(),B=await k(M);for(let x=0;x<B.length;x++){let O=await R(B[x]);L.push(O)}return L}}},l=()=>{H.value=!0},i=()=>{H.value=!0,at(()=>{document.getElementsByClassName("el-upload__input")[0].webkitdirectory=!0})},u=h=>{let p=n.value;if(h.webkitRelativePath||h.dropUploadPath){let o=(h.webkitRelativePath||h.dropUploadPath).split("/");o.forEach((c,w)=>{let C=w===0,k=o.length-1===w;C||k||c&&(p+="/"+c)})}let f={storageKey:a.value,path:ve(p),name:h.name,size:h.size};$n(f).then(o=>{const c=Sa++;let w={name:h.name,size:h.size,speed:"-",progress:0,loaded:0,status:"uploading",startTime:Date.now(),index:c};G.push(w),J.set(c,ee.CancelToken.source()),Be.set(c,G[G.length-1]);const{on:C}=Ze(`cancel-upload-${c}`);C(()=>{let y=J.get(c);y&&(y.cancel(),G.find((E,L)=>{let M=E.name===h.name;return M&&G.splice(L,1),M}))});let k=["local","webdav","ftp","sftp"],D=["s3","tencent","aliyun","qiniu","minio","huawei"],R=["sharepoint","sharepoint-china","onedrive","onedrive-china"];k.includes(ce.currentStorageSource.type.key)?d(h,o.data,c):D.includes(ce.currentStorageSource.type.key)?g(h,o.data,c):R.includes(ce.currentStorageSource.type.key)?v(h,o.data,c):ce.currentStorageSource.type.key==="upyun"&&S(h,o.data,c)})},d=(h,p,f)=>{let o=new FormData;o.append("file",h),ee.post(p,o,{cancelToken:J.get(f).token,onUploadProgress:c=>{m(c,f)}})},g=(h,p,f)=>{ee.put(p,h,{withCredentials:!1,cancelToken:J.get(f).token,onUploadProgress:o=>{m(o,f)}})},m=(h,p)=>{let f=Be.get(p);f.size=h.total,f.loaded=h.loaded,f.progress=Math.round(h.loaded/h.total*100),f.speed=V.fileSizeFormat(Math.round(h.loaded/(Date.now()-f.startTime)*1e3)),f.progress===100&&(f.status="finished",f.endTime=Date.now())},v=(h,p,f)=>{let o=1,c=0,w=0,C=h.size;const k=104857599,D=()=>{c+k>=C?w=C:w=c+k,o>1&&J.set(f,ee.CancelToken.source());let R=h.slice(c,w);ee.put(`${p}`,R,{cancelToken:J.get(f).token,timeout:1e7,headers:{"Content-Type":"application/octet-stream","Content-Range":`bytes ${c}-${w-1}/${h.size}`},type:"sync",withCredentials:!1,onUploadProgress:y=>{if(y.lengthComputable){let E=Be.get(f);const L=y.loaded+c;E.size=C,E.loaded=L,E.progress=Math.round(L/C*100),E.speed=V.fileSizeFormat(Math.round(L/(Date.now()-E.startTime)*1e3)),E.progress===100&&(E.status="finished",E.endTime=Date.now())}}}).then(y=>{y.status===202?(c+=k,o+=1,D()):y.status}).catch(y=>{})};D()},S=(h,p,f)=>{let o=JSON.parse(p),c=new FormData;c.append("name",h.name),c.append("authorization",o.signature),c.append("policy",o.policy),c.append("file",h),ee.post(o.url,c,{withCredentials:!1,cancelToken:J.get(f).token,onUploadProgress:w=>{m(w,f)}})},b=P(()=>{let h=G.length,p=0,f=0;return G.forEach(o=>{o.status==="uploading"?p++:o.status==="finished"&&f++}),{totalSize:h,totalUploading:p,totalFinish:f}}),F=P(()=>G.sort((h,p)=>{let f=h.status==="uploading",o=p.status==="uploading";if(!f&&!o)return h.startTime-p.startTime;if(f&&!o)return-1;if(!f&&o)return 1;if(f&&o)return h.endTime-p.endTime})),A=h=>{let p=ce.fileList.find(f=>{if(f.name===h.file.name)return f});if(p){Pn({zIndex:9999,title:"\u63D0\u793A",message:`\u5F53\u524D\u76EE\u5F55\u5DF2\u5B58\u5728\u6587\u4EF6 ${p.name}, \u8DF3\u8FC7\u4E0A\u4F20.`,type:"warning"});return}u(h.file)};return{visible:H,openUploadDialog:l,openUploadFolderDialog:i,cancelUpload:h=>{Z.confirm(`\u662F\u5426\u786E\u5B9A\u53D6\u6D88\u6587\u4EF6 ${h.name} \u4E0A\u4F20\uFF1F`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u8FD4\u56DE",type:"warning",callback:p=>{p==="confirm"&&Ze(`cancel-upload-${h.index}`).emit()}})},dropState:fe,listenDropFile:s,beforeUpload:A,uploadFile:u,uploadProgressInfoSorted:F,uploadProgressInfoStatistics:b}}export{Ft as a,We as b,Fa as c,Nt as d,Ma as e,Ut as f,xa as g,sa as h,Aa as l,ve as r,Da as s,Pe as u};