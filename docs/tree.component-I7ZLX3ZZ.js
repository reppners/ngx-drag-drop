import {
  MatIconModule
} from "./chunk-YYQ6OU2F.js";
import {
  MatList,
  MatListItem,
  MatListItemTitle,
  MatListModule
} from "./chunk-H45EXN3F.js";
import "./chunk-KV4ZOJZS.js";
import {
  CommonModule,
  Component,
  DndDraggableDirective,
  DndDropzoneDirective,
  DndPlaceholderRefDirective,
  JsonPipe,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-OX3R32RX.js";

// projects/demo/src/app/tree/tree.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
function TreeComponent_ng_template_1_div_1_mat_list_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TreeComponent_ng_template_1_div_1_mat_list_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list", 13);
    \u0275\u0275listener("dndDrop", function TreeComponent_ng_template_1_div_1_mat_list_4_Template_mat_list_dndDrop_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const item_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.onDrop($event, item_r3.children));
    });
    \u0275\u0275template(1, TreeComponent_ng_template_1_div_1_mat_list_4_ng_container_1_Template, 1, 0, "ng-container", 5);
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
function TreeComponent_ng_template_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-list-item", 10);
    \u0275\u0275listener("dndMoved", function TreeComponent_ng_template_1_div_1_Template_mat_list_item_dndMoved_1_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const list_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDragged(item_r3, list_r4, "move"));
    });
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, TreeComponent_ng_template_1_div_1_mat_list_4_Template, 2, 4, "mat-list", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("dndDraggable", item_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.children);
  }
}
function TreeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-list-item", 7);
    \u0275\u0275template(1, TreeComponent_ng_template_1_div_1_Template, 5, 3, "div", 8);
  }
  if (rf & 2) {
    const list_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", list_r4);
  }
}
function TreeComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var TreeComponent = class _TreeComponent {
  draggableList = [
    {
      content: "Demo 1",
      children: [
        {
          content: "Nested 1",
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
      content: "Demo 2",
      children: []
    },
    {
      content: "Demo 3",
      children: []
    },
    {
      content: "Demo 4",
      children: []
    },
    {
      content: "Demo 5",
      children: []
    },
    {
      content: "Demo 6",
      children: []
    },
    {
      content: "Demo 7",
      children: []
    },
    {
      content: "Demo 8",
      children: []
    },
    {
      content: "Demo 9",
      children: []
    },
    {
      content: "Demo 10",
      children: [
        {
          content: "Nested 1",
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
    }
  ];
  onDragged(item, list, effect) {
    if (effect === "move") {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }
  onDrop(event, list) {
    console.log("onDrop", event, list);
    if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
      let index = event.index;
      if (typeof index === "undefined") {
        index = list.length;
      }
      list.splice(index, 0, event.data);
    }
  }
  static \u0275fac = function TreeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TreeComponent, selectors: [["dnd-tree"]], decls: 11, vars: 7, consts: [["recursiveList", ""], [1, "container-fluid"], [1, "row"], [1, "col-12", "offset-lg-2", "col-lg-4"], ["dndDropzone", "", "dndEffectAllowed", "move", 1, "d-flex", "flex-column", "bg-light", "gap-1", 3, "dndDrop"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "col-12", "col-lg-4"], ["dndPlaceholderRef", "", 1, "dndPlaceholder", "border", "bg-opacity-25", "mb-1"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["dndEffectAllowed", "move", 1, "border", "bg-white", "ms-n3", 3, "dndMoved", "dndDraggable"], ["matListItemTitle", ""], ["class", "d-flex flex-column bg-light pt-2 pb-0 ps-2", "style", "min-height: unset", "dndDropzone", "", "dndEffectAllowed", "move", 3, "dndDrop", 4, "ngIf"], ["dndDropzone", "", "dndEffectAllowed", "move", 1, "d-flex", "flex-column", "bg-light", "pt-2", "pb-0", "ps-2", 2, "min-height", "unset", 3, "dndDrop"]], template: function TreeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, TreeComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "mat-list", 4);
      \u0275\u0275listener("dndDrop", function TreeComponent_Template_mat_list_dndDrop_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onDrop($event, ctx.draggableList));
      });
      \u0275\u0275template(6, TreeComponent_ng_container_6_Template, 1, 0, "ng-container", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 6)(8, "pre");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "json");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const recursiveList_r7 = \u0275\u0275reference(2);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngTemplateOutlet", recursiveList_r7)("ngTemplateOutletContext", \u0275\u0275pureFunction1(5, _c0, ctx.draggableList));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 3, ctx.draggableList));
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
    JsonPipe,
    DndDropzoneDirective,
    DndPlaceholderRefDirective,
    MatIconModule,
    MatListModule,
    MatList,
    MatListItem,
    MatListItemTitle,
    DndDraggableDirective
  ], styles: ["\n\n.dndDraggingSource[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  transform: scale(0.98);\n  pointer-events: none;\n}\n.dndDraggingSource[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=tree.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeComponent, [{
    type: Component,
    args: [{ selector: "dnd-tree", standalone: true, imports: [
      CommonModule,
      DndDropzoneDirective,
      DndPlaceholderRefDirective,
      MatIconModule,
      MatListModule,
      DndDraggableDirective
    ], template: `<div class="container-fluid">

  <ng-template #recursiveList let-list>
    <mat-list-item
      class="dndPlaceholder border bg-opacity-25 mb-1"
      dndPlaceholderRef />

    <div *ngFor="let item of list" class="">
      <mat-list-item
        [dndDraggable]="item"
        dndEffectAllowed="move"
        (dndMoved)="onDragged(item, list, 'move')"
        class="border bg-white ms-n3">
        <span matListItemTitle>{{ item.content }}</span>
      </mat-list-item>

      <mat-list
        *ngIf="item.children"
        (dndDrop)="onDrop($event, item.children)"
        class="d-flex flex-column bg-light pt-2 pb-0 ps-2"
        style="min-height: unset"
        dndDropzone
        dndEffectAllowed="move">

        <ng-container *ngTemplateOutlet="recursiveList; context: { $implicit: item.children }" />
      </mat-list>
    </div>
  </ng-template>

  <div class="row">
    <div class="col-12 offset-lg-2 col-lg-4">
      <mat-list
        (dndDrop)="onDrop($event, draggableList)"
        class="d-flex flex-column bg-light gap-1"
        dndDropzone
        dndEffectAllowed="move">

        <ng-container *ngTemplateOutlet="recursiveList; context: { $implicit: draggableList }" />
      </mat-list>
    </div>
    <div class="col-12 col-lg-4">
      <pre>{{draggableList | json}}</pre>
    </div>
  </div>
</div>
`, styles: ["/* projects/demo/src/app/tree/tree.component.scss */\n.dndDraggingSource {\n  opacity: 0.5;\n  transform: scale(0.98);\n  pointer-events: none;\n}\n.dndDraggingSource > * {\n  pointer-events: none;\n}\n/*# sourceMappingURL=tree.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TreeComponent, { className: "TreeComponent", filePath: "projects/demo/src/app/tree/tree.component.ts", lineNumber: 32 });
})();
export {
  TreeComponent as default
};
//# sourceMappingURL=tree.component-I7ZLX3ZZ.js.map
