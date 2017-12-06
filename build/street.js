!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=n(1),l=function(t){return t&&t.__esModule?t:{default:t}}(a),u=n(3),c=function(){function t(e){r(this,t),this._images={},this.task=[]}return s(t,[{key:"load",value:function(t,e){for(var n=this,i=0;i<t.length;i++)!function(i){i==t.length-1?n.task.push(function(){n._images[t[i]]=new Image,n._images[t[i]].onload=function(){e()},n._images[t[i]].src=t[i]}):n.task.push(function(e){n._images[t[i]]=new Image,n._images[t[i]].onload=function(){e()},n._images[t[i]].src=t[i]})}(i);return(0,u.queue)(n.task,this)}},{key:"pick",value:function(t){if(void 0!==this._images[t])return this._images[t];throw new Error("请传入图片对象")}}]),t}(),h=function(t){function e(t){r(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n.dpr=window.devicePixelRatio||1,n.assets=t.list||null,n.el=t.el,n.context=t.el.getContext("2d"),n.sprites=[],n.map=t.map||null,n.init(),n}return o(e,t),s(e,[{key:"init",value:function(){this._width=this.el.parentNode.clientWidth,this._height=this.el.parentNode.clientHeight,this.width=this.dpr*this._width,this.height=this.dpr*this._height,this.el.style.width=this._width+"px",this.el.style.height=this._height+"px",this.el.width=~~this.width,this.el.height=~~this.height,this.im=new c(this.assets),this.load()}},{key:"dp",value:function(t){return~~t*this.dpr}},{key:"load",value:function(){var t=this;if(this.assets){this.on(function(){t.update()},"load"),this.im.load(this.assets,function(){t.emit(console.log("load success"),"load")});var e=~~this.context.measureText("Loading..").width*this.dpr,n=15*this.dpr,i=~~(this._width-e)/2,o=~~(this._height-n)/2;this.textAlign="center",this.context.font="400 "+15*this.dpr+"px 微软雅黑,Sans-Serif",this.context.fillStyle="#ccc",this.context.fillText("Loading..",i*this.dpr,o*this.dpr)}else this.update()}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.height;this.context.clearRect(t,e,n,i)}},{key:"update",value:function(t,e,n,i,o,r){this.clear();var s=this.im.pick("../assets/ji.jpg");this.context.drawImage(s,0,0,s.width,s.height)}},{key:"draw",value:function(){}},{key:"addSprite",value:function(t,e){this.sprites[t]=e}},{key:"removeSprite",value:function(t){this.sprites[t]&&delete this.sprites[t]}}]),e}(u.EventEmitter),f=new l.default;f.setMode(0),f.domElement.style.position="absolute",f.domElement.style.right="0px",f.domElement.style.top="0px",document.body.appendChild(f.domElement),window.onload=function(){new h({el:document.querySelector("#stage"),list:["../assets/ji.jpg"]},function(){console.log("sucess")})},window.addEventListener("resize",function(){})},function(t,e,n){"use strict";(function(t){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(){function t(t,e,n){return t=document.createElement(t),t.id=e,t.style.cssText=n,t}function e(e,n,i){var o=t("div",e,"padding:0 0 3px 3px;text-align:left;background:"+i),r=t("div",e+"Text","font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px;color:"+n);for(r.innerHTML=e.toUpperCase(),o.appendChild(r),e=t("div",e+"Graph","width:74px;height:30px;background:"+n),o.appendChild(e),n=0;74>n;n++)e.appendChild(t("span","","width:1px;height:30px;float:left;opacity:0.9;background:"+i));return o}function n(t){for(var e=u.children,n=0;n<e.length;n++)e[n].style.display=n===t?"block":"none";l=t}function i(t,e){t.appendChild(t.firstChild).style.height=Math.min(30,30-30*e)+"px"}var o=self.performance&&self.performance.now?self.performance.now.bind(performance):Date.now,r=o(),s=r,a=0,l=0,u=t("div","stats","width:80px;opacity:0.9;cursor:pointer");u.addEventListener("mousedown",function(t){t.preventDefault(),n(++l%u.children.length)},!1);var c=0,h=1/0,f=0,d=e("fps","#0ff","#002"),p=d.children[0],m=d.children[1];u.appendChild(d);var y=0,g=1/0,v=0,d=e("ms","#0f0","#020"),w=d.children[0],b=d.children[1];if(u.appendChild(d),self.performance&&self.performance.memory){var x=0,_=1/0,k=0,d=e("mb","#f08","#201"),j=d.children[0],S=d.children[1];u.appendChild(d)}return n(l),{REVISION:14,domElement:u,setMode:n,begin:function(){r=o()},end:function(){var t=o();if(y=t-r,g=Math.min(g,y),v=Math.max(v,y),w.textContent=(0|y)+" MS ("+(0|g)+"-"+(0|v)+")",i(b,y/200),a++,t>s+1e3&&(c=Math.round(1e3*a/(t-s)),h=Math.min(h,c),f=Math.max(f,c),p.textContent=c+" FPS ("+h+"-"+f+")",i(m,c/100),s=t,a=0,void 0!==x)){var e=performance.memory.usedJSHeapSize,n=performance.memory.jsHeapSizeLimit;x=Math.round(9.54e-7*e),_=Math.min(_,x),k=Math.max(k,x),j.textContent=x+" MB ("+_+"-"+k+")",i(S,e/n)}return t},update:function(){r=this.end()}}};"object"===e(t)&&(t.exports=n)}).call(e,n(2)(t))},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,function(t,e){!function n(){t.length>0&&t.shift().apply(e||{},[n].concat(Array.prototype.slice.call(arguments,0)))}()}),s=function(t,e,n){t[e]&&(t.__[e]={}),Object.defineProperty(t,e,{get:function(){return t.__[e]},set:function(i){n(i,t.__[e]),t.__[e]=i}})},a=(function(){function t(){i(this,t),this.subscribers=new Map([["any",[]]])}o(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"any",n=this.subscribers;if(!n.get(e))return n.set(e,[t]);n.set(e,n.get(e).push(t))}},{key:"emit",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"any",n=!0,i=!1,o=void 0;try{for(var r,s=this.subscribers.get(e)[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){(0,r.value)(t)}}catch(t){i=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}}}])}(),function(){function t(){i(this,t),this.list={}}return o(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"any";this.list[e]||(this.list[e]=[]),this.list[e].push(t)}},{key:"emit",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"any",n=Array.prototype.pop.call(arguments),i=this.list[n];if(i&&0!==i.length){for(var o=0;o<i.length;o++)i[o].apply(this,arguments);delete this.list[e]}}}]),t}());e.queue=r,e.observer=s,e.EventEmitter=a}]);