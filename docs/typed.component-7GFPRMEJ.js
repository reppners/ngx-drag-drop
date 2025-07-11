import {
  MatList,
  MatListItem,
  MatListItemTitle,
  MatListModule
} from "./chunk-H45EXN3F.js";
import "./chunk-KV4ZOJZS.js";
import {
  Component,
  DndDraggableDirective,
  DndDropzoneDirective,
  DndPlaceholderRefDirective,
  NgForOf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2
} from "./chunk-OX3R32RX.js";

// projects/demo/src/app/typed/typed.component.ts
var _c0 = () => ["apple"];
var _c1 = () => ["banana"];
function TypedComponent_mat_list_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 9);
    \u0275\u0275listener("dndMoved", function TypedComponent_mat_list_item_7_Template_mat_list_item_dndMoved_0_listener() {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const fruit_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDragged(i_r4, fruit_r3, ctx_r4.fruits));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fruit_r3 = ctx.$implicit;
    \u0275\u0275property("dndDraggable", fruit_r3)("dndType", fruit_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", fruit_r3.type, " ", fruit_r3.id);
  }
}
function TypedComponent_mat_list_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 9);
    \u0275\u0275listener("dndMoved", function TypedComponent_mat_list_item_13_Template_mat_list_item_dndMoved_0_listener() {
      const ctx_r6 = \u0275\u0275restoreView(_r6);
      const apple_r8 = ctx_r6.$implicit;
      const i_r9 = ctx_r6.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDragged(i_r9, apple_r8, ctx_r4.apples));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const apple_r8 = ctx.$implicit;
    \u0275\u0275property("dndDraggable", apple_r8)("dndType", apple_r8.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", apple_r8.type, " ", apple_r8.id);
  }
}
function TypedComponent_mat_list_item_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-list-item", 9);
    \u0275\u0275listener("dndMoved", function TypedComponent_mat_list_item_19_Template_mat_list_item_dndMoved_0_listener() {
      const ctx_r10 = \u0275\u0275restoreView(_r10);
      const banana_r12 = ctx_r10.$implicit;
      const i_r13 = ctx_r10.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDragged(i_r13, banana_r12, ctx_r4.bananas));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const banana_r12 = ctx.$implicit;
    \u0275\u0275property("dndDraggable", banana_r12)("dndType", banana_r12.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", banana_r12.type, " ", banana_r12.id);
  }
}
var id = 0;
function createFruit(type) {
  return {
    id: id++,
    type
  };
}
function range(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i);
}
var TypedComponent = class _TypedComponent {
  fruits = range(0, 100).map((_) => {
    const randomFruitType = Math.random() < 0.5 ? "apple" : "banana";
    return createFruit(randomFruitType);
  });
  apples = range(0, 12).map((_) => {
    return createFruit("apple");
  });
  bananas = range(0, 10).map((_) => {
    return createFruit("banana");
  });
  trackByFruit(index, fruit) {
    return fruit;
  }
  onDragged(index, fruit, list) {
    const removeIndex = list.indexOf(fruit);
    console.log(`onDragged ngFor-index=${index}, item=${fruit}, removeIndex=${removeIndex}, list=${list.length}`);
    list.splice(removeIndex, 1);
  }
  onDrop(event, list) {
    console.log("onDrop", event, list.length);
    let index = event.index;
    if (typeof index === "undefined") {
      index = list.length;
    }
    list.splice(index, 0, event.data);
  }
  static \u0275fac = function TypedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TypedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TypedComponent, selectors: [["dnd-typed"]], decls: 20, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], ["dndDropzone", "", "dndEffectAllowed", "move", 1, "dndList", "gap-1", "flex-grow-1", "d-flex", "flex-column", "bg-light", "rounded-1", "shadow-sm", 3, "dndDrop"], ["dndPlaceholderRef", "", 1, "dndPlaceholder", "border", "rounded-1", "bg-danger", "bg-gradient"], ["class", "border rounded-1 bg-white", "dndEffectAllowed", "move", 3, "dndDraggable", "dndType", "dndMoved", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["dndEffectAllowed", "move", 1, "dndList", "gap-1", "flex-grow-1", "d-flex", "flex-column", "bg-light", "rounded-1", "shadow-sm", 3, "dndDrop", "dndDropzone"], ["dndPlaceholderRef", "", 1, "dndPlaceholder", "border", "rounded-1", "bg-success", "bg-gradient"], ["dndPlaceholderRef", "", 1, "dndPlaceholder", "border", "rounded-1", "bg-warning", "bg-gradient"], ["dndEffectAllowed", "move", 1, "border", "rounded-1", "bg-white", 3, "dndMoved", "dndDraggable", "dndType"], ["matListItemTitle", ""]], template: function TypedComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "pre");
      \u0275\u0275text(4, "Fruits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "mat-list", 3);
      \u0275\u0275listener("dndDrop", function TypedComponent_Template_mat_list_dndDrop_5_listener($event) {
        return ctx.onDrop($event, ctx.fruits);
      });
      \u0275\u0275element(6, "mat-list-item", 4);
      \u0275\u0275template(7, TypedComponent_mat_list_item_7_Template, 3, 4, "mat-list-item", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 2)(9, "pre");
      \u0275\u0275text(10, "Apples");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "mat-list", 6);
      \u0275\u0275listener("dndDrop", function TypedComponent_Template_mat_list_dndDrop_11_listener($event) {
        return ctx.onDrop($event, ctx.apples);
      });
      \u0275\u0275element(12, "mat-list-item", 7);
      \u0275\u0275template(13, TypedComponent_mat_list_item_13_Template, 3, 4, "mat-list-item", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 2)(15, "pre");
      \u0275\u0275text(16, "Bananas");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-list", 6);
      \u0275\u0275listener("dndDrop", function TypedComponent_Template_mat_list_dndDrop_17_listener($event) {
        return ctx.onDrop($event, ctx.bananas);
      });
      \u0275\u0275element(18, "mat-list-item", 8);
      \u0275\u0275template(19, TypedComponent_mat_list_item_19_Template, 3, 4, "mat-list-item", 5);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.fruits)("ngForTrackBy", ctx.trackByFruit);
      \u0275\u0275advance(4);
      \u0275\u0275property("dndDropzone", \u0275\u0275pureFunction0(8, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.apples)("ngForTrackBy", ctx.trackByFruit);
      \u0275\u0275advance(4);
      \u0275\u0275property("dndDropzone", \u0275\u0275pureFunction0(9, _c1));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.bananas)("ngForTrackBy", ctx.trackByFruit);
    }
  }, dependencies: [
    MatListModule,
    MatList,
    MatListItem,
    MatListItemTitle,
    DndDropzoneDirective,
    DndPlaceholderRefDirective,
    NgForOf,
    DndDraggableDirective
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n}\npre[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px;\n}\n.mat-mdc-list-item[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  border: 1px solid gray;\n}\n.dndList[_ngcontent-%COMP%] {\n  transition: all 300ms ease;\n  padding: 8px;\n  overflow-y: auto;\n}\n.dndList.dndDragover[_ngcontent-%COMP%] {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border-color: green;\n}\n.dndDragging[_ngcontent-%COMP%] {\n  border: 1px solid green;\n}\n.dndDraggingSource[_ngcontent-%COMP%] {\n  display: none;\n}\n.dndPlaceholder[_ngcontent-%COMP%] {\n  min-height: 48px;\n  border: 1px dashed green;\n  background-color: rgba(0, 0, 0, 0.1);\n}\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=typed.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TypedComponent, [{
    type: Component,
    args: [{ selector: "dnd-typed", standalone: true, imports: [
      MatListModule,
      DndDropzoneDirective,
      DndPlaceholderRefDirective,
      NgForOf,
      DndDraggableDirective
    ], template: `<div class="container-fluid">
  <div class="row">
    <div class="col">
      <pre>Fruits</pre>
      <mat-list
        (dndDrop)="onDrop($event, fruits)"
        class="dndList gap-1 flex-grow-1 d-flex flex-column bg-light rounded-1 shadow-sm"
        dndDropzone
        dndEffectAllowed="move">
        <mat-list-item
          class="dndPlaceholder border rounded-1 bg-danger bg-gradient"
          dndPlaceholderRef>
        </mat-list-item>
        <mat-list-item
          *ngFor="let fruit of fruits; let i = index; trackBy: trackByFruit"
          [dndDraggable]="fruit"
          [dndType]="fruit.type"
          (dndMoved)="onDragged(i, fruit, fruits)"
          class="border rounded-1 bg-white"
          dndEffectAllowed="move">
          <span matListItemTitle>{{ fruit.type }} {{ fruit.id }}</span>
        </mat-list-item>
      </mat-list>
    </div>

    <div class="col">
      <pre>Apples</pre>
      <mat-list
        [dndDropzone]="['apple']"
        (dndDrop)="onDrop($event, apples)"
        class="dndList gap-1 flex-grow-1 d-flex flex-column bg-light rounded-1 shadow-sm"
        dndEffectAllowed="move">
        <mat-list-item
          class="dndPlaceholder border rounded-1 bg-success bg-gradient"
          dndPlaceholderRef>
        </mat-list-item>
        <mat-list-item
          *ngFor="let apple of apples; let i = index; trackBy: trackByFruit"
          [dndDraggable]="apple"
          [dndType]="apple.type"
          (dndMoved)="onDragged(i, apple, apples)"
          class="border rounded-1 bg-white"
          dndEffectAllowed="move">
          <span matListItemTitle>{{ apple.type }} {{ apple.id }}</span>
        </mat-list-item>
      </mat-list>
    </div>

    <div class="col">
      <pre>Bananas</pre>
      <mat-list
        [dndDropzone]="['banana']"
        (dndDrop)="onDrop($event, bananas)"
        class="dndList gap-1 flex-grow-1 d-flex flex-column bg-light rounded-1 shadow-sm"
        dndEffectAllowed="move">
        <mat-list-item
          class="dndPlaceholder border rounded-1 bg-warning bg-gradient"
          dndPlaceholderRef>
        </mat-list-item>
        <mat-list-item
          *ngFor="let banana of bananas; let i = index; trackBy: trackByFruit"
          [dndDraggable]="banana"
          [dndType]="banana.type"
          (dndMoved)="onDragged(i, banana, bananas)"
          class="border rounded-1 bg-white"
          dndEffectAllowed="move">
          <span matListItemTitle>{{ banana.type }} {{ banana.id }}</span>
        </mat-list-item>
      </mat-list>
    </div>
  </div>
</div>
`, styles: ["/* projects/demo/src/app/typed/typed.component.scss */\n:host {\n  display: block;\n  box-sizing: border-box;\n}\npre {\n  text-align: center;\n  padding: 8px;\n}\n.mat-mdc-list-item {\n  margin: 2px 0;\n  border: 1px solid gray;\n}\n.dndList {\n  transition: all 300ms ease;\n  padding: 8px;\n  overflow-y: auto;\n}\n.dndList.dndDragover {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border-color: green;\n}\n.dndDragging {\n  border: 1px solid green;\n}\n.dndDraggingSource {\n  display: none;\n}\n.dndPlaceholder {\n  min-height: 48px;\n  border: 1px dashed green;\n  background-color: rgba(0, 0, 0, 0.1);\n}\npre {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=typed.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TypedComponent, { className: "TypedComponent", filePath: "projects/demo/src/app/typed/typed.component.ts", lineNumber: 46 });
})();
export {
  TypedComponent as default
};
//# sourceMappingURL=typed.component-7GFPRMEJ.js.map
