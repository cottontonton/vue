(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var m=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("v-toolbar-title",[t._v("入退室管理")]),n("v-spacer"),n("v-btn",{attrs:{icon:"",to:"/"}},[n("v-icon",[t._v("mdi-file-table-outline")])],1),n("v-btn",{attrs:{icon:"",to:"/custom"}},[n("v-icon",[t._v("mdi-pencil-outline")])],1),n("v-btn",{attrs:{icon:"",to:"/settings"}},[n("v-icon",[t._v("mdi-cog")])],1)],1),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1)],1)},o=[],i={name:"App",data:function(){return{snackbar:!1,x:null,y:"top",mode:null,alertMessage:this.$store.state.alertMessage,status:this.$store.state.status}},computed:{snackbarVisible:{get:function(){return this.$store.state.isEnable},set:function(){return this.$store.dispatch("snackOff")}}}},s=i,c=n("2877"),l=n("6544"),m=n.n(l),u=n("7496"),p=n("40dc"),d=n("8336"),f=n("a523"),v=n("132d"),h=n("f6c4"),g=n("2fa4"),b=n("2a7f"),y=Object(c["a"])(s,r,o,!1,null,null,null),C=y.exports;m()(y,{VApp:u["a"],VAppBar:p["a"],VBtn:d["a"],VContainer:f["a"],VIcon:v["a"],VMain:h["a"],VSpacer:g["a"],VToolbarTitle:b["a"]});var k=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticStyle:{height:"450px"},attrs:{justify:"center","align-content":"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-card",[n("v-card-title",[t._v(" 入退室登録 ")]),n("v-card-text",[n("v-form",[n("v-radio-group",{attrs:{name:"inout",required:""},on:{change:function(e){return t.reGetNameList()}},model:{value:t.inout,callback:function(e){t.inout=e},expression:"inout"}},[n("v-radio",{attrs:{label:"入室",value:"in"}}),n("v-radio",{attrs:{label:"退室",value:"out"}})],1),t.getCompanyList.length>0&&"in"===this.inout?n("v-select",{attrs:{label:"会社名",items:t.getCompanyList,name:"company"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}):0==t.getCompanyList.length?n("v-layout",{attrs:{"justify-center":""}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1):t._e(),"in"===this.inout?n("v-text-field",{attrs:{label:"利用者氏名",name:"name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}):t.getNameList.length>0?n("v-select",{attrs:{label:"利用者氏名",items:t.getNameList,name:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}):n("v-layout",{attrs:{"justify-center":""}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1)],1),n("v-btn",{attrs:{dark:"",block:"",color:"primary"},on:{click:function(e){return t.onClickSubmit()}}},[t._v(" 登録 ")])],1)],1),n("ConfirmModal",{ref:"confirmModal",on:{clearForm:t.clearForm}})],1)],1)],1)},V=[],w=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{attrs:{cols:"6"}},[n("v-dialog",{attrs:{parsistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("v-card",[n("v-card-title"),n("v-card-text",{staticClass:"black--text"},[n("v-list-item",[n("v-list-item-content",[t.inout?n("v-list-item-title",["in"==t.inout?n("span",[t._v("入室")]):n("span",[t._v("退室")])]):t._e(),n("v-list-item-title",[t._v("会社名: "+t._s(t.company))]),n("v-list-item-title",[t._v("名前: "+t._s(t.name))]),t.customTime?n("v-list-item-title",[t._v("利用時間: "+t._s(t.customTime.intime)+"〜"+t._s(t.customTime.outtime))]):t._e()],1)],1),t._v(" 上記内容で登録します。よろしいですか？ ")],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"grey",text:"",disabled:t.loading},on:{click:t.onClickClose}},[t._v(" キャンセル ")]),n("v-btn",{attrs:{color:"primary",text:"",loading:t.loading},on:{click:function(e){return t.onClickSubmit()}}},[t._v(" 送信 ")])],1)],1)],1)],1)}),L=[],_={name:"ConfirmModal",data:function(){return{show:!1,loading:!1,inout:"",company:"",name:"",customTime:[]}},methods:{open:function(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.show=!0,this.inout=t,this.company=e,this.name=n,void 0!==a&&(this.customTime=a)},onClickClose:function(){this.show=!1},onClickSubmit:function(){var t;if(this.customTime){var e=new Date(this.customTime.date),n=e.getMonth()+1;n=this.zeroPadding(n);var a=this.zeroPadding(e.getDate());t={company:this.company,name:this.name,date:e.getFullYear()+"/"+n+"/"+a,intime:this.customTime.intime,outtime:this.customTime.outtime}}else{var r=new Date,o=r.getMonth()+1;o=this.zeroPadding(o);var i=this.zeroPadding(r.getDate()),s=this.zeroPadding(r.getHours()),c=this.zeroPadding(r.getMinutes());t={inout:this.inout,company:this.company,name:this.name,date:r.getFullYear()+"/"+o+"/"+i,time:s+":"+c}}this.$store.dispatch("storeLog",{item:t}),this.$emit("clearForm"),this.show=!1},zeroPadding:function(t){return t+="",1===t.length&&(t="0"+t),t}}},M=_,T=n("b0af"),j=n("99d9"),$=n("62ad"),S=n("169a"),O=n("da13"),P=n("5d23"),R=Object(c["a"])(M,w,L,!1,null,null,null),E=R.exports;m()(R,{VBtn:d["a"],VCard:T["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:$["a"],VDialog:S["a"],VListItem:O["a"],VListItemContent:P["a"],VListItemTitle:P["b"],VSpacer:g["a"]});var F={name:"Home",components:{ConfirmModal:E},props:{props_companyList:{type:Array,default:function(){}}},data:function(){return{inout:"in",company:"",names:[],name:"",companyList:[]}},computed:{getCompanyList:function(){return this.$store.getters.getCompanyList},getNameList:function(){return this.$store.getters.getNameList}},created:function(){this.$store.dispatch("getCompany"),this.companyList=this.$store.getters.getCompanyList,this.$store.dispatch("getName"),this.nameList=this.$store.getters.nameList},methods:{onClickSubmit:function(){this.$refs.confirmModal.open(this.inout,this.company,this.name)},reGetNameList:function(){this.$store.dispatch("getName"),this.nameList=this.$store.getters.nameList},clearForm:function(){this.company="",this.name=""}}},N=F,D=n("4bd4"),A=n("a722"),H=n("490a"),I=n("67b6"),q=n("43a6"),z=n("0fd9"),B=n("b974"),G=n("8654"),U=Object(c["a"])(N,x,V,!1,null,null,null),Y=U.exports;m()(U,{VBtn:d["a"],VCard:T["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:$["a"],VForm:D["a"],VLayout:A["a"],VProgressCircular:H["a"],VRadio:I["a"],VRadioGroup:q["a"],VRow:z["a"],VSelect:B["a"],VTextField:G["a"]});var J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticStyle:{height:"450px"},attrs:{justify:"center","align-content":"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-card",[n("v-card-title",[t._v(" 会社名登録 ")]),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"会社名",name:"company_name",required:""},model:{value:t.company_name,callback:function(e){t.company_name=e},expression:"company_name"}})],1),n("v-btn",{attrs:{dark:"",block:"",color:"primary"},on:{click:function(e){return t.onClickSubmit()}}},[t._v(" 登録 ")])],1)],1)],1)],1)],1)},K=[],W={name:"Settings",data:function(){return{company_name:""}},methods:{onClickSubmit:function(){this.$store.dispatch("storeCompany",{item:{company_name:this.company_name}}),this.company_name=""}}},X=W,Q=Object(c["a"])(X,J,K,!1,null,null,null),Z=Q.exports;m()(Q,{VBtn:d["a"],VCard:T["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:$["a"],VForm:D["a"],VRow:z["a"],VTextField:G["a"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{justify:"center","align-content":"center"}},[n("v-col",{attrs:{cols:"10"}},[n("v-card",[n("v-card-title",[t._v(" 入退室登録(手動入力) ")]),n("v-card-text",[n("v-form",[n("v-col",[n("v-date-picker",{attrs:{locale:"jp-ja","day-format":function(t){return new Date(t).getDate()}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),n("vue-timepicker",{attrs:{format:t.format,"minute-interval":t.minInterval,"hour-range":t.inHourRange,"hide-disabled-items":"",placeholder:"入室時間","hour-label":"時","minute-label":"分",cols:"4"},model:{value:t.intime,callback:function(e){t.intime=e},expression:"intime"}}),n("vue-timepicker",{attrs:{format:t.format,"minute-interval":t.minInterval,"hour-range":t.outHourRange,"hide-disabled-items":"",placeholder:"退室時間","hour-label":"時","minute-label":"分"},model:{value:t.outtime,callback:function(e){t.outtime=e},expression:"outtime"}}),t.getCompanyList.length>0?n("v-select",{attrs:{label:"会社名",items:t.getCompanyList,name:"company"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}):n("v-layout",{attrs:{"justify-center":""}},[n("v-progress-circular",{attrs:{indeterminate:""}})],1),n("v-text-field",{attrs:{label:"利用者氏名",name:"name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-btn",{attrs:{dark:"",block:"",color:"primary"},on:{click:function(e){return t.onClickSubmit()}}},[t._v(" 登録 ")])],1)],1),n("ConfirmModal",{ref:"confirmModal"})],1)],1)],1)},et=[],nt=n("97fc"),at=n.n(nt),rt=(n("1e11"),{name:"Custom",components:{"vue-timepicker":at.a,ConfirmModal:E},data:function(){return{date:(new Date).toISOString().substr(0,10),inHourRange:[10,11,12,13,14,15,16,17,18,19],outHourRange:[11,12,13,14,15,16,17,18,19,20],intime:"",outtime:"",companyList:[],company:"",name:"",format:"HH:mm",minInterval:5}},computed:{getCompanyList:function(){return this.$store.getters.getCompanyList}},created:function(){this.$store.dispatch("getCompany"),this.companyList=this.$store.getters.getCompanyList,this.$store.dispatch("getName"),this.nameList=this.$store.getters.nameList},methods:{onClickSubmit:function(){this.$refs.confirmModal.open(null,this.company,this.name,{date:this.date,intime:this.intime,outtime:this.outtime})},clearForm:function(){this.company="",this.name="",this.intime="",this.outtime=""}}}),ot=rt,it=n("2e4b"),st=Object(c["a"])(ot,tt,et,!1,null,null,null),ct=st.exports;m()(st,{VBtn:d["a"],VCard:T["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:$["a"],VDatePicker:it["a"],VForm:D["a"],VLayout:A["a"],VProgressCircular:H["a"],VRow:z["a"],VSelect:B["a"],VTextField:G["a"]}),a["a"].use(k["a"]);var lt=[{path:"/",name:"Home",component:Y},{path:"/custom",name:"Custom",component:ct},{path:"/settings",name:"Settings",component:Z}],mt=new k["a"]({routes:lt}),ut=mt,pt=(n("ac1f"),n("1276"),n("96cf"),n("1da1")),dt=n("2f62"),ft=(n("d3b7"),n("bc3a")),vt=n.n(ft),ht=vt.a.create({headers:{"content-type":"application/x-www-form-urlencoded"}});ht.defaults.baseURL="https://script.google.com/macros/s/AKfycbwP22bVhsYxWu-7UURu-DE644h5993GhflogYU7UySsPTR0qXI/exec";var gt="EXfQr2qWcKRRqM29Btwgqkci9RiGMP83";ht.interceptors.response.use((function(t){return t.data.error?Promise.reject(t.data.error):Promise.resolve(t)}),(function(t){return Promise.reject(t)}));var bt=function(t){return ht.post("",{method:"POST",token:gt,item:t})},yt=function(){return ht.post("",{method:"GET",token:gt})},Ct=function(t){return ht.post("",{method:"GET",token:gt,item:t})},kt={post:bt,get:yt,getNames:Ct};a["a"].use(dt["a"]);var xt=new dt["a"].Store({state:{isEnable:!1,alertMessage:"",status:"success",companyList:[],nameList:[]},mutations:{saveCompanyList:function(t,e){t.companyList=e},saveNameList:function(t,e){t.nameList=e},setAlertMessage:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t.alertMessage=e,n&&(t.status=n)},setEnable:function(t){t.isEnable=!0},setDisable:function(t){t.isEnable=!1},setMessage:function(t,e){t.alertMessage=e}},actions:{getCompany:function(t){return Object(pt["a"])(regeneratorRuntime.mark((function e(){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.prev=1,e.next=4,kt.get();case 4:for(a=e.sent,r=[],o=0;o<a.data.data.length;o++)r[o]={text:a.data.data[o],value:a.data.data[o]};n("setAlertMessage",a.data.message,"success"),n("saveCompanyList",r),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),n("setAlertMessage",{message:e.t0},"error");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))()},getName:function(t){return Object(pt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,kt.getNames({date:new Date});case 3:a=e.sent,n("saveNameList",a.data.data);case 5:case"end":return e.stop()}}),e)})))()},storeLog:function(t,e){return Object(pt["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,"out"===e.item.inout&&(r=e.item.name.split(" / "),e.item.company=r[0],e.item.name=r[1]),n.prev=2,n.next=5,kt.post(e);case 5:o=n.sent,a("setAlertMessage",o.data.message,"success"),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](2),a("setAlertMessage",{message:n.t0},"error");case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},storeCompany:function(t,e){return Object(pt["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.prev=1,n.next=4,kt.post(e);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](1),a("setAlertMessage",{message:n.t0},"error");case 9:case"end":return n.stop()}}),n,null,[[1,6]])})))()},clearForm:function(t){var e=t.commit;e("clearForm")},saveCompanyList:function(t,e){var n=t.commit;n("saveCompanyList",e)},snackOn:function(t){var e=t.commit;e("setEnable")},snackOff:function(t){var e=t.commit;e("setDisable")}},getters:{getCompanyList:function(t){return t.companyList},getNameList:function(t){return t.nameList},status:function(t){return t.isEnable},message:function(t){return t.alertMessage}}}),Vt=n("f309");a["a"].use(Vt["a"]);var wt=new Vt["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:ut,store:xt,vuetify:wt,render:function(t){return t(C)}}).$mount("#app")}});
//# sourceMappingURL=app.18d96123.js.map