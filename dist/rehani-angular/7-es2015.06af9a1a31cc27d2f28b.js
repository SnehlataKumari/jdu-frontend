(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/biI":function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),r=n("tyNb"),a=n("fXoL");let c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Kb({type:e,selectors:[["app-super-admin"]],decls:1,vars:0,template:function(e,t){1&e&&a.Rb(0,"router-outlet")},directives:[r.f],styles:[""]}),e})();var i=n("N/25"),s=n("/t3+"),u=n("XhcP"),l=n("vQ30");let d=(()=>{class e{constructor(e){this.authService=e,this.menuList=[{link:"/admin/users",title:"Manage Users",icon:"supervised_user_circle"},{link:"/admin/suggestions",title:"Manage suggestion questions",icon:"supervised_user_circle"}]}ngOnInit(){}onLogout(){this.authService.logout()}}return e.\u0275fac=function(t){return new(t||e)(a.Qb(i.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-dashboard"]],decls:13,vars:1,consts:[["routerLink","/dashboard"],[1,"example-spacer"],[1,"btn","logout-button",3,"click"],[1,"example-container"],["mode","side","opened","",1,"example-sidenav"],["drawer",""],[3,"menuList"],[1,"dashboard-container"]],template:function(e,t){1&e&&(a.Wb(0,"mat-toolbar"),a.Wb(1,"mat-toolbar-row"),a.Wb(2,"a",0),a.Kc(3,"Admin Panel"),a.Vb(),a.Rb(4,"span",1),a.Wb(5,"a",2),a.ic("click",(function(){return t.onLogout()})),a.Kc(6,"Logout"),a.Vb(),a.Vb(),a.Vb(),a.Wb(7,"mat-drawer-container",3),a.Wb(8,"mat-drawer",4,5),a.Rb(10,"app-side-menu",6),a.Vb(),a.Wb(11,"div",7),a.Rb(12,"router-outlet"),a.Vb(),a.Vb()),2&e&&(a.Cb(10),a.rc("menuList",t.menuList))},directives:[s.a,s.c,r.d,u.b,u.a,l.a,r.f],styles:[".example-container[_ngcontent-%COMP%]{width:100%;border:1px solid rgba(0,0,0,.5)}.dashboard-container[_ngcontent-%COMP%], .example-container[_ngcontent-%COMP%]{height:calc(100% - 64px)}.example-sidenav-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.example-sidenav[_ngcontent-%COMP%]{width:223px}.dashboard-container[_ngcontent-%COMP%]{padding:16px}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.logout-button[_ngcontent-%COMP%]{cursor:pointer}.logout-button[_ngcontent-%COMP%]:hover{color:#2b78fe}"]}),e})();var p=n("TqWN"),b=n("PCNd");const m=[{path:"",component:c,children:[{path:"auth",loadChildren:()=>Promise.resolve().then(n.bind(null,"Yj9t")).then(e=>e.AuthModule)},{path:"",component:d,children:[{path:"users",component:p.a},{path:"suggestions",component:p.a}]}]}];let h=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(t){return new(t||e)},imports:[[b.a,r.e.forChild(m)],r.e]}),e})();n.d(t,"SuperAdminModule",(function(){return g}));let g=(()=>{class e{}return e.\u0275mod=a.Ob({type:e}),e.\u0275inj=a.Nb({factory:function(t){return new(t||e)},imports:[[o.c,b.a,h]]}),e})()}}]);