(this.webpackJsonpkaran_portfolio=this.webpackJsonpkaran_portfolio||[]).push([[3],{56:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){c||(t.globalHide=c=!0,window.removeEventListener("scroll",o,!0),n("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,o){var s=Math.log(n),a=(Math.log(o)-s)/(i-t);return Math.exp(s+a*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+p)+"{"+e+"}",i=h[e];return i?""+v+i:(f.insertRule(t,f.cssRules.length),h[e]=p,""+v+p++)},t.hideAll=o,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var s=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=a=!1},c=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,v=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(d,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},57:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),s.default.Children.count(n)<2?s.default.createElement(a.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,(function(n){return s.default.createElement(a.default,o({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i(0)),a=n(i(58));e.exports=t.default},58:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,s=void 0;try{for(var a,r=e[Symbol.iterator]();!(n=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&r.return&&r.return()}finally{if(o)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(0),d=(n=l)&&n.__esModule?n:{default:n},c=i(13),u=i(56),p=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),h={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:p.isRequired,outEffect:(0,c.oneOfType)([p,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},f={transitionGroup:c.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,s=i.count,a=i.delay,r=i.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),a+(r+(t?r:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,a=void 0;if(t.collapseOnly)s=i.duration/3,a=i.delay;else{var r=n>>2,l=r>>1;s=r,a=i.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):d.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,r=n.reverse,l=i.length,c=2*s;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),s=c/2);var p=r?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?d.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(r?p--:p++,0,l,s,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,o=n.style,s=n.className,r=n.children,l=this.props.disabled?s:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),c=a({},o,{opacity:1})):c=this.props.disabled?o:a({},o,this.state.style);var p=a({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:c},this.props.refProp,this.saveRef)),h=d.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(d.default.Component);v.propTypes=h,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},60:function(e,t,i){"use strict";var n=i(2),o=i(3),s=i(5),a=i.n(s),r=i(0),l=i.n(r),d=i(6),c=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],p=l.a.forwardRef((function(e,t){var i=e.bsPrefix,s=e.className,r=e.as,p=void 0===r?"div":r,h=Object(o.a)(e,c),f=Object(d.a)(i,"col"),v=[],m=[];return u.forEach((function(e){var t,i,n,o=h[e];if(delete h[e],"object"===typeof o&&null!=o){var s=o.span;t=void 0===s||s,i=o.offset,n=o.order}else t=o;var a="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+f+a:""+f+a+"-"+t),null!=n&&m.push("order"+a+"-"+n),null!=i&&m.push("offset"+a+"-"+i)})),v.length||v.push(f),l.a.createElement(p,Object(n.a)({},h,{ref:t,className:a.a.apply(void 0,[s].concat(v,m))}))}));p.displayName="Col",t.a=p},65:function(e,t,i){},66:function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function o(e,t){var i=t.left,n=t.right,o=t.up,s=t.down,a=t.top,r=t.bottom,l=t.mirror,d=t.opposite,u=(i?1:0)|(n?2:0)|(a||s?4:0)|(r||o?8:0)|(l?16:0)|(d?32:0)|(e?64:0);if(p.hasOwnProperty(u))return p[u];if(!l!=!(e&&d)){var h=[n,i,r,a,s,o];i=h[0],n=h[1],a=h[2],r=h[3],o=h[4],s=h[5]}var f=i||n,v=a||r||o||s,m=void 0;return f||v?e?m="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(f?(i?"":"-")+"42px":"0")+", "+(v?(s||a?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(f?(n?"":"-")+"2000px":"0")+", "+(v?(o||r?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(v?"center bottom":(i?"left":"right")+" center")+";\n        }":m="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(f?(i?"-":"")+"1000px":"0")+", "+(v?(s||a?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(f?(n?"-":"")+"10px":"0")+", "+(v?(o||r?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":m=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",p[u]=(0,c.animation)(m),p[u]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,i=(e.out,e.forever),s=e.timeout,a=e.duration,r=void 0===a?c.defaults.duration:a,l=e.delay,u=void 0===l?c.defaults.delay:l,p=e.count,h=void 0===p?c.defaults.count:p,f=n(e,["children","out","forever","timeout","duration","delay","count"]),v={make:o,duration:void 0===s?r:s,delay:u,forever:i,count:h,style:{animationFillMode:"both"},reverse:f.left};return(0,d.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var a,r=i(13),l=i(57),d=(a=l)&&a.__esModule?a:{default:a},c=i(56),u={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,delay:r.number,count:r.number,forever:r.bool},p={};s.propTypes=u,t.default=s,e.exports=t.default},67:function(e,t,i){"use strict";var n=i(2),o=i(3),s=i(5),a=i.n(s),r=i(0),l=i.n(r),d=i(6),c=["bsPrefix","fluid","as","className"],u=l.a.forwardRef((function(e,t){var i=e.bsPrefix,s=e.fluid,r=e.as,u=void 0===r?"div":r,p=e.className,h=Object(o.a)(e,c),f=Object(d.a)(i,"container"),v="string"===typeof s?"-"+s:"-fluid";return l.a.createElement(u,Object(n.a)({ref:t},h,{className:a()(p,s?""+f+v:f)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},68:function(e,t,i){e.exports=i.p+"static/media/reactJS.7078d282.jpg"},69:function(e,t,i){e.exports=i.p+"static/media/python.8d8236d9.jpg"},75:function(e,t,i){"use strict";i.r(t);var n=i(26),o=i(27),s=i(30),a=i(29),r=i(0),l=i.n(r),d=(i(65),i(66)),c=i.n(d),u=i(67),p=i(60);var h=function(e){var t=e.data;return console.log(t),l.a.createElement("div",null,l.a.createElement("h1",{className:"project-header"},"Have a look at some of the projects created by me."),l.a.createElement(c.a,{left:!0},t.map((function(e,t){var i=e.previewUrl;return l.a.createElement(u.a,null,l.a.createElement("div",{className:"cards-list",key:t},l.a.createElement("div",{className:"card",style:{backgroundImage:"url(".concat(e.technology,")")}},l.a.createElement("div",{className:"content"},l.a.createElement(p.a,{className:"project-head"},e.head),l.a.createElement(p.a,{className:"project-desc"},e.description),l.a.createElement(p.a,null,l.a.createElement("b",null,i?l.a.createElement("a",{className:"btnPreview",href:e.previewUrl},"Review Code"):"Review not available"))))))}))))},f=i(68),v=i.n(f),m=i(69),y=i.n(m),b=function(e){Object(s.a)(i,e);var t=Object(a.a)(i);function i(){var e;return Object(n.a)(this,i),(e=t.call(this)).state={data:[{technology:y.a,head:"Facial Recognition",description:"Facial Recognition project created on Python using libraries like cv2, face-recognition and dlib can easily identify a person using his images which are to be provided as sample data to train the model.",previewUrl:"https://colab.research.google.com/drive/1AHxXlcEaeOCZdc3xRS9RvJUr6wmpvuoy?usp=sharing"},{technology:v.a,head:"Burger Builder",description:"In this project user can prepare a burger by adding ingredients like bacon, cheese of his choice and ordering functionality is also provided after logging-in using unique credentials."},{technology:y.a,head:"Loan Prediction",description:"Using the sample dataset of thousands of borrowers, firstly I drew a correlation matrix for all the features and after analysing the same, a model has been trained to predict whether a borrower can repay the loan or not.",previewUrl:"https://colab.research.google.com/drive/1cvqtD5ESRSrso0Ekf4KnRcwYn3cTof1V?usp=sharing"},{technology:v.a,head:"Portfolio",description:"You guessed it right! The portfolio you are looking at, is also created using ReactJS. This project includes state components as well as class based components. Have a look at its source code by clicking the below button.",previewUrl:"https://github.com/karanghai9/karanghai9"},{technology:y.a,head:"German Traffic Signs Detection",description:"This is one of my favourite project as it is created using Deep Learning model. Trained on dataset of thousands of images, this project can differentiate between all the different traffic signs.",previewUrl:"https://colab.research.google.com/drive/1fW2fGEDdpZoqAeQL3sUQcvoTx0VBkR0L?usp=sharing"},{technology:y.a,head:"Spam mail Detection",description:"As the name suggests, this project is just to analyse whether a provided mail is a spam mail or not. To achieve this, I did use stopwords and PorterStemmer.",previewUrl:"https://colab.research.google.com/drive/1sWYRuffc_QHHP2s9tdgovDIGgFDblvIx?usp=sharing"}]},e}return Object(o.a)(i,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(h,{data:this.state.data}))}}]),i}(r.Component);t.default=b}}]);
//# sourceMappingURL=3.febda60b.chunk.js.map