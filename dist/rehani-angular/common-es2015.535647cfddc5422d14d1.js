(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{TqWN:function(t,e,i){"use strict";var o=i("mrSG"),n=i("+0xr"),c=i("M9IT"),a=i("LvDl"),r=i("0IaG"),s=i("3Pt+"),l=i("U7T7"),b=i("fXoL"),u=i("H+bZ"),d=i("N/25"),m=i("Wp6s"),f=i("kmnG"),p=i("qFsG"),h=i("ofXK"),U=i("d3UM"),g=i("bTqV"),y=i("FKr1");function C(t,e){1&t&&(b.Ub(0,"p"),b.Ub(1,"mat-form-field"),b.Pb(2,"input",11),b.Tb(),b.Tb())}function v(t,e){if(1&t&&(b.Ub(0,"mat-option",12),b.yc(1),b.Tb()),2&t){const t=e.$implicit,i=b.gc();b.lc("value",t),b.Cb(1),b.Ac(" ",i.displayRoles[t].label," ")}}function T(t,e){if(1&t&&(b.Ub(0,"p",13),b.yc(1),b.Tb()),2&t){const t=b.gc();b.Cb(1),b.Ac(" ",t.error," ")}}let w=(()=>{class t{constructor(t,e,i,o,n){this.fb=t,this.api=e,this.authService=i,this.dialogRef=o,this.data=n,this.isCreateMode=!0,console.log(n.classList)}onNoClick(){this.dialogRef.close()}ngOnInit(){this.initialValues=this.data.user,this.isCreateMode=""===this.initialValues._id;const t=this.authService.getLogginedUserRole();this.displayRoles="SUPER_ADMIN"===t?Object(a.pick)(l.a,["ADMIN"]):Object(a.pick)(l.a,Object(a.filter)(Reflect.ownKeys(l.a),t=>!("ADMIN"===t||"SUPER_ADMIN"===t))),this.keys=Reflect.ownKeys(this.displayRoles),this.form=this.fb.group({_id:[this.initialValues._id],name:[this.initialValues.name,s.n.required],role:[this.initialValues.role||Reflect.ownKeys(this.displayRoles)[0],s.n.required],username:[this.initialValues.username,s.n.required],password:[this.initialValues.password,s.n.required]})}submit(){return Object(o.a)(this,void 0,void 0,(function*(){if(this.form.valid){const t=this.form.value;let e;const{_id:i,password:n}=t,c=Object(o.b)(t,["_id","password"]);if(""==t._id)e=yield this.api.post(this.data.resourceUrl,Object.assign(Object.assign({},c),{password:n})).toPromise();else{const o=`${this.data.resourceUrl}/${i}`;e=yield this.api.put(o,t).toPromise()}this.dialogRef.close(e)}}))}}return t.\u0275fac=function(e){return new(e||t)(b.Ob(s.c),b.Ob(u.a),b.Ob(d.a),b.Ob(r.e),b.Ob(r.a))},t.\u0275cmp=b.Ib({type:t,selectors:[["app-create-user-form"]],inputs:{error:"error"},decls:25,vars:8,consts:[["mat-dialog-content",""],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Name","formControlName","name"],["type","text","matInput","","placeholder","User Name","formControlName","username"],[4,"ngIf"],["formControlName","role"],[3,"value",4,"ngFor","ngForOf"],["class","error",4,"ngIf"],[1,"button"],["type","button","mat-button","",3,"disabled","click"],["type","submit","mat-button","",3,"disabled"],["type","password","matInput","","placeholder","Password","formControlName","password"],[3,"value"],[1,"error"]],template:function(t,e){1&t&&(b.Ub(0,"div",0),b.Ub(1,"mat-card"),b.Ub(2,"mat-card-title"),b.yc(3),b.Tb(),b.Ub(4,"mat-card-content"),b.Ub(5,"form",1),b.cc("ngSubmit",(function(){return e.submit()})),b.Ub(6,"p"),b.Ub(7,"mat-form-field"),b.Pb(8,"input",2),b.Tb(),b.Tb(),b.Ub(9,"p"),b.Ub(10,"mat-form-field"),b.Pb(11,"input",3),b.Tb(),b.Tb(),b.xc(12,C,3,0,"p",4),b.Ub(13,"p"),b.Ub(14,"mat-form-field"),b.Ub(15,"mat-label"),b.yc(16,"Role"),b.Tb(),b.Ub(17,"mat-select",5),b.xc(18,v,2,2,"mat-option",6),b.Tb(),b.Tb(),b.Tb(),b.xc(19,T,2,1,"p",7),b.Ub(20,"div",8),b.Ub(21,"button",9),b.cc("click",(function(){return e.form.reset(e.initialValues)})),b.yc(22,"Reset"),b.Tb(),b.Ub(23,"button",10),b.yc(24),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Tb(),b.Tb()),2&t&&(b.Cb(3),b.zc(e.isCreateMode?"Create User":"Update User"),b.Cb(2),b.lc("formGroup",e.form),b.Cb(7),b.lc("ngIf",e.isCreateMode),b.Cb(6),b.lc("ngForOf",e.keys),b.Cb(1),b.lc("ngIf",e.error),b.Cb(2),b.lc("disabled",!e.form.touched),b.Cb(2),b.lc("disabled",e.form.invalid),b.Cb(1),b.zc(""==e.form.value._id?"Create":"Update"))},directives:[r.c,m.a,m.d,m.b,s.o,s.k,s.e,f.b,p.a,s.b,s.j,s.d,h.l,f.e,U.a,h.k,g.a,y.h],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.forgot-pass-link[_ngcontent-%COMP%]{align-self:center;padding:0 16px;text-decoration:underline;font-size:smaller;font-style:italic;line-height:36px}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:unset}"]}),t})();var O=i("edFq"),x=i("NFeN");let R=(()=>{class t{transform(t,...e){return l.a[t].label||"Unkown Role"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=b.Nb({name:"role",type:t,pure:!0}),t})();function k(t,e){1&t&&(b.Ub(0,"th",16),b.yc(1," Name "),b.Tb())}function A(t,e){if(1&t&&(b.Ub(0,"td",17),b.yc(1),b.Tb()),2&t){const t=e.$implicit;b.Cb(1),b.Ac(" ",t.name," ")}}function S(t,e){1&t&&(b.Ub(0,"th",16),b.yc(1," Username "),b.Tb())}function N(t,e){if(1&t&&(b.Ub(0,"td",17),b.yc(1),b.Tb()),2&t){const t=e.$implicit;b.Cb(1),b.Ac(" ",t.username," ")}}function D(t,e){1&t&&(b.Ub(0,"th",16),b.yc(1," Role "),b.Tb())}function M(t,e){if(1&t&&(b.Ub(0,"td",17),b.yc(1),b.hc(2,"role"),b.Tb()),2&t){const t=e.$implicit;b.Cb(1),b.Ac(" ",b.ic(2,1,t.role)," ")}}function P(t,e){1&t&&(b.Ub(0,"th",16),b.yc(1," Created on "),b.Tb())}function I(t,e){if(1&t&&(b.Ub(0,"td",17),b.yc(1),b.hc(2,"date"),b.Tb()),2&t){const t=e.$implicit;b.Cb(1),b.Ac(" ",b.ic(2,1,t.createdAt)," ")}}function L(t,e){1&t&&(b.Ub(0,"th",16),b.yc(1," Update on "),b.Tb())}function _(t,e){if(1&t&&(b.Ub(0,"td",17),b.yc(1),b.hc(2,"date"),b.Tb()),2&t){const t=e.$implicit;b.Cb(1),b.Ac(" ",b.ic(2,1,t.updatedAt)," ")}}function F(t,e){1&t&&(b.Ub(0,"th",16),b.yc(1," Actions "),b.Tb())}function j(t,e){if(1&t){const t=b.Vb();b.Ub(0,"td",17),b.Ub(1,"div",18),b.Ub(2,"button",19),b.cc("click",(function(){b.qc(t);const i=e.$implicit;return b.gc().onEdit(i)})),b.Ub(3,"mat-icon"),b.yc(4,"create"),b.Tb(),b.Tb(),b.Ub(5,"button",20),b.cc("click",(function(){b.qc(t);const i=e.$implicit;return b.gc().onDelete(i)})),b.Ub(6,"mat-icon"),b.yc(7,"delete"),b.Tb(),b.Tb(),b.Tb(),b.Tb()}}function $(t,e){1&t&&b.Pb(0,"tr",21)}function q(t,e){1&t&&b.Pb(0,"tr",22)}i.d(e,"a",(function(){return E}));const V=function(){return[5,10,20]};let E=(()=>{class t{constructor(t,e,i){this.resourceService=t,this.authService=e,this.dialog=i,this.resourceUrl="/users"}ngOnInit(){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.resourceService.fetchAll(this.resourceUrl).toPromise();this.displayedColumns=["name","userName","role","createdAt","updatedAt","action"],this.resetList(t.data)}))}reFetchResourceList(){return Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.resourceService.fetchAll(this.resourceUrl).toPromise();this.resetList(t.data)}))}resetList(t){const e=this.filterBasedOnRole(t);this.dataSource=new n.k(e),this.dataSource.paginator=this.paginator}filterBasedOnRole(t){const e="SUPER_ADMIN"===this.authService.getLogginedUserRole()?{role:"ADMIN"}:t=>!("ADMIN"==t.role||"SUPER_ADMIN"==t.role);return Object(a.filter)(t,e)}getClassName(t){return console.log(this.classMap[t]),this.classMap.get(t)||"Class has been deleted"}openDialogue(t){this.dialog.open(w,{width:"600px",data:{resourceUrl:this.resourceUrl,classList:this.classList,user:t}}).afterClosed().subscribe(t=>{this.reFetchResourceList()})}onAddResource(){this.openDialogue({_id:"",name:"",mobileNumber:"",class:"",isSubscribed:""})}onUpdate(){this.reFetchResourceList()}onDelete(t){return Object(o.a)(this,void 0,void 0,(function*(){yield this.resourceService.delete(this.resourceUrl,t).toPromise(),this.reFetchResourceList()}))}onEdit(t){return Object(o.a)(this,void 0,void 0,(function*(){this.openDialogue(t)}))}}return t.\u0275fac=function(e){return new(e||t)(b.Ob(O.a),b.Ob(d.a),b.Ob(r.b))},t.\u0275cmp=b.Ib({type:t,selectors:[["app-users-page"]],viewQuery:function(t,e){var i;1&t&&b.vc(c.a,!0),2&t&&b.nc(i=b.dc())&&(e.paginator=i.first)},inputs:{resourceUrl:"resourceUrl"},decls:29,vars:5,consts:[[1,"mat-elevation-z8"],[1,"resource-actions-panel"],[1,"table-heading"],["mat-icon-button","","color","warn","mat-mini-fab","","aria-label","Example icon button with a home icon",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","userName"],["matColumnDef","role"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","action","sticky","true"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"example-flex-container2"],["mat-icon-button","","color","primary","aria-label","Example icon button with a vertical three dot icon",3,"click"],["mat-icon-button","","color","warn","aria-label","Example icon button with a home icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(b.Ub(0,"div",0),b.Ub(1,"div",1),b.Ub(2,"h3",2),b.yc(3," Users "),b.Tb(),b.Ub(4,"button",3),b.cc("click",(function(){return e.onAddResource()})),b.Ub(5,"mat-icon"),b.yc(6,"add"),b.Tb(),b.Tb(),b.Tb(),b.Ub(7,"table",4),b.Sb(8,5),b.xc(9,k,2,0,"th",6),b.xc(10,A,2,1,"td",7),b.Rb(),b.Sb(11,8),b.xc(12,S,2,0,"th",6),b.xc(13,N,2,1,"td",7),b.Rb(),b.Sb(14,9),b.xc(15,D,2,0,"th",6),b.xc(16,M,3,3,"td",7),b.Rb(),b.Sb(17,10),b.xc(18,P,2,0,"th",6),b.xc(19,I,3,3,"td",7),b.Rb(),b.Sb(20,11),b.xc(21,L,2,0,"th",6),b.xc(22,_,3,3,"td",7),b.Rb(),b.Sb(23,12),b.xc(24,F,2,0,"th",6),b.xc(25,j,8,0,"td",7),b.Rb(),b.xc(26,$,1,0,"tr",13),b.xc(27,q,1,0,"tr",14),b.Tb(),b.Pb(28,"mat-paginator",15),b.Tb()),2&t&&(b.Cb(7),b.lc("dataSource",e.dataSource),b.Cb(19),b.lc("matHeaderRowDef",e.displayedColumns),b.Cb(1),b.lc("matRowDefColumns",e.displayedColumns),b.Cb(1),b.lc("pageSizeOptions",b.mc(4,V)))},directives:[g.a,x.a,n.j,n.c,n.e,n.b,n.g,n.i,c.a,n.d,n.a,n.f,n.h],pipes:[R,h.e],styles:["table[_ngcontent-%COMP%]{width:100%}.resource-actions-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 20px}"]}),t})()},edFq:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var o=i("fXoL"),n=i("H+bZ");let c=(()=>{class t{constructor(t){this.api=t}fetchAll(t){return this.api.get(t)}delete(t,e){return this.api.delete(`${t}/${e._id}`)}}return t.\u0275fac=function(e){return new(e||t)(o.Yb(n.a))},t.\u0275prov=o.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},vQ30:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var o=i("fXoL"),n=i("MutI"),c=i("ofXK"),a=i("tyNb"),r=i("NFeN");function s(t,e){if(1&t&&(o.Ub(0,"a",1),o.Ub(1,"mat-icon",2),o.yc(2),o.Tb(),o.yc(3),o.Tb()),2&t){const t=e.$implicit;o.lc("routerLink",t.link),o.Cb(2),o.zc(t.icon),o.Cb(1),o.Ac(" ",t.title," ")}}let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Ib({type:t,selectors:[["app-side-menu"]],inputs:{menuList:"menuList"},decls:2,vars:1,consts:[["mat-list-item","","class","menu-item","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","active",1,"menu-item",3,"routerLink"],["aria-hidden","false","aria-label","Example thumbs up SVG icon"]],template:function(t,e){1&t&&(o.Ub(0,"mat-nav-list"),o.xc(1,s,4,3,"a",0),o.Tb()),2&t&&(o.Cb(1),o.lc("ngForOf",e.menuList))},directives:[n.c,c.k,n.a,a.d,a.c,r.a],styles:[".menu-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}a.active[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.08);color:rgba(0,0,0,.7)}"]}),t})()}}]);