import{b as F,e as P,f as O,g as S}from"./chunk-HIIRSD3K.js";import"./chunk-XJ6RNBG6.js";import{Db as _,Gb as x,Ib as M,Jb as v,Qa as l,bd as E,cd as k,db as f,dd as $,fb as p,ga as C,kb as r,lb as a,mb as y,oa as g,pa as u,pc as h,qb as b,tb as c,vb as D}from"./chunk-FFMTUM54.js";var B=()=>["apple"],L=()=>["banana"];function V(i,s){if(i&1){let e=b();r(0,"mat-list-item",9),c("dndMoved",function(){let t=g(e),d=t.$implicit,o=t.index,m=D();return u(m.onDragged(o,d,m.fruits))}),r(1,"span",10),_(2),a()()}if(i&2){let e=s.$implicit;p("dndDraggable",e)("dndType",e.type),l(2),x("",e.type," ",e.id,"")}}function I(i,s){if(i&1){let e=b();r(0,"mat-list-item",9),c("dndMoved",function(){let t=g(e),d=t.$implicit,o=t.index,m=D();return u(m.onDragged(o,d,m.apples))}),r(1,"span",10),_(2),a()()}if(i&2){let e=s.$implicit;p("dndDraggable",e)("dndType",e.type),l(2),x("",e.type," ",e.id,"")}}function z(i,s){if(i&1){let e=b();r(0,"mat-list-item",9),c("dndMoved",function(){let t=g(e),d=t.$implicit,o=t.index,m=D();return u(m.onDragged(o,d,m.bananas))}),r(1,"span",10),_(2),a()()}if(i&2){let e=s.$implicit;p("dndDraggable",e)("dndType",e.type),l(2),x("",e.type," ",e.id,"")}}var A=0;function T(i){return{id:A++,type:i}}function w(i,s){return Array.from({length:s-i+1},(e,n)=>n)}var H=(()=>{class i{fruits=w(0,100).map(e=>{let n=Math.random()<.5?"apple":"banana";return T(n)});apples=w(0,12).map(e=>T("apple"));bananas=w(0,10).map(e=>T("banana"));trackByFruit(e,n){return n}onDragged(e,n,t){let d=t.indexOf(n);console.log(`onDragged ngFor-index=${e}, item=${n}, removeIndex=${d}, list=${t.length}`),t.splice(d,1)}onDrop(e,n){console.log("onDrop",e,n.length);let t=e.index;typeof t>"u"&&(t=n.length),n.splice(t,0,e.data)}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=C({type:i,selectors:[["dnd-typed"]],standalone:!0,features:[M],decls:20,vars:10,consts:[[1,"container-fluid"],[1,"row"],[1,"col"],["dndDropzone","","dndEffectAllowed","move",1,"dndList","gap-1","flex-grow-1","d-flex","flex-column","bg-light","rounded-1","shadow-sm",3,"dndDrop"],["dndPlaceholderRef","",1,"dndPlaceholder","border","rounded-1","bg-danger","bg-gradient"],["class","border rounded-1 bg-white","dndEffectAllowed","move",3,"dndDraggable","dndType","dndMoved",4,"ngFor","ngForOf","ngForTrackBy"],["dndEffectAllowed","move",1,"dndList","gap-1","flex-grow-1","d-flex","flex-column","bg-light","rounded-1","shadow-sm",3,"dndDrop","dndDropzone"],["dndPlaceholderRef","",1,"dndPlaceholder","border","rounded-1","bg-success","bg-gradient"],["dndPlaceholderRef","",1,"dndPlaceholder","border","rounded-1","bg-warning","bg-gradient"],["dndEffectAllowed","move",1,"border","rounded-1","bg-white",3,"dndMoved","dndDraggable","dndType"],["matListItemTitle",""]],template:function(n,t){n&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"pre"),_(4,"Fruits"),a(),r(5,"mat-list",3),c("dndDrop",function(o){return t.onDrop(o,t.fruits)}),y(6,"mat-list-item",4),f(7,V,3,4,"mat-list-item",5),a()(),r(8,"div",2)(9,"pre"),_(10,"Apples"),a(),r(11,"mat-list",6),c("dndDrop",function(o){return t.onDrop(o,t.apples)}),y(12,"mat-list-item",7),f(13,I,3,4,"mat-list-item",5),a()(),r(14,"div",2)(15,"pre"),_(16,"Bananas"),a(),r(17,"mat-list",6),c("dndDrop",function(o){return t.onDrop(o,t.bananas)}),y(18,"mat-list-item",8),f(19,z,3,4,"mat-list-item",5),a()()()()),n&2&&(l(7),p("ngForOf",t.fruits)("ngForTrackBy",t.trackByFruit),l(4),p("dndDropzone",v(8,B)),l(2),p("ngForOf",t.apples)("ngForTrackBy",t.trackByFruit),l(4),p("dndDropzone",v(9,L)),l(2),p("ngForOf",t.bananas)("ngForTrackBy",t.trackByFruit))},dependencies:[S,P,O,F,$,k,h,E],styles:["[_nghost-%COMP%]{display:block;box-sizing:border-box}pre[_ngcontent-%COMP%]{text-align:center;padding:8px}.mat-mdc-list-item[_ngcontent-%COMP%]{margin:2px 0;border:1px solid gray}.dndList[_ngcontent-%COMP%]{transition:all .3s ease;padding:8px;overflow-y:auto}.dndList.dndDragover[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;border-color:green}.dndDragging[_ngcontent-%COMP%]{border:1px solid green}.dndDraggingSource[_ngcontent-%COMP%]{display:none}.dndPlaceholder[_ngcontent-%COMP%]{min-height:48px;border:1px dashed green;background-color:#0000001a}pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word}"]})}return i})();export{H as default};