webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, "\n[dndDraggable] {\n\n  border: 1px gray solid;\n  padding: 5px;\n  cursor: pointer;\n}\n\n[dndDraggable].dndDragging:not(.dndDraggingSource) {\n\n  box-shadow: 0px 10px 20px -9px rgba(0, 0, 0, 0.75);\n  border: 1px cornflowerblue solid;\n}\n\n[dndDraggable].dndDraggingSource {\n\n  opacity: .5;\n}\n\n[dndHandle] {\n\n  display: inline-block;\n  padding: 4px;\n  border: 1px solid darkgray;\n  border-radius: 50%;\n}\n\n[dndDropzone] {\n\n  border: 1px red solid;\n  min-height: 200px;\n  padding: 8px;\n  margin: 8px;\n}\n\n[dndDropzone].dndDragover {\n\n  border-color: green;\n}\n\n.dropzone-content {\n\n  border: 1px gray solid;\n  padding: 8px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<div>\n\n  <h4>draggable state</h4>\n  <div>start: {{ started }}</div>\n  <div>end: {{ ended }}</div>\n  <div>effect: {{ effect }}</div>\n\n  <hr/>\n\n  <h4>dropzone state</h4>\n  <div>dragover:\n    <pre>{{ dragover | json }}</pre>\n  </div>\n  <div>drop:\n    <pre>{{ dropData | json }}</pre>\n  </div>\n\n</div>\n\n<div>\n\n  <section style=\"margin: 20px;\">\n\n    <div *ngFor=\"let draggable of draggables\"\n         [dndDraggable]=\"draggable.data\"\n         [dndEffectAllowed]=\"draggable.effectAllowed\"\n         [dndDisableIf]=\"draggable.disable\"\n         (dndStart)=\"started = true; ended = false; dragover = undefined; dropData = undefined;\"\n         (dndCopied)=\"effect = 'copied'\"\n         (dndLinked)=\"effect = 'linked'\"\n         (dndMoved)=\"effect = 'moved'\"\n         (dndCanceled)=\"effect = 'canceled'\"\n         (dndEnd)=\"ended = true; started = false\">\n      <div *ngIf=\"draggable.handle\"\n           dndHandle>DRAG HANDLE\n      </div>\n      draggable ({{draggable.effectAllowed}}) <span [hidden]=\"!draggable.disable\"> DISABLED</span>\n    </div>\n\n  </section>\n\n  <div style=\"border: 1px orangered solid; border-radius: 5px; padding: 15px;\"\n       #placeholder>placeholder\n  </div>\n\n  <section dndDropzone\n           (dndDragover)=\"dragover = $event\"\n           (dndDrop)=\"dropData = $event\"\n           [dndPlaceholder]=\"placeholder\">\n    dropzone\n\n    <section dndDropzone\n             (dndDragover)=\"dragover = $event\"\n             (dndDrop)=\"dropData = $event\"\n             [dndPlaceholder]=\"placeholder\">\n      dropzone 2\n\n      <div class=\"dropzone-content\">some other content in dropzone</div>\n\n    </section>\n\n    <section dndDropzone\n             (dndDragover)=\"dragover = $event\"\n             (dndDrop)=\"dropData = $event\">\n      dropzone 3 without placeholder\n\n      <div class=\"dropzone-content\">some other content in dropzone</div>\n\n    </section>\n\n  </section>\n\n</div>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DROP_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return MIME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return EDGE_MIME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return MSIE_MIME_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["h"] = getMimeType;
/* harmony export (immutable) */ __webpack_exports__["l"] = setDragData;
/* harmony export (immutable) */ __webpack_exports__["d"] = getDropData;
/* harmony export (immutable) */ __webpack_exports__["g"] = filterEffects;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDirectChildElement;
/* harmony export (immutable) */ __webpack_exports__["c"] = shouldPositionPlaceholderBeforeElement;
var DROP_EFFECTS = ["move", "copy", "link"];
var MIME_TYPE = "application/x-dnd";
var EDGE_MIME_TYPE = "application/json";
var MSIE_MIME_TYPE = "Text";
function getMimeType(event) {
    var types = event.dataTransfer.types;
    // IE 9 workaround.
    if (!types) {
        return MSIE_MIME_TYPE;
    }
    for (var i = 0; i < types.length; i++) {
        if (types[i] === MSIE_MIME_TYPE
            || types[i] === EDGE_MIME_TYPE
            || types[i].substr(0, MIME_TYPE.length) === MIME_TYPE) {
            return types[i];
        }
    }
    throw new Error("Could not retrieve mime type from drag event");
}
function setDragData(event, data, effectAllowed) {
    // Internet Explorer and Microsoft Edge don't support custom mime types, see design doc:
    // https://github.com/marceljuenemann/angular-drag-and-drop-lists/wiki/Data-Transfer-Design
    var mimeType = MIME_TYPE + (data.type ? ("-" + data.type) : "");
    var stringifiedData = JSON.stringify(data);
    try {
        event.dataTransfer.setData(mimeType, stringifiedData);
    }
    catch (e) {
        //   Setting a custom MIME type did not work, we are probably in IE or Edge.
        try {
            event.dataTransfer.setData(EDGE_MIME_TYPE, stringifiedData);
        }
        catch (e) {
            //   We are in Internet Explorer and can only use the Text MIME type. Also note that IE
            //   does not allow changing the cursor in the dragover event, therefore we have to choose
            //   the one we want to display now by setting effectAllowed.
            var effectsAllowed = filterEffects(DROP_EFFECTS, effectAllowed);
            event.dataTransfer.effectAllowed = effectsAllowed[0];
            event.dataTransfer.setData(MSIE_MIME_TYPE, stringifiedData);
        }
    }
}
function getDropData(event) {
    // Check whether the drop is allowed and determine mime type.
    var mimeType = getMimeType(event);
    return JSON.parse(event.dataTransfer.getData(mimeType));
}
function filterEffects(effects, allowed) {
    if (allowed === "all") {
        return effects;
    }
    return effects.filter(function (effect) {
        return allowed.toLowerCase().indexOf(effect) !== -1;
    });
}
function getDirectChildElement(parentElement, childElement) {
    var directChild = childElement.parentNode;
    while (directChild.parentNode !== parentElement) {
        // reached root node without finding given parent
        if (!directChild.parentNode) {
            return null;
        }
        directChild = directChild.parentNode;
    }
    return directChild;
}
function shouldPositionPlaceholderBeforeElement(event, element, horizontal) {
    var bounds = element.getBoundingClientRect();
    // If the pointer is in the upper half of the list item element,
    // we position the placeholder before the list item, otherwise after it.
    if (horizontal) {
        return (event.clientX < bounds.left + bounds.width / 2);
    }
    else {
        return (event.clientY < bounds.top + bounds.height / 2);
    }
}
//# sourceMappingURL=dnd-utils.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_utils__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndHandleDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DndHandleDirective = (function () {
    function DndHandleDirective(elementRef) {
        this.elementRef = elementRef;
        this.draggable = true;
    }
    DndHandleDirective.prototype.onDragEvent = function (event) {
        event._dndHandle = this.elementRef.nativeElement;
    };
    return DndHandleDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* HostBinding */])("attr.draggable"),
    __metadata("design:type", Object)
], DndHandleDirective.prototype, "draggable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])("dragstart", ["$event"]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])("dragend", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"]) === "function" && _a || Object]),
    __metadata("design:returntype", void 0)
], DndHandleDirective.prototype, "onDragEvent", null);
DndHandleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: "[dndHandle]"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object])
], DndHandleDirective);

