(function(o){function n(n){for(var t,l,a=n[0],i=n[1],u=n[2],p=0,f=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(o[t]=i[t]);s&&s(n);while(f.length)f.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var o,n=0;n<c.length;n++){for(var e=c[n],t=!0,a=1;a<e.length;a++){var i=e[a];0!==r[i]&&(t=!1)}t&&(c.splice(n--,1),o=l(l.s=e[0]))}return o}var t={},r={app:0},c=[];function l(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return o[n].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=o,l.c=t,l.d=function(o,n,e){l.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:e})},l.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},l.t=function(o,n){if(1&n&&(o=l(o)),8&n)return o;if(4&n&&"object"===typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var t in o)l.d(e,t,function(n){return o[n]}.bind(null,t));return e},l.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return l.d(n,"a",n),n},l.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},l.p="/vue-slider-rgb/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var u=0;u<a.length;u++)n(a[u]);var s=i;c.push([0,"chunk-vendors"]),e()})({0:function(o,n,e){o.exports=e("56d7")},"457f":function(o,n,e){"use strict";var t=e("9c7d"),r=e.n(t);r.a},"56d7":function(o,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var t=e("2b0e"),r=function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",{style:o.styles,attrs:{id:"app"}},[e("h1",{style:o.styles},[o._v("Slider RGB")]),e("ColorRange",{attrs:{color:o.colors[0]},on:{"change-color":o.changeColor}}),e("ColorRange",{attrs:{color:o.colors[1]},on:{"change-color":o.changeColor}}),e("ColorRange",{attrs:{color:o.colors[2]},on:{"change-color":o.changeColor}})],1)},c=[],l=(e("99af"),function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",[e("p",[o._v(o._s(this.color)+": "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.colorComponent,expression:"colorComponent"}],attrs:{type:"number",min:"0",max:"255"},domProps:{value:o.colorComponent},on:{change:o.changeColorComponent,input:[function(n){n.target.composing||(o.colorComponent=n.target.value)},o.changeColorComponent]}})])]),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.colorComponent,expression:"colorComponent"}],attrs:{type:"range",min:"0",max:"255"},domProps:{value:o.colorComponent},on:{change:o.changeColorComponent,input:o.changeColorComponent,__r:function(n){o.colorComponent=n.target.value}}})])])}),a=[],i={props:{color:{type:String,required:!0}},name:"ColorRange",data:function(){return{colorComponent:"255"}},methods:{changeColorComponent:function(){var o=this.colorComponent;this.$emit("change-color",o,this.color)}}},u=i,s=(e("457f"),e("2877")),p=Object(s["a"])(u,l,a,!1,null,"dba61e14",null),f=p.exports,m={name:"App",components:{ColorRange:f},methods:{makeColorStr:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.components.R,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.components.G,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.components.B;return"rgb(".concat(o,", ").concat(n,", ").concat(e,")")},changeColor:function(o,n){this.components[n]=o,this.bg=this.makeColorStr(),this.styles.backgroundColor=this.bg}},data:function(){return{colors:["R","G","B"],components:{R:255,G:255,B:255},styles:{backgroundColor:"#fff"}}}},d=m,h=(e("5c0b"),Object(s["a"])(d,r,c,!1,null,null,null)),g=h.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(o){return o(g)}}).$mount("#app")},"5c0b":function(o,n,e){"use strict";var t=e("9c0c"),r=e.n(t);r.a},"9c0c":function(o,n,e){},"9c7d":function(o,n,e){}});
//# sourceMappingURL=app.4acd957b.js.map