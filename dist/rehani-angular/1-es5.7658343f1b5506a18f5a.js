function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Bwgp:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var i=n("U7T7"),c=n("LvDl"),r=n("1kSV"),a=n("3Pt+"),o=n("PSD3"),s=n.n(o),u=n("fXoL"),b=n("st1q"),l=n("tyNb"),f=n("ofXK"),d=n("S/Mv");function m(e,t){if(1&e&&(u.Wb(0,"option",10),u.Rb(1,"app-constant",11),u.Vb()),2&e){var n=t.$implicit,i=u.mc(2);u.rc("value",n),u.Cb(1),u.rc("constant",i.QUESTION_CATEGORY)("isBadge",!1)("code",n)}}function p(e,t){if(1&e){var n=u.Xb();u.Wb(0,"div"),u.Wb(1,"label"),u.Kc(2," Option: "),u.Rb(3,"input",12),u.Wb(4,"button",8),u.ic("click",(function(){u.Bc(n);var e=t.index;return u.mc(2).removeOption(e)})),u.Kc(5,"Remove"),u.Vb(),u.Vb(),u.Vb()}if(2&e){var i=t.index;u.Cb(3),u.rc("formControlName",i)}}function h(e,t){if(1&e){var n=u.Xb();u.Ub(0),u.Wb(1,"form",1),u.Wb(2,"div",2),u.Wb(3,"select",3),u.Ic(4,m,2,4,"option",4),u.Vb(),u.Vb(),u.Wb(5,"div",2),u.Rb(6,"input",5),u.Vb(),u.Wb(7,"div",6),u.Wb(8,"h3"),u.Kc(9,"Options"),u.Vb(),u.Ic(10,p,6,1,"div",7),u.Wb(11,"button",8),u.ic("click",(function(){return u.Bc(n),u.mc().addOption()})),u.Kc(12,"Add Option"),u.Vb(),u.Vb(),u.Wb(13,"button",9),u.ic("click",(function(){return u.Bc(n),u.mc().save()})),u.Kc(14,"Save"),u.Vb(),u.Wb(15,"button",9),u.ic("click",(function(){return u.Bc(n),u.mc().dismiss("Save click")})),u.Kc(16,"Cancel"),u.Vb(),u.Vb(),u.Tb()}if(2&e){var i=u.mc();u.Cb(1),u.rc("formGroup",i.questionForm),u.Cb(3),u.rc("ngForOf",i.questionKeys),u.Cb(6),u.rc("ngForOf",i.options.controls)}}function v(e,t){if(1&e&&(u.Wb(0,"div"),u.Wb(1,"b"),u.Kc(2),u.Vb(),u.Kc(3),u.Vb()),2&e){var n=u.mc(),i=n.index,c=n.$implicit;u.Cb(2),u.Mc("Question ",i+1,": "),u.Cb(1),u.Mc(" ",c.title,"")}}function g(e,t){if(1&e&&(u.Wb(0,"li"),u.Kc(1),u.Vb()),2&e){var n=t.$implicit;u.Cb(1),u.Mc(" ",n," ")}}function C(e,t){if(1&e){var n=u.Xb();u.Wb(0,"button",26),u.ic("click",(function(){u.Bc(n);var e=u.mc().$implicit;return u.mc(5).deleteQuestion(e)})),u.Kc(1,"Delete"),u.Vb(),u.Wb(2,"button",27),u.ic("click",(function(){u.Bc(n);var e=u.mc().$implicit;return u.mc(5).showAnswers(e)})),u.Kc(3,"View Answers"),u.Vb(),u.Wb(4,"ol"),u.Ic(5,g,2,1,"li",7),u.Vb()}if(2&e){var i=u.mc().$implicit;u.Cb(5),u.rc("ngForOf",i.options)}}function V(e,t){1&e&&(u.Wb(0,"ngb-panel"),u.Ic(1,v,4,2,"ng-template",24),u.Ic(2,C,6,1,"ng-template",25),u.Vb())}function y(e,t){if(1&e&&(u.Wb(0,"ngb-accordion",22,23),u.Ic(2,V,3,0,"ngb-panel",7),u.Vb()),2&e){var n=u.mc(2).$implicit,i=u.mc(2);u.Cb(2),u.rc("ngForOf",i.catogoryWiseQuestions[n])}}function k(e,t){if(1&e){var n=u.Xb();u.Wb(0,"button",20),u.ic("click",(function(){u.Bc(n);var e=u.mc().$implicit;return u.mc(2).addNewQuestion(e)})),u.Kc(1,"Add new question"),u.Vb(),u.Ic(2,y,3,1,"ngb-accordion",21)}if(2&e){var i=u.mc().$implicit,c=u.mc(2);u.Cb(2),u.rc("ngIf",c.catogoryWiseQuestions&&c.catogoryWiseQuestions[i])}}function W(e,t){if(1&e&&(u.Wb(0,"li",17),u.Wb(1,"a",18),u.Rb(2,"app-constant",11),u.Vb(),u.Ic(3,k,3,1,"ng-template",19),u.Vb()),2&e){var n=t.$implicit,i=t.index,c=u.mc(2);u.rc("ngbNavItem",i+1),u.Cb(2),u.rc("constant",c.QUESTION_CATEGORY)("isBadge",!1)("code",n)}}function w(e,t){if(1&e){var n=u.Xb();u.Ub(0),u.Wb(1,"ul",13,14),u.ic("activeIdChange",(function(e){return u.Bc(n),u.mc().active=e})),u.Ic(3,W,4,4,"li",15),u.Vb(),u.Rb(4,"div",16),u.Tb()}if(2&e){var i=u.zc(2),c=u.mc();u.Cb(1),u.rc("activeId",c.active),u.Cb(2),u.rc("ngForOf",c.questionKeys),u.Cb(1),u.rc("ngbNavOutlet",i)}}var I=function(){var e=function(){function e(t,n,c,r,a){_classCallCheck(this,e),this.suggestionsService=t,this.modalService=n,this.fb=c,this.router=r,this.activatedRoute=a,this.QUESTION_CATEGORY=i.b,this.active=1,this.closeResult="",this.createMode=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.questionKeys=Object(i.e)(i.b),this.fetchQuestions(),this.questionForm=this.fb.group({title:["",a.v.required],description:[""],category:["",a.v.required],options:this.fb.array([])})}},{key:"fetchQuestions",value:function(){var e=this;this.suggestionsService.getAllQuestionsWithAnswers().subscribe((function(t){e.catogoryWiseQuestions=Object(c.groupBy)(t,"category")}))}},{key:"addOption",value:function(){this.options.push(this.fb.control(""))}},{key:"deleteQuestion",value:function(e){var t=this;this.suggestionsService.deleteQuestion(e).subscribe((function(e){t.fetchQuestions(),s.a.fire("","Response saved successgully!","success")}))}},{key:"dismiss",value:function(e){this.createMode=!1}},{key:"save",value:function(){var e=this,t=this.questionForm.value;""!==t.title?t.options.length<2?s.a.fire("","There should be atleast 2 options","error"):this.suggestionsService.createQuestion(t).subscribe((function(t){e.fetchQuestions(),s.a.fire("","Response saved successgully!","success"),e.createMode=!1})):s.a.fire("","Title field cant be blank","error")}},{key:"removeOption",value:function(e){this.options.removeAt(e)}},{key:"addNewQuestion",value:function(e){this.createMode=!0,this.questionForm.patchValue({category:e})}},{key:"getDismissReason",value:function(e){return e===r.a.ESC?"by pressing ESC":e===r.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(e)}},{key:"showAnswers",value:function(e){this.router.navigate([e._id,"answers"],{relativeTo:this.activatedRoute})}},{key:"options",get:function(){return this.questionForm.get("options")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Qb(b.a),u.Qb(r.c),u.Qb(a.e),u.Qb(l.c),u.Qb(l.a))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-suggestion-questions"]],decls:2,vars:2,consts:[[4,"ngIf"],[3,"formGroup"],[1,"col-md-12"],["formControlName","category","id","exampleFormControlSelect1",1,"medium-input","width-100"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","title","id","title","placeholder","Question Title",1,"medium-input","width-100"],["formArrayName","options"],[4,"ngFor","ngForOf"],[3,"click"],["type","button",1,"btn","btn-outline-dark",3,"click"],[3,"value"],[3,"constant","isBadge","code"],["type","text",3,"formControlName"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem",4,"ngFor","ngForOf"],[1,"mt-2",3,"ngbNavOutlet"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[1,"btn","btn-small","btn-rounded","btn-success",3,"click"],["activeIds","ngb-panel-0",4,"ngIf"],["activeIds","ngb-panel-0"],["acc","ngbAccordion"],["ngbPanelTitle",""],["ngbPanelContent",""],[1,"btn","btn-small","btn-rounded","btn-danger","margin-10px-bottom","margin-10px-lr",3,"click"],[1,"btn","btn-small","btn-rounded","btn-primary","margin-10px-bottom","margin-5px-lr",3,"click"]],template:function(e,t){1&e&&(u.Ic(0,h,17,3,"ng-container",0),u.Ic(1,w,5,3,"ng-container",0)),2&e&&(u.rc("ngIf",t.createMode),u.Cb(1),u.rc("ngIf",!t.createMode))},directives:[f.m,a.x,a.m,a.g,a.u,a.l,a.f,f.l,a.c,a.d,a.q,a.w,d.a,r.e,r.i,r.g,r.h,r.f,r.b,r.k,r.m,r.l],styles:["a[_ngcontent-%COMP%]{background-color:#217922}.card-body[_ngcontent-%COMP%]{border:2px solid #000}"]}),e}()},JuEE:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("U7T7"),c=n("fXoL"),r=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"transform",value:function(e){return i.c[e].label||"Unkown Role"}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Pb({name:"role",type:e,pure:!0}),e}()},"S/Mv":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fXoL"),c=n("ofXK");function r(e,t){if(1&e&&(i.Wb(0,"span",2),i.Kc(1),i.Vb()),2&e){var n=i.mc();i.Cb(1),i.Mc(" ",n.label,"\n")}}function a(e,t){if(1&e&&(i.Ub(0),i.Kc(1),i.Tb()),2&e){var n=i.mc();i.Cb(1),i.Mc(" ",n.label,"\n")}}var o=function(){var e=function(){function e(){_classCallCheck(this,e),this.isBadge=!0}return _createClass(e,[{key:"ngOnInit",value:function(){this.label=this.constant[this.code].label}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Kb({type:e,selectors:[["app-constant"]],inputs:{constant:"constant",code:"code",isBadge:"isBadge"},decls:2,vars:2,consts:[["class","badge badge-secondary",4,"ngIf"],[4,"ngIf"],[1,"badge","badge-secondary"]],template:function(e,t){1&e&&(i.Ic(0,r,2,1,"span",0),i.Ic(1,a,2,1,"ng-container",1)),2&e&&(i.rc("ngIf",t.isBadge),i.Cb(1),i.rc("ngIf",!t.isBadge))},directives:[c.m],styles:[""]}),e}()},TqWN:function(e,t,n){"use strict";var i=n("mrSG"),c=n("+0xr"),r=n("M9IT"),a=n("LvDl"),o=n("0IaG"),s=n("3Pt+"),u=n("U7T7"),b=n("fXoL"),l=n("H+bZ"),f=n("N/25"),d=n("Wp6s"),m=n("kmnG"),p=n("qFsG"),h=n("ofXK"),v=n("d3UM"),g=n("bTqV"),C=n("FKr1");function V(e,t){1&e&&(b.Wb(0,"p"),b.Wb(1,"mat-form-field"),b.Rb(2,"input",11),b.Vb(),b.Vb())}function y(e,t){if(1&e&&(b.Wb(0,"mat-option",12),b.Kc(1),b.Vb()),2&e){var n=t.$implicit,i=b.mc();b.rc("value",n),b.Cb(1),b.Mc(" ",i.displayRoles[n].label," ")}}function k(e,t){if(1&e&&(b.Wb(0,"p",13),b.Kc(1),b.Vb()),2&e){var n=b.mc();b.Cb(1),b.Mc(" ",n.error," ")}}var W,w,I,K=((W=function(){function e(t,n,i,c,r){_classCallCheck(this,e),this.fb=t,this.api=n,this.authService=i,this.dialogRef=c,this.data=r,this.isCreateMode=!0,console.log(r.classList)}return _createClass(e,[{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"ngOnInit",value:function(){this.initialValues=this.data.user,this.isCreateMode=""===this.initialValues._id;var e=this.authService.getLogginedUserRole();this.displayRoles="SUPER_ADMIN"===e?Object(a.pick)(u.c,["ADMIN"]):Object(a.pick)(u.c,Object(a.filter)(Reflect.ownKeys(u.c),(function(e){return!("ADMIN"===e||"SUPER_ADMIN"===e)}))),this.keys=Reflect.ownKeys(this.displayRoles),this.form=this.fb.group({_id:[this.initialValues._id],name:[this.initialValues.name,s.v.required],role:[this.initialValues.role||Reflect.ownKeys(this.displayRoles)[0],s.v.required],username:[this.initialValues.username,s.v.required],password:[this.initialValues.password,s.v.required]})}},{key:"submit",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n,c,r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.form.valid){e.next=14;break}if(t=this.form.value,c=t._id,r=t.password,a=Object(i.b)(t,["_id","password"]),""!=t._id){e.next=9;break}return e.next=6,this.api.post(this.data.resourceUrl,Object.assign(Object.assign({},a),{password:r})).toPromise();case 6:n=e.sent,e.next=13;break;case 9:return o="".concat(this.data.resourceUrl,"/").concat(c),e.next=12,this.api.put(o,t).toPromise();case 12:n=e.sent;case 13:this.dialogRef.close(n);case 14:case"end":return e.stop()}}),e,this)})))}}]),e}()).\u0275fac=function(e){return new(e||W)(b.Qb(s.e),b.Qb(l.a),b.Qb(f.a),b.Qb(o.e),b.Qb(o.a))},W.\u0275cmp=b.Kb({type:W,selectors:[["app-create-user-form"]],inputs:{error:"error"},decls:25,vars:8,consts:[["mat-dialog-content",""],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Name","formControlName","name"],["type","text","matInput","","placeholder","User Name","formControlName","username"],[4,"ngIf"],["formControlName","role"],[3,"value",4,"ngFor","ngForOf"],["class","error",4,"ngIf"],[1,"button"],["type","button","mat-button","",3,"disabled","click"],["type","submit","mat-button","",3,"disabled"],["type","password","matInput","","placeholder","Password","formControlName","password"],[3,"value"],[1,"error"]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Wb(1,"mat-card"),b.Wb(2,"mat-card-title"),b.Kc(3),b.Vb(),b.Wb(4,"mat-card-content"),b.Wb(5,"form",1),b.ic("ngSubmit",(function(){return t.submit()})),b.Wb(6,"p"),b.Wb(7,"mat-form-field"),b.Rb(8,"input",2),b.Vb(),b.Vb(),b.Wb(9,"p"),b.Wb(10,"mat-form-field"),b.Rb(11,"input",3),b.Vb(),b.Vb(),b.Ic(12,V,3,0,"p",4),b.Wb(13,"p"),b.Wb(14,"mat-form-field"),b.Wb(15,"mat-label"),b.Kc(16,"Role"),b.Vb(),b.Wb(17,"mat-select",5),b.Ic(18,y,2,2,"mat-option",6),b.Vb(),b.Vb(),b.Vb(),b.Ic(19,k,2,1,"p",7),b.Wb(20,"div",8),b.Wb(21,"button",9),b.ic("click",(function(){return t.form.reset(t.initialValues)})),b.Kc(22,"Reset"),b.Vb(),b.Wb(23,"button",10),b.Kc(24),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Vb()),2&e&&(b.Cb(3),b.Lc(t.isCreateMode?"Create User":"Update User"),b.Cb(2),b.rc("formGroup",t.form),b.Cb(7),b.rc("ngIf",t.isCreateMode),b.Cb(6),b.rc("ngForOf",t.keys),b.Cb(1),b.rc("ngIf",t.error),b.Cb(2),b.rc("disabled",!t.form.touched),b.Cb(2),b.rc("disabled",t.form.invalid),b.Cb(1),b.Lc(""==t.form.value._id?"Create":"Update"))},directives:[o.c,d.a,d.d,d.b,s.x,s.m,s.g,m.b,p.a,s.c,s.l,s.f,h.m,m.e,v.a,h.l,g.a,C.h],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.forgot-pass-link[_ngcontent-%COMP%]{align-self:center;padding:0 16px;text-decoration:underline;font-size:smaller;font-style:italic;line-height:36px}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:unset}"]}),W),O=n("PSD3"),R=n.n(O),x=((I=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"success",value:function(e){R.a.fire(e,"","success")}},{key:"error",value:function(e){R.a.fire(e,"","error")}}]),e}()).\u0275fac=function(e){return new(e||I)},I.\u0275prov=b.Mb({token:I,factory:I.\u0275fac,providedIn:"root"}),I),M=((w=function(){function e(t,n,i){_classCallCheck(this,e),this.api=t,this.alert=n,this.dialogRef=i}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"onFileChange",value:function(e){this.selectedFile=e.target.files[0]}},{key:"uploadFile",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.selectedFile){e.next=13;break}return(t=new FormData).append("file",this.selectedFile),e.prev=3,e.next=6,this.api.post("/users/migrate-users",t).toPromise();case 6:this.alert.success("Users created successfully!"),this.dialogRef.close(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.alert.error(e.t0.error.message);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})))}}]),e}()).\u0275fac=function(e){return new(e||w)(b.Qb(l.a),b.Qb(x),b.Qb(o.e))},w.\u0275cmp=b.Kb({type:w,selectors:[["app-upload-users-csv-form"]],decls:6,vars:0,consts:[[1,"form-group"],["for","exampleFormControlFile1"],["type","file","accept",".csv","id","exampleFormControlFile1",1,"form-control-file",3,"change"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Wb(1,"label",1),b.Kc(2,"Select CSV"),b.Vb(),b.Wb(3,"input",2),b.ic("change",(function(e){return t.onFileChange(e)})),b.Vb(),b.Vb(),b.Wb(4,"button",3),b.ic("click",(function(){return t.uploadFile()})),b.Kc(5,"Create users"),b.Vb())},styles:[""]}),w),_=n("edFq"),F=n("NFeN"),N=n("JuEE");function S(e,t){1&e&&(b.Wb(0,"th",16),b.Kc(1," Name "),b.Vb())}function L(e,t){if(1&e&&(b.Wb(0,"td",17),b.Kc(1),b.Vb()),2&e){var n=t.$implicit;b.Cb(1),b.Mc(" ",n.name," ")}}function U(e,t){1&e&&(b.Wb(0,"th",16),b.Kc(1," Username "),b.Vb())}function Q(e,t){if(1&e&&(b.Wb(0,"td",17),b.Kc(1),b.Vb()),2&e){var n=t.$implicit;b.Cb(1),b.Mc(" ",n.username," ")}}function A(e,t){1&e&&(b.Wb(0,"th",16),b.Kc(1," Role "),b.Vb())}function D(e,t){if(1&e&&(b.Wb(0,"td",17),b.Kc(1),b.nc(2,"role"),b.Vb()),2&e){var n=t.$implicit;b.Cb(1),b.Mc(" ",b.oc(2,1,n.role)," ")}}function P(e,t){1&e&&(b.Wb(0,"th",16),b.Kc(1," Created on "),b.Vb())}function q(e,t){if(1&e&&(b.Wb(0,"td",17),b.Kc(1),b.nc(2,"date"),b.Vb()),2&e){var n=t.$implicit;b.Cb(1),b.Mc(" ",b.oc(2,1,n.createdAt)," ")}}function T(e,t){1&e&&(b.Wb(0,"th",16),b.Kc(1," Update on "),b.Vb())}function B(e,t){if(1&e&&(b.Wb(0,"td",17),b.Kc(1),b.nc(2,"date"),b.Vb()),2&e){var n=t.$implicit;b.Cb(1),b.Mc(" ",b.oc(2,1,n.updatedAt)," ")}}function E(e,t){1&e&&(b.Wb(0,"th",16),b.Kc(1," Actions "),b.Vb())}function j(e,t){if(1&e){var n=b.Xb();b.Wb(0,"td",17),b.Wb(1,"div",18),b.Wb(2,"button",19),b.ic("click",(function(){b.Bc(n);var e=t.$implicit;return b.mc().onEdit(e)})),b.Wb(3,"mat-icon"),b.Kc(4,"create"),b.Vb(),b.Vb(),b.Wb(5,"button",20),b.ic("click",(function(){b.Bc(n);var e=t.$implicit;return b.mc().onDelete(e)})),b.Wb(6,"mat-icon"),b.Kc(7,"delete"),b.Vb(),b.Vb(),b.Vb(),b.Vb()}}function $(e,t){1&e&&b.Rb(0,"tr",21)}function X(e,t){1&e&&b.Rb(0,"tr",22)}n.d(t,"a",(function(){return H}));var G,z=function(){return[5,10,20]},H=((G=function(){function e(t,n,i){_classCallCheck(this,e),this.resourceService=t,this.authService=n,this.dialog=i,this.resourceUrl="/users"}return _createClass(e,[{key:"ngOnInit",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.resourceService.fetchAll(this.resourceUrl).toPromise();case 2:t=e.sent,this.displayedColumns=["name","userName","role","createdAt","updatedAt","action"],this.resetList(t.data);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"reFetchResourceList",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.resourceService.fetchAll(this.resourceUrl).toPromise();case 2:t=e.sent,this.resetList(t.data);case 4:case"end":return e.stop()}}),e,this)})))}},{key:"resetList",value:function(e){var t=this.filterBasedOnRole(e);this.dataSource=new c.k(t),this.dataSource.paginator=this.paginator}},{key:"filterBasedOnRole",value:function(e){var t="SUPER_ADMIN"===this.authService.getLogginedUserRole()?{role:"ADMIN"}:function(e){return!("ADMIN"==e.role||"SUPER_ADMIN"==e.role)};return Object(a.filter)(e,t)}},{key:"getClassName",value:function(e){return console.log(this.classMap[e]),this.classMap.get(e)||"Class has been deleted"}},{key:"onUploadCSV",value:function(){var e=this;this.dialog.open(M,{width:"600px",data:{}}).afterClosed().subscribe((function(t){e.reFetchResourceList()}))}},{key:"openDialogue",value:function(e){var t=this;this.dialog.open(K,{width:"600px",data:{resourceUrl:this.resourceUrl,classList:this.classList,user:e}}).afterClosed().subscribe((function(e){t.reFetchResourceList()}))}},{key:"onAddResource",value:function(){this.openDialogue({_id:"",name:"",mobileNumber:"",class:"",isSubscribed:""})}},{key:"onUpdate",value:function(){this.reFetchResourceList()}},{key:"onDelete",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.resourceService.delete(this.resourceUrl,e).toPromise();case 2:this.reFetchResourceList();case 3:case"end":return t.stop()}}),t,this)})))}},{key:"onEdit",value:function(e){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.openDialogue(e);case 1:case"end":return t.stop()}}),t,this)})))}}]),e}()).\u0275fac=function(e){return new(e||G)(b.Qb(_.a),b.Qb(f.a),b.Qb(o.b))},G.\u0275cmp=b.Kb({type:G,selectors:[["app-users-page"]],viewQuery:function(e,t){var n;1&e&&b.Gc(r.a,!0),2&e&&b.yc(n=b.jc())&&(t.paginator=n.first)},inputs:{resourceUrl:"resourceUrl"},decls:33,vars:5,consts:[[1,"mat-elevation-z8"],[1,"resource-actions-panel"],[1,"table-heading"],["mat-icon-button","","color","warn","mat-mini-fab","","aria-label","Example icon button with a home icon",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","userName"],["matColumnDef","role"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","action","sticky","true"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"example-flex-container2"],["mat-icon-button","","color","primary","aria-label","Example icon button with a vertical three dot icon",3,"click"],["mat-icon-button","","color","warn","aria-label","Example icon button with a home icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(b.Wb(0,"div",0),b.Wb(1,"div",1),b.Wb(2,"h3",2),b.Kc(3," Users "),b.Vb(),b.Wb(4,"div"),b.Wb(5,"button",3),b.ic("click",(function(){return t.onAddResource()})),b.Wb(6,"mat-icon"),b.Kc(7,"add"),b.Vb(),b.Vb(),b.Wb(8,"button",3),b.ic("click",(function(){return t.onUploadCSV()})),b.Wb(9,"mat-icon"),b.Kc(10,"publish"),b.Vb(),b.Vb(),b.Vb(),b.Vb(),b.Wb(11,"table",4),b.Ub(12,5),b.Ic(13,S,2,0,"th",6),b.Ic(14,L,2,1,"td",7),b.Tb(),b.Ub(15,8),b.Ic(16,U,2,0,"th",6),b.Ic(17,Q,2,1,"td",7),b.Tb(),b.Ub(18,9),b.Ic(19,A,2,0,"th",6),b.Ic(20,D,3,3,"td",7),b.Tb(),b.Ub(21,10),b.Ic(22,P,2,0,"th",6),b.Ic(23,q,3,3,"td",7),b.Tb(),b.Ub(24,11),b.Ic(25,T,2,0,"th",6),b.Ic(26,B,3,3,"td",7),b.Tb(),b.Ub(27,12),b.Ic(28,E,2,0,"th",6),b.Ic(29,j,8,0,"td",7),b.Tb(),b.Ic(30,$,1,0,"tr",13),b.Ic(31,X,1,0,"tr",14),b.Vb(),b.Rb(32,"mat-paginator",15),b.Vb()),2&e&&(b.Cb(11),b.rc("dataSource",t.dataSource),b.Cb(19),b.rc("matHeaderRowDef",t.displayedColumns),b.Cb(1),b.rc("matRowDefColumns",t.displayedColumns),b.Cb(1),b.rc("pageSizeOptions",b.uc(4,z)))},directives:[g.a,F.a,c.j,c.c,c.e,c.b,c.g,c.i,r.a,c.d,c.a,c.f,c.h],pipes:[N.a,h.e],styles:["table[_ngcontent-%COMP%]{width:100%}.resource-actions-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 20px}"]}),G)},edFq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("fXoL"),c=n("H+bZ"),r=function(){var e=function(){function e(t){_classCallCheck(this,e),this.api=t}return _createClass(e,[{key:"fetchAll",value:function(e){return this.api.get(e)}},{key:"delete",value:function(e,t){return this.api.delete("".concat(e,"/").concat(t._id))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.ec(c.a))},e.\u0275prov=i.Mb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},"k+vH":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("LvDl"),c=n("fXoL"),r=n("tyNb"),a=n("st1q"),o=n("ofXK"),s=n("LPYB");function u(e,t){1&e&&(c.Ub(0),c.Kc(1,"Loading..."),c.Tb())}function b(e,t){if(1&e&&(c.Wb(0,"li"),c.Kc(1),c.Vb()),2&e){var n=t.$implicit;c.Cb(1),c.Mc(" ",n," ")}}function l(e,t){if(1&e&&(c.Wb(0,"tr"),c.Wb(1,"th",11),c.Kc(2),c.Vb(),c.Wb(3,"td"),c.Kc(4),c.Vb(),c.Wb(5,"td"),c.Kc(6),c.Vb(),c.Wb(7,"td"),c.Kc(8),c.Vb(),c.Wb(9,"td"),c.Kc(10),c.Vb(),c.Wb(11,"td"),c.Kc(12),c.Vb(),c.Wb(13,"td"),c.Kc(14),c.Vb(),c.Vb()),2&e){var n=t.$implicit,i=t.index;c.Cb(2),c.Lc(i+1),c.Cb(2),c.Lc(n.answer),c.Cb(2),c.Lc(n.name),c.Cb(2),c.Lc(n.mobileNumber),c.Cb(2),c.Lc(n.destrict),c.Cb(2),c.Lc(n.vidhanSabha),c.Cb(2),c.Lc(n.comment)}}function f(e,t){if(1&e&&(c.Ub(0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Kc(3),c.Wb(4,"ol"),c.Ic(5,b,2,1,"li",3),c.Vb(),c.Vb(),c.Wb(6,"div",2),c.Wb(7,"div",4),c.Rb(8,"canvas",5),c.Vb(),c.Vb(),c.Vb(),c.Wb(9,"div",6),c.Wb(10,"div",7),c.Wb(11,"div",8),c.Wb(12,"table",9),c.Wb(13,"thead"),c.Wb(14,"tr"),c.Wb(15,"th",10),c.Kc(16,"#"),c.Vb(),c.Wb(17,"th",10),c.Kc(18,"Answer"),c.Vb(),c.Wb(19,"th",10),c.Kc(20,"Name"),c.Vb(),c.Wb(21,"th",10),c.Kc(22,"Mobile Number"),c.Vb(),c.Wb(23,"th",10),c.Kc(24,"District"),c.Vb(),c.Wb(25,"th",10),c.Kc(26,"Vidhan Sabha"),c.Vb(),c.Wb(27,"th",10),c.Kc(28,"Comment"),c.Vb(),c.Vb(),c.Vb(),c.Wb(29,"tbody"),c.Ic(30,l,15,7,"tr",3),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Tb()),2&e){var n=c.mc();c.Cb(3),c.Mc(" ",n.question.title," "),c.Cb(2),c.rc("ngForOf",n.question.options),c.Cb(3),c.rc("data",n.barChartData)("labels",n.labels)("chartType",n.barChartType)("options",n.barChartOptions),c.Cb(22),c.rc("ngForOf",n.answers)}}var d=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.route=t,this.suggestionService=n,this.barChartOptions={responsive:!0,title:{text:"Options selected!"}},this.barChartLabels=["Answers"],this.barChartType="bar",this.barChartLegend=!0,this.barChartPlugins=[],this.barChartData=[],this.loading=!0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.paramMap.subscribe((function(t){e.questionId=t.get("questionId")})),this.suggestionService.getQuestionWithAnswer(this.questionId).subscribe((function(t){var n=t.data;e.question=n.question,e.answers=n.answers;var c=Object(i.countBy)(e.answers,"answer");e.barChartData=e.question.options.map((function(e){return c[e]||0})),e.labels=e.question.options,e.loading=!1}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Qb(r.a),c.Qb(a.a))},e.\u0275cmp=c.Kb({type:e,selectors:[["app-answers"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-6"],[4,"ngFor","ngForOf"],[2,"display","block","height","200px","width","500px"],["baseChart","",3,"data","labels","chartType","options"],[1,"row",2,"margin-top","100px"],[1,"col-12"],[2,"display","block"],[1,"table","table-striped"],["scope","col"],["scope","row"]],template:function(e,t){1&e&&(c.Ic(0,u,2,0,"ng-container",0),c.Ic(1,f,31,7,"ng-container",0)),2&e&&(c.rc("ngIf",t.loading),c.Cb(1),c.rc("ngIf",!t.loading))},directives:[o.m,o.l,s.a],styles:[""]}),e}()},vQ30:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("fXoL"),c=n("MutI"),r=n("ofXK"),a=n("tyNb"),o=n("NFeN");function s(e,t){if(1&e&&(i.Wb(0,"a",1),i.Wb(1,"mat-icon",2),i.Kc(2),i.Vb(),i.Kc(3),i.Vb()),2&e){var n=t.$implicit;i.rc("routerLink",n.link),i.Cb(2),i.Lc(n.icon),i.Cb(1),i.Mc(" ",n.title," ")}}var u=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Kb({type:e,selectors:[["app-side-menu"]],inputs:{menuList:"menuList"},decls:2,vars:1,consts:[["mat-list-item","","class","menu-item","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","active",1,"menu-item",3,"routerLink"],["aria-hidden","false","aria-label","Example thumbs up SVG icon"]],template:function(e,t){1&e&&(i.Wb(0,"mat-nav-list"),i.Ic(1,s,4,3,"a",0),i.Vb()),2&e&&(i.Cb(1),i.rc("ngForOf",t.menuList))},directives:[c.c,r.l,c.a,a.e,a.d,o.a],styles:[".menu-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}a.active[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.08);color:rgba(0,0,0,.7)}"]}),e}()}}]);