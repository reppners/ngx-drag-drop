"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[478],{8478:(N,p,i)=>{i.r(p),i.d(p,{default:()=>E});var m=i(6814),l=i(5195),g=i(617),s=i(9073),t=i(9212),u=i(437);function x(n,_){1&n&&(t.TgZ(0,"div",12)(1,"mat-icon",13),t._uU(2,"drag_handle "),t.qZA()())}function C(n,_){1&n&&(t.TgZ(0,"div",14),t._uU(1," MY_CUSTOM_DRAG_IMAGE "),t.qZA())}function D(n,_){1&n&&t.GkF(0)}const f=n=>({$implicit:n});function h(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"div",15),t.NdJ("dndDrop",function(a){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.onDrop(a,o.children))}),t.YNc(1,D,1,0,"ng-container",3),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.oxw(2);const d=t.MAs(2);t.xp6(1),t.Q6J("ngTemplateOutlet",d)("ngTemplateOutletContext",t.VKq(2,f,e.children))}}function v(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"mat-card",6),t.NdJ("dndCanceled",function(){const o=t.CHM(e).$implicit,r=t.oxw().$implicit,c=t.oxw();return t.KtG(c.onDragged(o,r,"none"))})("dndCopied",function(){const o=t.CHM(e).$implicit,r=t.oxw().$implicit,c=t.oxw();return t.KtG(c.onDragged(o,r,"copy"))})("dndEnd",function(a){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onDragEnd(a))})("dndLinked",function(){const o=t.CHM(e).$implicit,r=t.oxw().$implicit,c=t.oxw();return t.KtG(c.onDragged(o,r,"link"))})("dndMoved",function(){const o=t.CHM(e).$implicit,r=t.oxw().$implicit,c=t.oxw();return t.KtG(c.onDragged(o,r,"move"))})("dndStart",function(a){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onDragStart(a))}),t.TgZ(1,"mat-card-header",7),t.YNc(2,x,3,0,"div",8),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-content",9),t.YNc(5,C,2,0,"div",10)(6,h,2,4,"div",11),t.qZA()()}if(2&n){const e=_.$implicit;t.Q6J("dndDisableIf",!!e.disable)("dndDraggable",e),t.xp6(2),t.Q6J("ngIf",e.handle),t.xp6(1),t.hij(" ",e.content," "),t.xp6(2),t.Q6J("ngIf",!!e.customDragImage),t.xp6(1),t.Q6J("ngIf",e.children)}}function M(n,_){if(1&n&&(t._UZ(0,"mat-card",4),t.YNc(1,v,7,6,"mat-card",5)),2&n){const e=_.$implicit;t.xp6(1),t.Q6J("ngForOf",e)}}function T(n,_){1&n&&t.GkF(0)}let E=(()=>{class n{constructor(e){this.snackBarService=e,this.nestableList=[{content:"Got something nested",children:[{content:"Nested",customDragImage:!0,children:[]}]},{content:"No nested dropping here"},{content:"Got more than one",children:[{content:"Nested 1",handle:!0,children:[]},{content:"Nested 2",children:[]},{content:"Nested 3",children:[]}]},{content:"Drop something, I'll catch!",children:[]}]}onDragStart(e){this.currentDragEffectMsg="",this.currentDraggableEvent=e,this.snackBarService.dismiss(),this.snackBarService.open("Drag started!",void 0,{duration:2e3})}onDragged(e,d,a){if(this.currentDragEffectMsg=`Drag ended with effect "${a}"!`,"move"===a){const o=d.indexOf(e);d.splice(o,1)}}onDragEnd(e){this.currentDraggableEvent=e,this.snackBarService.dismiss(),this.snackBarService.open(this.currentDragEffectMsg||"Drag ended!",void 0,{duration:2e3})}onDrop(e,d){if(d&&("copy"===e.dropEffect||"move"===e.dropEffect)){let a=e.index;typeof a>"u"&&(a=d.length),d.splice(a,0,e.data)}}static#t=this.\u0275fac=function(d){return new(d||n)(t.Y36(u.ux))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["dnd-nested"]],standalone:!0,features:[t.jDz],decls:5,vars:4,consts:[[1,"container-fluid"],["recursiveList",""],["dndDropzone","",1,"d-flex","gap-3","p-3","rounded-2",3,"dndDrop"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["appearance","raised","dndPlaceholderRef","",1,"dndPlaceholder"],["appearance","raised","dndEffectAllowed","move",3,"dndDisableIf","dndDraggable","dndCanceled","dndCopied","dndEnd","dndLinked","dndMoved","dndStart",4,"ngFor","ngForOf"],["appearance","raised","dndEffectAllowed","move",3,"dndDisableIf","dndDraggable","dndCanceled","dndCopied","dndEnd","dndLinked","dndMoved","dndStart"],[1,"p-2"],["class","drag-handle me-2 text-muted",4,"ngIf"],[1,"d-flex","align-items-start","gap-2","flex-column","p-2"],["dndDragImageRef","",4,"ngIf"],["class","flex-column p-2 gap-2 rounded-2","dndDropzone","",3,"dndDrop",4,"ngIf"],[1,"drag-handle","me-2","text-muted"],["dndHandle","","mat-list-icon",""],["dndDragImageRef",""],["dndDropzone","",1,"flex-column","p-2","gap-2","rounded-2",3,"dndDrop"]],template:function(d,a){if(1&d&&(t.TgZ(0,"div",0),t.YNc(1,M,2,1,"ng-template",null,1,t.W1O),t.TgZ(3,"div",2),t.NdJ("dndDrop",function(r){return a.onDrop(r,a.nestableList)}),t.YNc(4,T,1,0,"ng-container",3),t.qZA()()),2&d){const o=t.MAs(2);t.xp6(4),t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,f,a.nestableList))}},dependencies:[l.QW,l.a8,l.dn,l.dk,s.s1,m.sg,s.jk,m.O5,g.Ps,g.Hw,s.mv,s.dZ,s.Q4,m.tP],styles:["[_nghost-%COMP%]{display:block;box-sizing:border-box}mat-card[_ngcontent-%COMP%]{transition:transform .2s,opacity .2s}mat-card-header[_ngcontent-%COMP%]{border-bottom:2px solid rgba(0,0,0,.04);align-items:center;min-height:46px}.dndDraggingSource[_ngcontent-%COMP%]{opacity:.5;transform:scale(.98)}.dndPlaceholder[_ngcontent-%COMP%]{background:#fff;min-height:46px;min-width:46px}[dnddropzone][_ngcontent-%COMP%]{background:#fafafa;min-height:60px;display:flex;outline:2px solid rgba(0,0,0,.04)}"]})}return n})()}}]);