(function(e){function t(t){for(var s,l,o=t[0],a=t[1],c=t[2],d=0,f=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],s=!0,o=1;o<i.length;o++){var a=i[o];0!==n[a]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=i[0]))}return e}var s={},n={app:0},r=[];function l(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=s,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(i,s,function(t){return e[t]}.bind(null,s));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=a;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var s=i("85ec"),n=i.n(s);n.a},"29d7":function(e,t,i){"use strict";var s=i("4516"),n=i.n(s);n.a},3194:function(e,t,i){},4516:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("MainHeader"),i("PageLinks"),i("Home",{directives:[{name:"show",rawName:"v-show",value:e.isPageSelected("home"),expression:"isPageSelected('home')"}]}),i("About",{directives:[{name:"show",rawName:"v-show",value:e.isPageSelected("about"),expression:"isPageSelected('about')"}]}),i("MainFooter")],1)},r=[],l=i("2f62"),o={selectedPageId:"home",selectedSectionId:"welcome",pageSections:{home:[{name:"WELCOME!",id:"welcome"},{name:"PURPOSE OF THIS PORTFOLIO",id:"purpose"},{name:"HOW THIS PORTFOLIO IS ORGANIZED",id:"organized"}],about:[{name:"WHO AM I?",id:"who"},{name:"WHAT ARE MY GOALS?",id:"goals"},{name:"WHAT DRIVES ME?",id:"drives"}]}};s["a"].use(l["a"]);const a=new l["a"].Store({state:o});var c=a,u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"pageLinks"},e._l(e.links,(function(t,s){return i("a",{key:s,class:{"pageLinks-item":!0,selected:e.isSelected(t.id)},attrs:{href:t.url},on:{click:function(i){return e.updatePage(t.id)}}},[i("span",{staticClass:"pageLinks-item-text"},[e._v(e._s(t.name))])])})),0)])},d=[];const f=[{name:"HOME",id:"home",url:"/#/"},{name:"ABOUT",id:"about",url:"/#/about"},{name:"PROJECTS",id:"projects",url:"/#/projects"}];var p={name:"PageLinks",methods:{updatePage(e){this.$store.state.selectedPageId=e,this.setDefaultSelectedSection(e)},isSelected(e){return this.$store.state.selectedPageId===e},setDefaultSelectedSection(e){this.$store.state.selectedSectionId=this.$store.state.pageSections[e][0].id}},data(){return{links:f}},created(){this.$store.state.selectedPageId=f[0].id}},v=p,m=(i("b64b"),i("2877")),h=Object(m["a"])(v,u,d,!1,null,"57688081",null),w=h.exports,O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mainHeader"})},x=[],S={name:"MainHeader"},g=S,b=(i("ce91"),Object(m["a"])(g,O,x,!1,null,"30d5afd4",null)),_=b.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mainFooter"})},I=[],H={name:"MainFooter"},E=H,F=(i("f924"),Object(m["a"])(E,P,I,!1,null,"cb7e674e",null)),T=F.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Page",{attrs:{sections:e.sections}},[i("Welcome",{directives:[{name:"show",rawName:"v-show",value:e.isSelected("welcome"),expression:"isSelected('welcome')"}]}),i("Purpose",{directives:[{name:"show",rawName:"v-show",value:e.isSelected("purpose"),expression:"isSelected('purpose')"}]}),i("Organized",{directives:[{name:"show",rawName:"v-show",value:e.isSelected("organized"),expression:"isSelected('organized')"}]})],1)],1)},B=[],j=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"page-flex"},[i("PageSections",{attrs:{sections:e.sections}}),i("div",{staticClass:"page-content"},[e._t("default")],2)],1)])},A=[],L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"pageSections"},e._l(e.sections,(function(t,s){return i("div",{key:s,class:{"pageSections-item":!0,selected:e.isSelected(t.id)},on:{click:function(i){return e.updateSection(t.id)}}},[i("span",{staticClass:"pageSections-item-text"},[e._v(e._s(t.name))])])})),0)])},y=[],M={name:"PageSections",props:["sections"],methods:{isSelected(e){return this.$store.state.selectedSectionId===e},updateSection(e){this.$store.state.selectedSectionId=e}}},C=M,R=(i("a174"),Object(m["a"])(C,L,y,!1,null,"63462cf0",null)),k=R.exports,N={name:"Page",components:{PageSections:k},props:["sections"]},W=N,z=(i("f321"),Object(m["a"])(W,j,A,!1,null,null,null)),D=z.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"welcome"},[i("div",{staticClass:"welcome-title"},[e._v("HELLO.")]),i("div",{staticClass:"welcome-subtitle"},[e._v("I AM BRODIE.")])]),i("div",{staticClass:"tip"},[e._v("CLICK TABS ON LEFT TO BROWSE PAGES")])])}],J={name:"Welcome"},V=J,Y=(i("29d7"),Object(m["a"])(V,G,U,!1,null,"b0369422",null)),X=Y.exports,Z=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("PageHeader",{attrs:{title:"PURPOSE OF THIS PORTFOLIO",subtitle:"FILLER TEXT"}}),i("p",[e._v("Filler text is fun to write. Fun it is to write filler text. Filler text is fun to write.")]),i("p",[e._v("Filler text is fun to write. Fun it is to write filler text. Filler text is fun to write. Is to write filler text.")])],1)},K=[],q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pageHeader"},[i("div",{staticClass:"pageHeader-title",style:{fontSize:e.titleSize+"px"}},[e._v(" "+e._s(e.title)+" "),i("div",{staticClass:"pageHeader-subtitle",style:{fontSize:e.subtitleSize+"px"}},[e._v(e._s(e.subtitle))])]),i("div",{staticClass:"pageHeader-break"})])},Q=[],ee={name:"PageHeader",props:{title:String,subtitle:String,titleSize:{type:Number,default:60},subtitleSize:{type:Number,default:36}}},te=ee,ie=(i("da01"),Object(m["a"])(te,q,Q,!1,null,"0fbcdb0e",null)),se=ie.exports,ne={name:"Purpose",components:{PageHeader:se}},re=ne,le=Object(m["a"])(re,Z,K,!1,null,"44f35ba5",null),oe=le.exports,ae=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("PageHeader",{attrs:{title:"HOW THIS PORTFOLIO IS ORGANIZED",subtitle:"FILLER TEXT"}}),i("p",[e._v("Filler text is fun to write. Fun it is to write filler text.")]),i("p",[e._v("Filler text is fun to write. Fun it is to write filler text. Filler text is fun to write. Is to write filler text.")])],1)},ce=[],ue={name:"Organized",components:{PageHeader:se}},de=ue,fe=Object(m["a"])(de,ae,ce,!1,null,"409f26db",null),pe=fe.exports,ve={name:"Home",components:{Page:D,Welcome:X,Purpose:oe,Organized:pe},methods:{isSelected(e){return this.$store.state.selectedSectionId===e}},computed:{sections(){return this.$store.state.pageSections["home"]}}},me=ve,he=Object(m["a"])(me,$,B,!1,null,"2374e992",null),we=he.exports,Oe=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Page",{attrs:{sections:e.sections}},[i("Who",{directives:[{name:"show",rawName:"v-show",value:e.isSelected("who"),expression:"isSelected('who')"}]}),i("Goals",{directives:[{name:"show",rawName:"v-show",value:e.isSelected("goals"),expression:"isSelected('goals')"}]}),i("Drives",{directives:[{name:"show",rawName:"v-show",value:e.isSelected("drives"),expression:"isSelected('drives')"}]})],1)],1)},xe=[],Se=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("PageHeader",{attrs:{title:"WHO AM I?",subtitle:"A LITTLE ABOUT ME..."}}),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. ")]),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. Filler text is fun to write. Oh, how fun it is to write filler text. Filler text is fun to write. ")]),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. ")]),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. Filler text is fun to write. Oh, how fun it is to write filler text. Filler text is fun to write. ")])],1)},ge=[],be={name:"Who",components:{PageHeader:se}},_e=be,Pe=Object(m["a"])(_e,Se,ge,!1,null,"336bb864",null),Ie=Pe.exports,He=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("PageHeader",{attrs:{title:"WHAT ARE MY GOALS?",subtitle:"GOALS ARE FOR NUBS, IM NOT A NUB"}}),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. ")]),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. Filler text is fun to write. Oh, how fun it is to write filler text. Filler text is fun to write. ")]),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. ")])],1)},Ee=[],Fe={name:"Goals",components:{PageHeader:se}},Te=Fe,$e=Object(m["a"])(Te,He,Ee,!1,null,"20dbed38",null),Be=$e.exports,je=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("PageHeader",{attrs:{title:"WHAT DRIVES ME?",subtitle:"I DRIVE MYSELF, IM THAT COOL"}}),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. ")]),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. Filler text is fun to write. Oh, how fun it is to write filler text. Filler text is fun to write. ")]),i("p",[e._v(" Hello, I'm Brodie Been. Filler text is fun to write. Oh, how fun it is to write filler text. ")])],1)},Ae=[],Le={name:"Goals",components:{PageHeader:se}},ye=Le,Me=Object(m["a"])(ye,je,Ae,!1,null,"635585d1",null),Ce=Me.exports,Re={name:"About",components:{Page:D,Who:Ie,Goals:Be,Drives:Ce},methods:{isSelected(e){return this.$store.state.selectedSectionId===e}},computed:{sections(){return this.$store.state.pageSections["about"]}}},ke=Re,Ne=Object(m["a"])(ke,Oe,xe,!1,null,"1f336a66",null),We=Ne.exports,ze={name:"App",components:{PageLinks:w,MainHeader:_,MainFooter:T,Home:we,About:We},methods:{isPageSelected(e){return this.$store.state.selectedPageId===e}},store:c},De=ze,Ge=(i("034f"),Object(m["a"])(De,n,r,!1,null,null,null)),Ue=Ge.exports;s["a"].config.productionTip=!1,new s["a"]({render:e=>e(Ue)}).$mount("#app")},8045:function(e,t,i){},"828d":function(e,t,i){},"85ec":function(e,t,i){},8859:function(e,t,i){},"92d7":function(e,t,i){},a174:function(e,t,i){"use strict";var s=i("828d"),n=i.n(s);n.a},b64b:function(e,t,i){"use strict";var s=i("92d7"),n=i.n(s);n.a},ce91:function(e,t,i){"use strict";var s=i("8045"),n=i.n(s);n.a},da01:function(e,t,i){"use strict";var s=i("ffcf"),n=i.n(s);n.a},f321:function(e,t,i){"use strict";var s=i("3194"),n=i.n(s);n.a},f924:function(e,t,i){"use strict";var s=i("8859"),n=i.n(s);n.a},ffcf:function(e,t,i){}});
//# sourceMappingURL=app.a5b5a15c.js.map