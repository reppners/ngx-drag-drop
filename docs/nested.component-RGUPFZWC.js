import {
  MatIcon,
  MatIconModule
} from "./chunk-YYQ6OU2F.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-4CYDRARB.js";
import {
  MatSnackBar
} from "./chunk-S7HRAVOT.js";
import {
  Component,
  DndDragImageRefDirective,
  DndDraggableDirective,
  DndDropzoneDirective,
  DndHandleDirective,
  DndPlaceholderRefDirective,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-OX3R32RX.js";

// projects/demo/src/app/nested/nested.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
function NestedComponent_ng_template_1_mat_card_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon", 13);
    \u0275\u0275text(2, "drag_handle ");
    \u0275\u0275elementEnd()();
  }
}
function NestedComponent_ng_template_1_mat_card_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " MY_CUSTOM_DRAG_IMAGE ");
    \u0275\u0275elementEnd();
  }
}
function NestedComponent_ng_template_1_mat_card_1_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NestedComponent_ng_template_1_mat_card_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("dndDrop", function NestedComponent_ng_template_1_mat_card_1_div_6_Template_div_dndDrop_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onDrop($event, item_r3.children));
    });
    \u0275\u0275template(1, NestedComponent_ng_template_1_mat_card_1_div_6_ng_container_1_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const recursiveList_r7 = \u0275\u0275reference(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", recursiveList_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, item_r3.children));
  }
}
function NestedComponent_ng_template_1_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 6);
    \u0275\u0275listener("dndCanceled", function NestedComponent_ng_template_1_mat_card_1_Template_mat_card_dndCanceled_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const list_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDragged(item_r3, list_r4, "none"));
    })("dndCopied", function NestedComponent_ng_template_1_mat_card_1_Template_mat_card_dndCopied_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const list_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDragged(item_r3, list_r4, "copy"));
    })("dndEnd", function NestedComponent_ng_template_1_mat_card_1_Template_mat_card_dndEnd_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onDragEnd($event));
    })("dndLinked", function NestedComponent_ng_template_1_mat_card_1_Template_mat_card_dndLinked_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const list_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDragged(item_r3, list_r4, "link"));
    })("dndMoved", function NestedComponent_ng_template_1_mat_card_1_Template_mat_card_dndMoved_0_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const list_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDragged(item_r3, list_r4, "move"));
    })("dndStart", function NestedComponent_ng_template_1_mat_card_1_Template_mat_card_dndStart_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onDragStart($event));
    });
    \u0275\u0275elementStart(1, "mat-card-header", 7);
    \u0275\u0275template(2, NestedComponent_ng_template_1_mat_card_1_div_2_Template, 3, 0, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-card-content", 9);
    \u0275\u0275template(5, NestedComponent_ng_template_1_mat_card_1_div_5_Template, 2, 0, "div", 10)(6, NestedComponent_ng_template_1_mat_card_1_div_6_Template, 2, 4, "div", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275property("dndDisableIf", !!item_r3.disable)("dndDraggable", item_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r3.handle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.content, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !!item_r3.customDragImage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.children);
  }
}
function NestedComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-card", 4);
    \u0275\u0275template(1, NestedComponent_ng_template_1_mat_card_1_Template, 7, 6, "mat-card", 5);
  }
  if (rf & 2) {
    const list_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", list_r4);
  }
}
function NestedComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var NestedComponent = class _NestedComponent {
  snackBarService;
  nestableList = [
    {
      content: "Got something nested",
      children: [
        {
          content: "Nested",
          customDragImage: true,
          children: []
        }
      ]
    },
    {
      content: "No nested dropping here"
    },
    {
      content: "Got more than one",
      children: [
        {
          content: "Nested 1",
          handle: true,
          children: []
        },
        {
          content: "Nested 2",
          children: []
        },
        {
          content: "Nested 3",
          children: []
        }
      ]
    },
    {
      content: "Drop something, I'll catch!",
      children: []
    }
  ];
  currentDraggableEvent;
  currentDragEffectMsg;
  constructor(snackBarService) {
    this.snackBarService = snackBarService;
  }
  onDragStart(event) {
    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open("Drag started!", void 0, { duration: 2e3 });
  }
  onDragged(item, list, effect) {
    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;
    if (effect === "move") {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }
  onDragEnd(event) {
    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open(this.currentDragEffectMsg || `Drag ended!`, void 0, { duration: 2e3 });
  }
  onDrop(event, list) {
    if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
      let index = event.index;
      if (typeof index === "undefined") {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
  static \u0275fac = function NestedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NestedComponent)(\u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NestedComponent, selectors: [["dnd-nested"]], decls: 5, vars: 4, consts: [["recursiveList", ""], [1, "container-fluid"], ["dndDropzone", "", 1, "d-flex", "gap-3", "p-3", "rounded-2", 3, "dndDrop"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["appearance", "raised", "dndPlaceholderRef", "", 1, "dndPlaceholder"], ["appearance", "raised", "dndEffectAllowed", "move", 3, "dndDisableIf", "dndDraggable", "dndCanceled", "dndCopied", "dndEnd", "dndLinked", "dndMoved", "dndStart", 4, "ngFor", "ngForOf"], ["appearance", "raised", "dndEffectAllowed", "move", 3, "dndCanceled", "dndCopied", "dndEnd", "dndLinked", "dndMoved", "dndStart", "dndDisableIf", "dndDraggable"], [1, "p-2"], ["class", "drag-handle me-2 text-muted", 4, "ngIf"], [1, "d-flex", "align-items-start", "gap-2", "flex-column", "p-2"], ["dndDragImageRef", "", 4, "ngIf"], ["class", "flex-column p-2 gap-2 rounded-2", "dndDropzone", "", 3, "dndDrop", 4, "ngIf"], [1, "drag-handle", "me-2", "text-muted"], ["dndHandle", "", "mat-list-icon", ""], ["dndDragImageRef", ""], ["dndDropzone", "", 1, "flex-column", "p-2", "gap-2", "rounded-2", 3, "dndDrop"]], template: function NestedComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, NestedComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(3, "div", 2);
      \u0275\u0275listener("dndDrop", function NestedComponent_Template_div_dndDrop_3_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event, ctx.nestableList));
      });
      \u0275\u0275template(4, NestedComponent_ng_container_4_Template, 1, 0, "ng-container", 3);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      const recursiveList_r7 = \u0275\u0275reference(2);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngTemplateOutlet", recursiveList_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx.nestableList));
    }
  }, dependencies: [
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    DndPlaceholderRefDirective,
    NgForOf,
    DndDraggableDirective,
    NgIf,
    MatIconModule,
    MatIcon,
    DndHandleDirective,
    DndDragImageRefDirective,
    DndDropzoneDirective,
    NgTemplateOutlet
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n}\nmat-card[_ngcontent-%COMP%] {\n  transition: transform 200ms, opacity 200ms;\n}\nmat-card-header[_ngcontent-%COMP%] {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.04);\n  align-items: center;\n  min-height: 46px;\n}\n.dndDraggingSource[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: scale(0.98);\n}\n.dndPlaceholder[_ngcontent-%COMP%] {\n  background: #fff;\n  min-height: 46px;\n  min-width: 46px;\n}\n[dnddropzone][_ngcontent-%COMP%] {\n  background: #fafafa;\n  min-height: 60px;\n  display: flex;\n  outline: 2px solid rgba(0, 0, 0, 0.04);\n}\n/*# sourceMappingURL=nested.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NestedComponent, [{
    type: Component,
    args: [{ selector: "dnd-nested", standalone: true, imports: [
      MatCardModule,
      DndPlaceholderRefDirective,
      NgForOf,
      DndDraggableDirective,
      NgIf,
      MatIconModule,
      DndHandleDirective,
      DndDragImageRefDirective,
      DndDropzoneDirective,
      NgTemplateOutlet
    ], template: `<div class="container-fluid">
  <ng-template #recursiveList let-list>
    <mat-card appearance="raised" class="dndPlaceholder" dndPlaceholderRef> </mat-card>

    <mat-card
      appearance="raised"
      *ngFor="let item of list"
      [dndDisableIf]="!!item.disable"
      [dndDraggable]="item"
      (dndCanceled)="onDragged(item, list, 'none')"
      (dndCopied)="onDragged(item, list, 'copy')"
      (dndEnd)="onDragEnd($event)"
      (dndLinked)="onDragged(item, list, 'link')"
      (dndMoved)="onDragged(item, list, 'move')"
      (dndStart)="onDragStart($event)"
      dndEffectAllowed="move">
      <mat-card-header class="p-2">
        <div *ngIf="item.handle" class="drag-handle me-2 text-muted">
          <mat-icon dndHandle mat-list-icon>drag_handle </mat-icon>
        </div>

        {{ item.content }}
      </mat-card-header>

      <mat-card-content class="d-flex align-items-start gap-2 flex-column p-2">
        <div *ngIf="!!item.customDragImage" dndDragImageRef>
          MY_CUSTOM_DRAG_IMAGE
        </div>

        <div
          *ngIf="item.children"
          (dndDrop)="onDrop($event, item.children)"
          class="flex-column p-2 gap-2 rounded-2"
          dndDropzone>
          <ng-container
            *ngTemplateOutlet="
              recursiveList;
              context: { $implicit: item.children }
            "></ng-container>
        </div>
      </mat-card-content>
    </mat-card>
  </ng-template>

  <div
    (dndDrop)="onDrop($event, nestableList)"
    class="d-flex gap-3 p-3 rounded-2"
    dndDropzone>
    <ng-container
      *ngTemplateOutlet="
        recursiveList;
        context: { $implicit: nestableList }
      "></ng-container>
  </div>
</div>
`, styles: ["/* projects/demo/src/app/nested/nested.component.scss */\n:host {\n  display: block;\n  box-sizing: border-box;\n}\nmat-card {\n  transition: transform 200ms, opacity 200ms;\n}\nmat-card-header {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.04);\n  align-items: center;\n  min-height: 46px;\n}\n.dndDraggingSource {\n  opacity: 0.5;\n  transform: scale(0.98);\n}\n.dndPlaceholder {\n  background: #fff;\n  min-height: 46px;\n  min-width: 46px;\n}\n[dnddropzone] {\n  background: #fafafa;\n  min-height: 60px;\n  display: flex;\n  outline: 2px solid rgba(0, 0, 0, 0.04);\n}\n/*# sourceMappingURL=nested.component.css.map */\n"] }]
  }], () => [{ type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NestedComponent, { className: "NestedComponent", filePath: "projects/demo/src/app/nested/nested.component.ts", lineNumber: 42 });
})();
export {
  NestedComponent as default
};
//# sourceMappingURL=nested.component-RGUPFZWC.js.map
