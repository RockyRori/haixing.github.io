(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-caa69960"],{"37ab":function(t,n,e){},"888d":function(t,n,e){"use strict";e("37ab")},cce7:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t._self._c;return n("div",[n("Header",{attrs:{waiting:t.waiting}}),n("el-row",[n("el-col",{attrs:{span:3}},[n("Aside",{attrs:{HEIGHT:t.HEIGHT}})],1),n("el-col",{attrs:{span:21}},[n("TDataGrip")],1)],1)],1)},i=[],a=e("0418"),c=e("3d13"),o=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"PDF"}},[n("div",{attrs:{id:"tittle"}},[n("el-button",{attrs:{type:"primary"}},[t._v("\n\t\t\tTip:\n\t\t\t"),n("span",{staticStyle:{color:"#ff007f","font-weight":"bold","font-size":"18px"}},[t._v("需要")]),t._v("\n\t\t\t点击浏览器的刷新\n\t\t\t"),n("span",{staticStyle:{color:"#ff007f","font-weight":"bold","font-size":"18px"}},[t._v("并且")]),t._v("\n\t\t\t等待5秒才能加载出来\n\t\t")]),n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.printPDF()}}},[t._v("导出PDF")]),n("div",[t._v("当前页面："),n("el-input",{staticStyle:{width:"5em"},attrs:{type:"number"},model:{value:t.current,callback:function(n){t.current=n},expression:"current"}}),t._v(" /"+t._s(t.total))],1),n("div",[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.previous()}}},[t._v("上一页")]),n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.next()}}},[t._v("下一页")])],1)],1),n("pdf",{ref:"myPdf",attrs:{src:t.url,page:t.current},on:{"num-pages":function(n){t.total=n},"page-loaded":function(n){t.current=n}}}),n("el-divider",{attrs:{"content-position":"center"}},[t._v("单页全部PDF")]),t._l(t.total,(function(e){return n("pdf",{key:e,staticStyle:{opacity:"0.9"},attrs:{src:t.url,page:e}})}))],2)},s=[],u=e("858e"),l={inject:["reload"],components:{pdf:u["a"]},watch:{current:function(t){this.current=parseInt(t),this.current>this.total&&(this.current=1),this.current<1&&(this.current=this.total)}},mounted:function(){this.init(),this.addKeyboardEvents()},data:function(){return{url:"",current:1,total:0}},methods:{init:function(){this.url=u["a"].createLoadingTask({url:"/pdf/DataGrip 中文教程.pdf",cMapUrl:"../assets/cmaps/",cMapPacked:!0})},printPDF:function(){this.$refs.myPdf.print()},previous:function(){this.current=this.current<=1?this.total:this.current-1},next:function(){this.current=this.current>=this.total?1:this.current+1},addKeyboardEvents:function(){var t=this;document.onkeydown=function(n){var e=window.event.keyCode;switch(e){case 37:t.previous();break;case 39:t.next();break;case 13:t.reload();break}}}}},p=l,d=(e("888d"),e("2877")),f=Object(d["a"])(p,o,s,!1,null,"595a072b",null),h=f.exports,v={props:["waiting"],components:{Header:a["a"],Aside:c["a"],TDataGrip:h},watch:{},mounted:function(){},data:function(){return{HEIGHT:12600}},methods:{}},y=v,b=Object(d["a"])(y,r,i,!1,null,"356f8a33",null);n["default"]=b.exports}}]);
//# sourceMappingURL=chunk-caa69960.0e0a2088.js.map