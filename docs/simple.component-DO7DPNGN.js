import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-TA7LOYNW.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-YYQ6OU2F.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle
} from "./chunk-4CYDRARB.js";
import {
  MatSnackBar
} from "./chunk-S7HRAVOT.js";
import "./chunk-KV4ZOJZS.js";
import {
  Component,
  DndDragImageRefDirective,
  DndDraggableDirective,
  DndDropzoneDirective,
  DndHandleDirective,
  HostBinding,
  JsonPipe,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OX3R32RX.js";

// projects/demo/src/app/indirect-dnd-handle/indirect-dnd-handle.component.ts
var IndirectDndHandleComponent = class _IndirectDndHandleComponent {
  get dragHandle() {
    return true;
  }
  static \u0275fac = function IndirectDndHandleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndirectDndHandleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IndirectDndHandleComponent, selectors: [["dnd-indirect-handle"]], hostVars: 2, hostBindings: function IndirectDndHandleComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("drag-handle", ctx.dragHandle);
    }
  }, decls: 1, vars: 0, consts: [["dndHandle", "", "fontIcon", "drag_handle"]], template: function IndirectDndHandleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "mat-icon", 0);
    }
  }, dependencies: [MatIconModule, MatIcon, DndHandleDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndirectDndHandleComponent, [{
    type: Component,
    args: [{ selector: "dnd-indirect-handle", standalone: true, imports: [MatIconModule, DndHandleDirective], template: '<mat-icon dndHandle fontIcon="drag_handle"></mat-icon>\n\n' }]
  }], null, { dragHandle: [{
    type: HostBinding,
    args: ["class.drag-handle"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IndirectDndHandleComponent, { className: "IndirectDndHandleComponent", filePath: "projects/demo/src/app/indirect-dnd-handle/indirect-dnd-handle.component.ts", lineNumber: 12 });
})();

// projects/demo/src/app/indirect-drag-image/indirect-drag-image.component.ts
var _c0 = ["*"];
var IndirectDragImageComponent = class _IndirectDragImageComponent {
  static \u0275fac = function IndirectDragImageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IndirectDragImageComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IndirectDragImageComponent, selectors: [["dnd-indirect-drag-image"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["dndDragImageRef", ""]], template: function IndirectDragImageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
  }, dependencies: [DndDragImageRefDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndirectDragImageComponent, [{
    type: Component,
    args: [{ selector: "dnd-indirect-drag-image", standalone: true, imports: [DndDragImageRefDirective], template: "<div dndDragImageRef>\n  <ng-content></ng-content>\n</div>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IndirectDragImageComponent, { className: "IndirectDragImageComponent", filePath: "projects/demo/src/app/indirect-drag-image/indirect-drag-image.component.ts", lineNumber: 11 });
})();

// projects/demo/src/app/simple/simple.component.ts
function SimpleComponent_mat_card_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-icon", 17);
    \u0275\u0275elementEnd();
  }
}
function SimpleComponent_mat_card_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 4);
    \u0275\u0275listener("dndCanceled", function SimpleComponent_mat_card_3_Template_mat_card_dndCanceled_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragged($event, "none"));
    })("dndCopied", function SimpleComponent_mat_card_3_Template_mat_card_dndCopied_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragged($event, "copy"));
    })("dndEnd", function SimpleComponent_mat_card_3_Template_mat_card_dndEnd_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnd($event));
    })("dndLinked", function SimpleComponent_mat_card_3_Template_mat_card_dndLinked_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragged($event, "link"));
    })("dndMoved", function SimpleComponent_mat_card_3_Template_mat_card_dndMoved_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragged($event, "move"));
    })("dndStart", function SimpleComponent_mat_card_3_Template_mat_card_dndStart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragStart($event));
    });
    \u0275\u0275elementStart(1, "mat-card-content", 5);
    \u0275\u0275template(2, SimpleComponent_mat_card_3_div_2_Template, 2, 0, "div", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5, " only with handle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 7);
    \u0275\u0275text(7, " DISABLED");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const draggable_r3 = ctx.$implicit;
    \u0275\u0275property("dndDisableIf", draggable_r3.disable)("dndDraggable", draggable_r3.content)("dndEffectAllowed", draggable_r3.effectAllowed);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", draggable_r3.handle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" draggable (", draggable_r3.effectAllowed, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("hidden", !draggable_r3.handle);
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", !draggable_r3.disable);
  }
}
function SimpleComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-icon", 19);
    \u0275\u0275elementEnd();
  }
}
function SimpleComponent_pre_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r1.lastDropEvent));
  }
}
var SimpleComponent = class _SimpleComponent {
  snackBarService;
  draggables = [
    {
      content: "testdata",
      effectAllowed: "copy",
      disable: false,
      handle: false
    },
    {
      content: "testdata2",
      effectAllowed: "move",
      disable: false,
      handle: false
    },
    {
      content: "testdata3",
      effectAllowed: "link",
      disable: false,
      handle: false
    },
    {
      content: "testdata4",
      effectAllowed: "copy",
      disable: true,
      handle: false
    },
    {
      content: "testdata5",
      effectAllowed: "copy",
      disable: false,
      handle: true
    }
  ];
  draggableWithDragImage = {
    content: "testdata6",
    effectAllowed: "copy",
    disable: false,
    handle: true
  };
  dropzoneEnabled = true;
  lastDropEvent = null;
  currentDraggableEvent;
  currentDragEffectMsg;
  constructor(snackBarService) {
    this.snackBarService = snackBarService;
  }
  dragImageOffsetRight = (event, dragImage) => {
    const dragImageComputedStyle = window.getComputedStyle(dragImage);
    const paddingTop = parseFloat(dragImageComputedStyle.paddingTop) || 0;
    const paddingLeft = parseFloat(dragImageComputedStyle.paddingLeft) || 0;
    const borderTop = parseFloat(dragImageComputedStyle.borderTopWidth) || 0;
    const borderLeft = parseFloat(dragImageComputedStyle.borderLeftWidth) || 0;
    const x = dragImage.clientWidth - (event.offsetX + paddingLeft + borderLeft);
    return {
      x,
      y: event.offsetY + paddingTop + borderTop
    };
  };
  onDragStart(event) {
    this.lastDropEvent = null;
    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open("Drag started!", void 0, { duration: 2e3 });
  }
  onDragged($event, effect) {
    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;
  }
  onDragEnd(event) {
    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open(this.currentDragEffectMsg || `Drag ended!`, void 0, { duration: 2e3 });
  }
  onDrop(event) {
    this.lastDropEvent = event;
  }
  static \u0275fac = function SimpleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SimpleComponent)(\u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimpleComponent, selectors: [["dnd-simple"]], decls: 36, vars: 20, consts: [[1, "container-fluid"], [1, "row", "gap-3", "gap-sm-0"], [1, "d-flex", "flex-column", "col", "gap-2"], ["appearance", "raised", 3, "dndDisableIf", "dndDraggable", "dndEffectAllowed", "dndCanceled", "dndCopied", "dndEnd", "dndLinked", "dndMoved", "dndStart", 4, "ngFor", "ngForOf"], ["appearance", "raised", 3, "dndCanceled", "dndCopied", "dndEnd", "dndLinked", "dndMoved", "dndStart", "dndDisableIf", "dndDraggable", "dndEffectAllowed"], [1, "d-flex", "flex-column", "gap-2"], ["class", "drag-handle", 4, "ngIf"], [3, "hidden"], ["dndDragImageRef", ""], ["appearance", "raised", 3, "dndCanceled", "dndCopied", "dndEnd", "dndLinked", "dndMoved", "dndStart", "dndDisableIf", "dndDragImageOffsetFunction", "dndDraggable", "dndEffectAllowed"], [1, "col"], ["appearance", "raised"], [3, "change", "checked"], ["dndDragoverClass", "custom-drag-over", "dndDropzone", "", 1, "my-dropzone", "mt-3", "p-2", "border", "rounded", 3, "dndDrop", "dndDisableIf"], [4, "ngIf"], ["class", "drag-handle", "dndHandle", "", 4, "ngIf"], ["dndHandle", "", 1, "drag-handle"], ["fontIcon", "drag_handle", "mat-list-icon", ""], [1, "drag-handle"], ["dndHandle", "", "fontIcon", "drag_handle", "mat-list-icon", ""]], template: function SimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275template(3, SimpleComponent_mat_card_3_Template, 8, 7, "mat-card", 3);
      \u0275\u0275elementStart(4, "mat-card", 4);
      \u0275\u0275listener("dndCanceled", function SimpleComponent_Template_mat_card_dndCanceled_4_listener($event) {
        return ctx.onDragged($event, "none");
      })("dndCopied", function SimpleComponent_Template_mat_card_dndCopied_4_listener($event) {
        return ctx.onDragged($event, "copy");
      })("dndEnd", function SimpleComponent_Template_mat_card_dndEnd_4_listener($event) {
        return ctx.onDragEnd($event);
      })("dndLinked", function SimpleComponent_Template_mat_card_dndLinked_4_listener($event) {
        return ctx.onDragged($event, "link");
      })("dndMoved", function SimpleComponent_Template_mat_card_dndMoved_4_listener($event) {
        return ctx.onDragged($event, "move");
      })("dndStart", function SimpleComponent_Template_mat_card_dndStart_4_listener($event) {
        return ctx.onDragStart($event);
      });
      \u0275\u0275elementStart(5, "mat-card-content", 5);
      \u0275\u0275template(6, SimpleComponent_div_6_Template, 2, 0, "div", 6);
      \u0275\u0275text(7);
      \u0275\u0275elementStart(8, "span", 7);
      \u0275\u0275text(9, "only with handle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, " DISABLED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275text(13, "MY_CUSTOM_DRAG_IMAGE");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "mat-card", 4);
      \u0275\u0275listener("dndCanceled", function SimpleComponent_Template_mat_card_dndCanceled_14_listener($event) {
        return ctx.onDragged($event, "none");
      })("dndCopied", function SimpleComponent_Template_mat_card_dndCopied_14_listener($event) {
        return ctx.onDragged($event, "copy");
      })("dndEnd", function SimpleComponent_Template_mat_card_dndEnd_14_listener($event) {
        return ctx.onDragEnd($event);
      })("dndLinked", function SimpleComponent_Template_mat_card_dndLinked_14_listener($event) {
        return ctx.onDragged($event, "link");
      })("dndMoved", function SimpleComponent_Template_mat_card_dndMoved_14_listener($event) {
        return ctx.onDragged($event, "move");
      })("dndStart", function SimpleComponent_Template_mat_card_dndStart_14_listener($event) {
        return ctx.onDragStart($event);
      });
      \u0275\u0275elementStart(15, "mat-card-content", 5);
      \u0275\u0275element(16, "dnd-indirect-handle");
      \u0275\u0275text(17);
      \u0275\u0275elementStart(18, "dnd-indirect-drag-image");
      \u0275\u0275text(19, "I'm the drag image but pssst");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "mat-card", 9);
      \u0275\u0275listener("dndCanceled", function SimpleComponent_Template_mat_card_dndCanceled_20_listener($event) {
        return ctx.onDragged($event, "none");
      })("dndCopied", function SimpleComponent_Template_mat_card_dndCopied_20_listener($event) {
        return ctx.onDragged($event, "copy");
      })("dndEnd", function SimpleComponent_Template_mat_card_dndEnd_20_listener($event) {
        return ctx.onDragEnd($event);
      })("dndLinked", function SimpleComponent_Template_mat_card_dndLinked_20_listener($event) {
        return ctx.onDragged($event, "link");
      })("dndMoved", function SimpleComponent_Template_mat_card_dndMoved_20_listener($event) {
        return ctx.onDragged($event, "move");
      })("dndStart", function SimpleComponent_Template_mat_card_dndStart_20_listener($event) {
        return ctx.onDragStart($event);
      });
      \u0275\u0275elementStart(21, "mat-card-content", 5)(22, "div");
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "dnd-indirect-handle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "div", 10)(26, "mat-card", 11)(27, "mat-card-header")(28, "mat-card-title");
      \u0275\u0275text(29, "Dropzone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "mat-card-subtitle")(31, "mat-slide-toggle", 12);
      \u0275\u0275listener("change", function SimpleComponent_Template_mat_slide_toggle_change_31_listener($event) {
        return ctx.dropzoneEnabled = $event.checked;
      });
      \u0275\u0275text(32, " Enabled ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "mat-card-content")(34, "section", 13);
      \u0275\u0275listener("dndDrop", function SimpleComponent_Template_section_dndDrop_34_listener($event) {
        return ctx.onDrop($event);
      });
      \u0275\u0275template(35, SimpleComponent_pre_35_Template, 3, 3, "pre", 14);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.draggables);
      \u0275\u0275advance();
      \u0275\u0275property("dndDisableIf", ctx.draggableWithDragImage.disable)("dndDraggable", ctx.draggableWithDragImage)("dndEffectAllowed", ctx.draggableWithDragImage.effectAllowed);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.draggableWithDragImage.handle);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" draggable (", ctx.draggableWithDragImage.effectAllowed, ") ");
      \u0275\u0275advance();
      \u0275\u0275property("hidden", !ctx.draggableWithDragImage.handle);
      \u0275\u0275advance(2);
      \u0275\u0275property("hidden", !ctx.draggableWithDragImage.disable);
      \u0275\u0275advance(4);
      \u0275\u0275property("dndDisableIf", ctx.draggableWithDragImage.disable)("dndDraggable", ctx.draggableWithDragImage)("dndEffectAllowed", ctx.draggableWithDragImage.effectAllowed);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" draggable (", ctx.draggableWithDragImage.effectAllowed, ") ");
      \u0275\u0275advance(3);
      \u0275\u0275property("dndDisableIf", ctx.draggableWithDragImage.disable)("dndDragImageOffsetFunction", ctx.dragImageOffsetRight)("dndDraggable", ctx.draggableWithDragImage)("dndEffectAllowed", ctx.draggableWithDragImage.effectAllowed);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("draggable (", ctx.draggableWithDragImage.effectAllowed, ")");
      \u0275\u0275advance(8);
      \u0275\u0275property("checked", ctx.dropzoneEnabled);
      \u0275\u0275advance(3);
      \u0275\u0275property("dndDisableIf", !ctx.dropzoneEnabled);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastDropEvent);
    }
  }, dependencies: [
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    NgForOf,
    DndDraggableDirective,
    NgIf,
    DndHandleDirective,
    MatIconModule,
    MatIcon,
    DndDragImageRefDirective,
    IndirectDndHandleComponent,
    IndirectDragImageComponent,
    MatSlideToggleModule,
    MatSlideToggle,
    DndDropzoneDirective,
    JsonPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.my-dropzone[_ngcontent-%COMP%] {\n  transition: all 300ms ease;\n}\n.custom-drag-over[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.06);\n}\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=simple.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimpleComponent, [{
    type: Component,
    args: [{ selector: "dnd-simple", standalone: true, imports: [
      MatCardModule,
      NgForOf,
      DndDraggableDirective,
      NgIf,
      DndHandleDirective,
      MatIconModule,
      DndDragImageRefDirective,
      IndirectDndHandleComponent,
      IndirectDragImageComponent,
      MatSlideToggleModule,
      DndDropzoneDirective,
      JsonPipe
    ], template: `<div class="container-fluid">
  <div class="row gap-3 gap-sm-0">
    <div class="d-flex flex-column col gap-2">
      <mat-card
        appearance="raised"
        *ngFor="let draggable of draggables"
        [dndDisableIf]="draggable.disable"
        [dndDraggable]="draggable.content"
        [dndEffectAllowed]="draggable.effectAllowed"
        (dndCanceled)="onDragged($event, 'none')"
        (dndCopied)="onDragged($event, 'copy')"
        (dndEnd)="onDragEnd($event)"
        (dndLinked)="onDragged($event, 'link')"
        (dndMoved)="onDragged($event, 'move')"
        (dndStart)="onDragStart($event)">
        <mat-card-content class="d-flex flex-column gap-2">
          <div *ngIf="draggable.handle" class="drag-handle" dndHandle>
            <mat-icon fontIcon="drag_handle" mat-list-icon> </mat-icon>
          </div>

          draggable ({{ draggable.effectAllowed }})
          <span [hidden]="!draggable.handle"> only with handle</span>
          <span [hidden]="!draggable.disable"> DISABLED</span>
        </mat-card-content>
      </mat-card>

      <mat-card
        appearance="raised"
        [dndDisableIf]="draggableWithDragImage.disable"
        [dndDraggable]="draggableWithDragImage"
        [dndEffectAllowed]="draggableWithDragImage.effectAllowed"
        (dndCanceled)="onDragged($event, 'none')"
        (dndCopied)="onDragged($event, 'copy')"
        (dndEnd)="onDragEnd($event)"
        (dndLinked)="onDragged($event, 'link')"
        (dndMoved)="onDragged($event, 'move')"
        (dndStart)="onDragStart($event)">
        <mat-card-content class="d-flex flex-column gap-2">
          <div *ngIf="draggableWithDragImage.handle" class="drag-handle">
            <mat-icon dndHandle fontIcon="drag_handle" mat-list-icon>
            </mat-icon>
          </div>

          draggable ({{ draggableWithDragImage.effectAllowed }})
          <span [hidden]="!draggableWithDragImage.handle">only with handle</span>
          <span [hidden]="!draggableWithDragImage.disable"> DISABLED</span>

          <div dndDragImageRef>MY_CUSTOM_DRAG_IMAGE</div>
        </mat-card-content>
      </mat-card>

      <mat-card
        appearance="raised"
        [dndDisableIf]="draggableWithDragImage.disable"
        [dndDraggable]="draggableWithDragImage"
        [dndEffectAllowed]="draggableWithDragImage.effectAllowed"
        (dndCanceled)="onDragged($event, 'none')"
        (dndCopied)="onDragged($event, 'copy')"
        (dndEnd)="onDragEnd($event)"
        (dndLinked)="onDragged($event, 'link')"
        (dndMoved)="onDragged($event, 'move')"
        (dndStart)="onDragStart($event)">
        <mat-card-content class="d-flex flex-column gap-2">
          <dnd-indirect-handle></dnd-indirect-handle>

          draggable ({{ draggableWithDragImage.effectAllowed }})

          <dnd-indirect-drag-image>I'm the drag image but pssst</dnd-indirect-drag-image>
        </mat-card-content>
      </mat-card>

      <mat-card
        appearance="raised"
        [dndDisableIf]="draggableWithDragImage.disable"
        [dndDragImageOffsetFunction]="dragImageOffsetRight"
        [dndDraggable]="draggableWithDragImage"
        [dndEffectAllowed]="draggableWithDragImage.effectAllowed"
        (dndCanceled)="onDragged($event, 'none')"
        (dndCopied)="onDragged($event, 'copy')"
        (dndEnd)="onDragEnd($event)"
        (dndLinked)="onDragged($event, 'link')"
        (dndMoved)="onDragged($event, 'move')"
        (dndStart)="onDragStart($event)">
        <mat-card-content class="d-flex flex-column gap-2">
          <div>draggable ({{ draggableWithDragImage.effectAllowed }})</div>

          <dnd-indirect-handle></dnd-indirect-handle>
        </mat-card-content>
      </mat-card>
    </div>

    <div class="col">
      <mat-card appearance="raised">
        <mat-card-header>
          <mat-card-title>Dropzone</mat-card-title>
          <mat-card-subtitle>
            <mat-slide-toggle
              [checked]="dropzoneEnabled"
              (change)="dropzoneEnabled = $event.checked">
              Enabled
            </mat-slide-toggle>
          </mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <section
            [dndDisableIf]="!dropzoneEnabled"
            (dndDrop)="onDrop($event)"
            class="my-dropzone mt-3 p-2 border rounded"
            dndDragoverClass="custom-drag-over"
            dndDropzone>
            <pre *ngIf="lastDropEvent">{{ lastDropEvent | json }}</pre>
          </section>
        </mat-card-content>
      </mat-card>
    </div>
  </div>
</div>
`, styles: ["/* projects/demo/src/app/simple/simple.component.scss */\n:host {\n  display: block;\n  height: 100%;\n}\n.my-dropzone {\n  transition: all 300ms ease;\n}\n.custom-drag-over {\n  background-color: rgba(0, 0, 0, 0.06);\n}\npre {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=simple.component.css.map */\n"] }]
  }], () => [{ type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimpleComponent, { className: "SimpleComponent", filePath: "projects/demo/src/app/simple/simple.component.ts", lineNumber: 46 });
})();
export {
  SimpleComponent as default
};
//# sourceMappingURL=simple.component-DO7DPNGN.js.map
