import {
  MatIcon,
  MatIconModule
} from "./chunk-YYQ6OU2F.js";
import {
  MatSnackBar
} from "./chunk-S7HRAVOT.js";
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
  MatListModule
} from "./chunk-H45EXN3F.js";
import "./chunk-KV4ZOJZS.js";
import {
  Component,
  DndDraggableDirective,
  DndDropzoneDirective,
  DndHandleDirective,
  DndPlaceholderRefDirective,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OX3R32RX.js";

// projects/demo/src/app/list/list.component.ts
function ListComponent_mat_list_item_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-icon", 15);
    \u0275\u0275elementEnd();
  }
}
function ListComponent_mat_list_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 10);
    \u0275\u0275listener("dndCanceled", function ListComponent_mat_list_item_7_Template_mat_list_item_dndCanceled_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragged(item_r2, ctx_r2.draggableListLeft, "none"));
    })("dndCopied", function ListComponent_mat_list_item_7_Template_mat_list_item_dndCopied_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragged(item_r2, ctx_r2.draggableListLeft, "copy"));
    })("dndEnd", function ListComponent_mat_list_item_7_Template_mat_list_item_dndEnd_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragEnd($event));
    })("dndLinked", function ListComponent_mat_list_item_7_Template_mat_list_item_dndLinked_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragged(item_r2, ctx_r2.draggableListLeft, "link"));
    })("dndMoved", function ListComponent_mat_list_item_7_Template_mat_list_item_dndMoved_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragged(item_r2, ctx_r2.draggableListLeft, "move"));
    })("dndStart", function ListComponent_mat_list_item_7_Template_mat_list_item_dndStart_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragStart($event));
    });
    \u0275\u0275template(1, ListComponent_mat_list_item_7_div_1_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("dndDisableIf", item_r2.disable)("dndDraggable", item_r2)("dndEffectAllowed", item_r2.effectAllowed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.handle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("effectAllowed: ", item_r2.effectAllowed);
  }
}
function ListComponent_mat_list_item_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-icon", 15);
    \u0275\u0275elementEnd();
  }
}
function ListComponent_mat_list_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 10);
    \u0275\u0275listener("dndCanceled", function ListComponent_mat_list_item_13_Template_mat_list_item_dndCanceled_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragged(item_r5, ctx_r2.draggableListRight, "none"));
    })("dndCopied", function ListComponent_mat_list_item_13_Template_mat_list_item_dndCopied_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragged(item_r5, ctx_r2.draggableListRight, "copy"));
    })("dndEnd", function ListComponent_mat_list_item_13_Template_mat_list_item_dndEnd_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragEnd($event));
    })("dndLinked", function ListComponent_mat_list_item_13_Template_mat_list_item_dndLinked_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragged(item_r5, ctx_r2.draggableListRight, "link"));
    })("dndMoved", function ListComponent_mat_list_item_13_Template_mat_list_item_dndMoved_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragged(item_r5, ctx_r2.draggableListRight, "move"));
    })("dndStart", function ListComponent_mat_list_item_13_Template_mat_list_item_dndStart_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDragStart($event));
    });
    \u0275\u0275template(1, ListComponent_mat_list_item_13_div_1_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275property("dndDisableIf", item_r5.disable)("dndDraggable", item_r5)("dndEffectAllowed", item_r5.effectAllowed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r5.handle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("effectAllowed: ", item_r5.effectAllowed);
  }
}
var ListComponent = class _ListComponent {
  snackBarService;
  draggableListLeft = [
    {
      content: "Left",
      effectAllowed: "move",
      disable: false,
      handle: false
    },
    {
      content: "Lefter",
      effectAllowed: "move",
      disable: false,
      handle: false
    },
    {
      content: "Leftest",
      effectAllowed: "copyMove",
      disable: false,
      handle: false
    },
    {
      content: "Lefty",
      effectAllowed: "move",
      disable: false,
      handle: true
    },
    {
      content: "Left",
      effectAllowed: "move",
      disable: false,
      handle: false
    },
    {
      content: "Lefter",
      effectAllowed: "move",
      disable: false,
      handle: false
    },
    {
      content: "Leftest",
      effectAllowed: "copyMove",
      disable: false,
      handle: false
    },
    {
      content: "Lefty",
      effectAllowed: "move",
      disable: false,
      handle: true
    },
    {
      content: "Left",
      effectAllowed: "move",
      disable: false,
      handle: false
    },
    {
      content: "Lefter",
      effectAllowed: "move",
      disable: false,
      handle: false
    },
    {
      content: "Leftest",
      effectAllowed: "copyMove",
      disable: false,
      handle: false
    },
    {
      content: "Lefty",
      effectAllowed: "move",
      disable: false,
      handle: true
    }
  ];
  draggableListRight = [
    {
      content: "I was originally right",
      effectAllowed: "move",
      disable: false,
      handle: false
    }
  ];
  horizontalLayoutActive = false;
  currentDraggableEvent;
  currentDragEffectMsg;
  verticalLayout = {
    container: "row",
    list: "column",
    dndHorizontal: false
  };
  layout = this.verticalLayout;
  horizontalLayout = {
    container: "row",
    list: "row wrap",
    dndHorizontal: true
  };
  constructor(snackBarService) {
    this.snackBarService = snackBarService;
  }
  setHorizontalLayout(horizontalLayoutActive) {
    this.layout = horizontalLayoutActive ? this.horizontalLayout : this.verticalLayout;
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
  static \u0275fac = function ListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ListComponent)(\u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["dnd-list"]], decls: 18, vars: 9, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], ["dndDropzone", "", "dndEffectAllowed", "copyMove", 1, "dndList", "gap-1", "d-flex", "flex-column", "bg-light", "rounded-1", "shadow-sm", 3, "dndDrop", "dndHorizontal"], ["dndPlaceholderRef", "", 1, "dndPlaceholder", "border", "rounded-1", "bg-opacity-25"], ["class", "border rounded-1 bg-white", 3, "dndDisableIf", "dndDraggable", "dndEffectAllowed", "dndCanceled", "dndCopied", "dndEnd", "dndLinked", "dndMoved", "dndStart", 4, "ngFor", "ngForOf"], [1, "col", "d-flex", "flex-column"], ["dndDropzone", "", "dndEffectAllowed", "copyMove", 1, "dndList", "gap-1", "flex-grow-1", "d-flex", "flex-column", "bg-light", "rounded-1", "shadow-sm", 3, "dndDrop", "dndHorizontal"], ["dndPlaceholderRef", "", 1, "dndPlaceholder", "border", "rounded-1", "bg-white", "bg-opacity-25"], ["dndDropzone", "", "dndEffectAllowed", "move", 1, "dndList", "gap-1", "flex-grow-1", "d-flex", "flex-column", "bg-light", "rounded-1", "shadow-sm", 3, "dndDrop", "dndHorizontal"], [1, "border", "rounded-1", "bg-white", 3, "dndCanceled", "dndCopied", "dndEnd", "dndLinked", "dndMoved", "dndStart", "dndDisableIf", "dndDraggable", "dndEffectAllowed"], ["class", "drag-handle align-self-center mx-3 my-0", "dndHandle", "", "matListItemIcon", "", 4, "ngIf"], ["matListItemTitle", ""], ["matListItemLine", ""], ["dndHandle", "", "matListItemIcon", "", 1, "drag-handle", "align-self-center", "mx-3", "my-0"], ["fontIcon", "drag_handle"]], template: function ListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "pre");
      \u0275\u0275text(4, 'dndEffectAllowed="copyMove"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-list", 3);
      \u0275\u0275listener("dndDrop", function ListComponent_Template_mat_list_dndDrop_5_listener($event) {
        return ctx.onDrop($event, ctx.draggableListLeft);
      });
      \u0275\u0275element(6, "mat-list-item", 4);
      \u0275\u0275template(7, ListComponent_mat_list_item_7_Template, 6, 6, "mat-list-item", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 6)(9, "pre");
      \u0275\u0275text(10, 'dndEffectAllowed="copyMove"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-list", 7);
      \u0275\u0275listener("dndDrop", function ListComponent_Template_mat_list_dndDrop_11_listener($event) {
        return ctx.onDrop($event, ctx.draggableListRight);
      });
      \u0275\u0275element(12, "mat-list-item", 8);
      \u0275\u0275template(13, ListComponent_mat_list_item_13_Template, 6, 6, "mat-list-item", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 6)(15, "pre");
      \u0275\u0275text(16, 'trash (dndEffectAllowed="move")');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-list", 9);
      \u0275\u0275listener("dndDrop", function ListComponent_Template_mat_list_dndDrop_17_listener($event) {
        return ctx.onDrop($event);
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275classProp("horizontal", ctx.layout.dndHorizontal);
      \u0275\u0275property("dndHorizontal", ctx.layout.dndHorizontal);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.draggableListLeft);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("horizontal", ctx.layout.dndHorizontal);
      \u0275\u0275property("dndHorizontal", ctx.layout.dndHorizontal);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.draggableListRight);
      \u0275\u0275advance(4);
      \u0275\u0275property("dndHorizontal", ctx.layout.dndHorizontal);
    }
  }, dependencies: [
    MatListModule,
    MatList,
    MatListItem,
    MatListItemIcon,
    MatListItemLine,
    MatListItemTitle,
    DndDropzoneDirective,
    DndPlaceholderRefDirective,
    NgForOf,
    DndDraggableDirective,
    NgIf,
    DndHandleDirective,
    MatIconModule,
    MatIcon
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\npre[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px;\n}\n.dndList[_ngcontent-%COMP%] {\n  transition: all 300ms ease;\n  padding: 5px;\n}\n.dndList[_ngcontent-%COMP%]:not(.horizontal).dndDragover {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.dndList.horizontal.dndDragover[_ngcontent-%COMP%] {\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-bottom: 12px;\n}\n.dndList.horizontal[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%] {\n  max-width: 120px;\n  margin: 2px;\n}\n.dndDragging[_ngcontent-%COMP%] {\n  border: 1px solid green;\n}\n.dndDraggingSource[_ngcontent-%COMP%] {\n  display: none;\n}\n.dndPlaceholder[_ngcontent-%COMP%] {\n  min-height: 72px;\n}\n/*# sourceMappingURL=list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{ selector: "dnd-list", standalone: true, imports: [
      MatListModule,
      DndDropzoneDirective,
      DndPlaceholderRefDirective,
      NgForOf,
      DndDraggableDirective,
      NgIf,
      DndHandleDirective,
      MatIconModule
    ], template: `<div class="container-fluid">
  <div class="row">
    <div class="col">
      <pre>dndEffectAllowed="copyMove"</pre>

      <mat-list
        [class.horizontal]="layout.dndHorizontal"
        [dndHorizontal]="layout.dndHorizontal"
        (dndDrop)="onDrop($event, draggableListLeft)"
        class="dndList gap-1 d-flex flex-column bg-light rounded-1 shadow-sm"
        dndDropzone
        dndEffectAllowed="copyMove">
        <mat-list-item
          class="dndPlaceholder border rounded-1 bg-opacity-25"
          dndPlaceholderRef>
        </mat-list-item>

        <mat-list-item
          *ngFor="let item of draggableListLeft"
          [dndDisableIf]="item.disable"
          [dndDraggable]="item"
          [dndEffectAllowed]="item.effectAllowed"
          (dndCanceled)="onDragged(item, draggableListLeft, 'none')"
          (dndCopied)="onDragged(item, draggableListLeft, 'copy')"
          (dndEnd)="onDragEnd($event)"
          (dndLinked)="onDragged(item, draggableListLeft, 'link')"
          (dndMoved)="onDragged(item, draggableListLeft, 'move')"
          (dndStart)="onDragStart($event)"
          class="border rounded-1 bg-white">
          <div
            *ngIf="item.handle"
            class="drag-handle align-self-center mx-3 my-0"
            dndHandle
            matListItemIcon>
            <mat-icon fontIcon="drag_handle"></mat-icon>
          </div>
          <span matListItemTitle>{{ item.content }}</span>
          <span matListItemLine>effectAllowed: {{ item.effectAllowed }}</span>
        </mat-list-item>
      </mat-list>
    </div>

    <div class="col d-flex flex-column">
      <pre>dndEffectAllowed="copyMove"</pre>

      <mat-list
        [class.horizontal]="layout.dndHorizontal"
        [dndHorizontal]="layout.dndHorizontal"
        (dndDrop)="onDrop($event, draggableListRight)"
        class="dndList gap-1 flex-grow-1 d-flex flex-column bg-light rounded-1 shadow-sm"
        dndDropzone
        dndEffectAllowed="copyMove">
        <mat-list-item
          class="dndPlaceholder border rounded-1 bg-white bg-opacity-25"
          dndPlaceholderRef>
        </mat-list-item>
        <mat-list-item
          *ngFor="let item of draggableListRight"
          [dndDisableIf]="item.disable"
          [dndDraggable]="item"
          [dndEffectAllowed]="item.effectAllowed"
          (dndCanceled)="onDragged(item, draggableListRight, 'none')"
          (dndCopied)="onDragged(item, draggableListRight, 'copy')"
          (dndEnd)="onDragEnd($event)"
          (dndLinked)="onDragged(item, draggableListRight, 'link')"
          (dndMoved)="onDragged(item, draggableListRight, 'move')"
          (dndStart)="onDragStart($event)"
          class="border rounded-1 bg-white">
          <div
            *ngIf="item.handle"
            class="drag-handle align-self-center mx-3 my-0"
            dndHandle
            matListItemIcon>
            <mat-icon fontIcon="drag_handle"></mat-icon>
          </div>
          <span matListItemTitle>{{ item.content }}</span>
          <span matListItemLine>effectAllowed: {{ item.effectAllowed }}</span>
        </mat-list-item>
      </mat-list>
    </div>

    <div class="col d-flex flex-column">
      <pre>trash (dndEffectAllowed="move")</pre>

      <mat-list
        [dndHorizontal]="layout.dndHorizontal"
        (dndDrop)="onDrop($event)"
        class="dndList gap-1 flex-grow-1 d-flex flex-column bg-light rounded-1 shadow-sm"
        dndDropzone
        dndEffectAllowed="move">
      </mat-list>
    </div>
  </div>
</div>

<!-- TODO: @reppners I have no idea what the horizontal layout once was supposed to be. Sadly the existing demo has stopped working so I can't look it up -->
<!-- <div class="layout-padding"> -->
<!--   <mat-slide-toggle [checked]="horizontalLayoutActive" -->
<!--                     (change)="horizontalLayoutActive = $event.checked; setHorizontalLayout($event.checked)">horizontal -->
<!--   </mat-slide-toggle> -->
<!-- </div> -->
`, styles: ["/* projects/demo/src/app/list/list.component.scss */\n:host {\n  display: block;\n}\npre {\n  text-align: center;\n  padding: 8px;\n}\n.dndList {\n  transition: all 300ms ease;\n  padding: 5px;\n}\n.dndList:not(.horizontal).dndDragover {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.dndList.horizontal.dndDragover {\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-bottom: 12px;\n}\n.dndList.horizontal .mat-mdc-list-item {\n  max-width: 120px;\n  margin: 2px;\n}\n.dndDragging {\n  border: 1px solid green;\n}\n.dndDraggingSource {\n  display: none;\n}\n.dndPlaceholder {\n  min-height: 72px;\n}\n/*# sourceMappingURL=list.component.css.map */\n"] }]
  }], () => [{ type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "projects/demo/src/app/list/list.component.ts", lineNumber: 45 });
})();
export {
  ListComponent as default
};
//# sourceMappingURL=list.component-H3TLKJRK.js.map
