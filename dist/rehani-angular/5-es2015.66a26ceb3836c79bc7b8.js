(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1a67":function(t,e,n){"use strict";n.r(e);var o=n("ofXK"),i=n("tyNb"),c=n("fXoL"),r=n("/t3+"),a=n("XhcP"),s=n("MutI"),l=n("NFeN");function b(t,e){if(1&t&&(c.Ub(0,"a",1),c.Ub(1,"mat-icon",2),c.xc(2),c.Tb(),c.xc(3),c.Tb()),2&t){const t=e.$implicit;c.lc("routerLink",t.link),c.Cb(2),c.yc(t.icon),c.Cb(1),c.zc(" ",t.title," ")}}let u=(()=>{class t{constructor(){this.menuList=[{link:"/dashboard/classes",title:"Manage Classes",icon:"class"},{link:"/dashboard/users",title:"Manage Users",icon:"supervised_user_circle"},{link:"/dashboard/videos",title:"Manage Videos",icon:"play_circle_outline"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-side-menu"]],decls:2,vars:1,consts:[["mat-list-item","","class","menu-item","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","active",1,"menu-item",3,"routerLink"],["aria-hidden","false","aria-label","Example thumbs up SVG icon"]],template:function(t,e){1&t&&(c.Ub(0,"mat-nav-list"),c.wc(1,b,4,3,"a",0),c.Tb()),2&t&&(c.Cb(1),c.lc("ngForOf",e.menuList))},directives:[s.c,o.k,s.a,i.c,i.b,l.a],styles:[".menu-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}.menu-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{padding:0 10px}a.active[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.08);color:rgba(0,0,0,.7)}"]}),t})(),d=(()=>{class t{constructor(){this.showFiller=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-admin-dashboard"]],decls:8,vars:0,consts:[[1,"example-container"],["mode","side","opened","",1,"example-sidenav"],["drawer",""],[1,"dashboard-container"]],template:function(t,e){1&t&&(c.Ub(0,"mat-toolbar"),c.xc(1,"Rehani Physics"),c.Tb(),c.Ub(2,"mat-drawer-container",0),c.Ub(3,"mat-drawer",1,2),c.Pb(5,"app-side-menu"),c.Tb(),c.Ub(6,"div",3),c.Pb(7,"router-outlet"),c.Tb(),c.Tb())},directives:[r.a,a.b,a.a,u,i.e],styles:[".example-container[_ngcontent-%COMP%]{width:100%;height:calc(100% - 64px);border:1px solid rgba(0,0,0,.5)}.example-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.example-sidenav[_ngcontent-%COMP%]{width:223px}.dashboard-container[_ngcontent-%COMP%]{padding:16px}"]}),t})();function m(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(t);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(n[o[i]]=t[o[i]])}return n}function p(t,e,n,o){return new(n||(n=Promise))((function(i,c){function r(t){try{s(o.next(t))}catch(e){c(e)}}function a(t){try{s(o.throw(t))}catch(e){c(e)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}s((o=o.apply(t,e||[])).next())}))}var f=n("+0xr"),h=n("M9IT"),g=n("0IaG"),U=n("3Pt+"),C=n("AytR"),w=n("tk/3");let x=(()=>{class t{constructor(t){this.httpClient=t,this.hostUrl=C.a.hostUrl}get(t,e={}){return this.httpClient.get(`${this.hostUrl}${t}`,e)}post(t,e={},n={}){return this.httpClient.post(`${this.hostUrl}${t}`,e,n)}put(t,e={},n={}){return this.httpClient.put(`${this.hostUrl}${t}`,e,n)}delete(t,e={}){return this.httpClient.delete(`${this.hostUrl}${t}`,e)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(w.a))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=n("Wp6s"),T=n("kmnG"),y=n("qFsG"),O=n("d3UM"),S=n("bSwM"),P=n("bTqV"),k=n("FKr1");function _(t,e){if(1&t&&(c.Ub(0,"mat-option",11),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.lc("value",t._id),c.Cb(1),c.zc(" ",t.name," ")}}function R(t,e){if(1&t&&(c.Ub(0,"p",12),c.xc(1),c.Tb()),2&t){const t=c.gc();c.Cb(1),c.zc(" ",t.error," ")}}let D=(()=>{class t{constructor(t,e,n,o){this.fb=t,this.api=e,this.dialogRef=n,this.data=o,console.log(o.classList)}onNoClick(){this.dialogRef.close()}ngOnInit(){this.initialValues=this.data.user,this.form=this.fb.group({_id:[this.data.user._id],name:[this.data.user.name,U.n.required],mobileNumber:[this.data.user.mobileNumber,U.n.required],class:[this.data.user.class,U.n.required],isSubscribed:[this.data.user.isSubscribed,U.n.required]})}submit(){return p(this,void 0,void 0,(function*(){if(this.form.valid){const t=this.form.value;let e;const{_id:n}=t,o=m(t,["_id"]);if(""==t._id)e=yield this.api.post(this.data.resourceUrl,o).toPromise();else{const o=`${this.data.resourceUrl}/${n}`;e=yield this.api.put(o,t).toPromise()}this.dialogRef.close(e)}}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(U.c),c.Ob(x),c.Ob(g.e),c.Ob(g.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-create-user-form"]],inputs:{error:"error"},decls:27,vars:7,consts:[["mat-dialog-content",""],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Name","formControlName","name"],["type","text","matInput","","placeholder","Mobile Number","formControlName","mobileNumber"],["formControlName","class"],[3,"value",4,"ngFor","ngForOf"],["formControlName","isSubscribed"],["class","error",4,"ngIf"],[1,"button"],["type","button","mat-button","",3,"disabled","click"],["type","submit","mat-button","",3,"disabled"],[3,"value"],[1,"error"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"mat-card"),c.Ub(2,"mat-card-title"),c.xc(3),c.Tb(),c.Ub(4,"mat-card-content"),c.Ub(5,"form",1),c.cc("ngSubmit",(function(){return e.submit()})),c.Ub(6,"p"),c.Ub(7,"mat-form-field"),c.Pb(8,"input",2),c.Tb(),c.Tb(),c.Ub(9,"p"),c.Ub(10,"mat-form-field"),c.Pb(11,"input",3),c.Tb(),c.Tb(),c.Ub(12,"p"),c.Ub(13,"mat-form-field"),c.Ub(14,"mat-label"),c.xc(15,"Class"),c.Tb(),c.Ub(16,"mat-select",4),c.wc(17,_,2,2,"mat-option",5),c.Tb(),c.Tb(),c.Tb(),c.Ub(18,"p"),c.Ub(19,"mat-checkbox",6),c.xc(20,"Is Subscribed"),c.Tb(),c.Tb(),c.wc(21,R,2,1,"p",7),c.Ub(22,"div",8),c.Ub(23,"button",9),c.cc("click",(function(){return e.form.reset(e.initialValues)})),c.xc(24,"Reset"),c.Tb(),c.Ub(25,"button",10),c.xc(26),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Cb(3),c.yc(""==e.form.value._id?"Create User":"Update User"),c.Cb(2),c.lc("formGroup",e.form),c.Cb(12),c.lc("ngForOf",e.data.classList),c.Cb(4),c.lc("ngIf",e.error),c.Cb(2),c.lc("disabled",!e.form.touched),c.Cb(2),c.lc("disabled",e.form.invalid),c.Cb(1),c.yc(""==e.form.value._id?"Create":"Update"))},directives:[g.c,v.a,v.d,v.b,U.o,U.k,U.e,T.b,y.a,U.b,U.j,U.d,T.e,O.a,o.k,S.a,o.l,P.a,k.h],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.forgot-pass-link[_ngcontent-%COMP%]{align-self:center;padding:0 16px;text-decoration:underline;font-size:smaller;font-style:italic;line-height:36px}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:unset}"]}),t})(),M=(()=>{class t{constructor(t){this.api=t}fetchAll(t){return this.api.get(t)}delete(t,e){return this.api.delete(`${t}/${e._id}`)}}return t.\u0275fac=function(e){return new(e||t)(c.Yb(x))},t.\u0275prov=c.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function I(t,e){1&t&&(c.Ub(0,"button",2),c.Ub(1,"mat-icon"),c.xc(2,"check"),c.Tb(),c.Tb())}function A(t,e){1&t&&(c.Ub(0,"button",3),c.Ub(1,"mat-icon"),c.xc(2,"clear"),c.Tb(),c.Tb())}let $=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-boolean"]],inputs:{isValue:"isValue"},decls:2,vars:2,consts:[["mat-icon-button","","color","success","aria-label","Example icon button with a home icon",4,"ngIf"],["mat-icon-button","","color","warn","aria-label","Example icon button with a home icon",4,"ngIf"],["mat-icon-button","","color","success","aria-label","Example icon button with a home icon"],["mat-icon-button","","color","warn","aria-label","Example icon button with a home icon"]],template:function(t,e){1&t&&(c.wc(0,I,3,0,"button",0),c.wc(1,A,3,0,"button",1)),2&t&&(c.lc("ngIf",e.isValue),c.Cb(1),c.lc("ngIf",!e.isValue))},directives:[o.l,P.a,l.a],styles:[""]}),t})();function z(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Name "),c.Tb())}function F(t,e){if(1&t&&(c.Ub(0,"td",20),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",t.name," ")}}function N(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Mobile Number "),c.Tb())}function L(t,e){if(1&t&&(c.Ub(0,"td",20),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",t.mobileNumber," ")}}function V(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Role "),c.Tb())}function j(t,e){if(1&t&&(c.Ub(0,"td",20),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",t.role," ")}}function E(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Class "),c.Tb())}function q(t,e){if(1&t&&(c.Ub(0,"td",20),c.xc(1),c.Tb()),2&t){const t=e.$implicit,n=c.gc();c.Cb(1),c.zc(" ",n.getClassName(t.class)," ")}}function G(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Subscribed "),c.Tb())}function H(t,e){if(1&t&&(c.Ub(0,"td",20),c.Pb(1,"app-boolean",21),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.lc("isValue",t.isSubscribed)}}function B(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Block "),c.Tb())}function K(t,e){if(1&t&&(c.Ub(0,"td",20),c.Pb(1,"app-boolean",21),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.lc("isValue",t.isBlocked)}}function J(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Created on "),c.Tb())}function Q(t,e){if(1&t&&(c.Ub(0,"td",20),c.xc(1),c.hc(2,"date"),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",c.ic(2,1,t.createdAt)," ")}}function X(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Update on "),c.Tb())}function Y(t,e){if(1&t&&(c.Ub(0,"td",20),c.xc(1),c.hc(2,"date"),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",c.ic(2,1,t.updatedAt)," ")}}function W(t,e){1&t&&(c.Ub(0,"th",19),c.xc(1," Actions "),c.Tb())}function Z(t,e){if(1&t){const t=c.Vb();c.Ub(0,"td",20),c.Ub(1,"div",22),c.Ub(2,"button",23),c.cc("click",(function(){c.qc(t);const n=e.$implicit;return c.gc().onEdit(n)})),c.Ub(3,"mat-icon"),c.xc(4,"create"),c.Tb(),c.Tb(),c.Ub(5,"button",24),c.cc("click",(function(){c.qc(t);const n=e.$implicit;return c.gc().onDelete(n)})),c.Ub(6,"mat-icon"),c.xc(7,"delete"),c.Tb(),c.Tb(),c.Tb(),c.Tb()}}function tt(t,e){1&t&&c.Pb(0,"tr",25)}function et(t,e){1&t&&c.Pb(0,"tr",26)}const nt=function(){return[5,10,20]};let ot=(()=>{class t{constructor(t,e){this.resourceService=t,this.dialog=e,this.resourceUrl="/users"}ngOnInit(){return p(this,void 0,void 0,(function*(){const t=yield this.resourceService.fetchAll("/classes").toPromise();this.classList=t.data,this.classMap=new Map(t.data.map(t=>[t._id,t.name]));const e=yield this.resourceService.fetchAll(this.resourceUrl).toPromise();this.displayedColumns=["name","mobileNumber","role","class","isSubscribed","isBlocked","createdAt","updatedAt","action"],this.dataSource=new f.k(e.data),this.dataSource.paginator=this.paginator}))}reFetchResourceList(){return p(this,void 0,void 0,(function*(){const t=yield this.resourceService.fetchAll(this.resourceUrl).toPromise();this.dataSource=new f.k(t.data)}))}getClassName(t){return console.log(this.classMap[t]),this.classMap.get(t)||"Class has been deleted"}openDialogue(t){this.dialog.open(D,{width:"600px",data:{resourceUrl:this.resourceUrl,classList:this.classList,user:t}}).afterClosed().subscribe(t=>{this.reFetchResourceList()})}onAddResource(){this.openDialogue({_id:"",name:"",mobileNumber:"",class:"",isSubscribed:""})}onUpdate(){this.reFetchResourceList()}onDelete(t){return p(this,void 0,void 0,(function*(){yield this.resourceService.delete(this.resourceUrl,t).toPromise(),this.reFetchResourceList()}))}onEdit(t){return p(this,void 0,void 0,(function*(){this.openDialogue(t)}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(M),c.Ob(g.b))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-users-page"]],viewQuery:function(t,e){var n;1&t&&c.uc(h.a,!0),2&t&&c.nc(n=c.dc())&&(e.paginator=n.first)},inputs:{resourceUrl:"resourceUrl"},decls:38,vars:5,consts:[[1,"mat-elevation-z8"],[1,"resource-actions-panel"],[1,"table-heading"],["mat-icon-button","","color","warn","mat-mini-fab","","aria-label","Example icon button with a home icon",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","mobileNumber"],["matColumnDef","role"],["matColumnDef","class"],["matColumnDef","isSubscribed"],["matColumnDef","isBlocked"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","action","sticky","true"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[3,"isValue"],[1,"example-flex-container2"],["mat-icon-button","","color","primary","aria-label","Example icon button with a vertical three dot icon",3,"click"],["mat-icon-button","","color","warn","aria-label","Example icon button with a home icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"h3",2),c.xc(3," Users "),c.Tb(),c.Ub(4,"button",3),c.cc("click",(function(){return e.onAddResource()})),c.Ub(5,"mat-icon"),c.xc(6,"add"),c.Tb(),c.Tb(),c.Tb(),c.Ub(7,"table",4),c.Sb(8,5),c.wc(9,z,2,0,"th",6),c.wc(10,F,2,1,"td",7),c.Rb(),c.Sb(11,8),c.wc(12,N,2,0,"th",6),c.wc(13,L,2,1,"td",7),c.Rb(),c.Sb(14,9),c.wc(15,V,2,0,"th",6),c.wc(16,j,2,1,"td",7),c.Rb(),c.Sb(17,10),c.wc(18,E,2,0,"th",6),c.wc(19,q,2,1,"td",7),c.Rb(),c.Sb(20,11),c.wc(21,G,2,0,"th",6),c.wc(22,H,2,1,"td",7),c.Rb(),c.Sb(23,12),c.wc(24,B,2,0,"th",6),c.wc(25,K,2,1,"td",7),c.Rb(),c.Sb(26,13),c.wc(27,J,2,0,"th",6),c.wc(28,Q,3,3,"td",7),c.Rb(),c.Sb(29,14),c.wc(30,X,2,0,"th",6),c.wc(31,Y,3,3,"td",7),c.Rb(),c.Sb(32,15),c.wc(33,W,2,0,"th",6),c.wc(34,Z,8,0,"td",7),c.Rb(),c.wc(35,tt,1,0,"tr",16),c.wc(36,et,1,0,"tr",17),c.Tb(),c.Pb(37,"mat-paginator",18),c.Tb()),2&t&&(c.Cb(7),c.lc("dataSource",e.dataSource),c.Cb(28),c.lc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.lc("matRowDefColumns",e.displayedColumns),c.Cb(1),c.lc("pageSizeOptions",c.mc(4,nt)))},directives:[P.a,l.a,f.j,f.c,f.e,f.b,f.g,f.i,h.a,f.d,f.a,$,f.f,f.h],pipes:[o.e],styles:["table[_ngcontent-%COMP%]{width:100%}.resource-actions-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 20px}"]}),t})();function it(t,e){if(1&t&&(c.Ub(0,"p",6),c.xc(1),c.Tb()),2&t){const t=c.gc();c.Cb(1),c.zc(" ",t.error," ")}}let ct=(()=>{class t{constructor(t){this.fb=t,this.onSubmit=new c.o}ngOnInit(){this.form=this.fb.group({name:["",U.n.required]})}submit(){this.form.valid&&this.onSubmit.emit(this.form.value)}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(U.c))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-create-resource-form"]],inputs:{error:"error"},outputs:{onSubmit:"onSubmit"},decls:14,vars:4,consts:[[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Class name","formControlName","name"],["class","error",4,"ngIf"],[1,"button"],["type","button","mat-button","",3,"disabled","click"],["type","submit","mat-button","",3,"disabled"],[1,"error"]],template:function(t,e){1&t&&(c.Ub(0,"mat-card"),c.Ub(1,"mat-card-title"),c.xc(2,"Create Class"),c.Tb(),c.Ub(3,"mat-card-content"),c.Ub(4,"form",0),c.cc("ngSubmit",(function(){return e.submit()})),c.Ub(5,"p"),c.Ub(6,"mat-form-field"),c.Pb(7,"input",1),c.Tb(),c.Tb(),c.wc(8,it,2,1,"p",2),c.Ub(9,"div",3),c.Ub(10,"button",4),c.cc("click",(function(){return e.form.reset()})),c.xc(11,"Reset"),c.Tb(),c.Ub(12,"button",5),c.xc(13,"Create"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Cb(4),c.lc("formGroup",e.form),c.Cb(4),c.lc("ngIf",e.error),c.Cb(2),c.lc("disabled",!e.form.touched),c.Cb(2),c.lc("disabled",e.form.invalid))},directives:[v.a,v.d,v.b,U.o,U.k,U.e,T.b,y.a,U.b,U.j,U.d,o.l,P.a],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.forgot-pass-link[_ngcontent-%COMP%]{align-self:center;padding:0 16px;text-decoration:underline;font-size:smaller;font-style:italic;line-height:36px}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:unset}"]}),t})(),rt=(()=>{class t{constructor(t,e,n){this.api=t,this.dialogRef=e,this.resource=n}onNoClick(){this.dialogRef.close()}ngOnInit(){}onCreate(t){return p(this,void 0,void 0,(function*(){const e=yield this.api.post(this.resource.resourceUrl,t).toPromise();this.dialogRef.close(e)}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(x),c.Ob(g.e),c.Ob(g.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-create-resource"]],decls:2,vars:0,consts:[["mat-dialog-content",""],[3,"onSubmit"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"app-create-resource-form",1),c.cc("onSubmit",(function(t){return e.onCreate(t)})),c.Tb(),c.Tb())},directives:[g.c,ct],styles:[""]}),t})();function at(t,e){if(1&t&&(c.Ub(0,"p",6),c.xc(1),c.Tb()),2&t){const t=c.gc();c.Cb(1),c.zc(" ",t.error," ")}}let st=(()=>{class t{constructor(t){this.fb=t,this.onUpdate=new c.o,this.initialValues={name:"",_id:""}}ngOnInit(){this.form=this.fb.group({name:[this.resource.name,U.n.required],_id:[this.resource._id,U.n.required]}),this.initialValues={name:this.resource.name,_id:this.resource._id}}submit(){this.form.valid&&this.onUpdate.emit(this.form.value)}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(U.c))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-update-resource-form"]],inputs:{error:"error",resource:"resource"},outputs:{onUpdate:"onUpdate"},decls:14,vars:4,consts:[[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Class name","formControlName","name"],["class","error",4,"ngIf"],[1,"button"],["type","button","mat-button","",3,"disabled","click"],["type","submit","mat-button","",3,"disabled"],[1,"error"]],template:function(t,e){1&t&&(c.Ub(0,"mat-card"),c.Ub(1,"mat-card-title"),c.xc(2,"Create Class"),c.Tb(),c.Ub(3,"mat-card-content"),c.Ub(4,"form",0),c.cc("ngSubmit",(function(){return e.submit()})),c.Ub(5,"p"),c.Ub(6,"mat-form-field"),c.Pb(7,"input",1),c.Tb(),c.Tb(),c.wc(8,at,2,1,"p",2),c.Ub(9,"div",3),c.Ub(10,"button",4),c.cc("click",(function(){return e.form.reset(e.initialValues)})),c.xc(11,"Reset"),c.Tb(),c.Ub(12,"button",5),c.xc(13,"Update"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&t&&(c.Cb(4),c.lc("formGroup",e.form),c.Cb(4),c.lc("ngIf",e.error),c.Cb(2),c.lc("disabled",!e.form.touched),c.Cb(2),c.lc("disabled",e.form.invalid))},directives:[v.a,v.d,v.b,U.o,U.k,U.e,T.b,y.a,U.b,U.j,U.d,o.l,P.a],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.forgot-pass-link[_ngcontent-%COMP%]{align-self:center;padding:0 16px;text-decoration:underline;font-size:smaller;font-style:italic;line-height:36px}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:unset}"]}),t})(),lt=(()=>{class t{constructor(t,e,n){this.api=t,this.dialogRef=e,this.data=n}onNoClick(){this.dialogRef.close()}ngOnInit(){}onUpdate(t,e){return p(this,void 0,void 0,(function*(){const n=`${this.data.resourceUrl}/${t}`,o=yield this.api.put(n,e).toPromise();this.dialogRef.close(o)}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(x),c.Ob(g.e),c.Ob(g.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-update-resource-dialog"]],decls:2,vars:1,consts:[["mat-dialog-content",""],[3,"resource","onUpdate"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"app-update-resource-form",1),c.cc("onUpdate",(function(t){return e.onUpdate(e.data.resource._id,t)})),c.Tb(),c.Tb()),2&t&&(c.Cb(1),c.lc("resource",e.data.resource))},directives:[g.c,st],styles:[""]}),t})(),bt=(()=>{class t{constructor(t,e){this.resourceService=t,this.dialog=e,this.onUpdate=new c.o,this.onDelete=new c.o}ngOnInit(){}onEdit(){this.dialog.open(lt,{width:"600px",data:{resourceUrl:this.resourceUrl,resource:this.resource}}).afterClosed().subscribe(t=>{this.onUpdate.emit(t)})}onDeleteEmit(){this.onDelete.emit(this.resource)}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(M),c.Ob(g.b))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-resource-actions"]],inputs:{resource:"resource",resourceUrl:"resourceUrl"},outputs:{onUpdate:"onUpdate",onDelete:"onDelete"},decls:4,vars:0,consts:[[1,"example-flex-container2"],["mat-icon-button","","color","primary","aria-label","Example icon button with a vertical three dot icon",3,"click"]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"button",1),c.cc("click",(function(){return e.onEdit()})),c.Ub(2,"mat-icon"),c.xc(3,"create"),c.Tb(),c.Tb(),c.Tb())},directives:[P.a,l.a],styles:["section[_ngcontent-%COMP%]{display:table;margin:8px}.example-label[_ngcontent-%COMP%]{font-size:14px;margin-left:8px;width:120px}.example-button-row[_ngcontent-%COMP%], .example-label[_ngcontent-%COMP%]{display:table-cell}.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:table-cell;margin-right:8px}.example-flex-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:480px}.example-button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:120px}"]}),t})();function ut(t,e){1&t&&(c.Ub(0,"th",14),c.xc(1," Name "),c.Tb())}function dt(t,e){if(1&t&&(c.Ub(0,"td",15),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",t.name," ")}}function mt(t,e){1&t&&(c.Ub(0,"th",14),c.xc(1," Created on "),c.Tb())}function pt(t,e){if(1&t&&(c.Ub(0,"td",15),c.xc(1),c.hc(2,"date"),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",c.ic(2,1,t.createdAt)," ")}}function ft(t,e){1&t&&(c.Ub(0,"th",14),c.xc(1," Update on "),c.Tb())}function ht(t,e){if(1&t&&(c.Ub(0,"td",15),c.xc(1),c.hc(2,"date"),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",c.ic(2,1,t.updatedAt)," ")}}function gt(t,e){1&t&&(c.Ub(0,"th",14),c.xc(1," Actions "),c.Tb())}function Ut(t,e){if(1&t){const t=c.Vb();c.Ub(0,"td",15),c.Ub(1,"app-resource-actions",16),c.cc("onUpdate",(function(){return c.qc(t),c.gc().onUpdate()}))("onDelete",(function(){c.qc(t);const n=e.$implicit;return c.gc().onDelete(n)})),c.Tb(),c.Tb()}if(2&t){const t=e.$implicit,n=c.gc();c.Cb(1),c.lc("resourceUrl",n.resourceUrl)("resource",t)}}function Ct(t,e){1&t&&c.Pb(0,"tr",17)}function wt(t,e){1&t&&c.Pb(0,"tr",18)}const xt=function(){return[5,10,20]};let vt=(()=>{class t{constructor(t,e){this.resourceService=t,this.dialog=e,this.columnConfig=[]}ngOnInit(){return p(this,void 0,void 0,(function*(){const t=yield this.resourceService.fetchAll(this.resourceUrl).toPromise();this.displayedColumns=["name","createdAt","updatedAt","action"],this.dataSource=new f.k(t.data),this.dataSource.paginator=this.paginator}))}reFetchResourceList(){return p(this,void 0,void 0,(function*(){const t=yield this.resourceService.fetchAll(this.resourceUrl).toPromise();this.dataSource=new f.k(t.data)}))}onAddResource(){this.dialog.open(rt,{width:"600px",data:{resourceUrl:this.resourceUrl}}).afterClosed().subscribe(t=>{this.dataSource.data=[...this.dataSource.data,t.data]})}onUpdate(){this.reFetchResourceList()}onDelete(t){return p(this,void 0,void 0,(function*(){yield this.resourceService.delete(this.resourceUrl,t).toPromise(),this.reFetchResourceList()}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(M),c.Ob(g.b))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-resource"]],viewQuery:function(t,e){var n;1&t&&c.uc(h.a,!0),2&t&&c.nc(n=c.dc())&&(e.paginator=n.first)},inputs:{resourceUrl:"resourceUrl",columnConfig:"columnConfig"},decls:23,vars:5,consts:[[1,"mat-elevation-z8"],[1,"resource-actions-panel"],[1,"table-heading"],["mat-icon-button","","color","warn","mat-mini-fab","","aria-label","Example icon button with a home icon",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","action","sticky","true"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[3,"resourceUrl","resource","onUpdate","onDelete"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"h3",2),c.xc(3," Classes "),c.Tb(),c.Ub(4,"button",3),c.cc("click",(function(){return e.onAddResource()})),c.Ub(5,"mat-icon"),c.xc(6,"add"),c.Tb(),c.Tb(),c.Tb(),c.Ub(7,"table",4),c.Sb(8,5),c.wc(9,ut,2,0,"th",6),c.wc(10,dt,2,1,"td",7),c.Rb(),c.Sb(11,8),c.wc(12,mt,2,0,"th",6),c.wc(13,pt,3,3,"td",7),c.Rb(),c.Sb(14,9),c.wc(15,ft,2,0,"th",6),c.wc(16,ht,3,3,"td",7),c.Rb(),c.Sb(17,10),c.wc(18,gt,2,0,"th",6),c.wc(19,Ut,2,2,"td",7),c.Rb(),c.wc(20,Ct,1,0,"tr",11),c.wc(21,wt,1,0,"tr",12),c.Tb(),c.Pb(22,"mat-paginator",13),c.Tb()),2&t&&(c.Cb(7),c.lc("dataSource",e.dataSource),c.Cb(13),c.lc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.lc("matRowDefColumns",e.displayedColumns),c.Cb(1),c.lc("pageSizeOptions",c.mc(4,xt)))},directives:[P.a,l.a,f.j,f.c,f.e,f.b,f.g,f.i,h.a,f.d,f.a,bt,f.f,f.h],pipes:[o.e],styles:["table[_ngcontent-%COMP%]{width:100%}.resource-actions-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 20px}"]}),t})(),Tt=(()=>{class t{constructor(){this.columnConfig=[{columnName:"_id",title:"Id"},{columnName:"name",title:"Name"},{columnName:"createdAt",title:"Created on"},{columnName:"updatedAt",title:"Updated On"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-classes-page"]],decls:1,vars:1,consts:[["resourceUrl","/classes",3,"columnConfig"]],template:function(t,e){1&t&&c.Pb(0,"app-resource",0),2&t&&c.lc("columnConfig",e.columnConfig)},directives:[vt],styles:[""]}),t})();function yt(t,e){if(1&t&&(c.Ub(0,"mat-option",14),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.lc("value",t._id),c.Cb(1),c.zc(" ",t.name," ")}}function Ot(t,e){if(1&t&&(c.Ub(0,"span"),c.xc(1),c.Tb()),2&t){const t=c.gc();c.Cb(1),c.zc(" ",t.selectedFile.name," ")}}function St(t,e){if(1&t&&(c.Ub(0,"p",15),c.xc(1),c.Tb()),2&t){const t=c.gc();c.Cb(1),c.zc(" ",t.error," ")}}let Pt=(()=>{class t{constructor(t,e,n,o){this.fb=t,this.api=e,this.dialogRef=n,this.data=o,console.log(o.classList)}onNoClick(){this.dialogRef.close()}ngOnInit(){this.initialValues=this.data.video,this.form=this.fb.group({_id:[this.data.video._id],title:[this.data.video.title,U.n.required],description:[this.data.video.description,U.n.required],class:[this.data.video.class,U.n.required]})}onUploadClick(t){t.click()}fileChange(t){this.selectedFile=t[0]}onReset(){this.form.reset(this.initialValues),this.selectedFile=void 0}submit(){return p(this,void 0,void 0,(function*(){if(this.form.valid){const t=this.form.value;let e;const{_id:n}=t,o=m(t,["_id"]),i=new FormData;for(const c in o)o.hasOwnProperty(c)&&i.append(c,o[c]);if(this.selectedFile&&i.append("file",this.selectedFile),""==t._id)e=yield this.api.post(this.data.resourceUrl,i).toPromise();else{const t=`${this.data.resourceUrl}/${n}`;e=yield this.api.put(t,o).toPromise()}this.dialogRef.close(e)}}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(U.c),c.Ob(x),c.Ob(g.e),c.Ob(g.a))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-create-video-form"]],inputs:{error:"error"},decls:29,vars:8,consts:[["mat-dialog-content",""],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Title","formControlName","title"],["type","text","matInput","","placeholder","Description","formControlName","description"],["formControlName","class"],[3,"value",4,"ngFor","ngForOf"],["type","button","mat-raised-button","",3,"click"],["id","fileInput","hidden","","type","file",3,"change"],["fileField",""],[4,"ngIf"],["class","error",4,"ngIf"],[1,"button"],["type","button","mat-button","",3,"disabled","click"],["type","submit","mat-button","",3,"disabled"],[3,"value"],[1,"error"]],template:function(t,e){if(1&t){const t=c.Vb();c.Ub(0,"div",0),c.Ub(1,"mat-card"),c.Ub(2,"mat-card-title"),c.xc(3),c.Tb(),c.Ub(4,"mat-card-content"),c.Ub(5,"form",1),c.cc("ngSubmit",(function(){return e.submit()})),c.Ub(6,"p"),c.Ub(7,"mat-form-field"),c.Pb(8,"input",2),c.Tb(),c.Tb(),c.Ub(9,"p"),c.Ub(10,"mat-form-field"),c.Pb(11,"input",3),c.Tb(),c.Tb(),c.Ub(12,"p"),c.Ub(13,"mat-form-field"),c.Ub(14,"mat-label"),c.xc(15,"Class"),c.Tb(),c.Ub(16,"mat-select",4),c.wc(17,yt,2,2,"mat-option",5),c.Tb(),c.Tb(),c.Tb(),c.Ub(18,"button",6),c.cc("click",(function(){c.qc(t);const n=c.oc(21);return e.onUploadClick(n)})),c.xc(19," Select File to Upload "),c.Tb(),c.Ub(20,"input",7,8),c.cc("change",(function(t){return e.fileChange(t.target.files)})),c.Tb(),c.wc(22,Ot,2,1,"span",9),c.wc(23,St,2,1,"p",10),c.Ub(24,"div",11),c.Ub(25,"button",12),c.cc("click",(function(){return e.onReset()})),c.xc(26,"Reset"),c.Tb(),c.Ub(27,"button",13),c.xc(28),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()}2&t&&(c.Cb(3),c.yc(""==e.form.value._id?"Upload Video":"Update Video"),c.Cb(2),c.lc("formGroup",e.form),c.Cb(12),c.lc("ngForOf",e.data.classList),c.Cb(5),c.lc("ngIf",e.selectedFile&&e.selectedFile.name),c.Cb(1),c.lc("ngIf",e.error),c.Cb(2),c.lc("disabled",!e.form.touched),c.Cb(2),c.lc("disabled",e.form.invalid),c.Cb(1),c.yc(""==e.form.value._id?"Create":"Update"))},directives:[g.c,v.a,v.d,v.b,U.o,U.k,U.e,T.b,y.a,U.b,U.j,U.d,T.e,O.a,o.k,P.a,o.l,k.h],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.forgot-pass-link[_ngcontent-%COMP%]{align-self:center;padding:0 16px;text-decoration:underline;font-size:smaller;font-style:italic;line-height:36px}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:unset}"]}),t})();function kt(t,e){1&t&&(c.Ub(0,"th",17),c.xc(1," Title "),c.Tb())}function _t(t,e){if(1&t&&(c.Ub(0,"td",18),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",t.title," ")}}function Rt(t,e){1&t&&(c.Ub(0,"th",17),c.xc(1," Description "),c.Tb())}function Dt(t,e){if(1&t&&(c.Ub(0,"td",18),c.xc(1),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",t.description," ")}}function Mt(t,e){1&t&&(c.Ub(0,"th",17),c.xc(1," Url "),c.Tb())}function It(t,e){if(1&t&&(c.Ub(0,"td",18),c.Ub(1,"a",19),c.xc(2),c.Tb(),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.lc("href","http://localhost:3000"+t.url,c.rc),c.Cb(1),c.yc(t.url)}}function At(t,e){1&t&&(c.Ub(0,"th",17),c.xc(1," Class "),c.Tb())}function $t(t,e){if(1&t&&(c.Ub(0,"td",18),c.xc(1),c.Tb()),2&t){const t=e.$implicit,n=c.gc();c.Cb(1),c.zc(" ",n.getClassName(t.class)," ")}}function zt(t,e){1&t&&(c.Ub(0,"th",17),c.xc(1," Created on "),c.Tb())}function Ft(t,e){if(1&t&&(c.Ub(0,"td",18),c.xc(1),c.hc(2,"date"),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",c.ic(2,1,t.createdAt)," ")}}function Nt(t,e){1&t&&(c.Ub(0,"th",17),c.xc(1," Update on "),c.Tb())}function Lt(t,e){if(1&t&&(c.Ub(0,"td",18),c.xc(1),c.hc(2,"date"),c.Tb()),2&t){const t=e.$implicit;c.Cb(1),c.zc(" ",c.ic(2,1,t.updatedAt)," ")}}function Vt(t,e){1&t&&(c.Ub(0,"th",17),c.xc(1," Actions "),c.Tb())}function jt(t,e){if(1&t){const t=c.Vb();c.Ub(0,"td",18),c.Ub(1,"div",20),c.Ub(2,"button",21),c.cc("click",(function(){c.qc(t);const n=e.$implicit;return c.gc().onEdit(n)})),c.Ub(3,"mat-icon"),c.xc(4,"create"),c.Tb(),c.Tb(),c.Ub(5,"button",22),c.cc("click",(function(){c.qc(t);const n=e.$implicit;return c.gc().onDelete(n)})),c.Ub(6,"mat-icon"),c.xc(7,"delete"),c.Tb(),c.Tb(),c.Tb(),c.Tb()}}function Et(t,e){1&t&&c.Pb(0,"tr",23)}function qt(t,e){1&t&&c.Pb(0,"tr",24)}const Gt=function(){return[5,10,20]},Ht=[{path:"",component:d,children:[{path:"users",component:ot},{path:"classes",component:Tt},{path:"videos",component:(()=>{class t{constructor(t,e){this.resourceService=t,this.dialog=e,this.resourceUrl="/videos"}ngOnInit(){return p(this,void 0,void 0,(function*(){const t=yield this.resourceService.fetchAll("/classes").toPromise();this.classList=t.data,this.classMap=new Map(t.data.map(t=>[t._id,t.name]));const e=yield this.resourceService.fetchAll(this.resourceUrl).toPromise();this.displayedColumns=["title","description","url","class","createdAt","updatedAt","action"],this.dataSource=new f.k(e.data),this.dataSource.paginator=this.paginator}))}reFetchResourceList(){return p(this,void 0,void 0,(function*(){const t=yield this.resourceService.fetchAll(this.resourceUrl).toPromise();this.dataSource=new f.k(t.data)}))}getClassName(t){return console.log(this.classMap[t]),this.classMap.get(t)||"Class has been deleted"}openDialogue(t){this.dialog.open(Pt,{width:"600px",data:{resourceUrl:this.resourceUrl,classList:this.classList,video:t}}).afterClosed().subscribe(t=>{this.reFetchResourceList()})}onAddResource(){this.openDialogue({_id:"",title:"",description:"",class:""})}onUpdate(){this.reFetchResourceList()}onDelete(t){return p(this,void 0,void 0,(function*(){yield this.resourceService.delete(this.resourceUrl,t).toPromise(),this.reFetchResourceList()}))}onEdit(t){return p(this,void 0,void 0,(function*(){this.openDialogue(t)}))}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(M),c.Ob(g.b))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-videos-page"]],viewQuery:function(t,e){var n;1&t&&c.uc(h.a,!0),2&t&&c.nc(n=c.dc())&&(e.paginator=n.first)},inputs:{resourceUrl:"resourceUrl"},decls:32,vars:5,consts:[[1,"mat-elevation-z8"],[1,"resource-actions-panel"],[1,"table-heading"],["mat-icon-button","","color","warn","mat-mini-fab","","aria-label","Example icon button with a home icon",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","title"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","url"],["matColumnDef","class"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","action","sticky","true"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[3,"href"],[1,"example-flex-container2"],["mat-icon-button","","color","primary","aria-label","Example icon button with a vertical three dot icon",3,"click"],["mat-icon-button","","color","warn","aria-label","Example icon button with a home icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"h3",2),c.xc(3," Videos "),c.Tb(),c.Ub(4,"button",3),c.cc("click",(function(){return e.onAddResource()})),c.Ub(5,"mat-icon"),c.xc(6,"add"),c.Tb(),c.Tb(),c.Tb(),c.Ub(7,"table",4),c.Sb(8,5),c.wc(9,kt,2,0,"th",6),c.wc(10,_t,2,1,"td",7),c.Rb(),c.Sb(11,8),c.wc(12,Rt,2,0,"th",6),c.wc(13,Dt,2,1,"td",7),c.Rb(),c.Sb(14,9),c.wc(15,Mt,2,0,"th",6),c.wc(16,It,3,2,"td",7),c.Rb(),c.Sb(17,10),c.wc(18,At,2,0,"th",6),c.wc(19,$t,2,1,"td",7),c.Rb(),c.Sb(20,11),c.wc(21,zt,2,0,"th",6),c.wc(22,Ft,3,3,"td",7),c.Rb(),c.Sb(23,12),c.wc(24,Nt,2,0,"th",6),c.wc(25,Lt,3,3,"td",7),c.Rb(),c.Sb(26,13),c.wc(27,Vt,2,0,"th",6),c.wc(28,jt,8,0,"td",7),c.Rb(),c.wc(29,Et,1,0,"tr",14),c.wc(30,qt,1,0,"tr",15),c.Tb(),c.Pb(31,"mat-paginator",16),c.Tb()),2&t&&(c.Cb(7),c.lc("dataSource",e.dataSource),c.Cb(22),c.lc("matHeaderRowDef",e.displayedColumns),c.Cb(1),c.lc("matRowDefColumns",e.displayedColumns),c.Cb(1),c.lc("pageSizeOptions",c.mc(4,Gt)))},directives:[P.a,l.a,f.j,f.c,f.e,f.b,f.g,f.i,h.a,f.d,f.a,f.f,f.h],pipes:[o.e],styles:["table[_ngcontent-%COMP%]{width:100%}.resource-actions-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 20px}"]}),t})()}]}];let Bt=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[i.d.forChild(Ht)],i.d]}),t})();var Kt=n("5JnA");n.d(e,"AdminDashboardModule",(function(){return Jt}));let Jt=(()=>{class t{}return t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({factory:function(e){return new(e||t)},imports:[[o.c,U.m,Bt,Kt.a]]}),t})()}}]);