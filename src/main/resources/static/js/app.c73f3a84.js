(function(e){function t(t){for(var r,o,l=t[0],c=t[1],s=t[2],v=0,p=[];v<l.length;v++)o=l[v],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1df2":function(e,t,n){},"3c08":function(e,t,n){"use strict";var r=n("1df2"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-home")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Home")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[e._v("mdi-contact-mail")])],1),n("v-list-item-content",[n("v-list-item-title",[e._v("Contact")])],1)],1)],1)],1),n("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",[e._v("Alignment")])],1),n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"text-center"},[n("QuerySec",{on:{submit:e.onSubmit}})],1)],1),n("v-row",[n("v-spacer")],1),n("v-row",[n("v-col",{staticClass:"text-center"},[n("ResultSec",{attrs:{alignEntries:e.result}})],1)],1)],1)],1),n("v-footer",{attrs:{color:"indigo",app:""}},[n("span",{staticClass:"white--text"},[e._v("© 2019")])]),n("v-overlay",{attrs:{value:e.overlay}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-toolbar",{attrs:{flat:"",color:"blue",dark:""}},[n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(t){return e.$emit("submit",e.sequenceTxt)}}},[n("v-icon",[e._v("mdi-check-outline")])],1)],1),n("v-textarea",{attrs:{label:"Sequence",counter:"","full-width":"","single-line":""},on:{change:e.SequenceChange}})],1)},l=[],c={name:"QuerySec",data:function(){return{sequenceTxt:""}},methods:{SequenceChange:function(e){this.sequenceTxt=e}}},s=c,u=n("2877"),v=n("6544"),p=n.n(v),d=n("8336"),f=n("b0af"),b=n("132d"),m=n("2fa4"),g=n("a844"),y=n("71d9"),_=Object(u["a"])(s,o,l,!1,null,"08d2fce2",null),h=_.exports;p()(_,{VBtn:d["a"],VCard:f["a"],VIcon:b["a"],VSpacer:m["a"],VTextarea:g["a"],VToolbar:y["a"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{style:{visibility:e.visibility}},[n("v-toolbar",{attrs:{flat:"",color:"blue",dark:""}},[n("v-spacer")],1),e._l(e.alignEntries,(function(t,r){return n("AlignEntry",e._b({key:r},"AlignEntry",t,!1))}))],2)},w=[],S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"card",attrs:{outlined:""}},[e._l(e.alignedSequenceList,(function(t,r){return n("AlignedSequence",e._b({key:r},"AlignedSequence",t,!1))})),n("v-container",[n("v-row",[n("v-col",[n("v-alert",{attrs:{type:"info"}},[e._v(" Percentage of identity:"+e._s(e.percentageOfIdentity)+" ")])],1),n("v-col",[n("v-alert",{attrs:{type:"info"}},[e._v(" NUMTS ID:"+e._s(e.numts_ID)+" ")])],1)],1)],1)],2)},C=[],x=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"card",attrs:{outlined:""}},[n("v-container",[n("v-row",[n("v-col",[n("v-alert",{attrs:{type:"info"}},[e._v(" Coverage:"+e._s(e.coverage)+" ")])],1),n("v-col",[n("v-alert",{attrs:{type:"info"}},[e._v(" Number of Gaps:"+e._s(e.numGaps)+" ")])],1)],1),n("v-row",[n("v-col",[e._v(" "+e._s(e.starts)+" - "+e._s(e.sequence)+" - "+e._s(e.ends)+" ")])],1)],1)],1)}),O=[],A={name:"AlignedSequence",props:{sequence:String,starts:Number,ends:Number,coverage:Number,numGaps:Number}},j=A,q=(n("def5"),n("0798")),k=n("62ad"),E=n("a523"),T=n("0fd9"),I=Object(u["a"])(j,x,O,!1,null,"806dcfd6",null),P=I.exports;p()(I,{VAlert:q["a"],VCard:f["a"],VCol:k["a"],VContainer:E["a"],VRow:T["a"]});var N={name:"AlignEntry",components:{AlignedSequence:P},props:{alignedSequenceList:Array,percentageOfIdentity:Number,numts_ID:String}},L=N,$=(n("3c08"),Object(u["a"])(L,S,C,!1,null,"d505d3b2",null)),R=$.exports;p()($,{VAlert:q["a"],VCard:f["a"],VCol:k["a"],VContainer:E["a"],VRow:T["a"]});var M={name:"ResultSec",components:{AlignEntry:R},data:function(){return{visibility:"hidden"}},beforeUpdate:function(){null!=this.alignEntries&&(this.visibility="visible")},props:{alignEntries:[]}},D=M,B=Object(u["a"])(D,V,w,!1,null,"4e3545aa",null),G=B.exports;p()(B,{VCard:f["a"],VSpacer:m["a"],VToolbar:y["a"]});var Q=n("bc3a"),J=n.n(Q),U={components:{ResultSec:G,QuerySec:h},props:{source:String},data:function(){return{drawer:null,result:null,overlay:!1}},methods:{onSubmit:function(e){this.overlay=!0;var t=this;J.a.post("/Align",{sequence:e}).then((function(e){t.overlay=!1,t.result=e.data})).catch((function(e){t.overlay=!1,alert(e)}))}}},z=U,F=n("7496"),H=n("40dc"),K=n("5bc1"),W=n("a75b"),X=n("553a"),Y=n("8860"),Z=n("da13"),ee=n("1800"),te=n("5d23"),ne=n("f774"),re=n("a797"),ae=n("490a"),ie=n("2a7f"),oe=Object(u["a"])(z,a,i,!1,null,null,null),le=oe.exports;p()(oe,{VApp:F["a"],VAppBar:H["a"],VAppBarNavIcon:K["a"],VCol:k["a"],VContainer:E["a"],VContent:W["a"],VFooter:X["a"],VIcon:b["a"],VList:Y["a"],VListItem:Z["a"],VListItemAction:ee["a"],VListItemContent:te["a"],VListItemTitle:te["b"],VNavigationDrawer:ne["a"],VOverlay:re["a"],VProgressCircular:ae["a"],VRow:T["a"],VSpacer:m["a"],VToolbarTitle:ie["a"]});var ce=n("f309");r["a"].use(ce["a"]);var se=new ce["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:se,render:function(e){return e(le)}}).$mount("#app")},"8a84":function(e,t,n){},def5:function(e,t,n){"use strict";var r=n("8a84"),a=n.n(r);a.a}});
//# sourceMappingURL=app.c73f3a84.js.map