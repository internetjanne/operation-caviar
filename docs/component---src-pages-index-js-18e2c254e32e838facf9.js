/*! For license information please see component---src-pages-index-js-18e2c254e32e838facf9.js.LICENSE.txt */
(self.webpackChunkoperation_caviar=self.webpackChunkoperation_caviar||[]).push([[678],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},3093:function(e,t,n){!function(e,t,n,r){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var o="default"in n?n.default:n;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function c(e,t){if(null==e)return{};var n,r,o=l(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){return f(e)||d(e,t)||p(e,t)||y()}function f(e){if(Array.isArray(e))return e}function d(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}function p(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var v=function(e,r){var i=e.animationData,a=e.loop,l=e.autoplay,f=e.initialSegment,d=e.onComplete,p=e.onLoopComplete,m=e.onEnterFrame,y=e.onSegmentStart,v=e.onConfigReady,g=e.onDataReady,h=e.onDataFailed,b=e.onLoadedImages,S=e.onDOMLoaded,w=e.onDestroy,O=(e.lottieRef,e.renderer,e.name,e.assetsPath,e.rendererSettings,c(e,["animationData","loop","autoplay","initialSegment","onComplete","onLoopComplete","onEnterFrame","onSegmentStart","onConfigReady","onDataReady","onDataFailed","onLoadedImages","onDOMLoaded","onDestroy","lottieRef","renderer","name","assetsPath","rendererSettings"])),E=s(n.useState(!1),2),j=E[0],x=E[1],D=n.useRef(),P=n.useRef(null),L=function(){var e;null===(e=D.current)||void 0===e||e.play()},A=function(){var e;null===(e=D.current)||void 0===e||e.stop()},k=function(){var e;null===(e=D.current)||void 0===e||e.pause()},N=function(e){var t;null===(t=D.current)||void 0===t||t.setSpeed(e)},R=function(e,t){var n;null===(n=D.current)||void 0===n||n.goToAndPlay(e,t)},C=function(e,t){var n;null===(n=D.current)||void 0===n||n.goToAndStop(e,t)},T=function(e){var t;null===(t=D.current)||void 0===t||t.setDirection(e)},I=function(e,t){var n;null===(n=D.current)||void 0===n||n.playSegments(e,t)},F=function(e){var t;null===(t=D.current)||void 0===t||t.setSubframe(e)},M=function(e){var t;return null===(t=D.current)||void 0===t?void 0:t.getDuration(e)},H=function(){var e;null===(e=D.current)||void 0===e||e.destroy()},W=function(){var n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(P.current){null===(n=D.current)||void 0===n||n.destroy();var o=u(u(u({},e),r),{},{container:P.current});D.current=t.loadAnimation(o),x(!!D.current)}};return n.useEffect((function(){W()}),[i,a,l,f]),n.useEffect((function(){var e=[{name:"complete",handler:d},{name:"loopComplete",handler:p},{name:"enterFrame",handler:m},{name:"segmentStart",handler:y},{name:"config_ready",handler:v},{name:"data_ready",handler:g},{name:"data_failed",handler:h},{name:"loaded_images",handler:b},{name:"DOMLoaded",handler:S},{name:"destroy",handler:w}].filter((function(e){return null!=e.handler}));if(e.length){var t=e.map((function(e){var t;return null===(t=D.current)||void 0===t||t.addEventListener(e.name,e.handler),function(){var t;null===(t=D.current)||void 0===t||t.removeEventListener(e.name,e.handler)}}));return function(){t.forEach((function(e){return e()}))}}}),[d,p,m,y,v,g,h,b,S,w]),{View:o.createElement("div",Object.assign({style:r,ref:P},O)),play:L,stop:A,pause:k,setSpeed:N,goToAndStop:C,goToAndPlay:R,setDirection:T,playSegments:I,setSubframe:F,getDuration:M,destroy:H,animationLoaded:j,animationItem:D.current}};function g(e){var t=e.getBoundingClientRect(),n=t.top,r=t.height;return(window.innerHeight-n)/(window.innerHeight+r)}function h(e,t,n){var r=e.getBoundingClientRect(),o=r.top;return{x:(t-r.left)/r.width,y:(n-o)/r.height}}var b=function(e){var t=e.wrapperRef,r=e.animationItem,o=e.mode,i=e.actions;n.useEffect((function(){var e=t.current;if(e&&r){r.stop();var n=function(){var t=null,n=function(){var n=g(e),o=i.find((function(e){var t=e.visibility;return t&&n>=t[0]&&n<=t[1]}));if(o){if("seek"===o.type&&o.visibility&&2===o.frames.length){var a=o.frames[0]+Math.ceil((n-o.visibility[0])/(o.visibility[1]-o.visibility[0])*o.frames[1]);r.goToAndStop(a-r.firstFrame-1,!0)}"loop"===o.type&&(null===t||t!==o.frames||r.isPaused)&&(r.playSegments(o.frames,!0),t=o.frames),"play"===o.type&&r.isPaused&&(r.resetSegments(!0),r.play()),"stop"===o.type&&r.goToAndStop(o.frames[0]-r.firstFrame-1,!0)}};return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}},a=function(){var t=function(t,n){var o=t,a=n;if(-1!==o&&-1!==a){var u=h(e,o,a);o=u.x,a=u.y}var l=i.find((function(e){var t=e.position;return t&&Array.isArray(t.x)&&Array.isArray(t.y)?o>=t.x[0]&&o<=t.x[1]&&a>=t.y[0]&&a<=t.y[1]:!(!t||Number.isNaN(t.x)||Number.isNaN(t.y))&&o===t.x&&a===t.y}));if(l){if("seek"===l.type&&l.position&&Array.isArray(l.position.x)&&Array.isArray(l.position.y)&&2===l.frames.length){var c=(o-l.position.x[0])/(l.position.x[1]-l.position.x[0]),s=(a-l.position.y[0])/(l.position.y[1]-l.position.y[0]);r.playSegments(l.frames,!0),r.goToAndStop(Math.ceil((c+s)/2*(l.frames[1]-l.frames[0])),!0)}"loop"===l.type&&r.playSegments(l.frames,!0),"play"===l.type&&(r.isPaused&&r.resetSegments(!1),r.playSegments(l.frames)),"stop"===l.type&&r.goToAndStop(l.frames[0],!0)}},n=function(e){t(e.clientX,e.clientY)},o=function(){t(-1,-1)};return e.addEventListener("mousemove",n),e.addEventListener("mouseout",o),function(){e.removeEventListener("mousemove",n),e.removeEventListener("mouseout",o)}};switch(o){case"scroll":return n();case"cursor":return a()}}}),[o,r])},S=function(e){var t=e.actions,r=e.mode,i=e.lottieObj,a=i.animationItem,u=i.View,l=n.useRef(null);return b({actions:t,animationItem:a,mode:r,wrapperRef:l}),o.createElement("div",{ref:l},u)},w=function(e){var t,r=e.style,o=e.interactivity,i=c(e,["style","interactivity"]),a=v(i,r),l=a.View,s=a.play,f=a.stop,d=a.pause,p=a.setSpeed,m=a.goToAndStop,y=a.goToAndPlay,g=a.setDirection,h=a.playSegments,b=a.setSubframe,w=a.getDuration,O=a.destroy,E=a.animationLoaded,j=a.animationItem;return n.useEffect((function(){e.lottieRef&&(e.lottieRef.current={play:s,stop:f,pause:d,setSpeed:p,goToAndPlay:y,goToAndStop:m,setDirection:g,playSegments:h,setSubframe:b,getDuration:w,destroy:O,animationLoaded:E,animationItem:j})}),[null===(t=e.lottieRef)||void 0===t?void 0:t.current]),o?S(u({lottieObj:{View:l,play:s,stop:f,pause:d,setSpeed:p,goToAndStop:m,goToAndPlay:y,setDirection:g,playSegments:h,setSubframe:b,getDuration:w,destroy:O,animationLoaded:E,animationItem:j}},o)):l};w.propTypes={animationData:r.shape(void 0).isRequired,loop:r.oneOfType([r.bool,r.number]),autoplay:r.bool,initialSegment:r.arrayOf(r.number.isRequired),onComplete:r.func,onLoopComplete:r.func,onEnterFrame:r.func,onSegmentStart:r.func,onConfigReady:r.func,onDataReady:r.func,onDataFailed:r.func,onLoadedImages:r.func,onDOMLoaded:r.func,onDestroy:r.func,style:r.shape(void 0)},w.defaultProps={loop:!0,autoplay:!0,initialSegment:null,onComplete:null,onLoopComplete:null,onEnterFrame:null,onSegmentStart:null,onConfigReady:null,onDataReady:null,onDataFailed:null,onLoadedImages:null,onDOMLoaded:null,onDestroy:null,style:void 0};var O=w,E=v;e.LottiePlayer=t,e.Animator=O,e.default=w,e.useAnimator=E,e.useLottie=v,e.useLottieInteractivity=S,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(6042),n(7294),n(5697))},7235:function(e,t,n){var r=n(857),o=n(6656),i=n(6061),a=n(3070).f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});o(t,e)||a(t,e,{value:i.f(e)})}},1156:function(e,t,n){var r=n(5656),o=n(8006).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return a.slice()}}(e):o(r(e))}},6061:function(e,t,n){var r=n(5112);t.f=r},1817:function(e,t,n){"use strict";var r=n(2109),o=n(9781),i=n(7854),a=n(6656),u=n(111),l=n(3070).f,c=n(9920),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new s(e):void 0===e?s():s(e);return""===e&&(f[t]=!0),t};c(d,s);var p=d.prototype=s.prototype;p.constructor=d;var m=p.toString,y="Symbol(test)"==String(s("test")),v=/^Symbol\((.*)\)[^)]+$/;l(p,"description",{configurable:!0,get:function(){var e=u(this)?this.valueOf():this,t=m.call(e);if(a(f,e))return"";var n=y?t.slice(7,-1):t.replace(v,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:d})}},2526:function(e,t,n){"use strict";var r=n(2109),o=n(7854),i=n(5005),a=n(1913),u=n(9781),l=n(133),c=n(3307),s=n(7293),f=n(6656),d=n(3157),p=n(111),m=n(9670),y=n(7908),v=n(5656),g=n(7593),h=n(9114),b=n(30),S=n(1956),w=n(8006),O=n(1156),E=n(5181),j=n(1236),x=n(3070),D=n(5296),P=n(8880),L=n(1320),A=n(2309),k=n(6200),N=n(3501),R=n(9711),C=n(5112),T=n(6061),I=n(7235),F=n(8003),M=n(9909),H=n(2092).forEach,W=k("hidden"),B="Symbol",_=C("toPrimitive"),Y=M.set,V=M.getterFor(B),J=Object.prototype,X=o.Symbol,q=i("JSON","stringify"),z=j.f,$=x.f,U=O.f,K=D.f,Q=A("symbols"),Z=A("op-symbols"),G=A("string-to-symbol-registry"),ee=A("symbol-to-string-registry"),te=A("wks"),ne=o.QObject,re=!ne||!ne.prototype||!ne.prototype.findChild,oe=u&&s((function(){return 7!=b($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=z(J,t);r&&delete J[t],$(e,t,n),r&&e!==J&&$(J,t,r)}:$,ie=function(e,t){var n=Q[e]=b(X.prototype);return Y(n,{type:B,tag:e,description:t}),u||(n.description=t),n},ae=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof X},ue=function(e,t,n){e===J&&ue(Z,t,n),m(e);var r=g(t,!0);return m(n),f(Q,r)?(n.enumerable?(f(e,W)&&e[W][r]&&(e[W][r]=!1),n=b(n,{enumerable:h(0,!1)})):(f(e,W)||$(e,W,h(1,{})),e[W][r]=!0),oe(e,r,n)):$(e,r,n)},le=function(e,t){m(e);var n=v(t),r=S(n).concat(de(n));return H(r,(function(t){u&&!ce.call(n,t)||ue(e,t,n[t])})),e},ce=function(e){var t=g(e,!0),n=K.call(this,t);return!(this===J&&f(Q,t)&&!f(Z,t))&&(!(n||!f(this,t)||!f(Q,t)||f(this,W)&&this[W][t])||n)},se=function(e,t){var n=v(e),r=g(t,!0);if(n!==J||!f(Q,r)||f(Z,r)){var o=z(n,r);return!o||!f(Q,r)||f(n,W)&&n[W][r]||(o.enumerable=!0),o}},fe=function(e){var t=U(v(e)),n=[];return H(t,(function(e){f(Q,e)||f(N,e)||n.push(e)})),n},de=function(e){var t=e===J,n=U(t?Z:v(e)),r=[];return H(n,(function(e){!f(Q,e)||t&&!f(J,e)||r.push(Q[e])})),r};(l||(L((X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=R(e),n=function(e){this===J&&n.call(Z,e),f(this,W)&&f(this[W],t)&&(this[W][t]=!1),oe(this,t,h(1,e))};return u&&re&&oe(J,t,{configurable:!0,set:n}),ie(t,e)}).prototype,"toString",(function(){return V(this).tag})),L(X,"withoutSetter",(function(e){return ie(R(e),e)})),D.f=ce,x.f=ue,j.f=se,w.f=O.f=fe,E.f=de,T.f=function(e){return ie(C(e),e)},u&&($(X.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),a||L(J,"propertyIsEnumerable",ce,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:X}),H(S(te),(function(e){I(e)})),r({target:B,stat:!0,forced:!l},{for:function(e){var t=String(e);if(f(G,t))return G[t];var n=X(t);return G[t]=n,ee[n]=t,n},keyFor:function(e){if(!ae(e))throw TypeError(e+" is not a symbol");if(f(ee,e))return ee[e]},useSetter:function(){re=!0},useSimple:function(){re=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!u},{create:function(e,t){return void 0===t?b(e):le(b(e),t)},defineProperty:ue,defineProperties:le,getOwnPropertyDescriptor:se}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:fe,getOwnPropertySymbols:de}),r({target:"Object",stat:!0,forced:s((function(){E.f(1)}))},{getOwnPropertySymbols:function(e){return E.f(y(e))}}),q)&&r({target:"JSON",stat:!0,forced:!l||s((function(){var e=X();return"[null]"!=q([e])||"{}"!=q({a:e})||"{}"!=q(Object(e))}))},{stringify:function(e,t,n){for(var r,o=[e],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=t,(p(t)||void 0!==e)&&!ae(e))return d(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!ae(t))return t}),o[1]=t,q.apply(null,o)}});X.prototype[_]||P(X.prototype,_,X.prototype.valueOf),F(X,B),N[W]=!0},2452:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(3793),o=n.n(r),i=n(7294),a=(n(2526),n(1817),function(e){var t=e.children,n=(e.description,(0,i.useState)(!1)),r=n[0],o=n[1];return(0,i.useEffect)((function(){null===window.sessionStorage.getItem("cookieconsent")&&o(!0)}),[r]),i.createElement(i.Fragment,null,i.createElement("main",{className:"layout-module--base--3h2Xg"},i.createElement("div",{className:"layout-module--inner--10SHK"},t)))}),u=(n(9601),n(5900)),l=n.n(u),c=function(e){var t=e.src,n=e.className,r=e.data,o=e.style,a=e.touchDown,u=(0,i.useRef)(),c=(0,i.useState)(!1),s=c[0],f=c[1],d=function(e){return void 0!==e};return(0,i.useEffect)((function(){!function(e){if(d(u.current.contentWindow.pc)){var t=u.current.contentWindow.pc.data;u.current.contentWindow.pc.data=Object.assign({},t,e,{part:Object.assign({toggle:d(t.part)?t.part.toggle:null},e.part)})}}(r),void 0!==u.current.contentWindow.pc&&void 0!==u.current.contentWindow.pc.data.part&&(a&&!s?"function"==typeof u.current.contentWindow.pc.data.part.toggle&&(u.current.contentWindow.pc.data.part.toggle(!0),f(!0)):!a&&s&&(u.current.contentWindow.pc.data.part.toggle(!1),f(!1)))})),i.createElement("iframe",{title:"Scrollable background ABBA animation",className:l()("a3d-iframe",n),style:Object.assign({pointerEvents:"none"},o),frameBorder:"0",ref:u,src:t})};c.defaultProps={className:void 0,style:{width:"100%"}};var s=c,f=(n(1249),JSON.parse('{"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":104.000004236007,"w":40,"h":40,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":1,"nm":"Deep Orange Solid 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[20,19.877,0],"ix":2,"l":2},"a":{"a":0,"k":[20,20,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"hasMask":true,"masksProperties":[{"inv":false,"mode":"f","pt":{"a":1,"k":[{"i":{"x":0.221,"y":1},"o":{"x":0.84,"y":0},"t":0,"s":[{"i":[[2.761,0],[0,-2.761],[0,0],[-2.761,0],[0,2.761],[0,0]],"o":[[-2.761,0],[0,0],[0,2.761],[2.761,0],[0,0],[0,-2.761]],"v":[[20,0.25],[15,5.25],[15,5.375],[20,10.375],[25,5.375],[25,5.25]],"c":true}]},{"i":{"x":0.222,"y":1},"o":{"x":0.81,"y":0},"t":16,"s":[{"i":[[2.761,0],[0,-2.761],[0,0],[-2.761,0],[0,2.761],[0,0]],"o":[[-2.761,0],[0,0],[0,2.761],[2.761,0],[0,0],[0,-2.761]],"v":[[20,0.123],[15,5.123],[15,34.989],[20,39.989],[25,34.989],[25,5.123]],"c":true}]},{"i":{"x":0.259,"y":1},"o":{"x":0.856,"y":0},"t":34,"s":[{"i":[[2.761,0],[0,-2.761],[0,0],[-2.761,0],[0,2.761],[0,0]],"o":[[-2.761,0],[0,0],[0,2.761],[2.761,0],[0,0],[0,-2.761]],"v":[[20,29.875],[15,34.875],[15,35],[20,40],[25,35],[25,34.875]],"c":true}]},{"i":{"x":0.234,"y":1},"o":{"x":0.844,"y":0},"t":48,"s":[{"i":[[2.761,0],[0,-2.761],[0,0],[-2.761,0],[0,2.761],[0,0]],"o":[[-2.761,0],[0,0],[0,2.761],[2.761,0],[0,0],[0,-2.761]],"v":[[20,30],[15,35],[15,35.125],[20,40.125],[25,35.125],[25,35]],"c":true}]},{"i":{"x":0.233,"y":1},"o":{"x":0.818,"y":0},"t":60,"s":[{"i":[[2.761,0],[0,-2.761],[0,0],[-2.761,0],[0,2.761],[0,0]],"o":[[-2.761,0],[0,0],[0,2.761],[2.761,0],[0,0],[0,-2.761]],"v":[[20,0.125],[15,5.125],[15,35.125],[20,40.125],[25,35.125],[25,5.125]],"c":true}]},{"t":74.0000030140818,"s":[{"i":[[2.761,0],[0,-2.761],[0,0],[-2.761,0],[0,2.761],[0,0]],"o":[[-2.761,0],[0,0],[0,2.761],[2.761,0],[0,0],[0,-2.761]],"v":[[20,0.123],[15,5.123],[15,5.26],[20,10.26],[25,5.26],[25,5.123]],"c":true}]}],"ix":1},"o":{"a":0,"k":100,"ix":3},"x":{"a":0,"k":0,"ix":4},"nm":"Mask 1"}],"sw":40,"sh":40,"sc":"currentColor","ip":0,"op":900.000036657751,"st":0,"bm":0}],"markers":[]}')),d=n(3093),p=n.n(d),m=function(e){var t=e.animationData,n=e.playsForward,r=e.autoplay,o={loop:e.loop,autoplay:r,animationData:t,rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},a=(0,i.useRef)();return(0,i.useEffect)((function(){a.current.setDirection(n?1:-1),a.current.play()}),[n]),i.createElement(p(),Object.assign({},o,{style:{lineHeight:"0"},lottieRef:a,animationData:t}))};m.defaultProps={autoplay:!1,loop:!1,playsForward:!0};var y=m,v=function(e){var t,n=e.children,r=e.length,o=e.scrolled,a=e.popContent,u=e.progress,c=(0,i.useState)(void 0),s=c[0],d=c[1];(0,i.useLayoutEffect)((function(){void 0===s&&d(635===window.innerHeight)}),[s]);var p=(0,i.useMemo)((function(){return s?749*r+"px":100*r+"vh"}),[s,r]),m=(0,i.useMemo)((function(){return s?"749px":"100vh"}),[s]);return i.createElement("div",{className:"scrollSection-module--base--E5W3B",style:{height:p}},i.createElement("div",{className:"scrollSection-module--inner--3usk7",style:{height:m}},a.map((function(e){var t;return i.createElement("div",{key:e.point+e.distance+"-key",className:l()("scrollSection-module--pop--1wzH0",(t={},t["scrollSection-module--inview--2Yy2Y"]=e.point>u-e.distance&&e.point<u+e.distance,t))},e.html)})),n),i.createElement("div",{className:l()("scrollSection-module--scrollHint--2pYUo",(t={},t["scrollSection-module--hide--3VJyM"]=o,t))},i.createElement(y,{autoplay:!0,loop:!0,animationData:f})))};v.defaultProps={scrolled:!1};var g=function(e){var t=(0,i.useState)(!1),n=t[0],r=t[1];return(0,i.useEffect)((function(){r(!0)}),[]),n?i.createElement(v,e):null},h=function(e){var t=e.content,n=e.className;return i.createElement("div",{className:n},t.map((function(e,t){return i.createElement(i.Fragment,{key:n+t},e,i.createElement("br",null))})))},b=i.memo(h),S=function(e){var t=e.tagline1,n=e.tagline2,r=e.tagline3,o=e.tagline4,a=(0,i.useState)({}),u=a[0],l=a[1],c=(0,i.useState)(!1),f=c[0],d=c[1],p=(0,i.useState)(!1),m=p[0],y=p[1],v=(0,i.useState)(!1),h=v[0],S=v[1],w=(0,i.useRef)();(0,i.useEffect)((function(){var e=w.current,t=function(){var t=e.getBoundingClientRect(),n=1-(t.height+t.y)/t.height+.011,r=n+-.15*n;l(Object.assign({},u,{progress:r,smoothness:.5})),d(r>0),y(r)};window.addEventListener("scroll",t),window.addEventListener("resize",t);var n=function(e){var t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;l(Object.assign({},u,{part:{x:t,y:n}}))},r=function(e){var t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;l(Object.assign({},u,{part:{x:t,y:n}})),S(!0)},o=function(){S(!1)};return window.addEventListener("touchstart",r),window.addEventListener("touchmove",n),window.addEventListener("touchend",o),function(){window.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("touchmove",n),window.removeEventListener("touchstart",r),window.removeEventListener("touchend",o)}}),[u,f,m]);var O=(0,i.useMemo)((function(){var e=1-20*m+16;return e>1?1:e<0?0:e}),[m]);return i.createElement("section",{ref:w,className:"interactiveHero-module--base--3CINj",style:{opacity:O}},i.createElement(g,{length:6,scrolled:f,progress:m,popContent:[{html:t&&i.createElement(b,{className:"interactiveHero-module--tagline1--2V80v",content:t}),point:.22,distance:.02},{html:n&&i.createElement(b,{className:"interactiveHero-module--tagline2--1eqFu",content:n}),point:.39,distance:.02},{html:r&&i.createElement(b,{className:"interactiveHero-module--tagline3--3dABb",content:r}),point:.52,distance:.02},{html:o&&i.createElement(b,{className:"interactiveHero-module--tagline4--1Z-Pk",content:o}),point:.68,distance:.02}]},i.createElement(s,{touchDown:h,data:u,style:{display:0===O?"none":"block",height:"100%",width:"100%"},src:"./tlp10/index.html"})))},w=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.createElement(a,{description:"meta"},i.createElement(S,{tagline1:["Obladi","Oblada"],tagline2:["Obladi","Oblada"],tagline3:["Obladi","Oblada"],tagline4:["Obladi","Oblada"]}))},t}(i.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-18e2c254e32e838facf9.js.map