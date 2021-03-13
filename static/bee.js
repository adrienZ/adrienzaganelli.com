var splitbee=function(e){"use strict";var t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function n(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(a,u)}c((r=r.apply(e,t||[])).next())}))}function r(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var o,i="sb_uid"+(v||""),a=!!v,u=function(e){var t=window.location.hostname,n=t.match(/\w*\.\w*$/gi),r=a&&n?n[0]:t,o=new Date;o.setTime(o.getTime()+15768e7);var u="expires="+o.toUTCString();document.cookie=i+"="+e+";path=/;SameSite=Lax;"+u+(a?";domain="+r:"")},c=function(){var e=document.cookie.split(/; */).map((function(e){var t=e.split("="),n=t[0],r=t.slice(1);return{key:n,val:decodeURIComponent(r.join("="))}})).find((function(e){return e.key===i}));return e?e.val:void 0},s=document.currentScript,d=s.dataset,l=d.token,f=d.splitbeeid,v=l||f,p="1"===window.doNotTrack||"1"===navigator.doNotTrack,h=d.respectDnt,b=p&&h,w=(s.defer||s.async,void 0!==d.noCookie),y=d.api,m=s.src.includes("splitbee.io")?void 0:new URL(s.src).origin,g=y||m||"https://hive.splitbee.io",k=!1,S=function(){try{return localStorage.getItem("_userId")}catch(e){}},E=function(e){var i=e.path,a=e.body,s=e.setReferrer;return n(void 0,void 0,Promise,(function(){var e,n,d,l,f,p,h;return r(this,(function(r){switch(r.label){case 0:if(b)return[2,{response:void 0}];e=c(),n=S(),d=document.referrer,l=0===d.indexOf(location.protocol+"//"+location.host)?void 0:d,r.label=1;case 1:return r.trys.push([1,4,,5]),[4,fetch(g+i,{method:"POST",credentials:"include",headers:t(t(t(t({"Content-Type":"application/json"},e&&{uid:e}),n&&{userId:n}),v&&{sbp:v}),w&&{"no-cookie":"1"}),body:JSON.stringify(t(t({},a),l&&!k&&s&&{referrer:l}))})];case 2:return f=r.sent(),l&&(k=!0),[4,f.json()];case 3:return p=r.sent(),h=f.headers.get("uid"),o=h,h&&!w&&u(h),[2,{response:p||{},statusCode:f.status}];case 4:return r.sent(),[2,{response:void 0,statusCode:404}];case 5:return[2]}}))}))},I="",L=function(){return I=Math.random().toString(36).substring(7)},C=!1,O=0,x=0;setInterval((function(){C||(O+=1,(x+=1)>=30&&(C=!0))}),1e3);var T=function(){x=0},N=function(){O=0};window.addEventListener("blur",(function(){C=!0})),window.addEventListener("focus",(function(){C=!1,x=0})),["mousemove","scroll"].forEach((function(e){return document.addEventListener(e,T)}));var A=function(){var e,o=document.activeElement;if(o){var i=o.href;if(i){var a=new URL(i);window.location.hostname!==a.hostname&&(e=i)}}!function(e){n(void 0,void 0,void 0,(function(){return r(this,(function(n){return navigator&&navigator.sendBeacon&&navigator.sendBeacon(g+"/end",JSON.stringify(t(t({},e),{headers:t({},v&&{sbp:v})}))),[2]}))}))}({uid:c(),userId:S(),requestId:I,data:{duration:O,destination:e}})};window.addEventListener("beforeunload",A);var R=function(e,t,o){"FORM"===e.tagName?e.onsubmit=function(o){return n(void 0,void 0,void 0,(function(){var n;return r(this,(function(r){return n=function(e){for(var t,n={},r=e.elements,o=0;o<r.length;o++){var i=r[o],a=i.dataset.splitbeeProperty;if(a)t||(t={}),t["true"===a?i.name:a]=i.value;["password"].includes(i.type)||""===i.value||""===i.name||(n[i.name]=i.value)}return{data:n,user:t}}(e),D(t,n.data),n.user&&M.set(n.user),[2]}))}))}:e.addEventListener("click",(function(i){return n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return"a"!==e.tagName.toLowerCase()?[3,4]:(i.preventDefault(),"_blank"!==e.getAttribute("target")?[3,1]:(window.open(e.href,"_blank"),D(t,o),[3,3]));case 1:return[4,D(t,o)];case 2:n.sent(),location.href=e.href,n.label=3;case 3:return[3,5];case 4:D(t,o),n.label=5;case 5:return[2]}}))}))}))},j=function(e){e&&e.forEach((function(e){var t=setInterval((function(){var n=document.querySelectorAll(e.selector);0!==n.length&&(n.forEach((function(t){R(t,e.event)})),clearInterval(t))}),1e3)}))},P=[];document.addEventListener("DOMContentLoaded",(function(){j(P)}));var _=function(e){return n(void 0,void 0,void 0,(function(){var n,o;return r(this,(function(r){switch(r.label){case 0:r.label=1;case 1:return r.trys.push([1,3,,4]),[4,E({path:"/i",setReferrer:!0,body:t({origin:window.location.href,requestId:L()},e&&{eid:e})})];case 2:return n=r.sent(),o=n.response,n.statusCode,o?(o.actions&&(P=o.actions),o.type,[3,4]):[2];case 3:return r.sent(),[3,4];case 4:return j(P),[2]}}))}))},q=new WeakMap,D=function(e,t){return E({path:"/t",body:{event:e,data:t}})},M={set:function(e){var t=e.id,n=e.email,r=e.userId||t||n;r&&function(e){try{localStorage.setItem("_userId",e)}catch(e){}}(r),E({path:"/user",body:e})}};if(!window.splitbeeLoaded){_();var U=history.pushState;history.pushState=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[2],r="string"==typeof n?window.location.pathname!=n.split("?")[0]:n&&window.location.href!==n;r&&A(),U.apply(history,e),r&&(_(),N())},window.addEventListener("popstate",(function(){A(),_(),N()})),setInterval((function(){var e="data-splitbee-event";document.querySelectorAll("["+e+"]").forEach((function(t){var n={},r=t.getAttributeNames().filter((function(t){return t.includes(e+"-")}));r.length>0?r.forEach((function(r){var o=t.getAttribute(r);o&&(n[r.replace(e+"-","")]=o)})):n=void 0,q.has(t)||(q.set(t,!0),R(t,t.getAttribute(e),n))}))}),500),window.splitbeeLoaded=!0}var B=_;return e.enableCookie=function(){u(o),w=!1},e.init=B,e.track=D,e.user=M,e}({});