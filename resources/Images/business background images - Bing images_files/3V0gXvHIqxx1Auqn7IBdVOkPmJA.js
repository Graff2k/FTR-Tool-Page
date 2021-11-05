var customEvents,__spreadArrays,fallbackMm,EventLoggingModule;_w.EventsToDuplicate=[];_w.useSharedLocalStorage=!1;define("shared",["require","exports"],function(n,t){function s(n,t){for(var r=n.length,i=0;i<r;i++)t(n[i])}function r(n){for(var i=[],t=1;t<arguments.length;t++)i[t-1]=arguments[t];return function(){n.apply(null,i)}}function u(n){i&&event&&(event.returnValue=!1);n&&typeof n.preventDefault=="function"&&n.preventDefault()}function f(n){i&&event&&(event.cancelBubble=!0);n&&typeof n.stopPropagation=="function"&&n.stopPropagation()}function e(n,t,i){for(var r=0;n&&n.offsetParent&&n!=(i||document.body);)r+=n["offset"+t],n=n.offsetParent;return r}function o(){return(new Date).getTime()}function h(n){return i?event:n}function c(n){return i?event?event.srcElement:null:n.target}function l(n){return i?event?event.fromElement:null:n.relatedTarget}function a(n){return i?event?event.toElement:null:n.relatedTarget}function v(n,t,i){while(n&&n!=(i||document.body)){if(n==t)return!0;n=n.parentNode}return!1}function y(n){window.location.href=n}function p(n,t){n&&(n.style.filter=t>=100?"":"alpha(opacity="+t+")",n.style.opacity=t/100)}t.__esModule=!0;t.getTime=t.getOffset=t.stopPropagation=t.preventDefault=t.wrap=t.forEach=void 0;var i=sb_ie;t.forEach=s;t.wrap=r;t.preventDefault=u;t.stopPropagation=f;t.getOffset=e;t.getTime=o;window.sj_b=document.body;window.sb_de=document.documentElement;window.sj_wf=r;window.sj_pd=u;window.sj_sp=f;window.sj_go=e;window.sj_ev=h;window.sj_et=c;window.sj_mi=l;window.sj_mo=a;window.sj_we=v;window.sb_gt=o;window.sj_so=p;window.sj_lc=y});define("env",["require","exports","shared"],function(n,t,i){function v(n,t){return t.length&&typeof n=="function"?function(){return n.apply(null,t)}:n}function y(n,t){var e=[].slice.apply(arguments).slice(2),u=v(n,e),i;return i=window.setImmediate&&!window.setImmediate.Override&&(!t||t<=16)?"i"+setImmediate(u):o(u,t),f[r]=i,r=(r+1)%a,i}function p(n,t){var r=[].slice.apply(arguments).slice(2),i=l(v(n,r),t);return e[u]=i,u=(u+1)%a,i}function w(){h.forEach(f,s);h.forEach(e,window.clearInterval);r=u=e.length=f.length=0}function s(n){n!=null&&(typeof n=="string"&&n.indexOf("i")===0?window.clearImmediate(parseInt(n.substr(1),10)):c(n))}var h=i,f=[],e=[],o,c,l,a=1024,r=0,u=0;o=window.setTimeout;t.setTimeout=y;l=window.setInterval;t.setInterval=p;t.clear=w;c=window.clearTimeout;t.clearTimeout=s;window.sb_rst=o;window.setTimeout=window.sb_st=y;window.setInterval=window.sb_si=p;window.clearTimeout=window.sb_ct=s});define("event.custom",["require","exports","shared","env"],function(n,t,i,r){function f(n){return u[n]||(u[n]=[])}function e(n,t){n.d?l.setTimeout(c.wrap(n,t),n.d):n(t)}function v(n,t,i){var r,f;for(r in u)f=i?t&&r.indexOf(t)===0:!(r.indexOf(a)===0)&&!(t&&r.indexOf(t)===0)&&!(n!=null&&n[r]!=null),f&&delete u[r]}function o(n){for(var t=f(n),u=t.e=arguments,i,r=0;r<t.length;r++)if(t[r].alive)try{e(t[r].func,u)}catch(o){i||(i=o)}if(i)throw i;}function s(n,t,i,r){var u=f(n);t&&(t.d=r,u.push({func:t,alive:!0}),i&&u.e&&e(t,u.e))}function h(n,t){for(var i=0,r=u[n];r&&i<r.length;i++)if(r[i].func==t&&r[i].alive){r[i].alive=!1;break}}var c=i,l=r,u={},a="ajax.";t.reset=v;t.fire=o;t.bind=s;t.unbind=h;_w.sj_evt={bind:s,unbind:h,fire:o}});define("event.native",["require","exports"],function(n,t){function r(n,t,r,u){var f=n===window||n===document||n===document.body;n&&(f&&t=="load"?i.bind("onP1",r,!0):f&&t=="unload"?i.bind("unload",r,!0):n.addEventListener?n.addEventListener(t,r,u):n.attachEvent?n.attachEvent("on"+t,r):n["on"+t]=r)}function u(n,t,r,u){var f=n===window||n===document||n===document.body;n&&(f&&t=="load"?i.unbind("onP1",r):f&&t=="unload"?i.unbind("unload",r):n.removeEventListener?n.removeEventListener(t,r,u):n.detachEvent?n.detachEvent("on"+t,r):n["on"+t]=null)}t.__esModule=!0;t.unbind=t.bind=void 0;var i=n("event.custom");t.bind=r;t.unbind=u;window.sj_be=r;window.sj_ue=u});customEvents=require("event.custom");customEvents.fire("onHTML");define("dom",["require","exports"],function(n,t){function f(n,t){function s(n,t,r,f){r&&u.unbind(r,f,s);c.bind("onP1",function(){if(!n.l){n.l=1;var r=i("script");r.setAttribute("data-rms","1");r.src=(t?"/fd/sa/"+_G.Ver:"/sa/"+_G.AppVer)+"/"+n.n+".js";_d.body.appendChild(r)}},!0,5)}for(var f=arguments,e,o,r=2,l={n:n};r<f.length;r+=2)e=f[r],o=f[r+1],u.bind(e,o,h.wrap(s,l,t,e,o));r<3&&s(l,t)}function e(){var n=_d.getElementById("ajaxStyles");return n||(n=_d.createElement("div"),n.id="ajaxStyles",_d.body.insertBefore(n,_d.body.firstChild)),n}function l(n){var t=i("script");t.type="text/javascript";t.text=n;t.setAttribute("data-bing-script","1");document.body.appendChild(t);r.setTimeout(function(){document.body.removeChild(t)},0)}function a(n){var t=i("script");t.type="text/javascript";t.src=n;t.setAttribute("crossorigin","anonymous");t.onload=r.setTimeout(function(){document.body.removeChild(t)},0);document.body.appendChild(t)}function o(n){var t=s("ajaxStyle");t||(t=i("style"),t.setAttribute("data-rms","1"),t.id="ajaxStyle",e().appendChild(t));t.textContent!==undefined?t.textContent+=n:t.styleSheet.cssText+=n}function v(n,t){for(var i=Element.prototype,r=i.matches||i.msMatchesSelector;n!=null;){if(r.call(n,t))return n;n=n.parentElement}return null}function s(n){return _d.getElementById(n)}function i(n,t,i){var r=_d.createElement(n);return t&&(r.id=t),i&&(r.className=i),r}t.__esModule=!0;t.includeCss=t.includeScriptReference=t.includeScript=t.getCssHolder=t.loadJS=void 0;var r=n("env"),h=n("shared"),u=n("event.native"),c=n("event.custom");t.loadJS=f;t.getCssHolder=e;t.includeScript=l;t.includeScriptReference=a;t.includeCss=o;_w._ge=s;_w.sj_ce=i;_w.sj_jb=f;_w.sj_ic=o;_w.sj_fa=v});define("cookies",["require","exports"],function(n,t){function a(){var n=location.protocol==="https:";return n?";secure":""}function v(){return _G!==undefined&&_G.EF!==undefined&&_G.EF.cookss!==undefined&&_G.EF.cookss===1}function f(){var n=location.hostname.match(/([^.]+\.[^.]*)$/);return n?";domain="+n[0]:""}function e(n,t,i,r,u){var s=f(),h=r&&r>0?r*6e4:63072e6,c=new Date((new Date).getTime()+Math.min(h,63072e6)),e="",o;v()&&(o=a(),e=o+(u?";SameSite="+u:";SameSite=None"));_d.cookie=n+s+(t?";expires="+c.toGMTString():"")+(i?";path="+i:"")+e}function o(n,t,r,u,f){if(!i){var o=n+"="+t;e(o,r,u,f)}}function s(){return!i}function r(n,t){var r,u;return i?null:(r=_d.cookie.match(new RegExp("\\b"+n+"=[^;]+")),t&&r)?(u=r[0].match(new RegExp("\\b"+t+"=([^&]*)")),u?u[1]:null):r?r[0]:null}function h(n,t,u,f,o,s){var l,h,c,a;i||(h=t+"="+u,c=r(n),c?(a=r(n,t),l=a?c.replace(t+"="+a,h):c+"&"+h):l=n+"="+h,e(l,f,o,s))}function c(n,t){if(!i){var r=n+"=",e=f();_d.cookie=r+e+";expires="+u+(t?";path="+t:"")}}var i,u,l;t.__esModule=!0;t.clear=t.set=t.get=t.areCookiesAccessible=t.setNoCrumbs=void 0;i=!1;u=new Date(0).toGMTString();try{l=_d.cookie}catch(y){i=!0}t.setNoCrumbs=o;t.areCookiesAccessible=s;t.get=r;t.set=h;t.clear=c;_w.sj_cook={get:r,set:h,setNoCrumbs:o,clear:c,areCookiesAccessible:s}});define("rmsajax",["require","exports"],function(n,t){function y(){for(var i,n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(n.length!=0){if(i=n[n.length-1],n.length==1)yt(i)&&f.push(i);else if(n.length==3){var e=n[0],o=n[1],u=n[2];pt(e)&&pt(o)&&yt(u)&&(wt(r,e,u),wt(h,o,u))}return window.rms}}function ft(){var i=arguments,t,n;for(e.push(i),t=0;t<i.length;t++)n=i[t],bt(n,r,n.ct),n.d&&st.call(null,n);return window.rms}function fi(){var t=arguments,n;for(l.push(t),n=0;n<t.length;n++)bt(t[n],h);return window.rms}function p(){pi()?ei(et):et()}function et(){var t,i,n;for(ai(),t=!1,n=0;n<e.length;n++)t=st.apply(null,a.call(e[n],0))||t;for(i=0;i<l.length;i++)t=ci.apply(null,a.call(l[i],0))||t;if(!t)for(n=0;n<f.length;n++)f[n]()}function ei(n){var t=new XMLHttpRequest;t.open("GET",o,!0);t.timeout=500;t.onload=function(){s(o,"4",{Msg:"domain allowed"});n()};t.onerror=function(){t.status!=0||t.responseText?s(o,"4",{Msg:"domain allowed - non blocking error"}):(s(o,"3",{Msg:"domain blocked - fallback used"}),ot());n()};t.ontimeout=function(){s(o,"3",{Msg:"domain validate timeout - fallback used"});ot();n()};t.send()}function ot(){for(var u,r,i,n,t=0;t<e.length;t++)for(u=a.call(e[t],0),r=dt.apply(null,u),i=0;i<r.length;i++)n=r[i],n&&n.url&&(n.url=n.url.replace(c.Origin,c.FallbackOrigin))}function st(){var n=arguments,t,i,f,e;if(n.length===0)return!1;if(t=r[lt(n[0])],n.length>1)for(i=dt.apply(null,n),f=0;f<i.length;f++)e=i[f],e.run=u,oi(e,function(n){return function(){si(n,i)}}(e));else t.run=u,at(t,function(){ht(t)});return!0}function oi(n,t){var f,r,u;if(!n.state){if(n.state=ii,gt(n)){t();return}window.ActiveXObject!==undefined||ui.test(navigator.userAgent)?(f=new Image,f.onload=t,f.onerror=t,f.src=n.url):typeof XMLHttpRequest!="undefined"&&XMLHttpRequest?(r=new XMLHttpRequest,r.open("GET",n.url,!0),r.onreadystatechange=function(){r.readyState==4&&(!ut&&(r.status<200||r.status>=400)&&(s(n.url,"2",{resourceUrl:n.url,pageUrl:window.location.href,status:r.status,response:r.responseText}),ut=!0),t())},r.send()):(u=i.createElement("object"),u.setAttribute("width","0"),u.setAttribute("height","0"),u.setAttribute("tabindex","-1"),u.setAttribute("aria-hidden","true"),u.onload=t,u.onerror=t,u.setAttribute("data",n.url),i.body.appendChild(u))}}function si(n,t){n.run==u&&(n.state=d,ct(t))}function hi(n,t){n.run==u&&at(n,function(n){return function(){ht(n,t)}}(n))}function ht(n,t){n.run==u&&(n.state=v,li(n),t)&&ct(t)}function ct(n){for(var i,t=0;t<n.length;t++){i=n[t];switch(i.state){case d:hi(i,n);return;case v:continue}return}}function lt(n){for(var t in n)return t}function ci(){return!1}function li(n){for(var t=0;t<n.callbacks.length;t++)n.callbacks[t].dec()}function at(n,t){var r,o,h,c,f,u;if(n.state!=g&&n.state!=v)if(n.state=g,r=i.createElement("SCRIPT"),o=n.ct!==undefined?n.ct:"text/javascript",r.type=o,r.setAttribute("data-rms","1"),r.onreadystatechange=r.onload=function(){var n=r.readyState;(!n||/loaded|complete/.test(n))&&vt(t)},gt(n)){if(h=n.app?tt:nt,(c=i.getElementById(h))&&(f=c.childNodes)&&f[n.pos]&&(u=f[n.pos].innerHTML,u!=="")){var l=4,a=3,e=u.length,y=u.substring(0,l),p=u.substring(e-a,e);y=="<!--"&&p=="-->"&&(u=u.substring(l,e-a));r.text=u;i.body.appendChild(r)}vt(t)}else r.src=n.url,(!ni()||ni()&&vi(r.src))&&r.setAttribute("crossorigin","anonymous"),rt||(s(r.src,"1",{resourceUrl:r.src}),rt=!0),i.body.appendChild(r)}function vt(n){n.done||(n.done=!0,n())}function yt(n){return it.call(n)=="[object Function]"}function pt(n){return it.call(n)=="[object Array]"}function wt(n,t,i){for(var u,f=new w(i),r=0;r<t.length;r++)u=n[t[r]],u||(u=kt(n,t[r])),b(u,f)}function ai(){for(var t,i,u,n=0;n<f.length;n++){t=new w(f[n]);for(i in r)b(r[i],t);for(u in h)b(h[u],t)}}function b(n,t){n.callbacks.push(t);t.inc()}function bt(n,t,i){for(var r in n)if(typeof n[r]!=undefined)return kt(t,r,n[r],i)}function kt(n,t,i,r){return n[t]||(n[t]={callbacks:[],onPrefetch:[]},n[t].key=t),t.indexOf(ri)==0&&(n[t].app=!0),isNaN(i)?n[t].url=i:n[t].pos=i,r&&(n[t].ct=r),n[t]}function dt(){for(var i,t=[],n=0;n<arguments.length;n++)i=lt(arguments[n]),t.push(r[i]);return t}function gt(n){return!n.url}function vi(n){var t="https://"+i.location.host,r="http://"+i.location.host;return!(n.indexOf(t)===0||n.indexOf(r)===0)}function ni(){return _G!==undefined&&_G.EF!==undefined&&_G.EF.crossdomainfix===1}function yi(n){return _G!==undefined&&_G.EF!==undefined&&_G.EF.crossoriginlogging===1&&n.indexOf("/rp/")>=0}function pi(){return _G!==undefined&&_G.EF!==undefined&&_G.EF.crossoriginFallback===1}function wi(n){return n.indexOf("https://raka.")===0||n.indexOf("https://rafd.")===0||n.indexOf("https://r.")===0}function s(n,t,i){if(typeof sj_log2=="function"&&yi(n)){var r=wi(n)?"rms_co":"rms_noco";sj_log2("Request",r,t,"rmsajax_xhrprefetch",null,null,i)}}function bi(n){var t,i;r={};h={};f=[];e=[];l=[];u+=1;t=document.getElementById(nt);t&&t.parentNode.removeChild(t);i=document.getElementById(tt);i&&i.parentNode.removeChild(i);n||ti()}function ti(){k.bind("onP1Lazy",function(){y(function(){k.fire("onP1")});p()},!0)}var o,w;t.__esModule=!0;t.reset=t.start=t.css=t.js=t.onload=void 0;var k=n("event.custom"),a=[].slice,ii=1,d=2,g=3,v=4,u=0,ri="A:",nt="fRmsDefer",tt="aRmsDefer",r={},h={},f=[],e=[],l=[],it=Object.prototype.toString,i=document,ui=/edge/i,rt=!1,ut=!1,c;(function(n){n.Origin="r.msftstatic.com";n.Host="https://"+n.Origin;n.FallbackOrigin="r.bing.com"})(c||(c={}));o=c.Host+"/rp/validate.js";t.onload=y;t.js=ft;t.css=fi;t.start=p;w=function(n){var t=0,i=!1;this.inc=function(){i||t++};this.dec=function(){i||(t--,t==0&&(i=!0,n()))}};t.reset=bi;ti();window.rms={onload:y,js:ft,start:p}});_w.LogUploadCapFeatureEnabled=!1;_w.InstLogQueueKeyFetcher={Get:function(n){var t="eventLogQueue";return n.indexOf("proactive")==1||n.indexOf("search")==1||n.indexOf("zinc")==1?t+"_Online":t+"_Offline"},GetSharedLocation:function(){return"eventLogQueue_Shared"},CanUploadSharedMessages:function(n){return _w.useSharedLocalStorage&&n.indexOf("AS/API")===1?!0:!1}};__spreadArrays=this&&this.__spreadArrays||function(){for(var i=0,n=0,r=arguments.length;n<r;n++)i+=arguments[n].length;for(var u=Array(i),f=0,n=0;n<r;n++)for(var e=arguments[n],t=0,o=e.length;t<o;t++,f++)u[f]=e[t];return u};define("clientinst",["require","exports"],function(n,t){function it(){a=0;u()}function u(){var n,s,t,o;e&&clearTimeout(e);for(n in i)if(i.hasOwnProperty(n)){s=n!=_G.IG?_G.lsUrl.replace(_G.IG,n):_G.lsUrl;for(t in i[n])i[n].hasOwnProperty(t)&&(o=b+s+"&TYPE=Event."+t+"&DATA="+f("[")+i[n][t]+f("]"),ut(o)||(g().src=o));delete i[n]}typeof r!="undefined"&&r.setTimeout&&(e=r.setTimeout(u,w))}function rt(){return _G!==undefined&&_G.EF!==undefined&&_G.EF.logsb!==undefined&&_G.EF.logsb===1}function ut(n){return rt()?ft(n,""):!1}function ft(n,t){var i="sendBeacon",r=!1;if(navigator&&navigator[i])try{navigator[i](n,t);r=!0}catch(u){}return r}var y,d,i,g,o,p;t.__esModule=!0;t.Wrap=t.Log2=t.LogInstrumented=t.Log=t.LogCustomEvent=void 0;var r=n("env"),s=n("event.native"),h=n("event.custom"),f=encodeURIComponent,c="length",l="apply",w=2e3,nt=2e3,a=0,e,b="",tt=_G.lsUrl+"&TYPE=Event.ClientInst&DATA=",v=location.hostname,k=v.match(/([^.]+\.[^.]*)$/);k&&(y=location.protocol,d=y=="https:"?v.substring(0,v.indexOf(".")):"a4",b=y+"//"+d+"."+k[0]);i={};g=function(){return new Image};t.LogCustomEvent=function(n,t,i,r){for(var f=[],u=4;u<arguments.length;u++)f[u-4]=arguments[u];o(n,t,i,n,r,f)};t.Log=function(n,t,i,r){for(var f=[],u=4;u<arguments.length;u++)f[u-4]=arguments[u];o(n,t,i,"ClientInst",r,f)};t.LogInstrumented=function(n,i,r,u,f,e,o){t.Log2(n,i!==null&&i!==void 0?i:r,null,null,u,f,o)};t.Log2=function(n,t,i,r,u,f,e){var s=Object.keys(e).reduce(function(n,t){return __spreadArrays(n,[t,e[t]])},[]);i&&s.push("service",i);r&&s.push("scenario",r);u&&s.push("appNS",u);f&&s.push("kValue",f);o(n,null,t,"ClientInst",!1,s)};o=function(n,t,i,f,o,c){a||(p("Init","CI","Base","ClientInst",!1),typeof r!="undefined"&&r.setTimeout&&(e=r.setTimeout(u,w)),a=1,typeof s!="undefined"&&s.bind&&s.bind(window,"beforeunload",u,!1),typeof h!="undefined"&&h.bind&&h.bind("unload",function(){it()},!1));p(n,t,i,f,o,c)};p=function(n,t,r,e,o,s){var k,y=_G.IG,h={},p,w,l,a,d,b,v;if(s&&s.length>0&&s.length%2==0)for(p=0;p<s.length;p+=2)(w=s[p],w)&&(l=w.toLowerCase(),a=s[p+1],l==="impressionguid"?y=a:l==="service"?h.Service=a:l==="scenario"?h.Scenario=a:l==="appns"?h.AppNS=a:l==="k"||l==="kvalue"?h.K=a:l==="pos"?h.Pos=a:h[w]=a);d=(new Date).getTime();h.T="CI."+n;h.TS=d;h.Name=r!==null&&r!==void 0?r:"";h.FID=typeof t!="number"?t!==null&&t!==void 0?t:"":"";h.hasOwnProperty("K")||typeof t!="number"||(h.K=t);b=f(JSON.stringify(h));v=i[y]&&i[y][e]||"";tt[c]+v[c]+b[c]>=nt&&(u(),v="");i.hasOwnProperty(y)?i[y][e]=v+f(v?",":"")+b:i[y]=(k={},k[e]=v+f(v?",":"")+b,k);o&&u()};t.Wrap=function(n,t,i,r){var u=n[t];n[t]=function(){var n=arguments,e,t,f;if(r&&i[l](this,n),e=u[l](this,n),!r){for(t=[],f=0;f<n.length;f++)t.push(n[f]);t.push(e);i[l](this,t)}return e}};window.Log={LogCustomEvent:t.LogCustomEvent,Log:t.Log,Wrap:t.Wrap};window.Shared2=window.Shared2||{};window.Shared2.Log={LogCustomEvent:t.LogCustomEvent,Log:t.Log,Wrap:t.Wrap,LogInstrumented:t.LogInstrumented};window.sj_log2=t.Log2});fallbackMm=require("fallback.mm");fallbackMm.replay();var sj_anim=function(n){var s=25,t=this,c,u,h,f,e,o,l,i,r;t.init=function(n,s,a,v,y){if(c=n,e=s,o=a,l=v,r=y,v==0){f=h;r&&r();return}i||(i=e);u||t.start()};t.start=function(){h=sb_gt();f=Math.abs(o-i)/l*s;u=setInterval(t.next,s)};t.stop=function(){clearInterval(u);u=0};t.next=function(){var u=sb_gt()-h,s=u>=f;i=e+(o-e)*u/f;s&&(t.stop(),i=o);n(c,i);s&&r&&r()};t.getInterval=function(){return s}},sj_fader=function(){return new sj_anim(function(n,t){sj_so(n,t)})},customEvents=require("event.custom");customEvents.bind("onPP",function(){customEvents.fire("onP1Lazy")},!0),function(n){function i(n,t){return typeof n[t]!="undefined"}function t(){_d.addEventListener("visibilitychange",function(){_d.visibilityState==="visible"&&(i(window,"Log2")&&Log2.LogEvent?Log2.LogEvent("TabFocusChanged","TabFocused",_d.visibilityState,!1):Log&&Log.LogCustomEvent?Log.LogCustomEvent("TabFocusChanged","TabFocused",_d.visibilityState,!0):Log&&Log.Log&&Log.Log("TabFocusChanged","Failed","TabFocusChanged Event not logged"))})}n.LogEventOnTabVisibilityChange=t;sj_evt.bind("onP1",function(){t()},1)}(EventLoggingModule||(EventLoggingModule={}))