function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3LUQ":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("PSD3"),c=n.n(i),r=n("fXoL"),o=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"success",value:function(t){c.a.fire(t,"","success")}},{key:"error",value:function(t){c.a.fire(t,"","error")}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Bwgp:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var i=n("mrSG"),c=n("U7T7"),r=n("LvDl"),o=n("1kSV"),a=n("3Pt+"),s=n("PSD3"),u=n.n(s),l=n("fXoL"),b=n("st1q"),m=n("tyNb"),f=n("ofXK"),d=n("Wp6s"),p=n("bTqV"),h=n("NFeN");function v(t,e){if(1&t&&(l.Wb(0,"option",14),l.Pc(1),l.Vb()),2&t){var n=e.$implicit;l.tc("value",n),l.Cb(1),l.Rc(" ",n," ")}}function g(t,e){if(1&t){var n=l.Xb();l.Wb(0,"div"),l.Wb(1,"label"),l.Pc(2," Option: "),l.Rb(3,"input",15),l.Wb(4,"button",16),l.ic("click",(function(){l.Fc(n);var t=e.index;return l.mc(2).removeOption(t)})),l.Pc(5,"Remove"),l.Vb(),l.Vb(),l.Vb()}if(2&t){var i=e.index;l.Cb(3),l.tc("formControlName",i)}}function C(t,e){if(1&t){var n=l.Xb();l.Wb(0,"div",2),l.Wb(1,"form",3),l.Wb(2,"mat-card",4),l.Wb(3,"select",5),l.Nc(4,v,2,2,"option",6),l.Vb(),l.Rb(5,"input",7),l.Wb(6,"div",8),l.Wb(7,"h3",9),l.Pc(8,"Options"),l.Wb(9,"button",10),l.ic("click",(function(){return l.Fc(n),l.mc().addOption()})),l.Wb(10,"mat-icon"),l.Pc(11,"add"),l.Vb(),l.Wb(12,"span"),l.Pc(13,"Add Options"),l.Vb(),l.Vb(),l.Vb(),l.Nc(14,g,6,1,"div",11),l.Vb(),l.Vb(),l.Wb(15,"button",12),l.ic("click",(function(){return l.Fc(n),l.mc().save()})),l.Pc(16,"Save"),l.Vb(),l.Wb(17,"button",13),l.ic("click",(function(){return l.Fc(n),l.mc().dismiss("Save click")})),l.Pc(18,"Cancel"),l.Vb(),l.Vb(),l.Vb()}if(2&t){var i=l.mc();l.Cb(1),l.tc("formGroup",i.questionForm),l.Cb(3),l.tc("ngForOf",i.questionKeys),l.Cb(10),l.tc("ngForOf",i.options.controls)}}function V(t,e){if(1&t&&(l.Wb(0,"div"),l.Wb(1,"b"),l.Pc(2),l.Vb(),l.Pc(3),l.Vb()),2&t){var n=l.mc(),i=n.index,c=n.$implicit;l.Cb(2),l.Rc("Question ",i+1,": "),l.Cb(1),l.Rc(" ",c.title,"")}}function y(t,e){if(1&t&&(l.Wb(0,"li"),l.Pc(1),l.Vb()),2&t){var n=e.$implicit;l.Cb(1),l.Rc(" ",n," ")}}function W(t,e){if(1&t){var n=l.Xb();l.Wb(0,"mat-card",30),l.Wb(1,"ol"),l.Nc(2,y,2,1,"li",11),l.Vb(),l.Wb(3,"div",31),l.Wb(4,"button",12),l.ic("click",(function(){l.Fc(n);var t=l.mc().$implicit;return l.mc(5).showAnswers(t)})),l.Pc(5,"View Answers"),l.Vb(),l.Wb(6,"button",13),l.ic("click",(function(){l.Fc(n);var t=l.mc().$implicit;return l.mc(5).deleteQuestion(t)})),l.Pc(7,"Delete"),l.Vb(),l.Vb(),l.Vb()}if(2&t){var i=l.mc().$implicit;l.Cb(2),l.tc("ngForOf",i.options)}}function k(t,e){1&t&&(l.Wb(0,"ngb-panel"),l.Nc(1,V,4,2,"ng-template",28),l.Nc(2,W,8,1,"ng-template",29),l.Vb())}function P(t,e){if(1&t&&(l.Wb(0,"ngb-accordion",26,27),l.Nc(2,k,3,0,"ngb-panel",11),l.Vb()),2&t){var n=l.mc(2).$implicit,i=l.mc(2);l.Cb(2),l.tc("ngForOf",i.catogoryWiseQuestions[n])}}function w(t,e){if(1&t){var n=l.Xb();l.Wb(0,"button",24),l.ic("click",(function(){l.Fc(n);var t=l.mc().$implicit;return l.mc(2).addNewQuestion(t)})),l.Wb(1,"mat-icon"),l.Pc(2,"add"),l.Vb(),l.Pc(3,"Add new question"),l.Vb(),l.Nc(4,P,3,1,"ngb-accordion",25)}if(2&t){var i=l.mc().$implicit,c=l.mc(2);l.Cb(4),l.tc("ngIf",c.catogoryWiseQuestions&&c.catogoryWiseQuestions[i])}}var N=function(t){return{"active-tab":t}};function R(t,e){if(1&t&&(l.Wb(0,"li",21),l.Wb(1,"a",22),l.Pc(2),l.Vb(),l.Nc(3,w,5,1,"ng-template",23),l.Vb()),2&t){var n=e.$implicit,i=e.index,c=l.mc(2);l.tc("ngbNavItem",i+1),l.Cb(1),l.tc("ngClass",l.xc(3,N,i+1===c.active)),l.Cb(1),l.Rc(" ",n," ")}}function O(t,e){if(1&t){var n=l.Xb();l.Ub(0),l.Wb(1,"ul",17,18),l.ic("activeIdChange",(function(t){return l.Fc(n),l.mc().active=t})),l.Nc(3,R,4,5,"li",19),l.Vb(),l.Rb(4,"div",20),l.Tb()}if(2&t){var i=l.Cc(2),c=l.mc();l.Cb(1),l.tc("activeId",c.active),l.Cb(2),l.tc("ngForOf",c.questionKeys),l.Cb(1),l.tc("ngbNavOutlet",i)}}var x=function(){var t=function(){function t(e,n,i,r,o){_classCallCheck(this,t),this.suggestionsService=e,this.modalService=n,this.fb=i,this.router=r,this.activatedRoute=o,this.QUESTION_CATEGORY=c.b,this.active=1,this.closeResult="",this.createMode=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.questionKeys=Object(c.e)(c.b),console.log(this.questionKeys),this.getAllSchemes(),this.fetchQuestions(),this.questionForm=this.fb.group({title:["",a.w.required],description:[""],category:["",a.w.required],options:this.fb.array([])})}},{key:"getAllSchemes",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.suggestionsService.getAllScheme().toPromise();case 2:e=t.sent,this.schemes=e.data,this.questionKeys=this.schemes.map((function(t){return t.title})),console.log(this.schemes);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"fetchQuestions",value:function(){var t=this;this.suggestionsService.getAllQuestionsWithAnswers().subscribe((function(e){t.catogoryWiseQuestions=Object(r.groupBy)(e,"category")}))}},{key:"addOption",value:function(){this.options.push(this.fb.control(""))}},{key:"deleteQuestion",value:function(t){var e=this;this.suggestionsService.deleteQuestion(t).subscribe((function(t){e.fetchQuestions(),u.a.fire("","Response saved successgully!","success")}))}},{key:"dismiss",value:function(t){this.createMode=!1}},{key:"save",value:function(){var t=this,e=this.questionForm.value;""!==e.title?e.options.length<2?u.a.fire("","There should be atleast 2 options","error"):this.suggestionsService.createQuestion(e).subscribe((function(e){t.fetchQuestions(),u.a.fire("","Response saved successgully!","success"),t.createMode=!1})):u.a.fire("","Title field cant be blank","error")}},{key:"removeOption",value:function(t){this.options.removeAt(t)}},{key:"addNewQuestion",value:function(t){this.createMode=!0,this.questionForm.patchValue({category:t})}},{key:"getDismissReason",value:function(t){return t===o.a.ESC?"by pressing ESC":t===o.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(t)}},{key:"showAnswers",value:function(t){this.router.navigate([t._id,"answers"],{relativeTo:this.activatedRoute})}},{key:"options",get:function(){return this.questionForm.get("options")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(l.Qb(b.a),l.Qb(o.c),l.Qb(a.e),l.Qb(m.c),l.Qb(m.a))},t.\u0275cmp=l.Kb({type:t,selectors:[["app-suggestion-questions"]],decls:2,vars:2,consts:[["class","col-lg-4 col-md-6 question-container",4,"ngIf"],[4,"ngIf"],[1,"col-lg-4","col-md-6","question-container"],[3,"formGroup"],[1,"mb10"],["formControlName","category","id","exampleFormControlSelect1",1,"medium-input","width-100"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","title","id","title","placeholder","Question Title",1,"medium-input","width-100"],["formArrayName","options",1,"mb10"],[1,"add-options"],["mat-raised-button","",3,"click"],[4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",1,"ml10",3,"click"],[3,"value"],["type","text",3,"formControlName"],["mat-stroked-button","","color","warn",1,"ml10",3,"click"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem",4,"ngFor","ngForOf"],[1,"mt-2",3,"ngbNavOutlet"],[3,"ngbNavItem"],["ngbNavLink","",1,"tab-links",3,"ngClass"],["ngbNavContent",""],["mat-raised-button","",1,"mb10",3,"click"],["activeIds","ngb-panel-0",4,"ngIf"],["activeIds","ngb-panel-0"],["acc","ngbAccordion"],["ngbPanelTitle",""],["ngbPanelContent",""],[1,"max-w"],[1,"mb10","ml20"]],template:function(t,e){1&t&&(l.Nc(0,C,19,3,"div",0),l.Nc(1,O,5,3,"ng-container",1)),2&t&&(l.tc("ngIf",e.createMode),l.Cb(1),l.tc("ngIf",!e.createMode))},directives:[f.m,a.y,a.n,a.g,d.a,a.v,a.m,a.f,f.l,a.c,a.d,p.b,h.a,a.r,a.x,o.e,o.i,o.g,o.h,f.k,o.f,o.b,o.k,o.m,o.l],styles:["a[_ngcontent-%COMP%]{background-color:#217922}.card-body[_ngcontent-%COMP%]{border:2px solid #000}.active-tab[_ngcontent-%COMP%], .tab-links[_ngcontent-%COMP%]:focus, .tab-links[_ngcontent-%COMP%]:hover{color:#217922;border-color:#398439;border-bottom-width:0}.active-tab[_ngcontent-%COMP%]{background-color:#eee}.ml10[_ngcontent-%COMP%]{margin-left:10px}.mb10[_ngcontent-%COMP%]{margin-bottom:10px}.ml20[_ngcontent-%COMP%]{margin-left:20px}.add-options[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.max-w[_ngcontent-%COMP%]{max-width:700px}"]}),t}()},JuEE:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("U7T7"),c=n("fXoL"),r=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t){return i.c[t].label||"Unkown Role"}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Pb({name:"role",type:t,pure:!0}),t}()},TqWN:function(t,e,n){"use strict";var i=n("mrSG"),c=n("+0xr"),r=n("M9IT"),o=n("LvDl"),a=n("0IaG"),s=n("3Pt+"),u=n("U7T7"),l=n("fXoL"),b=n("H+bZ"),m=n("N/25"),f=n("Wp6s"),d=n("kmnG"),p=n("qFsG"),h=n("ofXK"),v=n("d3UM"),g=n("bTqV"),C=n("FKr1");function V(t,e){1&t&&(l.Wb(0,"p"),l.Wb(1,"mat-form-field"),l.Rb(2,"input",13),l.Vb(),l.Vb())}function y(t,e){if(1&t&&(l.Wb(0,"mat-option",14),l.Pc(1),l.Vb()),2&t){var n=e.$implicit,i=l.mc();l.tc("value",n),l.Cb(1),l.Rc(" ",i.displayRoles[n].label," ")}}function W(t,e){if(1&t&&(l.Wb(0,"p",15),l.Pc(1),l.Vb()),2&t){var n=l.mc();l.Cb(1),l.Rc(" ",n.error," ")}}var k,P,w=((k=function(){function t(e,n,i,c,r){_classCallCheck(this,t),this.fb=e,this.api=n,this.authService=i,this.dialogRef=c,this.data=r,this.isCreateMode=!0,console.log(r.classList)}return _createClass(t,[{key:"onNoClick",value:function(){this.dialogRef.close()}},{key:"ngOnInit",value:function(){this.initialValues=this.data.user,this.isCreateMode=""===this.initialValues._id;var t=this.authService.getLogginedUserRole();this.displayRoles="SUPER_ADMIN"===t?Object(o.pick)(u.c,["ADMIN"]):Object(o.pick)(u.c,Object(o.filter)(Reflect.ownKeys(u.c),(function(t){return!("ADMIN"===t||"SUPER_ADMIN"===t)}))),this.keys=Reflect.ownKeys(this.displayRoles),this.form=this.fb.group({_id:[this.initialValues._id],name:[this.initialValues.name,s.w.required],email:[this.initialValues.email,s.w.email],mobileNumber:[this.initialValues.mobileNumber,[s.w.required,s.w.minLength(10),s.w.maxLength(10)]],role:[this.initialValues.role||Reflect.ownKeys(this.displayRoles)[0],s.w.required],username:[this.initialValues.username,s.w.required],password:[this.initialValues.password,s.w.required]})}},{key:"submit",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n,c,r,o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.form.valid){t.next=14;break}if(e=this.form.value,c=e._id,r=e.password,o=Object(i.b)(e,["_id","password"]),""!=e._id){t.next=9;break}return t.next=6,this.api.post(this.data.resourceUrl,Object.assign(Object.assign({},o),{password:r})).toPromise();case 6:n=t.sent,t.next=13;break;case 9:return a="".concat(this.data.resourceUrl,"/").concat(c),t.next=12,this.api.put(a,e).toPromise();case 12:n=t.sent;case 13:this.dialogRef.close(n);case 14:case"end":return t.stop()}}),t,this)})))}}]),t}()).\u0275fac=function(t){return new(t||k)(l.Qb(s.e),l.Qb(b.a),l.Qb(m.a),l.Qb(a.e),l.Qb(a.a))},k.\u0275cmp=l.Kb({type:k,selectors:[["app-create-user-form"]],inputs:{error:"error"},decls:31,vars:8,consts:[["mat-dialog-content",""],[3,"formGroup","ngSubmit"],["type","text","matInput","","placeholder","Name","formControlName","name"],["type","text","matInput","","placeholder","User Name","formControlName","username"],["type","email","matInput","","placeholder","Email","formControlName","email"],["type","text","max","10","min","10","matInput","","placeholder","Mobile Number","formControlName","mobileNumber"],[4,"ngIf"],["formControlName","role"],[3,"value",4,"ngFor","ngForOf"],["class","error",4,"ngIf"],[1,"button"],["type","button","mat-button","",3,"disabled","click"],["type","submit","mat-button","",3,"disabled"],["type","password","matInput","","placeholder","Password","formControlName","password"],[3,"value"],[1,"error"]],template:function(t,e){1&t&&(l.Wb(0,"div",0),l.Wb(1,"mat-card"),l.Wb(2,"mat-card-title"),l.Pc(3),l.Vb(),l.Wb(4,"mat-card-content"),l.Wb(5,"form",1),l.ic("ngSubmit",(function(){return e.submit()})),l.Wb(6,"p"),l.Wb(7,"mat-form-field"),l.Rb(8,"input",2),l.Vb(),l.Vb(),l.Wb(9,"p"),l.Wb(10,"mat-form-field"),l.Rb(11,"input",3),l.Vb(),l.Vb(),l.Wb(12,"p"),l.Wb(13,"mat-form-field"),l.Rb(14,"input",4),l.Vb(),l.Vb(),l.Wb(15,"p"),l.Wb(16,"mat-form-field"),l.Rb(17,"input",5),l.Vb(),l.Vb(),l.Nc(18,V,3,0,"p",6),l.Wb(19,"p"),l.Wb(20,"mat-form-field"),l.Wb(21,"mat-label"),l.Pc(22,"Role"),l.Vb(),l.Wb(23,"mat-select",7),l.Nc(24,y,2,2,"mat-option",8),l.Vb(),l.Vb(),l.Vb(),l.Nc(25,W,2,1,"p",9),l.Wb(26,"div",10),l.Wb(27,"button",11),l.ic("click",(function(){return e.form.reset(e.initialValues)})),l.Pc(28,"Reset"),l.Vb(),l.Wb(29,"button",12),l.Pc(30),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb(),l.Vb()),2&t&&(l.Cb(3),l.Qc(e.isCreateMode?"Create User":"Update User"),l.Cb(2),l.tc("formGroup",e.form),l.Cb(13),l.tc("ngIf",e.isCreateMode),l.Cb(6),l.tc("ngForOf",e.keys),l.Cb(1),l.tc("ngIf",e.error),l.Cb(2),l.tc("disabled",!e.form.touched),l.Cb(2),l.tc("disabled",!e.form.valid),l.Cb(1),l.Qc(""==e.form.value._id?"Create":"Update"))},directives:[a.c,f.a,f.e,f.b,s.y,s.n,s.g,d.b,p.a,s.c,s.m,s.f,h.m,d.e,v.a,h.l,g.b,C.h],styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.forgot-pass-link[_ngcontent-%COMP%]{align-self:center;padding:0 16px;text-decoration:underline;font-size:smaller;font-style:italic;line-height:36px}.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]){box-shadow:unset}"]}),k),N=n("3LUQ"),R=((P=function(){function t(e,n,i){_classCallCheck(this,t),this.api=e,this.alert=n,this.dialogRef=i}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onFileChange",value:function(t){this.selectedFile=t.target.files[0]}},{key:"uploadFile",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.selectedFile){t.next=13;break}return(e=new FormData).append("file",this.selectedFile),t.prev=3,t.next=6,this.api.post("/users/migrate-users",e).toPromise();case 6:this.alert.success("Users created successfully!"),this.dialogRef.close(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),this.alert.error(t.t0.error.message);case 13:case"end":return t.stop()}}),t,this,[[3,10]])})))}}]),t}()).\u0275fac=function(t){return new(t||P)(l.Qb(b.a),l.Qb(N.a),l.Qb(a.e))},P.\u0275cmp=l.Kb({type:P,selectors:[["app-upload-users-csv-form"]],decls:6,vars:0,consts:[[1,"form-group"],["for","exampleFormControlFile1"],["type","file","accept",".csv","id","exampleFormControlFile1",1,"form-control-file",3,"change"],["type","button","mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(l.Wb(0,"div",0),l.Wb(1,"label",1),l.Pc(2,"Select CSV"),l.Vb(),l.Wb(3,"input",2),l.ic("change",(function(t){return e.onFileChange(t)})),l.Vb(),l.Vb(),l.Wb(4,"button",3),l.ic("click",(function(){return e.uploadFile()})),l.Pc(5,"Upload Users"),l.Vb())},directives:[g.b],styles:[""]}),P),O=n("edFq"),x=n("NFeN"),F=n("JuEE");function _(t,e){1&t&&(l.Wb(0,"th",21),l.Pc(1," Name "),l.Vb())}function M(t,e){if(1&t&&(l.Wb(0,"td",22),l.Pc(1),l.Vb()),2&t){var n=e.$implicit;l.Cb(1),l.Rc(" ",n.name," ")}}function S(t,e){1&t&&(l.Wb(0,"th",21),l.Pc(1," Username "),l.Vb())}function Q(t,e){if(1&t&&(l.Wb(0,"td",22),l.Pc(1),l.Vb()),2&t){var n=e.$implicit;l.Cb(1),l.Rc(" ",n.username," ")}}function I(t,e){1&t&&(l.Wb(0,"th",21),l.Pc(1," Email "),l.Vb())}function U(t,e){if(1&t&&(l.Wb(0,"td",22),l.Pc(1),l.Vb()),2&t){var n=e.$implicit;l.Cb(1),l.Rc(" ",null==n?null:n.email," ")}}function L(t,e){1&t&&(l.Wb(0,"th",21),l.Pc(1," Mobile Number "),l.Vb())}function q(t,e){if(1&t&&(l.Wb(0,"td",22),l.Pc(1),l.Vb()),2&t){var n=e.$implicit;l.Cb(1),l.Rc(" ",null==n?null:n.mobileNumber," ")}}function A(t,e){1&t&&(l.Wb(0,"th",21),l.Pc(1," Role "),l.Vb())}function D(t,e){if(1&t&&(l.Wb(0,"td",22),l.Pc(1),l.nc(2,"role"),l.Vb()),2&t){var n=e.$implicit;l.Cb(1),l.Rc(" ",l.oc(2,1,n.role)," ")}}function T(t,e){1&t&&(l.Wb(0,"th",21),l.Pc(1," Created on "),l.Vb())}function j(t,e){if(1&t&&(l.Wb(0,"td",22),l.Pc(1),l.nc(2,"date"),l.Vb()),2&t){var n=e.$implicit;l.Cb(1),l.Rc(" ",l.oc(2,1,n.createdAt)," ")}}function $(t,e){1&t&&(l.Wb(0,"th",21),l.Pc(1," Update on "),l.Vb())}function E(t,e){if(1&t&&(l.Wb(0,"td",22),l.Pc(1),l.nc(2,"date"),l.Vb()),2&t){var n=e.$implicit;l.Cb(1),l.Rc(" ",l.oc(2,1,n.updatedAt)," ")}}function K(t,e){1&t&&(l.Wb(0,"th",21),l.Wb(1,"div",23),l.Pc(2,"Actions"),l.Vb(),l.Vb())}function X(t,e){if(1&t){var n=l.Xb();l.Wb(0,"td",22),l.Wb(1,"div",24),l.Wb(2,"button",25),l.ic("click",(function(){l.Fc(n);var t=e.$implicit;return l.mc().onEdit(t)})),l.Pc(3,"Edit"),l.Vb(),l.Wb(4,"button",26),l.ic("click",(function(){l.Fc(n);var t=e.$implicit;return l.mc().onDelete(t)})),l.Pc(5,"Delete"),l.Vb(),l.Vb(),l.Vb()}}function G(t,e){1&t&&l.Rb(0,"tr",27)}function B(t,e){1&t&&l.Rb(0,"tr",28)}n.d(e,"a",(function(){return J}));var z,H=function(){return[5,10,20]},J=((z=function(){function t(e,n,i){_classCallCheck(this,t),this.resourceService=e,this.authService=n,this.dialog=i,this.resourceUrl="/users"}return _createClass(t,[{key:"ngOnInit",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.resourceService.fetchAll(this.resourceUrl).toPromise();case 2:e=t.sent,this.displayedColumns=["name","userName","email","mobileNumber","role","createdAt","updatedAt","action"],this.resetList(e.data);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"reFetchResourceList",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.resourceService.fetchAll(this.resourceUrl).toPromise();case 2:e=t.sent,this.resetList(e.data);case 4:case"end":return t.stop()}}),t,this)})))}},{key:"resetList",value:function(t){var e=this.filterBasedOnRole(t);this.dataSource=new c.k(e),this.dataSource.paginator=this.paginator}},{key:"filterBasedOnRole",value:function(t){var e="SUPER_ADMIN"===this.authService.getLogginedUserRole()?{role:"ADMIN"}:function(t){return!("ADMIN"==t.role||"SUPER_ADMIN"==t.role)};return Object(o.filter)(t,e)}},{key:"getClassName",value:function(t){return console.log(this.classMap[t]),this.classMap.get(t)||"Class has been deleted"}},{key:"onUploadCSV",value:function(){var t=this;this.dialog.open(R,{width:"600px",data:{}}).afterClosed().subscribe((function(e){t.reFetchResourceList()}))}},{key:"openDialogue",value:function(t){var e=this;this.dialog.open(w,{width:"600px",data:{resourceUrl:this.resourceUrl,classList:this.classList,user:t}}).afterClosed().subscribe((function(t){e.reFetchResourceList()}))}},{key:"onAddResource",value:function(){this.openDialogue({_id:"",name:"",mobileNumber:"",class:"",isSubscribed:""})}},{key:"onUpdate",value:function(){this.reFetchResourceList()}},{key:"onDelete",value:function(t){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.resourceService.delete(this.resourceUrl,t).toPromise();case 2:this.reFetchResourceList();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"onEdit",value:function(t){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.openDialogue(t);case 1:case"end":return e.stop()}}),e,this)})))}},{key:"applyFilter",value:function(t){this.dataSource.filter=t.target.value.trim().toLowerCase()}}]),t}()).\u0275fac=function(t){return new(t||z)(l.Qb(O.a),l.Qb(m.a),l.Qb(a.b))},z.\u0275cmp=l.Kb({type:z,selectors:[["app-users-page"]],viewQuery:function(t,e){var n;1&t&&l.Lc(r.a,!0),2&t&&l.Bc(n=l.jc())&&(e.paginator=n.first)},inputs:{resourceUrl:"resourceUrl"},decls:46,vars:5,consts:[[1,"mat-elevation-z8"],[1,"resource-actions-panel"],[1,"table-heading"],["matInput","","placeholder","Ex. ium",3,"keyup"],["input",""],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","primary",1,"ml10",3,"click"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","userName"],["matColumnDef","email"],["matColumnDef","mobileNumber"],["matColumnDef","role"],["matColumnDef","createdAt"],["matColumnDef","updatedAt"],["matColumnDef","action","sticky","true"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[1,"ml20"],[1,"example-flex-container2"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(l.Wb(0,"div",0),l.Wb(1,"div",1),l.Wb(2,"h3",2),l.Pc(3," Users "),l.Vb(),l.Wb(4,"div"),l.Wb(5,"mat-form-field"),l.Wb(6,"mat-label"),l.Pc(7,"Filter"),l.Vb(),l.Wb(8,"input",3,4),l.ic("keyup",(function(t){return e.applyFilter(t)})),l.Vb(),l.Vb(),l.Wb(10,"button",5),l.ic("click",(function(){return e.onAddResource()})),l.Wb(11,"mat-icon"),l.Pc(12,"add"),l.Vb(),l.Pc(13," Add "),l.Vb(),l.Wb(14,"button",6),l.ic("click",(function(){return e.onUploadCSV()})),l.Wb(15,"mat-icon"),l.Pc(16,"publish"),l.Vb(),l.Pc(17," Upload CSV "),l.Vb(),l.Vb(),l.Vb(),l.Wb(18,"table",7),l.Ub(19,8),l.Nc(20,_,2,0,"th",9),l.Nc(21,M,2,1,"td",10),l.Tb(),l.Ub(22,11),l.Nc(23,S,2,0,"th",9),l.Nc(24,Q,2,1,"td",10),l.Tb(),l.Ub(25,12),l.Nc(26,I,2,0,"th",9),l.Nc(27,U,2,1,"td",10),l.Tb(),l.Ub(28,13),l.Nc(29,L,2,0,"th",9),l.Nc(30,q,2,1,"td",10),l.Tb(),l.Ub(31,14),l.Nc(32,A,2,0,"th",9),l.Nc(33,D,3,3,"td",10),l.Tb(),l.Ub(34,15),l.Nc(35,T,2,0,"th",9),l.Nc(36,j,3,3,"td",10),l.Tb(),l.Ub(37,16),l.Nc(38,$,2,0,"th",9),l.Nc(39,E,3,3,"td",10),l.Tb(),l.Ub(40,17),l.Nc(41,K,3,0,"th",9),l.Nc(42,X,6,0,"td",10),l.Tb(),l.Nc(43,G,1,0,"tr",18),l.Nc(44,B,1,0,"tr",19),l.Vb(),l.Rb(45,"mat-paginator",20),l.Vb()),2&t&&(l.Cb(18),l.tc("dataSource",e.dataSource),l.Cb(25),l.tc("matHeaderRowDef",e.displayedColumns),l.Cb(1),l.tc("matRowDefColumns",e.displayedColumns),l.Cb(1),l.tc("pageSizeOptions",l.wc(4,H)))},directives:[d.b,d.e,p.a,g.b,x.a,c.j,c.c,c.e,c.b,c.g,c.i,r.a,c.d,c.a,c.f,c.h],pipes:[F.a,h.e],styles:["table[_ngcontent-%COMP%]{width:100%}.resource-actions-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 20px}.ml20[_ngcontent-%COMP%]{margin-left:20px}.ml10[_ngcontent-%COMP%]{margin-left:10px}"]}),z)},edFq:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("fXoL"),c=n("H+bZ"),r=function(){var t=function(){function t(e){_classCallCheck(this,t),this.api=e}return _createClass(t,[{key:"fetchAll",value:function(t){return this.api.get(t)}},{key:"delete",value:function(t,e){return this.api.delete("".concat(t,"/").concat(e._id))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.ec(c.a))},t.\u0275prov=i.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"k+vH":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var i=n("LvDl"),c=n("fXoL"),r=n("tyNb"),o=n("st1q"),a=n("ofXK"),s=n("Wp6s"),u=n("LPYB");function l(t,e){1&t&&(c.Ub(0),c.Pc(1,"Loading..."),c.Tb())}function b(t,e){if(1&t&&(c.Wb(0,"li",17),c.Pc(1),c.Vb()),2&t){var n=e.$implicit;c.Cb(1),c.Rc(" ",n," ")}}function m(t,e){if(1&t&&(c.Wb(0,"tr"),c.Wb(1,"th",18),c.Pc(2),c.Vb(),c.Wb(3,"td"),c.Pc(4),c.Vb(),c.Wb(5,"td"),c.Pc(6),c.Vb(),c.Wb(7,"td"),c.Pc(8),c.Vb(),c.Wb(9,"td"),c.Pc(10),c.Vb(),c.Wb(11,"td"),c.Pc(12),c.Vb(),c.Wb(13,"td"),c.Pc(14),c.Vb(),c.Vb()),2&t){var n=e.$implicit,i=e.index;c.Cb(2),c.Qc(i+1),c.Cb(2),c.Qc(n.answer),c.Cb(2),c.Qc(n.name),c.Cb(2),c.Qc(n.mobileNumber),c.Cb(2),c.Qc(n.destrict),c.Cb(2),c.Qc(n.vidhanSabha),c.Cb(2),c.Qc(n.comment)}}function f(t,e){if(1&t&&(c.Ub(0),c.Wb(1,"div",1),c.Wb(2,"div",2),c.Wb(3,"mat-card",3),c.Wb(4,"div",4),c.Pc(5),c.Vb(),c.Wb(6,"ol",5),c.Nc(7,b,2,1,"li",6),c.Vb(),c.Vb(),c.Vb(),c.Wb(8,"div",7),c.Wb(9,"mat-card",8),c.Wb(10,"div",9),c.Rb(11,"canvas",10),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Wb(12,"div",11),c.Wb(13,"div",12),c.Wb(14,"mat-card"),c.Wb(15,"div",13),c.Wb(16,"table",14),c.Wb(17,"thead"),c.Wb(18,"tr"),c.Wb(19,"th",15),c.Pc(20,"#"),c.Vb(),c.Wb(21,"th",15),c.Pc(22,"Answer"),c.Vb(),c.Wb(23,"th",15),c.Pc(24,"Name"),c.Vb(),c.Wb(25,"th",15),c.Pc(26,"Mobile Number"),c.Vb(),c.Wb(27,"th",15),c.Pc(28,"District"),c.Vb(),c.Wb(29,"th",15),c.Pc(30,"Vidhan Sabha"),c.Vb(),c.Wb(31,"th",15),c.Pc(32,"Comment"),c.Vb(),c.Vb(),c.Vb(),c.Wb(33,"tbody"),c.Nc(34,m,15,7,"tr",16),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Vb(),c.Tb()),2&t){var n=c.mc();c.Cb(5),c.Qc(n.question.title),c.Cb(2),c.tc("ngForOf",n.question.options),c.Cb(4),c.tc("datasets",n.barChartData)("labels",n.labels)("chartType",n.barChartType)("options",n.barChartOptions),c.Cb(23),c.tc("ngForOf",n.answers)}}var d=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.route=e,this.suggestionService=n,this.barChartOptions={responsive:!0,title:{text:"Options selected!"}},this.barChartLabels=["Answers"],this.barChartType="bar",this.barChartLegend=!0,this.barChartPlugins=[],this.barChartData=[],this.loading=!0}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.route.paramMap.subscribe((function(e){t.questionId=e.get("questionId")})),this.suggestionService.getQuestionWithAnswer(this.questionId).subscribe((function(e){var n=e.data;t.question=n.question,t.answers=n.answers;var c=Object(i.countBy)(t.answers,"answer");t.barChartData=[{data:t.question.options.map((function(t){return c[t]||0})),label:"Number of Answers"}],t.labels=t.question.options,t.loading=!1}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Qb(r.a),c.Qb(o.a))},t.\u0275cmp=c.Kb({type:t,selectors:[["app-answers"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-12","col-lg-4","question"],[2,"min-height","250px"],[2,"margin-bottom","10px","font-size","16px"],[2,"margin-left","-20px","font-size","16px"],["style","margin-top: 5px;",4,"ngFor","ngForOf"],[1,"col-md-12","col-lg-8","graph"],[2,"min-height","200px","display","flex","justify-content","center"],[2,"width","500px"],["baseChart","",3,"datasets","labels","chartType","options"],[1,"row","question-table"],[1,"col-md-12"],[2,"display","block"],[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],[2,"margin-top","5px"],["scope","row"]],template:function(t,e){1&t&&(c.Nc(0,l,2,0,"ng-container",0),c.Nc(1,f,35,7,"ng-container",0)),2&t&&(c.tc("ngIf",e.loading),c.Cb(1),c.tc("ngIf",!e.loading))},directives:[a.m,s.a,a.l,u.a],styles:["@media only screen and (min-width:1200px){.question[_ngcontent-%COMP%]{margin-right:0;padding-right:0}}@media only screen and (max-width:1200px){.graph[_ngcontent-%COMP%]{margin-top:10px}}.question-table[_ngcontent-%COMP%]{margin-top:10px}@media only screen and (min-width:1200px){.question-table[_ngcontent-%COMP%]{margin-top:50px}}"]}),t}()},vQ30:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("fXoL"),c=n("N/25"),r=n("MutI"),o=n("ofXK"),a=n("NFeN"),s=n("tyNb");function u(t,e){if(1&t&&(i.Wb(0,"a",3),i.Wb(1,"mat-icon",4),i.Pc(2),i.Vb(),i.Pc(3),i.Vb()),2&t){var n=e.$implicit;i.tc("routerLink",n.link),i.Cb(2),i.Qc(n.icon),i.Cb(1),i.Rc("\xa0",n.title," ")}}var l=function(){var t=function(){function t(e){_classCallCheck(this,t),this.authService=e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onLogout",value:function(){this.authService.logout()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Qb(c.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-side-menu"]],inputs:{menuList:"menuList"},decls:6,vars:1,consts:[["mat-list-item","","class","menu-item","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["mat-list-item","",1,"menu-item",3,"click"],["aria-hidden","false","aria-label","Example home icon"],["mat-list-item","","routerLinkActive","active",1,"menu-item",3,"routerLink"],["aria-hidden","false","aria-label","Example thumbs up SVG icon"]],template:function(t,e){1&t&&(i.Wb(0,"mat-nav-list"),i.Nc(1,u,4,3,"a",0),i.Wb(2,"a",1),i.ic("click",(function(){return e.onLogout()})),i.Wb(3,"mat-icon",2),i.Pc(4,"power_settings_new"),i.Vb(),i.Pc(5,"\xa0Logout "),i.Vb(),i.Vb()),2&t&&(i.Cb(1),i.tc("ngForOf",e.menuList))},directives:[r.c,o.l,r.a,a.a,s.f,s.e],styles:[".menu-item[_ngcontent-%COMP%]{color:rgba(0,0,0,.54)}a.active[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.08);color:rgba(0,0,0,.7)}"]}),t}()}}]);