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
import {
  Component,
  DndDropzoneDirective,
  JsonPipe,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-OX3R32RX.js";

// projects/demo/src/app/native/native.component.ts
function NativeComponent_pre_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Event: ", \u0275\u0275pipeBind1(2, 1, ctx_r0.lastDropEvent));
  }
}
function NativeComponent_pre_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Types: ", \u0275\u0275pipeBind1(2, 1, ctx_r0.lastDropTypes));
  }
}
function NativeComponent_pre_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Files: ", \u0275\u0275pipeBind1(2, 1, ctx_r0.lastDropFiles));
  }
}
function NativeComponent_pre_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "pre");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "json");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Items: ", \u0275\u0275pipeBind1(2, 1, ctx_r0.lastDropItems));
  }
}
var NativeComponent = class _NativeComponent {
  snackBarService;
  lastDropEvent = null;
  lastDropTypes;
  lastDropFiles;
  lastDropItems;
  constructor(snackBarService) {
    this.snackBarService = snackBarService;
  }
  onDrop(event) {
    this.snackBarService.dismiss();
    this.snackBarService.open(`Something dropped O.O`, void 0, {
      duration: 2e3
    });
    this.lastDropEvent = event;
    this.lastDropTypes = this.lastDropEvent.event.dataTransfer?.types;
    this.lastDropFiles = [];
    this.lastDropItems = [];
    if (this.lastDropEvent.event.dataTransfer?.files) {
      for (let i = 0; i < this.lastDropEvent.event.dataTransfer?.files.length; i++) {
        const file = this.lastDropEvent.event.dataTransfer?.files[i];
        this.lastDropFiles.push({
          lastModifiedDate: file.lastModified,
          name: file.name,
          type: file.type,
          size: file.size
        });
      }
      for (let i = 0; i < this.lastDropEvent.event.dataTransfer.items.length; i++) {
        const item = this.lastDropEvent.event.dataTransfer.items[i];
        this.lastDropItems.push({
          type: item.type,
          kind: item.kind,
          data: this.lastDropEvent.event.dataTransfer.getData(item.type)
        });
      }
    }
  }
  static \u0275fac = function NativeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NativeComponent)(\u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NativeComponent, selectors: [["dnd-native"]], decls: 29, vars: 5, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], ["appearance", "raised"], [1, "d-flex", "flex-column", "gap-3"], ["src", "https://i.imgflip.com/1quv8v.jpg"], ["href", "https://imgflip.com/i/1quv8v"], ["href", "#"], ["dndDropzone", "", 1, "mt-2", "p-2", "border", "rounded", 3, "dndDrop", "dndAllowExternal"], [4, "ngIf"]], template: function NativeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-card", 3)(4, "mat-card-header")(5, "mat-card-title");
      \u0275\u0275text(6, "Draggable stuff");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "mat-card-subtitle");
      \u0275\u0275text(8, " Drag the image or a text selection onto the dropzone and see what happens ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-card-content", 4)(10, "div");
      \u0275\u0275element(11, "img", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div")(13, "a", 6);
      \u0275\u0275text(14, "Made with imgflip");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "a", 7);
      \u0275\u0275text(16, " Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 2)(18, "mat-card", 3)(19, "mat-card-header")(20, "mat-card-title");
      \u0275\u0275text(21, "Dropzone");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "mat-card-content")(23, "div", 8);
      \u0275\u0275listener("dndDrop", function NativeComponent_Template_div_dndDrop_23_listener($event) {
        return ctx.onDrop($event);
      });
      \u0275\u0275elementStart(24, "div");
      \u0275\u0275template(25, NativeComponent_pre_25_Template, 3, 3, "pre", 9)(26, NativeComponent_pre_26_Template, 3, 3, "pre", 9)(27, NativeComponent_pre_27_Template, 3, 3, "pre", 9)(28, NativeComponent_pre_28_Template, 3, 3, "pre", 9);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("dndAllowExternal", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.lastDropEvent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastDropTypes && ctx.lastDropTypes.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastDropFiles && ctx.lastDropFiles.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lastDropItems && ctx.lastDropItems.length);
    }
  }, dependencies: [MatCardModule, MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle, DndDropzoneDirective, NgIf, JsonPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  box-sizing: border-box;\n}\npre[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=native.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeComponent, [{
    type: Component,
    args: [{ selector: "dnd-native", standalone: true, imports: [MatCardModule, DndDropzoneDirective, NgIf, JsonPipe], template: '<div class="container-fluid">\n  <div class="row">\n    <div class="col">\n      <mat-card appearance="raised">\n        <mat-card-header>\n          <mat-card-title>Draggable stuff</mat-card-title>\n          <mat-card-subtitle>\n            Drag the image or a text selection onto the dropzone and see what\n            happens\n          </mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content class="d-flex flex-column gap-3">\n          <div>\n            <img src="https://i.imgflip.com/1quv8v.jpg" />\n          </div>\n\n          <div>\n            <a href="https://imgflip.com/i/1quv8v">Made with imgflip</a>\n          </div>\n\n          <a href="#">\n            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam\n            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores\n            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est\n            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur\n            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore\n            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et\n            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,\n            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum\n            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod\n            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum\n            dolor sit amet.\n          </a>\n        </mat-card-content>\n      </mat-card>\n    </div>\n\n    <div class="col">\n      <mat-card appearance="raised">\n        <mat-card-header>\n          <mat-card-title>Dropzone</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <div\n            [dndAllowExternal]="true"\n            (dndDrop)="onDrop($event)"\n            class="mt-2 p-2 border rounded"\n            dndDropzone>\n            <div>\n              <pre *ngIf="lastDropEvent">Event: {{ lastDropEvent | json }}</pre>\n\n              <pre *ngIf="lastDropTypes && lastDropTypes.length">Types: {{ lastDropTypes | json }}</pre>\n\n              <pre *ngIf="lastDropFiles && lastDropFiles.length">Files: {{ lastDropFiles | json }}</pre>\n\n              <pre *ngIf="lastDropItems && lastDropItems.length">Items: {{ lastDropItems | json }}</pre>\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n    </div>\n  </div>\n</div>\n', styles: ["/* projects/demo/src/app/native/native.component.scss */\n:host {\n  display: block;\n  box-sizing: border-box;\n}\npre {\n  white-space: pre-wrap;\n  word-wrap: break-word;\n}\n/*# sourceMappingURL=native.component.css.map */\n"] }]
  }], () => [{ type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NativeComponent, { className: "NativeComponent", filePath: "projects/demo/src/app/native/native.component.ts", lineNumber: 14 });
})();
export {
  NativeComponent as default
};
//# sourceMappingURL=native.component-2EBFOADQ.js.map
