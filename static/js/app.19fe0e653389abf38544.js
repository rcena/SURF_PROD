webpackJsonp([1],{0:function(t,e){},1:function(t,e){},"1EtF":function(t,e){},2:function(t,e){},3:function(t,e){},"6Tc7":function(t,e,a){"use strict";function s(t){a("tZb8")}var n=a("xbG2"),i=a("Z6p1"),r=a("VU/8"),o=s,c=r(n.a,i.a,!1,o,"data-v-1c85c3ba",null);e.a=c.exports},"7zck":function(t,e){},"9GrG":function(t,e,a){"use strict";var s=a("6Tc7"),n=a("mtWM"),i=a.n(n);e.a={data:function(){return{loaded:!0,name:"",ssn:"",dob:null,nameCurrent:"Contains",nameOptions:["Contains","Starts With"],ssnCurrent:"Contains",ssnOptions:["Contains","Starts With"],dobStart:"",dobEnd:null,date:null,startDate:null,endDate:null,dateBool:!0,datetime:null,menu:!1,modal:!1,menu2:!1,show:!1,tableShow:!1,test:[]}},components:{DatePicker:s.a},mounted:function(){console.log(this.datetime)},watch:{startDate:function(t){this.dateBool&&(this.endDate=t,this.dateBool=!1)}},methods:{submitSearch:function(){var t=this;this.loaded=!1;var e=a("1nuA"),s=null;this.startDate||(this.startDate=this.endDate),this.endDate||(this.endDate=this.startDate),s=this.startDate+" "+this.endDate;var n={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"lookup",name:this.name,nameType:this.nameCurrent,ssn:this.ssn,ssnType:this.ssnCurrent,dob:s};i.a.post("https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do",e.stringify(n)).then(function(e){console.log(e),e.data.success?(t.test=e.data.data,t.tableShow=!0,t.loaded=!0):alert(e.data.error)}).catch(function(t){console.log(t.response),this.loaded=!0})},handleEdit:function(t,e){console.log(t,e)},handleDelete:function(t,e){this.test.splice(t,1),console.log(t,e)}}}},Drc2:function(t,e){},Iglj:function(t,e,a){"use strict";function s(t){a("KB9b")}var n=a("9GrG"),i=a("oh+G"),r=a("VU/8"),o=s,c=r(n.a,i.a,!1,o,"data-v-0f26dccf",null);e.a=c.exports},KB9b:function(t,e){},M93x:function(t,e,a){"use strict";function s(t){a("ib5y")}var n=a("xJD8"),i=a("zaOv"),r=a("VU/8"),o=s,c=r(n.a,i.a,!1,o,null,null);e.a=c.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("hKoQ"),n=(a.n(s),a("j1ja")),i=(a.n(n),a("7+uW")),r=a("3EgV"),o=a.n(r),c=a("zL8q"),l=a.n(c),d=a("wUZ8"),u=a.n(d),h=a("M93x"),v=a("YaEn"),f=a("mtWM"),p=a.n(f),m=a("K3J8"),_=(a.n(m),a("qb6w")),y=(a.n(_),a("k1UT")),w=(a.n(y),a("7zck")),g=(a.n(w),a("tvR6")),b=(a.n(g),a("QxPg")),S=a("mZf6"),C=a.n(S),k=a("sLGz"),D=a.n(k),x=a("0vJk"),N=a.n(x),M=a("wtEF");Object(s.polyfill)(),a("hKoQ").polyfill(),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(e||0,t.length)===t}),Array.from=function(t){return[].slice.call(t)},Object(s.polyfill)(),i.default.use(o.a),i.default.use(l.a,{locale:u.a}),p.a.defaults.headers.get.Accepts="application/json",b.a.library.add(C.a,D.a,N.a),v.a.beforeEach(function(t,e,s){if("INSANE"!=M.a.state.sanity){var n=a("1nuA"),i={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"sanity"};p.a.post("https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do",n.stringify(i)).then(function(t){"INSANE"!=t.data.sanity?window.location.href="https://starsraw.afpc.randolph.af.mil":(M.a.state.sanity="INSANE",s())}).catch(function(t){console.log(t),window.location.href="https://starsraw.afpc.randolph.af.mil"})}else s()}),new i.default({el:"#app",router:v.a,store:M.a,template:"<App/>",components:{App:h.a}})},NYyu:function(t,e){},NZJC:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer primary-color-dark center-on-small-only"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-4"},[a("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v("Links")]),t._v(" "),a("ul",[a("router-link",{staticClass:"footer-link",attrs:{to:"/",tag:"li"}},[a("a",{staticClass:"nav-link"},[t._v("SURF")])]),t._v(" "),a("router-link",{staticClass:"footer-link",attrs:{to:"/LookUp",tag:"li"}},[a("a",{staticClass:"nav-link"},[t._v("LookUp")])])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("p",{staticClass:"no-marg"},[t._v("For more information, questions or concerns please contact:")]),t._v(" "),a("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v("AFPC DSYD")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-2"},[a("p",{staticClass:"no-marg"},[t._v("Email: ")]),t._v(" "),a("p",{staticClass:"no-marg"},[t._v("DSN:  ")]),t._v(" "),a("p",{staticClass:"no-marg"},[t._v("COM:  ")])]),t._v(" "),a("div",{staticClass:"col"},[a("p",{staticClass:"no-marg"},[a("a",{staticClass:"font-bold",attrs:{href:"mailto:DSYD.WorkFlow@us.af.mil?Subject=PERS_STAT Assistance"}},[t._v("DSYD.WorkFlow@us.af.mil")])]),t._v(" "),a("p",{staticClass:"no-marg"},[t._v("312-665-3540")]),t._v(" "),a("p",{staticClass:"no-marg"},[t._v("210-565-3540")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-4"},[a("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v(" Additional Links")]),t._v(" "),a("ul")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-copyright"},[a("div",{staticClass:"container-fluid"},[t._v("\n                    © 2017-2018 Copyright: United States Air Force\n                ")])])}],i={render:s,staticRenderFns:n};e.a=i},Ruci:function(t,e,a){"use strict";var s=a("woOf"),n=a.n(s),i=a("uXZL"),r=a.n(i),o=a("mtWM"),c=a.n(o);e.a={data:function(){return{loaded:!0,showGrid:!1,step3:!1,step2:!1,showButton:!1,board:"",workbook:{Sheets:[""],SheetNames:[""]},force:"officer",type:"masked",sheet_json:[],headers:[],selectedCol:-1,currentSheetIndex:0,myGrid:{data:[""]},myGrid2:{data:[""]},dialog:!1,editedIndex:-1,editedItem:{SSN:""},defaultItem:{SSN:""},headersV:[],href:"",ssnList:[],numGood:0,numBad:0,numValidated:0,state:{headers:[""],tickets:[""],myGrid:[]}}},mounted:function(){},computed:{myGridTop10:function(){var t=this.myGrid.data.length;return t>10&&(t=10),this.myGrid.data.slice(0,t)},formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},typeString:function(){var t=this.type;return"masked"==t?"Masked":"unmasked"==t?"Unmasked":"with"==t?"With Proffesional Speciality":"without"==t?"Without Proffesional Speciality":void 0},currentSheetName:function(){return this.workbook.SheetNames[this.currentSheetIndex]},worksheet:function(){return this.workbook.Sheets[this.currentSheetName]},columns:function(){return this.headers[this.currentSheetIndex]},headersV1:function(){var t=this.headers[this.currentSheetIndex],e=[];return t&&t.forEach(function(t){e.push({text:t,value:t})}),e},dropDownText:function(){return-1==this.selectedCol?"Select SSN Column":this.columns[this.selectedCol]}},watch:{dialog:function(t){t||this.close()},selectedCol:function(t){this.showGrid=!0},currentSheetIndex:function(t){this.showGrid=!0,this.myGrid.data=this.sheet_json[this.currentSheetIndex],this.selectedCol=-1},force:function(t){this.type="officer"==t?"masked":"with",this.numValidated=0}},methods:{editItem:function(t){this.editedIndex=this.myGrid2.data.indexOf(t),this.editedItem=n()({},t),this.dialog=!0},deleteItem:function(t){var e=this.myGrid2.data.indexOf(t);this.myGrid2.data.splice(e,1);var a=this.parse(this.myGrid2.data,"SSN",1);this.myGrid2.data=a,this.step3=!0},close:function(){var t=this;this.dialog=!1;var e=this.parse(this.myGrid2.data,"SSN",1);this.myGrid2.data=e,this.step3=!0,setTimeout(function(){t.editedItem=n()({},t.defaultItem),t.editedIndex=-1},300)},save:function(){if(this.editedIndex>-1)n()(this.myGrid2.data[this.editedIndex],this.editedItem);else{this.myGrid2.data.push(this.editedItem);var t=this.parse(this.myGrid2.data,"SSN",1);this.myGrid2.data=t,this.step3=!0}this.close()},onReturn:function(t){var e={1:"GOOD",7:"NOT FOUND ON FILE",8:"DUPLICATE",9:"ERROR"};if(t.data){var a=t.data;a.forEach(function(t){t.STATUS=e[t.STATUS]});var s=this.parse(a,"SSN",2);this.myGrid2.data=s,this.step3=!0,this.numValidated=this.numGood}this.loaded=!0},validate:function(){var t=this,e=[];this.parse(this.ssnList,"SSN",1).forEach(function(t){t.SSN_FORMAT&&e.push(t.SSN)});var s=a("1nuA"),n={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"validate",force:this.force,type:this.type,list:e.join(",")};c.a.post("https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do",s.stringify(n)).then(function(e){t.onReturn(e.data)}).catch(function(t){console.log(t.response),this.loaded=!0})},runSurf:function(){this.loaded=!1;var t=[];this.parse(this.ssnList,"SSN",1).forEach(function(e){e.SSN_FORMAT&&t.push(e.SSN)});var e=a("1nuA"),s={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"runSurf",force:this.force,type:this.type,board:this.board,list:t.join(",")};this.href="https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do?"+e.stringify(s);var n=this.$refs.surfButton;setTimeout(function(){n.click()},500)},parse:function(t,e,a){var s=this;this.ssnList=[];var n=0,i=0,r="",o=!1;return t.forEach(function(t){if(t[e]){r=t[e].replace(/\W/g,""),o=/^\d+$/.test(r),r.length>9&&(o=!1);var c=9-r.length;c>0&&(r="0".repeat(c)+r),o||(r=t[e]);var l="";2==a?(l=t.STATUS,"GOOD"==l?n+=1:i+=1):1==a&&(o||(i+=1)),1==a?s.ssnList.push({SSN:r,SSN_FORMAT:o}):2==a&&s.ssnList.push({SSN:r,SSN_FORMAT:o,VALIDATED:l})}}),this.numGood=n,this.numBad=i,this.ssnList},processSSN:function(){var t=this.columns[this.selectedCol];if("UNKNOWN 1"==t)t="__EMPTY";else if(t.startsWith("UNKNOWN ")){var e=t.substr(8);t="__EMPTY_"+e}var a=this.parse(this.sheet_json[this.currentSheetIndex],t,1);this.myGrid2.data=a,this.step3=!0,this.showGrid=!1},selectCol:function(t){this.selectedCol=t},changeSheet:function(t){this.currentSheetIndex=t},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=(new Image,new FileReader),a=this;e.onload=function(t){a.image=t.target.result},e.readAsDataURL(t)},removeImage:function(t){this.image=""},get_header_row:function(t){var e,a=[],s=r.a.utils.decode_range(t["!ref"]),n=s.s.r;for(e=s.s.c;e<=s.e.c;++e){var i=t[r.a.utils.encode_cell({c:e,r:n})],o="";o=1==e?"__EMPTY":"__EMPTY_"+e,i&&i.t&&(o=r.a.utils.format_cell(i)),a.push(o)}return a},fixdata:function(t){for(var e="",a=0,s=10240;a<t.byteLength/s;++a)e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(a*s,a*s+s)));return e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(a*s)))},workbook_to_json:function(t){var e={};return t.SheetNames.forEach(function(a){var s=r.a.utils.sheet_to_row_object_array(t.Sheets[a]);s.length>0&&(e[a]=s)}),e},handleDrop:function(t){var e=this;t.stopPropagation(),t.preventDefault(),console.log("DROPPED");var a,s,n=t.dataTransfer.files;for(a=0,s=n[a];a!=n.length;++a){var i=new FileReader;s.name;i.onload=function(t){var a=t.target.result,s=e.fixdata(a);e.workbook=r.a.read(btoa(s),{type:"base64"}),e.sheet_json=[],e.headers=[];for(var n in e.workbook.Sheets){var i=e.workbook.Sheets[n],o=r.a.utils.sheet_to_json(i);e.sheet_json.push(o),e.headers.push(e.get_header_row(i))}document.getElementById("myGrid");e.myGrid.data=e.sheet_json[e.currentSheetIndex]},i.readAsArrayBuffer(s)}this.headersV=[{text:"SSN",align:"left",value:"SSN"},{text:"SSN_FORMAT",value:"SSN_FORMAT"},,{text:"VALIDATED",value:"VALIDATED"}],this.showGrid=!0,this.step2=!0},handleDragover:function(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"}},beforeUpdate:function(){console.log("beforeupdate"),console.log(this.headersV1),console.log(this.columns)}}},TVmP:function(t,e,a){"use strict";function s(t){a("wos+")}var n=a("UthT"),i=a.n(n),r=a("NZJC"),o=a("VU/8"),c=s,l=o(i.a,r.a,!1,c,null,null);e.default=l.exports},UthT:function(t,e){},XfjO:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-dark primary-color-dark fixed-top"},[s("img",{attrs:{src:a("jBjs"),height:"30px"}}),t._v(" "),s("div",{staticClass:"navbar-brand white-text"},[s("router-link",{staticClass:"white-text",attrs:{to:"/"}},[t._v("STARS-RAW")])],1),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[s("a",{staticClass:"nav-link"},[t._v("SURF")])]),t._v(" "),s("router-link",{staticClass:"nav-item",attrs:{to:"/LookUp",tag:"li","active-class":"active",exact:""}},[s("a",{staticClass:"nav-link"},[t._v("LookUp")])])],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler hoverable",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i={render:s,staticRenderFns:n};e.a=i},YaEn:function(t,e,a){"use strict";var s=a("7+uW"),n=a("/ocq"),i=a("d5XC"),r=a("Iglj");s.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Surf",component:i.a},{path:"/LookUp",name:"LookUp",component:r.a},{path:"*",redirect:"/"}],scrollBehavior:function(t,e,a){return{x:0,y:0}}})},Z6p1:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date-picker-container flex-center",class:{"hidden-footer":t.footer}},[a("div",{staticClass:"date-picker-background flex-center",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onClose(e)}}}),t._v(" "),a("div",{staticClass:"calendar-container"},[a("div",{staticClass:"calendar"},[a("div",{staticClass:"calendar-header flex-center",style:{"background-color":t.color}},[a("div",[a("h3",{class:{"calendar-faint":"date"===t.selecting},on:{click:function(e){t.setSelecting("year")}}},[t._v("\n            "+t._s(t.selectedYear)+"\n          ")]),t._v(" "),a("h2",{class:{"calendar-faint":"year"===t.selecting},on:{click:function(e){t.setSelecting("date")}}},[t._v("\n            "+t._s(t.abbrivatedDay)+", "+t._s(t.selectedMonthWord)+" "+t._s(t.selectedDay)+"\n          ")])])]),t._v(" "),"date"===t.selecting?a("div",{staticClass:"calendar-body grey lighten-5"},[a("div",{staticClass:"calendar-date"},[a("div",[t.showLeftArrow?a("div",{staticClass:"calendar-arrows flex left",on:{click:function(e){t.setByMonth(t.currentMonth-1)}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#212121",d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}})])]):t._e()]),t._v(" "),a("div",{staticClass:"calendar-current-date flex-center"},[a("h4",[t._v(t._s(t.currentMonthWord)+" "+t._s(t.currentYear))])]),t._v(" "),a("div",[t.showRightArrow?a("div",{staticClass:"calendar-arrows flex right",on:{click:function(e){t.setByMonth(t.currentMonth+1)}}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#212121",d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}})])]):t._e()])]),t._v(" "),a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.calendar,function(e,s){return a("tr",{key:s},t._l(e,function(e){return a("td",{key:"day-"+e.day,class:{"current-day":e.currentDay,disabled:e.disabled,selected:e.selected},style:{color:e.currentDay&&!e.selected?t.color:"","background-color":e.selected?t.color:""},attrs:{tabindex:"0"},on:{keydown:[function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onInput(e):null},function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key," ")?(e.stopPropagation(),e.preventDefault(),t.onInput(e)):null},function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.onClose(e):null}],click:function(a){t.setByDay(e)}}},[t._v(t._s(e.day))])}))}))])]):t._e(),t._v(" "),"year"===t.selecting?a("div",{staticClass:"calendar-year-select"},t._l(t.years,function(e){return a("div",{key:e.year,class:{selected:e.selected},style:{color:e.selected?t.color:""},attrs:{id:e.year+"-calendar-year"},on:{click:function(a){t.setByYear(e.year)}}},[t._v("\n          "+t._s(e.year)+"\n        ")])})):t._e(),t._v(" "),t.footer?t._e():a("div",{staticClass:"calendar-footer"},[a("button",{style:{color:t.color},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onClose(e)}}},[t._v("Cancel")]),t._v(" "),a("button",{style:{color:t.color},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onInput(e)}}},[t._v("Ok")])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("td",[t._v("S")]),t._v(" "),a("td",[t._v("M")]),t._v(" "),a("td",[t._v("T")]),t._v(" "),a("td",[t._v("W")]),t._v(" "),a("td",[t._v("T")]),t._v(" "),a("td",[t._v("F")]),t._v(" "),a("td",[t._v("S")])])])}],i={render:s,staticRenderFns:n};e.a=i},d5XC:function(t,e,a){"use strict";function s(t){a("NYyu")}var n=a("Ruci"),i=a("gQMf"),r=a("VU/8"),o=s,c=r(n.a,i.a,!1,o,"data-v-7a75fcde",null);e.a=c.exports},gQMf:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("transition-group",{attrs:{name:"fade",mode:"out-in"}},[a("loader",{directives:[{name:"show",rawName:"v-show",value:!t.loaded,expression:"!loaded"}],key:"loader"}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],key:"content"},[a("h1",[t._v("SURF")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col inline-form-group",attrs:{id:"radioSelect"}},[a("label",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.force,expression:"force"}],staticClass:"custom-control-input",attrs:{name:"force",type:"radio",value:"officer"},domProps:{checked:t._q(t.force,"officer")},on:{change:function(e){t.force="officer"}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"}),t._v(" "),a("span",{staticClass:"custom-control-description"},[t._v("Officer")])]),t._v(" "),a("label",{staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.force,expression:"force"}],staticClass:"custom-control-input",attrs:{name:"force",type:"radio",value:"enlisted"},domProps:{checked:t._q(t.force,"enlisted")},on:{change:function(e){t.force="enlisted"}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"}),t._v(" "),a("span",{staticClass:"custom-control-description"},[t._v("Enlisted")])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col inline-form-group",attrs:{id:"radioSelect"}},[a("label",{directives:[{name:"show",rawName:"v-show",value:"officer"==t.force,expression:"force=='officer'"}],staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"masked"},domProps:{checked:t._q(t.type,"masked")},on:{change:function(e){t.type="masked"}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"}),t._v(" "),a("span",{staticClass:"custom-control-description"},[t._v("Masked ")])]),t._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"officer"==t.force,expression:"force=='officer'"}],staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"unmasked"},domProps:{checked:t._q(t.type,"unmasked")},on:{change:function(e){t.type="unmasked"}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"}),t._v(" "),a("span",{staticClass:"custom-control-description"},[t._v("Unmasked")])]),t._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"enlisted"==t.force,expression:"force=='enlisted'"}],staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"with"},domProps:{checked:t._q(t.type,"with")},on:{change:function(e){t.type="with"}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"}),t._v(" "),a("span",{staticClass:"custom-control-description"},[t._v("With Proffesional Speciality")])]),t._v(" "),a("label",{directives:[{name:"show",rawName:"v-show",value:"enlisted"==t.force,expression:"force=='enlisted'"}],staticClass:"custom-control custom-radio"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"without"},domProps:{checked:t._q(t.type,"without")},on:{change:function(e){t.type="without"}}}),t._v(" "),a("span",{staticClass:"custom-control-indicator"}),t._v(" "),a("span",{staticClass:"custom-control-description"},[t._v("Without Proffesional Speciality")])])])]),t._v(" "),a("p",[t._v("This page is used to generate SURFs.")]),t._v(" "),a("br"),t._v(" "),a("h2",[t._v("Step 1: Upload SSN list ")]),t._v(" "),a("div",{staticClass:"container-responsive"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{attrs:{id:"drop"},on:{drop:t.handleDrop,dragover:t.handleDragover,dragenter:t.handleDragover}},[t._v("Drop File Here")])])]),t._v(" "),a("br"),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.step2,expression:"step2"}],staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3 no-left"},[a("h2",[t._v("Step 2:Preprocess")])]),t._v(" "),a("div",{staticClass:"col-3"},[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-sm btn-primary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.dropDownText)+" ")]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-primary"},t._l(t.columns,function(e,s){return a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selectCol(s)}}},[t._v(" "+t._s(e)+" ")])}))])]),t._v(" "),a("div",{staticClass:"col-2"},[t.selectedCol>=0?a("button",{staticClass:"btn btn-sm btn-amber",on:{click:function(e){return e.preventDefault(),t.processSSN(e)}}},[t._v(" Process SSNs ")]):t._e()]),t._v(" "),a("div",{staticClass:"col"},t._l(t.workbook.SheetNames,function(e,s){return a("button",{class:["btn","btn-sm",s==t.currentSheetIndex?"btn-success":"btn-info"],on:{click:function(e){t.changeSheet(s)}}},[t._v(" \n\t\t    \t\t\t\t"+t._s(e)+" \n\t\t    \t\t\t")])}))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showGrid,expression:"showGrid"}],staticClass:"row"},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headersV1,items:t.myGridTop10,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return a("tr",{},t._l(t.headersV1,function(s){return a("td",[t._v(t._s(e.item[s.text]))])}))}}])})],1),t._v(" "),a("br"),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[a("div",{staticClass:"col-4",staticStyle:{"margin-left":"0","padding-left":"0"}},[a("h2",[t._v("Step 3:Confirm SSNs")])]),t._v(" "),a("div",{staticClass:"col-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.board,expression:"board"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Board Name"},domProps:{value:t.board},on:{input:function(e){e.target.composing||(t.board=e.target.value)}}})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-sm btn-info",on:{click:function(e){t.dialog=!0}}},[t._v("Add SSN")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger "},[t._v(" Bad: "+t._s(t.numBad)+" ")]),t._v(" "),a("button",{class:["btn","btn-sm","btn-amber"],attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Validate with our records"},on:{click:t.validate}},[t._v(" Validate List ")]),t._v(" "),t.numValidated>0?a("button",{class:["btn","btn-sm","btn-success"],attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Make sure the currect type of SURF is requested"},on:{click:t.runSurf}},[t._v(" Run ("+t._s(t.numValidated)+") "+t._s(t.force)+" "+t._s(t.typeString)+" ")]):t._e()])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[a("div",{staticClass:"col-6"},[a("v-app",[a("v-dialog",{attrs:{"data-app":"true","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"SSN"},model:{value:t.editedItem.SSN,callback:function(e){t.$set(t.editedItem,"SSN",e)},expression:"editedItem.SSN"}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")])],1)],1)],1),t._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headersV,items:t.myGrid2.data,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return a("tr",{},[a("td",{staticClass:"text-xs-right",on:{click:function(t){}}},[t._v(t._s(e.item.SSN))]),t._v(" "),a("td",{staticClass:"text-xs-right",on:{click:function(t){}}},[t._v(t._s(e.item.SSN_FORMAT))]),t._v(" "),a("td",{staticClass:"text-xs-right",on:{click:function(t){}}},[t._v(t._s(e.item.VALIDATED))]),t._v(" "),a("td",{staticClass:"justify-center layout px-0",on:{click:function(t){}}},[a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){t.editItem(e.item)}}},[a("v-icon",{attrs:{color:"teal"}},[t._v("edit")])],1),t._v(" "),a("v-btn",{staticClass:"mx-0",attrs:{icon:""},on:{click:function(a){t.deleteItem(e.item)}}},[a("v-icon",{attrs:{color:"pink"}},[t._v("delete")])],1)],1)])}}])})],1)],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[a("div",{staticClass:"col-6"},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],ref:"surfButton",staticClass:"btn btn-sm btn-info ",attrs:{href:t.href,download:t.board+" "+t.typeString+".zip"}},[t._v(" TEST ")])])])])])])],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},ib5y:function(t,e){},jBjs:function(t,e,a){t.exports=a.p+"static/img/afpc_log.e969ea7.png"},k1UT:function(t,e){},lfLh:function(t,e,a){"use strict";function s(t){a("1EtF")}var n=a("Drc2"),i=a.n(n),r=a("XfjO"),o=a("VU/8"),c=s,l=o(i.a,r.a,!1,c,"data-v-6e7328c6",null);e.default=l.exports},"oh+G":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("transition-group",{attrs:{name:"fade",mode:"out-in"}},[a("loader",{directives:[{name:"show",rawName:"v-show",value:!t.loaded,expression:"!loaded"}],key:"loader"}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],key:"content"},[a("h1",[t._v("LookUp")]),t._v(" "),a("h3",{attrs:{clas:""}},[t._v("Historical Search for Active Duty AF Personnel")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"row no-top"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"row no-top"},[a("div",{staticClass:"col"},[a("h4",[t._v(" Name: ")]),t._v(" "),a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"col-6 form-control",attrs:{type:"text",placeholder:"Name Search"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("button",{staticClass:"col-5 btn btn-sm btn-info dropdown-toggle",attrs:{type:"button",id:"nameOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.nameCurrent)+" ")]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-primary"},t._l(t.nameOptions,function(e,s){return a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.nameCurrent=e}}},[t._v(" "+t._s(e)+" ")])}))])])]),t._v(" "),a("div",{staticClass:"row no-top"},[a("div",{staticClass:"col"},[a("h4",[t._v(" SSN: ")]),t._v(" "),a("span",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.ssn,expression:"ssn"}],staticClass:"col-6 form-control",attrs:{type:"text",placeholder:"SSN Search"},domProps:{value:t.ssn},on:{input:function(e){e.target.composing||(t.ssn=e.target.value)}}}),t._v(" "),a("button",{staticClass:"col-5 btn btn-sm btn-secondary dropdown-toggle",attrs:{type:"button",id:"ssnOption","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.ssnCurrent)+" ")]),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-primary"},t._l(t.ssnOptions,function(e,s){return a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.ssnCurrent=e}}},[t._v(" "+t._s(e)+" ")])}))])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h4",[t._v("DOB Range:")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{format:"MM-dd-yyyy","value-format":"MM-dd-yyyy",editable:""},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1)]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{format:"MM-dd-yyyy","value-format":"MM-dd-yyyy",editable:""},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)])])]),t._v(" "),a("div",{staticClass:"col-6"},[a("div",{staticClass:"row"},[a("button",{staticClass:"btn btn-lg btn-success",attrs:{id:"searchBtn"},on:{click:function(e){return e.preventDefault(),t.submitSearch(e)}}},[t._v(" Submit Search ")])])])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.tableShow,expression:"tableShow"}],staticClass:"row"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.test,stripe:"","max-height":"500","default-sort":{prop:"NAME",order:"ascending"},fit:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("h4",[t._v("Expanded Files: ")]),t._v(" "),a("p",[t._v(t._s(e.row.EXPANDED))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"TYPE",label:"TYPE",sortable:"","min-width":"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"NAME",label:"NAME",sortable:"","min-width":"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SSN",label:"SSN",sortable:"","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"GRADE",label:"GRADE",sortable:"","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"DOB",label:"DOB",sortable:"","min-width":"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"FILES",label:"FILES",sortable:"","min-width":"480"}}),t._v(" "),a("el-table-column",{attrs:{label:"Delete","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("Delete")])]}}])})],1)],1)])],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},qb6w:function(t,e){},tZb8:function(t,e){},tvR6:function(t,e){},"wos+":function(t,e){},wtEF:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var s=a("7+uW"),n=a("NYxO");s.default.use(n.a);var i=new n.a.Store({state:{asDate:"Undetermined",resetAfsc:!1,startAfsc:!1,sanity:"SANE"}})},xJD8:function(t,e,a){"use strict";var s=a("lfLh"),n=a("TVmP");e.a={components:{"app-navbar":s.default,"app-footer":n.default}}},xbG2:function(t,e,a){"use strict";var s={0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"},n={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},i=function(t,e,a){var s=null==t?0:t.length;if(!s)return[];e=null==e?0:e,a=void 0===a?s:a,e<0&&(e=-e>s?0:s+e),a=a>s?s:a,a<0&&(a+=s),s=e>a?0:a-e>>>0,e>>>=0;for(var n=-1,i=new Array(s);++n<s;)i[n]=t[n+e];return i},r=function(t,e){e=Math.max(e,0);var a=null==t?0:t.length;if(!a||e<1)return[];for(var s=0,n=0,r=new Array(Math.ceil(a/e));s<a;)r[n++]=i(t,s,s+=e);return r};e.a={props:{color:{type:String,required:!1,default:"#009688"},format:{type:Function,required:!1},min:{type:String,required:!1},max:{type:String,required:!1},value:{type:String,required:!1},footer:{type:Boolean,required:!1,default:!1}},computed:{initialDate:function(){return!(!this.value&&!this.min)},specifiedDate:function(){return new Date(this.value)},calculatedDate:function(){var t=this.selectedDay>=10?this.selectedDay:"0"+this.selectedDay,e=this.selectedMonth+1>=10?this.selectedMonth+1:"0"+(this.selectedMonth+1);return this.selectedYear+"-"+e+"-"+t},abbrivatedDay:function(){return s[this.selectedDayOfWeek]},currentMonthWord:function(){return n[this.currentMonth]},selectedMonthWord:function(){return n[this.selectedMonth]},minDate:function(){if(this.min){var t=this.min.split("-");return new Date(t[0],t[1],t[2])}},maxDate:function(){if(this.max){var t=this.max.split("-");return new Date(t[0],t[1],t[2])}},showLeftArrow:function(){return!this.min||(this.minDate.getFullYear()!==this.currentYear||this.minDate.getMonth()-1!==this.currentMonth)},showRightArrow:function(){return!this.max||(this.maxDate.getFullYear()!==this.currentYear||this.maxDate.getMonth()-1!==this.currentMonth)},calendar:function(){for(var t=this,e=[],a=new Date(this.currentYear,this.currentMonth,1).getDay(),s=0,n=a;s<n;s++)e.push("");for(var i=32-new Date(this.currentYear,this.currentMonth,32).getDate(),o=0;o<i;o++)e.push(o+1);var c=new Date,l=e.map(function(e){return{day:e,currentDay:e===c.getDate()&&t.currentMonth===c.getMonth()&&t.currentYear===c.getFullYear(),selected:t.selectedDay===e&&t.currentMonth===t.selectedMonth&&t.currentYear===t.selectedYear,disabled:t.dayDisabled(e)}});return r(l,7)},years:function(){var t=this,e=void 0;e=this.min?this.minDate.getFullYear():this.value?this.specifiedDate.getFullYear():(new Date).getFullYear();for(var a=this.max?this.maxDate.getFullYear()+1-e:101,s=[],n=e,i=e+a;n<i;n++)s.push(n);return s.map(function(e){return{year:e,selected:e===t.selectedYear}})}},created:function(){this.hideBodyOverflow(!0),this.setDate(),this.setEscapeEvent()},data:function(){return{selecting:"date",currentMonth:"",currentYear:"",selectedDayOfWeek:"",selectedDay:"",selectedMonth:"",selectedYear:""}},methods:{setSelecting:function(t){var e=this;this.selecting=t,"year"===t&&this.$nextTick(function(){var t=document.querySelector(".calendar-year-select"),a=document.getElementById(e.selectedYear+"-calendar-year");t.scrollTop=a.offsetTop-100-76})},setByDay:function(t){t.disabled||(this.selectedYear=this.currentYear,this.selectedDay=t.day,this.selectedMonth=this.currentMonth,this.selectedDayOfWeek=new Date(this.selectedYear,this.selectedMonth,t.day).getDay(),this.onInput())},setByMonth:function(t){return 12===t?(this.currentYear=this.currentYear+1,void(this.currentMonth=0)):-1===t?(this.currentYear=this.currentYear-1,void(this.currentMonth=11)):void(this.currentMonth=t)},setByYear:function(t){this.selectedYear=t,this.currentYear=t,this.selecting="date"},setDate:function(){var t=void 0;t=this.min&&this.min&&!this.value?new Date(this.min):this.value&&this.value?new Date(this.value):new Date,this.initialDate?this.selectedDay=t.getDate()+1:this.selectedDay=t.getDate(),this.selectedDayOfWeek=t.getDay(),this.selectedMonth=t.getMonth(),this.currentMonth=t.getMonth(),this.selectedYear=t.getFullYear(),this.currentYear=t.getFullYear()},dayDisabled:function(t){return!!(this.min&&this.minDate.getMonth()-1===this.currentMonth&&this.minDate.getFullYear()===this.currentYear&&t<this.minDate.getDate())||!!(this.max&&this.maxDate.getMonth()-1===this.currentMonth&&this.maxDate.getFullYear()===this.currentYear&&t>this.maxDate.getDate())},hideBodyOverflow:function(t){var e=document.querySelector("body");if(!0===t)return void(e.style.overflow="hidden");e.style.overflow=""},setEscapeEvent:function(){var t=this;document.addEventListener("keydown",function(e){27!=e.keyCode&&"Escape"!=e.key||t.onClose()})},onInput:function(){var t=this.format?this.format(this.calculatedDate):this.calculatedDate;this.$emit("input",t),this.onClose()},onClose:function(){this.hideBodyOverflow(!1),this.$emit("close")}}}},zaOv:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid grey lighten-5"},[a("app-navbar"),t._v(" "),a("div",{staticClass:"pt-5 mt-3",staticStyle:{"min-height":"800px"}},[a("router-view")],1),t._v(" "),a("app-footer")],1)},n=[],i={render:s,staticRenderFns:n};e.a=i}},["NHnr"]);
//# sourceMappingURL=app.19fe0e653389abf38544.js.map