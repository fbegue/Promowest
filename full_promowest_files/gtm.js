// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 16
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){
var Q=this,va=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var d=Object.prototype.toString.call(a);if("[object Window]"==d)return"object";if("[object Array]"==d||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==d||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},wa=function(a,b){var d=Array.prototype.slice.call(arguments,1);return function(){var b=d.slice();b.push.apply(b,arguments);return a.apply(this,b)}},xa=null;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ya=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,za=function(a){if(null==a)return String(a);var b=ya.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Aa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ka=function(a){if(!a||"object"!=za(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Aa(a,"constructor")&&!Aa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}for(var d in a);return void 0===
d||Aa(a,d)},Ca=function(a,b){var d=b||("array"==za(a)?[]:{}),c;for(c in a)if(Aa(a,c)){var e=a[c];"array"==za(e)?("array"!=za(d[c])&&(d[c]=[]),d[c]=Ca(e,d[c])):ka(e)?(ka(d[c])||(d[c]={}),d[c]=Ca(e,d[c])):d[c]=e}return d};var Da=Math.random(),Ea=null,Fa=null,Ga={};var Ha=function(){},L=function(a){return"function"==typeof a},R=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ia=function(a){return"number"==za(a)&&!isNaN(a)},Ja=function(a,b){if(Array.prototype.indexOf){var d=a.indexOf(b);return"number"==typeof d?d:-1}for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1},Ka=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},N=function(a){return Math.round(Number(a))||0},ma=function(a){return"false"==String(a).toLowerCase()?!1:
!!a},La=function(a){var b=[];if(R(a))for(var d=0;d<a.length;d++)b.push(String(a[d]));return b},K=function(){return new Date},Ma=function(a,b){if(!Ia(a)||!Ia(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},Na=function(){this.prefix="gtm.";this.values={}};Na.prototype.set=function(a,b){this.values[this.prefix+a]=b};Na.prototype.get=function(a){return this.values[this.prefix+a]};Na.prototype.contains=function(a){return void 0!==this.get(a)};
var Oa=function(a,b,d){try{return a["9"](a,b||Ha,d||Ha)}catch(c){}return!1},Pa=function(a,b){function d(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var c=Ka(b).split("&"),e=0;e<c.length;e++)if(c[e]){var f=c[e].indexOf("=");0>f?d(c[e],"1"):d(c[e].substring(0,f),c[e].substring(f+1))}},Qa=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},Ra=function(a){for(var b=0;b<a.length;b++)a[b]()},ia=K().getTime(),la=function(a,b,d){return a&&a.hasOwnProperty(b)?a[b]:d},Ta=function(a,
b,d){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=d},Ua=function(a){return null!==a&&void 0!==a&&void 0!==a.length},ja=function(a,b,d){if(!(b&&d&&Ua(a)&&R(a)&&0!=a.length))return null;for(var c={},e=0;e<a.length;e++)a[e]&&a[e].hasOwnProperty(b)&&a[e].hasOwnProperty(d)&&(c[a[e][b]]=a[e][d]);return c},Va=function(a,b){0==b?a.Ha=!0:a.complete=!0;var d=a.f;a.m&&(a.m.ea[d]=b);Ga[d]&&(Ga[d].state=b)};var u=window,P=document,Wa=navigator,J=function(a,b,d){var c=u[a];if(a&&/^[a-zA-Z_]\w*$/g.test(a)){var e="var "+a+";";if(Q.execScript)Q.execScript(e,"JavaScript");else if(Q.eval){if(null==xa)if(Q.eval("var _evalTest_ = 1;"),"undefined"!=typeof Q._evalTest_){try{delete Q._evalTest_}catch(f){}xa=!0}else xa=!1;if(xa)Q.eval(e);else{var g=Q.document,h=g.createElement("SCRIPT");h.type="text/javascript";h.defer=!1;h.appendChild(g.createTextNode(e));g.body.appendChild(h);g.body.removeChild(h)}}else throw Error("goog.globalEval not available");
}u[a]=void 0===c||d?b:c;return u[a]},O=function(a,b,d,c){return(c||"http:"!=u.location.protocol?a:b)+d},Xa=function(a){var b=P.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)},na=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},q=function(a,b,d){var c=P.createElement("script");c.type="text/javascript";c.async=!0;c.src=a;na(c,b);d&&(c.onerror=d);Xa(c)},ca=function(a,b){var d=P.createElement("iframe");
d.height="0";d.width="0";d.style.display="none";d.style.visibility="hidden";Xa(d);na(d,b);void 0!==a&&(d.src=a);return d},D=function(a,b,d){var c=new Image(1,1);c.onload=function(){c.onload=null;b&&b()};c.onerror=function(){c.onerror=null;d&&d()};c.src=a},S=function(a,b,d,c){a.addEventListener?a.addEventListener(b,d,!!c):a.attachEvent&&a.attachEvent("on"+b,d)},A=function(a){u.setTimeout(a,0)},qa=!1,ra=[],Ya=function(a){if(!qa){var b=P.createEventObject,d="complete"==P.readyState,c="interactive"==
P.readyState;if(!a||"readystatechange"!=a.type||d||!b&&c){qa=!0;for(var e=0;e<ra.length;e++)ra[e]()}}},Za=0,$a=function(){if(!qa&&140>Za){Za++;try{P.documentElement.doScroll("left"),Ya()}catch(a){u.setTimeout($a,50)}}},bb=function(a){var b=P.getElementById(a);if(b&&ab(b,"id")!=a)for(var d=1;d<document.all[a].length;d++)if(ab(document.all[a][d],"id")==a)return document.all[a][d];return b},ab=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},cb=function(a){return a.target||
a.srcElement||{}},ua=function(a){var b=P.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},db=function(a,b){for(var d={},c=0;c<b.length;c++)d[b[c]]=!0;for(var e=a,c=0;e&&!d[String(e.tagName).toLowerCase()]&&100>c;c++)e=e.parentElement;e&&!d[String(e.tagName).toLowerCase()]&&(e=null);return e},hb=!1,ib=[],lb=function(){if(!hb){hb=!0;for(var a=0;a<ib.length;a++)ib[a]()}},mb=function(a){a=a||u;var b=a.location.href,
d=b.indexOf("#");return 0>d?"":b.substring(d+1)},sa=function(a){window.console&&window.console.log&&window.console.log(a)};var nb=function(a,b,d,c,e){var f,g=(a.protocol.replace(":","")||u.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||u.location.hostname).split(":")[0].toLowerCase();if(d){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(1*(a.hostname?a.port:u.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=Ja(c||[],m[m.length-
1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var l=f.split("&"),k=0;k<l.length;k++){var n=l[k].split("=");if(decodeURIComponent(n[0]).replace("+"," ")==e){f=decodeURIComponent(n.slice(1).join("=")).replace("+"," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ob=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},da=function(a){var b=P.createElement("a");a&&
(b.href=a);return b};var ha=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var d=nb(da(a),"host");if(!d)return!1;for(var c=0;b&&c<b.length;c++){var e=b[c]&&b[c].toLowerCase();if(e){var f=d.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&d.indexOf(e,f)==f)return!0}}return!1},ga=function(a,b){var d=function(){};d.prototype=a.prototype;var c=new d;a.apply(c,Array.prototype.slice.call(arguments,1));return c};var fa=function(a,b){q("//bat.bing.com/bat.js",a,b)},p=u,ea=function(a,b,d){b&&(void 0===p[a]||d&&!p[a])&&(p[a]=b);return p[a]};var pb=new Na,qb={},sb={set:function(a,b){Ca(rb(a,b),qb)},get:function(a){return I(a,2)},reset:function(){pb=new Na;qb={}}},I=function(a,b){if(2==b){for(var d=qb,c=a.split("."),e=0;e<c.length;e++){if(void 0===d[c[e]])return;d=d[c[e]]}return d}return pb.get(a)},rb=function(a,b){for(var d={},c=d,e=a.split("."),f=0;f<e.length-1;f++)c=c[e[f]]={};c[e[e.length-1]]=b;return d};var tb,ub=new RegExp(/^(.*\.)?(google|youtube|blogger)(\.com?)?(\.[a-z]{2})?\.?$/),vb={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},wb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},xb=function(a,b){for(var d=[],c=0;c<a.length;c++)d.push(a[c]),d.push.apply(d,b[a[c]]||[]);return d};var yb={html:1,_html:1,__html:1,jsm:1,_jsm:1,__jsm:1};
var zb=function(){var a=I("gtm.whitelist");var b=a&&xb(La(a),vb),d=I("gtm.blacklist")||I("tagTypeBlacklist")||[];ub.test(u.location&&u.location.hostname)&&(void 0==tb&&(tb=!0),d=La(d),d.push("customScripts"));
var c=d&&xb(La(d),wb),e={};return function(f){var g=f&&f["9"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var h=!0;if(a)a:{if(0>Ja(b,g.a))if(g.b&&0<g.b.length)for(var m=0;m<g.b.length;m++){if(0>Ja(b,g.b[m])){h=!1;break a}}else{h=!1;break a}h=!0}var l=!1;if(d){var k;if(!(k=0<=Ja(c,g.a)))a:{for(var n=g.b||[],r=new Na,t=0;t<c.length;t++)r.set(c[t],!0);for(t=0;t<n.length;t++)if(r.get(n[t])){k=!0;break a}k=!1}l=k;
l&&tb&&yb[g.a]&&(tb=!1,sa("Custom JS/HTML in GTM blocked. See go/13687728."));}return e[g.a]=!h||l}};var _k=function(a){for(var b=String(I("gtm.cookie")||P.cookie).split(";"),d=0;d<b.length;d++){var c=b[d].split("="),e=Ka(c[0]);if(e&&e==a["13"]){var f=Ka(c.slice(1).join("="));return f&&a["6"]?decodeURIComponent(f):f}}};_k.a="k";_k.b=[];var Bb=function(a){var b=P;return Ab?b.querySelectorAll(a):null},Cb;a:{var Db=/MSIE +([\d\.]+)/.exec(Wa.userAgent);if(Db&&Db[1]){var Eb=P.documentMode;Eb||(Eb="CSS1Compat"==P.compatMode?parseInt(Db[1],10):5);if(!Eb||8>=Eb){Cb=!1;break a}}Cb=!!P.querySelectorAll}var Ab=Cb;var Fb=void 0,Hb="",Ib=0,Jb=void 0,_et=function(a){var b,d=I("gtm.element"),c=I("event"),e=Number(K());if(Fb===d&&Hb===c&&Ib>e-250)b=Jb;else{var f;if(d){var g=d.innerText||d.textContent||"";g&&" "!=g&&(g=g.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));g&&(g=g.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));f=g}else f="";Jb=b=f;Fb=d;Hb=c}Ib=e;return b?b:a["8"]};_et.a="et";_et.b=["google"];var _eu=function(a){var b=String(I("gtm.elementUrl")||a["8"]||""),d=da(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Fa};_e.a="e";_e.b=["google"];var _v=function(a){var b=I(a["13"].replace(/\\\./g,"."),a["5"]);return void 0!==b?b:a["8"]};_v.a="v";_v.b=["google"];var _r=function(a){return Ma(a[""],a[""])};_r.a="r";_r.b=["google"];var _f=function(a){var b=String(I("gtm.referrer")||P.referrer);if(!b)return b;var d=da(b);var c,e,f;c=a["15"];e=a["7"];a["4"]&&(b=nb(d,a["4"],c,e,f));return b};_f.a="f";_f.b=["google"];var _smm=function(a){var b=a["10"],d=a["12"]||{};return d.hasOwnProperty(b)?d[b]:a["8"]};_smm.a="smm";_smm.b=["google"];var ba=function(a){var b=u.location,d=b.hash?b.href.replace(b.hash,""):b.href,c;if(c=a[""]?a[""]:I("gtm.url"))d=String(c),b=da(d);var e,f,g;
a["4"]&&(d=nb(b,a["4"],e,f,g));return d},_u=ba;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a["0"])==String(a["1"])};_eq.a="eq";_eq.b=["google"];var Yb=Math.random(),Zb="1.000000">Yb;var $b=Ha;var ac=Ha,bc=[],cc=!1,dc=function(a){return u["dataLayer"].push(a)},ec=function(a){var b=!1;return function(){!b&&L(a)&&A(a);b=!0}},lc=function(){for(var a=!1;!cc&&0<bc.length;){cc=!0;var b=bc.shift();if(L(b))try{b.call(sb)}catch(d){}else if(R(b))a:{var c=b;if("string"==za(c[0])){for(var e=c[0].split("."),f=e.pop(),g=c.slice(1),h=qb,m=0;m<e.length;m++){if(void 0===h[e[m]])break a;h=h[e[m]]}try{h[f].apply(h,g)}catch(l){}}}else{var k=b,n=void 0;for(n in k)if(k.hasOwnProperty(n)){var r=n,t=k[n];
pb.set(r,t);Ca(rb(r,t),qb)}var w=!1,v=k.event;if(v){Fa=v;var B=ec(k.eventCallback),E=k.eventTimeout;E&&u.setTimeout(B,Number(E));w=ac(v,B,k.eventReporter)}Ea||(Ea=k["gtm.start"])&&$b();Fa=null;a=w||a}var M=b,W=qb;kc();cc=!1}return!a};var mc,nc=/(Firefox\D28\D)/g.test(Wa.userAgent),oc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},pc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},vc=function(a,b){return function(d){d=d||u.event;var c=cb(d),e=!1;if(3!==d.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(c=db(c,["a","area"]),e=!c||!c.href||qc(c.href)||2===d.which||null==d.which&&4==d.button||d.ctrlKey||d.shiftKey||d.altKey||!0===d.metaKey);var f="FORM_SUBMIT"==a?pc:oc;if(d.defaultPrevented||!1===d.returnValue||d.ia&&d.ia()){if(c){var g={simulateDefault:!1},
h=rc(f,["wnc","nwnc"]);h&&sc(a,c,g,f.wt,h)}}else{if(c){var g={},m=!0,l=rc(f,["wnc","nwnc","nwc","wc"]);(m=sc(a,c,g,f.wt,l))||(tc(g.eventReport,f)?b=!0:e=!0);e=e||m||"LINK_CLICK"==a&&nc;g.simulateDefault=!m&&b&&!e;g.simulateDefault&&(e=uc(c,g)||e,!e&&d.preventDefault&&d.preventDefault());d.returnValue=m||!b||e;return d.returnValue}return!0}}}},sc=function(a,b,d,c,e){var f=c||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||ab(b,"id")||"","gtm.elementTarget":b.formTarget||
b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=wc(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=xc(b);g.eventTimeout=f;g.eventCallback=yc(b,d);g.eventReporter=function(a){d.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||
"";break;default:return!0}return dc(g)},xc=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},zc=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},uc=function(a,b){var d=!1,c=/(iPad|iPhone|iPod)/g.test(Wa.userAgent),e=zc(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=u.frames&&u.frames[f]||u[f];break;case "_blank":c?(b.simulateDefault=
!1,d=!0):(b.targetWindowName="gtm_autoEvent_"+K().getTime(),b.targetWindow=u.open("",b.targetWindowName));break;default:c&&!u.frames[e]?(b.simulateDefault=!1,d=!0):(u.frames[e]||(b.targetWindowName=e),b.targetWindow=u.frames[e]||u.open("",e))}return d},wc=function(a,b,d){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(d=d||K().getTime(),500>K().getTime()-d&&u.setTimeout(wc(a,b,d),25)))}},yc=function(a,b,d){return function(){if(b.simulateDefault)if(b.targetWindow){var c;
b.targetWindowName&&(c=a.target,a.target=b.targetWindowName);P.gtmSubmitFormNow=!0;Ac(a).call(a);b.targetWindowName&&(a.target=c)}else d=d||K().getTime(),500>K().getTime()-d&&u.setTimeout(yc(a,b,d),25)}},rc=function(a,b){for(var d=[],c=0;c<b.length;c++){var e=a[b[c]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&d.push(f)}return d.join(",")},Bc=function(a,b,d,c,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>c)&&(a.wt=c);a[b?d?"wc":"wnc":d?"nwc":"nwnc"][f]=!0},tc=function(a,b){if(b.wnc["0"]||
b.wc["0"])return!0;for(var d=0;d<Cc.length;d++)if(a.passingRules[d]){var c=Cc[d],e=Dc[d],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=c[1],h=0;h<g.length;h++)if(a.resolvedTags[g[h]])return!0}return!1},Ec=function(a,b,d,c,e){var f,g,h=!1;switch(a){case "CLICK":if(P.gtmHasClickListenerTag)return;P.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=cb(a);b&&sc("CLICK",b,{},c)};h=!0;break;case "LINK_CLICK":b&&!mc&&(mc=ob(P.location));Bc(oc,b||!1,d||!1,c,e);if(P.gtmHasLinkClickListenerTag)return;
P.gtmHasLinkClickListenerTag=!0;f="click";g=vc(a,b||!1);break;case "FORM_SUBMIT":Bc(pc,b||!1,d||!1,c,e);if(P.gtmHasFormSubmitListenerTag)return;P.gtmHasFormSubmitListenerTag=!0;f="submit";g=vc(a,b||!1);break;default:return}S(P,f,g,h)},qc=function(a){if(!mc)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var d=da(a);return mc==ob(d)},Ac=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
P.gtmFormElementSubmitter||(P.gtmFormElementSubmitter=P.createElement("form"));return P.gtmFormElementSubmitter.submit.call?P.gtmFormElementSubmitter.submit:a.submit};var Kb=new String("undefined"),Uc=function(a){this.resolve=function(b){for(var d=[],c=0;c<a.length;c++)d.push(a[c]===Kb?b:a[c]);return d.join("")}};Uc.prototype.toString=function(){return this.resolve("undefined")};Uc.prototype.valueOf=Uc.prototype.toString;var Vc={},Wc=function(a,b){var d=ia++;Vc[d]=[a,b];return d},Xc=function(a){var b=a?0:1;return function(a){var c=Vc[a];if(c&&L(c[b]))c[b]();Vc[a]=void 0}};var Yc=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Zc=function(a,b){return a<b?-1:a>b?1:0};var $c=function(a){var b=arguments.length;if(1==b&&"array"==va(arguments[0]))return $c.apply(null,arguments[0]);for(var d={},c=0;c<b;c++)d[arguments[c]]=!0;return d};$c("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));var T;a:{var ad=Q.navigator;if(ad){var bd=ad.userAgent;if(bd){T=bd;break a}}T=""};var cd=function(){return-1!=T.indexOf("Edge")};var dd=-1!=T.indexOf("Opera")||-1!=T.indexOf("OPR"),U=-1!=T.indexOf("Edge")||-1!=T.indexOf("Trident")||-1!=T.indexOf("MSIE"),ed=-1!=T.indexOf("Gecko")&&!(-1!=T.toLowerCase().indexOf("webkit")&&!cd())&&!(-1!=T.indexOf("Trident")||-1!=T.indexOf("MSIE"))&&!cd(),fd=-1!=T.toLowerCase().indexOf("webkit")&&!cd(),gd=function(){var a=T;if(ed)return/rv\:([^\);]+)(\)|;)/.exec(a);if(U&&cd())return/Edge\/([\d\.]+)/.exec(a);if(U)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fd)return/WebKit\/(\S+)/.exec(a)},
hd=function(){var a=Q.document;return a?a.documentMode:void 0},id=function(){if(dd&&Q.opera){var a=Q.opera.version;return"function"==va(a)?a():a}var b="",d=gd();d&&(b=d?d[1]:"");if(U&&!cd()){var c=hd();if(c>parseFloat(b))return String(c)}return b}(),jd={},kd=function(a){var b;if(!(b=jd[a])){for(var d=0,c=Yc(String(id)).split("."),e=Yc(String(a)).split("."),f=Math.max(c.length,e.length),g=0;0==d&&g<f;g++){var h=c[g]||"",m=e[g]||"",l=RegExp("(\\d*)(\\D*)","g"),k=RegExp("(\\d*)(\\D*)","g");do{var n=
l.exec(h)||["","",""],r=k.exec(m)||["","",""];if(0==n[0].length&&0==r[0].length)break;d=Zc(0==n[1].length?0:parseInt(n[1],10),0==r[1].length?0:parseInt(r[1],10))||Zc(0==n[2].length,0==r[2].length)||Zc(n[2],r[2])}while(0==d)}b=jd[a]=0<=d}return b},ld=Q.document,md=hd(),nd=!ld||!U||!md&&cd()?void 0:md||("CSS1Compat"==ld.compatMode?parseInt(id,10):5);var od;if(!(od=!ed&&!U)){var pd;if(pd=U)pd=U&&(cd()||9<=nd);od=pd}od||ed&&kd("1.9.1");U&&kd("9");var qd=function(a){qd[" "](a);return a};qd[" "]=function(){};var ta=function(a,b){var d="";U&&!rd(a)&&(d='<script>document.domain="'+document.domain+'";\x3c/script>'+d);var c="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+d+"</head><body>"+b+"</body></html>";if(sd)a.srcdoc=c;else if(td){var e=a.contentWindow.document;e.open("text/html","replace");e.write(c);e.close()}else ud(a,c)},sd=fd&&"srcdoc"in document.createElement("iframe"),td=ed||fd||U&&kd(11),ud=function(a,b){U&&kd(7)&&!kd(10)&&6>vd()&&wd(b)&&(b=xd(b));var d=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};U&&!rd(a)?yd(a,d):d()},vd=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},rd=function(a){try{var b;var d=a.contentWindow;try{var c;if(c=!!d&&null!=d.location.href)b:{try{qd(d.foo);c=!0;break b}catch(e){}c=!1}b=c}catch(f){b=!1}return b}catch(g){return!1}},zd=0,yd=function(a,b){var d="goog_rendering_callback"+zd++;window[d]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+d+";window.parent."+d+" = null;continuation();})()\x3c/script>'"},wd=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},xd=function(a){for(var b=unescape(encodeURIComponent(a)),d=Math.floor(b.length/2),c=[],e=0;e<d;++e)c[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(c[d]=b.charAt(b.length-1));return c.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var _img=function(a,b,d){var c=ua('<a href="'+a["17"]+'"></a>')[0].href,e=a["2"];if(e)var f=c.charAt(c.length-1),c=c+((0<=c.indexOf("?")?"?"==f||"&"==f?"":"&":"?")+e+"="+a["3"]);D(c,b,d)};_img.a="img";_img.b=["customPixels"];var Ed={},Gd=function(a,b,d,c,e){if(!Ab)return!1;var f=Ed[a];f||(f={id:a,F:[],U:0,sa:null,xa:!1},Ed[a]=f);var g={id:a+":"+f.F.length,Pa:d,Ka:c,D:b,ga:0,da:e||null,wa:0,T:!1};f.F.push(g);null===b?(g.T=!0,d(null)):Fd(f);return!0},Fd=function(a){for(var b=a.U;b<a.F.length;b++){var d=a.F[b],c=b==a.U;if(!d.T&&!Hd(c,d))break;d.T&&c&&a.U++}a.F.length>a.U&&(a.sa||(a.sa=u.setTimeout(function(){a.sa=null;Fd(a)},80)),qa||a.xa||(a.xa=!0,ra.push(function(){Fd(a)})))},Hd=function(a,b){var d=[];if(b.D){var c=Id(b.D,
b.id),e=null;b.da&&(e=Id(b.da,b.id+"-t"));for(var f=0;f<c.length;f++){var g=c[f],h;if(null!=e&&(h=e.length>f?e[f]:null,!h&&!qa&&(null===b.da.h||b.wa+d.length<b.da.h)))break;d.push({element:g,ob:h})}}if(!qa&&b.Ka&&(!a||null==b.D.h||b.D.h!=b.ga+d.length))return!1;for(var m=0;m<d.length;m++){var l=d[m].element,k=d[m].ob;b.ga++;Jd(l,b.id);k&&(b.wa++,Jd(k,b.id+"-t"));b.Pa(l,k)}if(b.D.h&&b.D.h==b.ga||qa)b.T=!0;return!0},Jd=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=
!0},Id=function(a,b){for(var d=Bb(a.o)||[],c=[],e=0;e<d.length;e++){var f=d[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){var g;if(g=a.s){var h;a:{for(var m=f;m;){if(m.nextSibling){h=!0;break a}m=m.parentNode}h=!1}g=!h}if(g)break;c.push(f)}}return c};var Wd,Xd;
var ge=function(a){return function(){}},he=function(a){return function(){}};var ye=function(a){var b=u||Q,d=b.onerror,c=!1;fd&&!kd("535.3")&&(c=!c);b.onerror=function(b,f,g,h,m){d&&d(b,f,g,h,m);a({message:b,fileName:f,hb:g,Fb:h,error:m});return c}};
var X=[],Ae={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ge=function(a){return Ae[a]},He=/[\x00\x22\x26\x27\x3c\x3e]/g;var Le=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Me={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b","\f":"\\f",
"\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Ne=function(a){return Me[a]};

var Te=/['()]/g,Ue=function(a){return"%"+a.charCodeAt(0).toString(16)};X[12]=function(a){var b=encodeURIComponent(String(a));Te.lastIndex=
0;return Te.test(b)?b.replace(Te,Ue):b};var Ve=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,We={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10","\u0011":"%11","\u0012":"%12","\u0013":"%13",
"\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86","\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89",
"\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Xe=function(a){return We[a]};var Ze=67,$e=[],af=[],fc=[],bf=new Na,cf=[],Y=[],Cc=[],Dc=[],df=function(){this.v=[]};df.prototype.set=function(a,b){this.v.push([a,b]);return this};df.prototype.resolve=function(a,b){for(var d={},c=0;c<this.v.length;c++){var e=ef(this.v[c][0],a,b),f=ef(this.v[c][1],a,b);d[e]=f}return d};var ff=function(a){this.index=a};
ff.prototype.resolve=function(a,b){var d=fc[this.index];if(d&&!b(d)){var c=d["11"];if(a){if(a.get(c))return;a.set(c,!0)}d=ef(d,a,b);a&&a.set(c,!1);return Oa(d)}};
var _M=function(a){return new ff(a)},gf=function(a){this.resolve=function(b,d){for(var c=[],e=!1,f=0;f<a.length;f++){var g=ef($e[a[f]],b,d);g===Kb&&(e=!0);c.push(g)}return e?new Uc(c):c.join("")}},_T=function(a){return new gf(arguments)},hf=function(a){function b(b){for(var c=1;c<a.length;c++)if(a[c]==b)return!0;return!1}this.resolve=
function(d,c){var e=ef(a[0],d,c);if(a[0]instanceof ff&&b(8)&&b(16)){if(e===Kb)return e;var f="gtm"+ia++;bf.set(f,e);return'google_tag_manager["GTM-TR24NF"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=X[a[g]](e);return e}},_E=function(a,b){return new hf(arguments)},jf=function(a,b){this.i=a;this.ca=b},_R=function(a,b){return new jf(a,b)},ic=function(a,b){return ef(a,new Na,b)},ef=function(a,b,d){var c=a;if(a instanceof ff||a instanceof df||a instanceof gf||a instanceof hf)return a.resolve(b,
d);if(!(a instanceof jf))if(R(a))for(var c=[],e=0;e<a.length;e++)c[e]=ef(a[e],b,d);else if(a&&"object"==typeof a){var c={},f;for(f in a)a.hasOwnProperty(f)&&(c[f]=ef(a[f],b,d))}return c},kf=function(a,b){var d=b[a],c=d;if(d instanceof ff||d instanceof hf||d instanceof gf||d instanceof jf)c=d;else if(R(d))for(var c=[],e=0;e<d.length;e++)c[e]=kf(d[e],b);else if("object"==typeof d){var c=new df,f;for(f in d)d.hasOwnProperty(f)&&c.set(b[f],kf(d[f],b))}return c},mf=function(a,b){for(var d=b?b.split(","):
[],c=0;c<d.length;c++){var e=d[c]=d[c].split(":");0==a&&(e[1]=$e[e[1]]);if(1==a)for(var f=lf(e[0]),e=d[c]={},g=0;g<f.length;g++){var h=af[f[g]];e[h[0]]=h[1]}if(2==a)for(g=0;4>g;g++)e[g]=lf(e[g]);3==a&&(d[c]=$e[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var m=0;m<e[g].length;m++)e[g][m]=$e[e[g][m]]}else e[g]=[];5==a&&(d[c]=e[0])}return d},lf=function(a){var b=[];if(!a)return b;for(var d=0,c=0;c<a.length&&d<Ze;d+=6,c++){var e=a&&a.charCodeAt(c)||65;if(65!=e){var f=0,f=65<e&&90>=
e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(d);2&f&&b.push(d+1);4&f&&b.push(d+2);8&f&&b.push(d+3);16&f&&b.push(d+4);32&f&&b.push(d+5)}}return b},nf=function(a,b,d){a.push.apply(a,mf(b,d))};var of=function(a){var b=this;this.f=a;this.complete=this.Ha=!1;this.ba=[];this.S=[];this.I=function(){b.complete||Ra(b.ba);Va(b,1)};this.H=function(){b.complete||Ra(b.S);Va(b,2)};this.j=Ha},pf=function(a,b){a.ba.push(b)},qf=function(a,b){a.S.push(b)},rf=function(a){this.w=[];this.ra=[];this.Ba={};this.ma=[];this.G=0;this.Fa={};this.Ia={};this.ea={};this.event=a};rf.prototype.addListener=function(a){this.ma.push(a)};
var sf=function(a,b,d,c,e,f){if(!d.complete){a.w[b]=d;void 0==c&&(c=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);c=R(c)?c.slice():["or",c];e=R(e)?e.slice():[e];f=R(f)?f.slice():[f];a.Ba[b]=c;a.Fa[b]=0<e.length;a.Ia[b]=0<f.length;a.G++;var g=function(){0<a.G&&a.G--;0<a.G||Ra(a.ma)};pf(d,g);qf(d,g)}},tf=function(a,b,d){a.w[b]&&(pf(a.w[b],function(){d(b,!0)}),qf(a.w[b],function(){d(b,!1)}))},uf=function(a,b){var d=!1;return function(c,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof jf&&a[g].i===
c||a[g]===c){f=g;break a}f=-1}d||0>f||("or"==a[0]?e?(d=!0,b()):(a.splice(f,1),1==a.length&&(d=!0)):e?(a.splice(f,1),1==a.length&&(d=!0,b())):d=!0)}},yf=function(a,b){var d=[],c=!1,e=function(b){var f,g,h=Y[b];if(a.event.c(h)){}else g=vf(h,b,a);if(f=g){var k=wf(b,!0);0<k.length&&e(k[0].i);d.push(f);var l=wf(b,!1);0<l.length&&e(l[0].i)}else c=!0};e(b);if(!c){for(var f=0;f<d.length;f++){var g=d[f],h=wf(g.f,
!0);if(0<h.length){var m=d[f-1],l=xf(g);pf(m,l);0==h[0].ca&&qf(m,l)}var k=wf(g.f,!1);0<k.length&&(l=xf(d[f+1]),pf(g,l),0==k[0].ca&&qf(g,l))}a.ra.push(d)}},wf=function(a,b){var d=b?"":"",c=Y[a],e=void 0===c[d]?[]:c[d];return R(e)?e:[e]},xf=function(a){return function(){a.j()}},Af=function(a){for(var b={},d=0;d<a.length;d++){var c=a[d],e=[],f=function(a){var b=wf(a,!0);0<b.length&&f(b[0].i);e.push(a);var c=wf(a,!1);0<c.length&&f(c[0].i)};f(c.f);b[c.f]=e}zf(a,
b);return b},zf=function(a,b){for(var d=0;d<a.length;d++){var c=a[d].f,e;for(e in b)if(b.hasOwnProperty(e)&&e!=c&&-1<Ja(b[e],c)){delete b[c];break}}};var Cf=function(a,b){return function(){a["18"]=b.I;a["19"]=b.H;var d=b.f,c=b.m&&b.m.ea[d],e=Ga[d]&&Ga[d].state,f=c?void 0!==c:b.Ha,g=Ga[d]&&Ga[d].firingOption,h=g&&2==g,m=g&&1==g;if((f||e&&0!=e)&&(f||h)&&(h||m))h&&Ga[d]&&1==Ga[d].state||m&&b.m&&1==b.m.ea[d]?b.I():b.H();else{var l=b.m?b.m.event:void 0;a=Bf(a,l?l.c:zb());Va(b,0);Oa(a,b.I,b.H)}}},Bf=function(a,b){a=ic(a,b);
return a},vf=function(a,b,d){var c=new of(b);c.m=d;pf(c,ge(a));qf(c,he(a));c.j=Cf(a,c);return c};var Hf,If;var kc=function(){};var Vf=function(){var a=[];return function(b,d){if(void 0===a[b]){var c=cf[b]&&ic(cf[b],d),e=c;if(c)if(c[""]&&R(c["1"]))for(var f=c["1"],e=!1,g=0;!e&&g<f.length;g++)c["1"]=f[g],e=Oa(c);else e=Oa(c);a[b]=[e,c]}return a[b]}},Wf=function(a,b){for(var d=b[0],c=0;c<d.length;c++)if(!a.C(d[c],a.c)[0])return!1;for(var e=b[2],c=0;c<e.length;c++)if(a.C(e[c],a.c)[0])return!1;return!0},Xf=!1,ac=function(a,b,d){switch(a){case "gtm.js":if(Xf)return!1;Xf=!0;break;
case "gtm.sync":if(I("gtm.snippet")!=Da)return!1}I("tagTypeBlacklist");for(var c={name:a,O:b||Ha,N:lf(),Z:lf(),C:Vf(),c:zb()},e=[],f=0;f<Cc.length;f++)if(Wf(c,Cc[f])){e[f]=!0;for(var g=c,h=Cc[f],m=h[1],l=0;l<m.length;l++)g.N[m[l]]=!0;for(var k=h[3],l=0;l<k.length;l++)g.Z[k[l]]=!0}else e[f]=!1;var n=[];for(var r=0;r<Ze;r++)if(c.N[r]&&!c.Z[r])if(c.c(Y[r])){}else{n[r]=Y[r];}c.aa=n;for(var t=new rf(c),w=0;w<Ze;w++)if(c.N[w]&&!c.Z[w]&&!c.c(Y[w])){var v=c.aa[w],B=vf(v,w,t);sf(t,w,B,v[""],v[""],v[""]);if(v[""])break}t.addListener(c.O);
for(var E=[],z=0;z<t.w.length;z++){var F=t.w[z];if(F){var x=t.Ba[z],C=t.Fa[z],y=t.Ia[z];if(0!=x.length||C||y){if(0<x.length)for(var G=uf(x,F.j),M=0;M<x.length;M++)x[M]instanceof jf&&x[M].i!=z&&tf(t,x[M].i,G);(C||y)&&yf(t,z)}else E.push(z)}}for(z=0;z<E.length;z++)t.w[E[z]].j();for(z=0;z<t.ra.length;z++){for(var W=t.ra[z],V=W,jb=[],Qb=0;Qb<V.length;Qb++){var Ub=V[Qb],Pc=Ub.f,Qc=Ga[Pc],Rb=Qc.firingOption;0!=Rb&&(1==Rb&&void 0!==Ub.m.ea[Pc]||2==Rb&&void 0!==Qc.state)&&jb.push(Ub)}var Sb=Af(jb),kb=void 0;
for(kb in Sb)if(Sb.hasOwnProperty(kb)){for(var Tb=void 0,Oc=void 0,Gb=Sb[kb],cg=Gb[0],Be=Gb[Gb.length-1],Ce,oa=0;oa<V.length;oa++){var Mb=V[oa];!Tb&&Mb.f==cg&&0<oa&&(Tb=V[oa-1]);Mb.f==Be&&oa<V.length-1&&(Oc=V[oa+1]);if(-1<Ja(Gb,Mb.f))if(Ce=V.splice(oa,1)[0],Mb.f==Be)break;else oa--}if(Ce){var De=Number(kb),Z=Tb,Hc=Oc;if(Z){var dg=Z.ba[0],eg=Z.S[0],Ee=Z;Ee.ba=[];Ee.S=[];pf(Z,dg);qf(Z,eg)}if(Z&&Hc){var Ic=xf(Hc);pf(Z,Ic);var Jc=wf(Z.f,!1);0<Jc.length&&Jc[0].i!=De&&0==Jc[0].ca&&qf(Z,Ic);var Kc=wf(Hc.f,
!0);0<Kc.length&&Kc[0].i!=De&&0==Kc[0].ca&&qf(Z,Ic)}}}0<W.length&&W[0].j()}0<t.G||Ra(t.ma);d&&L(d)&&d({passingRules:e,resolvedTags:c.aa});return 0<c.aa.length};var Yf={macro:function(a){if(bf.contains(a))return bf.get(a)}};Yf.dataLayer=sb;Yf.onHtmlSuccess=Xc(!0);Yf.onHtmlFailure=Xc(!1);Yf.Ta=function(){var a=u.google_tag_manager;a||(a=u.google_tag_manager={});a["GTM-TR24NF"]||(a["GTM-TR24NF"]=Yf)};$e.push.apply($e,function(){for(var a=[_eq,_e,'_event',_M(0),'gtm.js','1207867_2147479553',_img,'//adadvisor.net/adscores/r.pixel?sid\x3d9212270798',1,'//ds.reson8.com/st-ext.gif?page_url\x3d',_u,'url',_E(_M(1),12),'\x26page_hostname\x3d','url hostname','host',_E(_M(2),12),'\x26page_path\x3d','url path','path',_E(_M(3),12),'\x26page_referrer\x3d',_f,'referrer',_E(_M(4),12),_T(9,12,13,16,17,20,21,24),3,true,'//p.nexac.com/e/sr/a-1548/s-3271/s-3271.xgi',4,'//p.adsymptotic.com/d/px/?_pid\x3d12608\x26_psign\x3df58963b3af9d250b387068620e8a4444','gtmcb',_r,'_random',_M(5),6,'event',_v,'element','gtm.element','element classes','gtm.elementClasses','element id','gtm.elementId','element target','gtm.elementTarget',_et,'element text','element url','gtm.elementUrl','history new url fragment','gtm.newUrlFragment','history old url fragment','gtm.oldUrlFragment','history new state','gtm.newHistoryState','history old state','gtm.oldHistoryState','history change source','gtm.historyChangeSource',_smm,'BLOCK_LIST_TEST',_M(2),'newyorklife.com','airforce.com','att.com','cosmopolitan.com','delish.com','esquire.com','marieclaire.com','goodhousekeeping.com','thedailygreen.com','seventeen.com','cosmogirl.com','quickandsimple.com','harpersbazaar.com','foundry9.com','creditcards.chase.com','chase.com','ford.com','lincoln.com','staples.com','mangahere.com','mangafox.me','mangago.com','southwest.com','block',{63:86,64:86,65:86,66:86,67:86,68:86,69:86,70:86,71:86,72:86,73:86,74:86,75:86,76:86,77:86,78:86,79:86,80:86,81:86,82:86,83:86,84:86,85:86},'ok',_k,'ST_ID','FPC',false,'REF_HOSTNAME','REF_PAGE_PATH',[],'ST_REF_TEST',_M(20),_M(21),_T(97,98),2],b=[],d=0;d<a.length;d++)b[d]=kf(d,a);return b}());nf(af,0,"9:0,9:1,11:2,0:3,1:4,9:6,17:7,16:8,9:10,11:11,11:14,4:15,11:18,4:19,9:22,11:23,17:25,16:26,14:27,17:28,16:29,17:30,2:31,9:32,11:33,3:34,16:35,11:36,9:37,11:38,13:39,11:40,13:41,11:42,13:43,11:44,13:45,9:46,11:47,11:48,13:49,11:50,13:51,11:52,13:53,11:54,13:55,11:56,13:57,11:58,13:59,9:60,11:61,10:62,12:87,8:88,9:89,11:90,13:91,6:92,11:93,15:92,11:94,7:95,11:96,13:99,5:100");nf(fc,1,"G,AM,A0,AED,AAM,AAAgB,CAAAI,AAAAwB,AAAAQG,AAAAQY,AAAAQgB,AAAAAAG,AAAAQAY,AAAAQAgB,AAAAQAAG,AAAAQAAY,AAAAQAAgB,AAAAQAAAG,AAAAAAAA4D,AAAAAAAAA8,AgEAAAAAAAD,AAGAAAAAAAM,AAAAQAAAAAwB");
nf(cf,1,"Z");nf(Y,1,"gD,gAw,gAAH,gAAZG");nf(Cc,2,"B:P::");nf(Dc,4,"5.5.5.5:");for(var Zf=0;Zf<Y.length;Zf++){var $f=Y[Zf],ag=1;$f[""]?ag=2:$f[""]&&(ag=0);Ga[Zf]={firingOption:ag,state:void 0}}
Yf.Ta();(function(a){})("async");
(function(){var a=J("dataLayer",[],!1),b=J("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};ra.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ib.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var d=a.push;a.push=function(){var b=[].slice.call(arguments,0);d.apply(a,b);for(bc.push.apply(bc,b);300<this.length;)this.shift();return lc()};bc.push.apply(bc,a.slice(0));A(lc)})();
if("interactive"==P.readyState&&!P.createEventObject||"complete"==P.readyState)Ya();else{S(P,"DOMContentLoaded",Ya);S(P,"readystatechange",Ya);if(P.createEventObject&&P.documentElement.doScroll){var bg=!0;try{bg=!u.frameElement}catch(gg){}bg&&$a()}S(u,"load",Ya)}"complete"===P.readyState?lb():S(u,"load",lb);
(function(a){})("async");var _vs="res_ts:1435380399073000,srv_cl:96385386,ds:live,cv:16";
})()