var _a, _b;
//# sourceMappingURL=dnd-handle.directive.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dnd_utils__ = __webpack_require__(21);
/* harmony export (immutable) */ __webpack_exports__["e"] = startDrag;
/* harmony export (immutable) */ __webpack_exports__["f"] = endDrag;
/* harmony export (immutable) */ __webpack_exports__["d"] = setDropEffect;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDropEffect;
/* harmony export (immutable) */ __webpack_exports__["b"] = getItemType;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dndState; });

var _dndState = {
    isDragging: false,
    dropEffect: "none",
    effectAllowed: "all",
    type: undefined
};
function startDrag(event, effectAllowed, type) {
    _dndState.isDragging = true;
    _dndState.dropEffect = "none";
    _dndState.effectAllowed = effectAllowed;
    _dndState.type = type;
    event.dataTransfer.effectAllowed = effectAllowed;
}
function endDrag() {
    _dndState.isDragging = false;
    _dndState.dropEffect = undefined;
    _dndState.effectAllowed = undefined;
    _dndState.type = undefined;
}
function setDropEffect(event, dropEffect) {
    _dndState.dropEffect = dropEffect;
    event.dataTransfer.dropEffect = dropEffect;
}
function getDropEffect(event, effectAllowed) {
    var effects = __WEBPACK_IMPORTED_MODULE_0__dnd_utils__["f" /* DROP_EFFECTS */];
    effects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["g" /* filterEffects */])(effects, event.dataTransfer.effectAllowed);
    if (_dndState.isDragging) {
        effects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["g" /* filterEffects */])(effects, dndState.effectAllowed);
    }
    if (effectAllowed) {
        effects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["g" /* filterEffects */])(effects, effectAllowed);
    }
    // MacOS automatically filters dataTransfer.effectAllowed depending on the modifier keys,
    // therefore the following modifier keys will only affect other operating systems.
    if (effects.length === 0) {
        return "none";
    }
    if (event.ctrlKey && effects.indexOf("copy") !== -1) {
        return "copy";
    }
    if (event.altKey && effects.indexOf("link") !== -1) {
        return "link";
    }
    return effects[0];
}
function getItemType(event) {
    if (_dndState.isDragging) {
        return _dndState.type;
    }
    var mimeType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["h" /* getMimeType */])(event);
    if (mimeType === __WEBPACK_IMPORTED_MODULE_0__dnd_utils__["i" /* MSIE_MIME_TYPE */]
        || mimeType === __WEBPACK_IMPORTED_MODULE_0__dnd_utils__["j" /* EDGE_MIME_TYPE */]) {
        return undefined;
    }
    return (mimeType && mimeType.substr(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["k" /* MIME_TYPE */].length + 1)) || undefined;
}
var dndState = _dndState;
//# sourceMappingURL=dnd-state.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(85);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "dnd works!";
        this.draggables = [
            {
                data: "testdata",
                effectAllowed: "copy",
                disable: false,
                handle: false,
            },
            {
                data: "testdata",
                effectAllowed: "move",
                disable: false,
                handle: false,
            },
            {
                data: "testdata",
                effectAllowed: "link",
                disable: false,
                handle: false,
            },
            {
                data: "testdata",
                effectAllowed: "copy",
                disable: true,
                handle: false,
            },
            {
                data: "testdata",
                effectAllowed: "copy",
                disable: false,
                handle: true,
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* Component */])({
        selector: "dnd-root",
        template: __webpack_require__(140),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__html_drag_and_drop_drag_and_drop_module__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__html_drag_and_drop_drag_and_drop_module__["a" /* DragAndDropModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_handle_directive__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_state__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndDraggableDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DndDraggableDirective = (function () {
    function DndDraggableDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dndEffectAllowed = "copy";
        this.dndDisableIf = false;
        this.dndDraggingClass = "dndDragging";
        this.dndDraggingSourceClass = "dndDraggingSource";
        this.dndStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.dndEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.dndMoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.dndCopied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.dndLinked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.dndCanceled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.draggable = true;
    }
    DndDraggableDirective.prototype.ngOnChanges = function (changes) {
        if (changes.dndDisableIf) {
            this.draggable = !changes.dndDisableIf.currentValue;
        }
    };
    DndDraggableDirective.prototype.onDragStart = function (event) {
        var _this = this;
        if (this.draggable === false) {
            return false;
        }
        // check if there is dnd handle and if the dnd handle was used to start the drag
        if (typeof this.dndHandle !== "undefined"
            && typeof event._dndHandle === "undefined") {
            return false;
        }
        // initialize global state
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_state__["e" /* startDrag */])(event, this.dndEffectAllowed);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["l" /* setDragData */])(event, { data: this.dndDraggable, type: this.dndType }, __WEBPACK_IMPORTED_MODULE_3__dnd_state__["a" /* dndState */].effectAllowed);
        // set css
        this.renderer.addClass(this.elementRef.nativeElement, this.dndDraggingClass);
        window.setTimeout(function () {
            _this.renderer.addClass(_this.elementRef.nativeElement, _this.dndDraggingSourceClass);
        }, 0);
        // set dragimage if drag is started from dndHandle
        if (typeof event._dndHandle !== "undefined") {
            var offX = event.offsetX;
            var offY = event.offsetY;
            event.dataTransfer.setDragImage(this.elementRef.nativeElement, offX, offY);
        }
        this.dndStart.emit(event);
        event.stopPropagation();
    };
    DndDraggableDirective.prototype.onDragEnd = function (event) {
        var _this = this;
        // get drop effect from custom stored state as its not reliable across browsers
        var dropEffect = __WEBPACK_IMPORTED_MODULE_3__dnd_state__["a" /* dndState */].dropEffect;
        var dropEffectEmitter;
        switch (dropEffect) {
            case "copy":
                dropEffectEmitter = this.dndCopied;
                break;
            case "link":
                dropEffectEmitter = this.dndLinked;
                break;
            case "move":
                dropEffectEmitter = this.dndMoved;
                break;
            default:
                dropEffectEmitter = this.dndCanceled;
                break;
        }
        dropEffectEmitter.emit(event);
        this.dndEnd.emit(event);
        // reset global state
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_state__["f" /* endDrag */])();
        this.renderer.removeClass(this.elementRef.nativeElement, this.dndDraggingClass);
        this.renderer.removeClass(this.elementRef.nativeElement, this.dndDraggingClass);
        // IE9 special hammering
        window.setTimeout(function () {
            _this.renderer.removeClass(_this.elementRef.nativeElement, _this.dndDraggingSourceClass);
        }, 0);
        event.stopPropagation();
    };
    return DndDraggableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], DndDraggableDirective.prototype, "dndDraggable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["EffectAllowed"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["EffectAllowed"]) === "function" && _a || Object)
], DndDraggableDirective.prototype, "dndEffectAllowed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", String)
], DndDraggableDirective.prototype, "dndType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Boolean)
], DndDraggableDirective.prototype, "dndDisableIf", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], DndDraggableDirective.prototype, "dndDraggingClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], DndDraggableDirective.prototype, "dndDraggingSourceClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _b || Object)
], DndDraggableDirective.prototype, "dndStart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _c || Object)
], DndDraggableDirective.prototype, "dndEnd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _d || Object)
], DndDraggableDirective.prototype, "dndMoved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _e || Object)
], DndDraggableDirective.prototype, "dndCopied", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _f || Object)
], DndDraggableDirective.prototype, "dndLinked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _g || Object)
], DndDraggableDirective.prototype, "dndCanceled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* HostBinding */])("attr.draggable"),
    __metadata("design:type", Object)
], DndDraggableDirective.prototype, "draggable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__dnd_handle_directive__["a" /* DndHandleDirective */]),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__dnd_handle_directive__["a" /* DndHandleDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dnd_handle_directive__["a" /* DndHandleDirective */]) === "function" && _h || Object)
], DndDraggableDirective.prototype, "dndHandle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])("dragstart", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"]) === "function" && _j || Object]),
    __metadata("design:returntype", void 0)
], DndDraggableDirective.prototype, "onDragStart", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])("dragend", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDraggableDirective.prototype, "onDragEnd", null);
DndDraggableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: "[dndDraggable]"
    }),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Renderer2 */]) === "function" && _l || Object])
], DndDraggableDirective);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=dnd-draggable.directive.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_utils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_state__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndDropzoneDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DndDropzoneDirective = (function () {
    function DndDropzoneDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dndDisableIf = false;
        this.dndAllowExternal = false;
        this.dndHorizontal = false;
        this.dndPlaceholder = null;
        this.dndDragoverClass = "dndDragover";
        this.dndDragover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.dndDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
    }
    DndDropzoneDirective.prototype.ngOnInit = function () {
        if (this.dndPlaceholder !== null) {
            this.dndPlaceholder.remove();
            this.dndPlaceholder = this.dndPlaceholder.cloneNode(true);
        }
    };
    DndDropzoneDirective.prototype.isDropAllowed = function (type) {
        // dropzone is disabled -> deny it
        if (this.dndDisableIf === true) {
            return false;
        }
        // if drag did not start from our directive
        // and external drag sources are not allowed -> deny it
        if (__WEBPACK_IMPORTED_MODULE_2__dnd_state__["a" /* dndState */].isDragging === false
            && this.dndAllowExternal === false) {
            return false;
        }
        // no filtering by types -> allow it
        if (!this.dndDropzone) {
            return true;
        }
        // get optional item type
        if (!type) {
            // no type set -> allow it
            return true;
        }
        // if dropzone contains type -> allow it
        return this.dndDropzone.indexOf(type) !== -1;
    };
    DndDropzoneDirective.prototype.checkAndUpdatePlaceholderPosition = function (event) {
        if (this.dndPlaceholder === null) {
            return;
        }
        // make sure the placeholder is in the DOM
        if (this.dndPlaceholder.parentNode !== this.elementRef.nativeElement) {
            this.renderer.appendChild(this.elementRef.nativeElement, this.dndPlaceholder);
        }
        // update the position if the event originates from a child element of the dropzone
        var directChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["b" /* getDirectChildElement */])(this.elementRef.nativeElement, event.target);
        // early exit if no direct child or direct child is placeholder
        if (directChild === null
            || directChild === this.dndPlaceholder) {
            return;
        }
        var positionPlaceholderBeforeDirectChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["c" /* shouldPositionPlaceholderBeforeElement */])(event, directChild, this.dndHorizontal);
        if (positionPlaceholderBeforeDirectChild) {
            // do insert before only if necessary
            if (directChild.previousSibling !== this.dndPlaceholder) {
                this.renderer.insertBefore(this.elementRef.nativeElement, this.dndPlaceholder, directChild);
            }
        }
        else {
            // do insert after only if necessary
            if (directChild.nextSibling !== this.dndPlaceholder) {
                this.renderer.insertBefore(this.elementRef.nativeElement, this.dndPlaceholder, directChild.nextSibling);
            }
        }
    };
    DndDropzoneDirective.prototype.getPlaceholderIndex = function () {
        if (this.dndPlaceholder === null) {
            return undefined;
        }
        var element = this.elementRef.nativeElement;
        return Array.prototype.indexOf.call(element.childNodes, this.dndPlaceholder);
    };
    DndDropzoneDirective.prototype.cleanupDragoverState = function () {
        this.renderer.removeClass(this.elementRef.nativeElement, this.dndDragoverClass);
        if (this.dndPlaceholder !== null) {
            this.dndPlaceholder.remove();
        }
    };
    DndDropzoneDirective.prototype.onDragEnter = function (event) {
        // check if this drag event is allowed to drop on this dropzone
        var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["b" /* getItemType */])(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        // allow the dragenter
        event.preventDefault();
    };
    DndDropzoneDirective.prototype.onDragOver = function (event) {
        // check if this drag event is allowed to drop on this dropzone
        var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["b" /* getItemType */])(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        this.checkAndUpdatePlaceholderPosition(event);
        var dropEffect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["c" /* getDropEffect */])(event, this.dndEffectAllowed);
        if (dropEffect === "none") {
            this.cleanupDragoverState();
            return;
        }
        // allow the dragover
        event.preventDefault();
        // set the drop effect
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["d" /* setDropEffect */])(event, dropEffect);
        this.dndDragover.emit(event);
        this.renderer.addClass(this.elementRef.nativeElement, this.dndDragoverClass);
        event.stopPropagation();
    };
    DndDropzoneDirective.prototype.onDrop = function (event) {
        try {
            // check if this drag event is allowed to drop on this dropzone
            var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["b" /* getItemType */])(event);
            if (this.isDropAllowed(type) === false) {
                return;
            }
            var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["d" /* getDropData */])(event);
            if (this.isDropAllowed(data.type) === false) {
                return;
            }
            // signal custom drop handling
            event.preventDefault();
            var dropEffect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["c" /* getDropEffect */])(event);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["d" /* setDropEffect */])(event, dropEffect);
            if (dropEffect === "none") {
                return;
            }
            var dropIndex = this.getPlaceholderIndex();
            this.dndDrop.emit({
                event: event,
                data: data.data,
                index: dropIndex
            });
            event.stopPropagation();
        }
        finally {
            this.cleanupDragoverState();
        }
    };
    DndDropzoneDirective.prototype.onDragLeave = function (event) {
        // check if still inside this dropzone and not yet handled by another dropzone
        if (typeof event._dndDragLeaveHandled === "undefined") {
            var newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDragLeaveHandled = true;
                return;
            }
        }
        this.cleanupDragoverState();
    };
    return DndDropzoneDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Array)
], DndDropzoneDirective.prototype, "dndDropzone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DropEffect"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DropEffect"]) === "function" && _a || Object)
], DndDropzoneDirective.prototype, "dndEffectAllowed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Boolean)
], DndDropzoneDirective.prototype, "dndDisableIf", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Boolean)
], DndDropzoneDirective.prototype, "dndAllowExternal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Boolean)
], DndDropzoneDirective.prototype, "dndHorizontal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], DndDropzoneDirective.prototype, "dndPlaceholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", String)
], DndDropzoneDirective.prototype, "dndDragoverClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _b || Object)
], DndDropzoneDirective.prototype, "dndDragover", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _c || Object)
], DndDropzoneDirective.prototype, "dndDrop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])("dragenter", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDropzoneDirective.prototype, "onDragEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])("dragover", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDropzoneDirective.prototype, "onDragOver", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])("drop", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDropzoneDirective.prototype, "onDrop", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostListener */])("dragleave", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"]) === "function" && _d || Object]),
    __metadata("design:returntype", void 0)
], DndDropzoneDirective.prototype, "onDragLeave", null);
DndDropzoneDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Directive */])({
        selector: "[dndDropzone]"
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Renderer2 */]) === "function" && _f || Object])
], DndDropzoneDirective);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=dnd-dropzone.directive.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_draggable_directive__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_dropzone_directive__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dnd_handle_directive__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DragAndDropModule = (function () {
    function DragAndDropModule() {
    }
    return DragAndDropModule;
}());
DragAndDropModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dnd_draggable_directive__["a" /* DndDraggableDirective */],
            __WEBPACK_IMPORTED_MODULE_3__dnd_dropzone_directive__["a" /* DndDropzoneDirective */],
            __WEBPACK_IMPORTED_MODULE_4__dnd_handle_directive__["a" /* DndHandleDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__dnd_draggable_directive__["a" /* DndDraggableDirective */],
            __WEBPACK_IMPORTED_MODULE_3__dnd_dropzone_directive__["a" /* DndDropzoneDirective */],
            __WEBPACK_IMPORTED_MODULE_4__dnd_handle_directive__["a" /* DndHandleDirective */]
        ]
    })
], DragAndDropModule);

//# sourceMappingURL=drag-and-drop.module.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[165]);
//# sourceMappingURL=main.bundle.js.map