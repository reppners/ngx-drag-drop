webpackJsonp([1,4],{

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 117;


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(150);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(sanitizer, iconRegistry) {
        this.title = "NgxDragDrop";
        iconRegistry.addSvgIcon("github", sanitizer.bypassSecurityTrustResourceUrl("assets/github.svg"));
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: "dnd-root",
        template: __webpack_require__(213),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdIconRegistry */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dnd_index__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo_simple_simple_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_list_list_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_native_native_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_horizontal_list_horizontal_list_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo_typed_typed_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo_nested_nested_component__ = __webpack_require__(146);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__demo_simple_simple_component__["a" /* SimpleComponent */],
            __WEBPACK_IMPORTED_MODULE_10__demo_list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__demo_native_native_component__["a" /* NativeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__demo_horizontal_list_horizontal_list_component__["a" /* HorizontalListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__demo_typed_typed_component__["a" /* TypedComponent */],
            __WEBPACK_IMPORTED_MODULE_14__demo_nested_nested_component__["a" /* NestedComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_8__dnd_index__["DndModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorizontalListComponent = (function () {
    function HorizontalListComponent() {
    }
    HorizontalListComponent.prototype.ngOnInit = function () {
    };
    return HorizontalListComponent;
}());
HorizontalListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'dnd-horizontal-list',
        template: __webpack_require__(214),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [])
], HorizontalListComponent);

//# sourceMappingURL=horizontal-list.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(snackBarService) {
        this.snackBarService = snackBarService;
        this.draggableListLeft = [
            {
                content: "Left",
                effectAllowed: "move",
                disable: false,
                handle: false,
            },
            {
                content: "Lefter",
                effectAllowed: "move",
                disable: false,
                handle: false,
            },
            {
                content: "Leftest",
                effectAllowed: "copy",
                disable: false,
                handle: false
            },
            {
                content: "Lefty",
                effectAllowed: "move",
                disable: false,
                handle: true,
            }
        ];
        this.draggableListRight = [
            {
                content: "I was originally right",
                effectAllowed: "move",
                disable: false,
                handle: false,
            }
        ];
    }
    ListComponent.prototype.onDragStart = function (event) {
        this.currentDragEffectMsg = "";
        this.currentDraggableEvent = event;
        this.snackBarService.dismiss();
        this.snackBarService.open("Drag started!", undefined, { duration: 2000 });
    };
    ListComponent.prototype.onDragged = function (item, list, effect) {
        this.currentDragEffectMsg = "Drag ended with effect \"" + effect + "\"!";
        if (effect === "move") {
            var index = list.indexOf(item);
            list.splice(index, 1);
        }
    };
    ListComponent.prototype.onDragEnd = function (event) {
        this.currentDraggableEvent = event;
        this.snackBarService.dismiss();
        this.snackBarService.open(this.currentDragEffectMsg || "Drag ended!", undefined, { duration: 2000 });
    };
    ListComponent.prototype.onDrop = function (event, list) {
        this.snackBarService.dismiss();
        this.snackBarService.open("Something dropped O.O");
        if (event.dropEffect === "copy"
            || event.dropEffect === "move") {
            var index = event.index;
            if (typeof index === "undefined") {
                index = list.length;
            }
            list.splice(index, 0, event.data);
        }
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: "dnd-list",
        template: __webpack_require__(215),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object])
], ListComponent);

var _a;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NativeComponent = (function () {
    function NativeComponent() {
    }
    NativeComponent.prototype.ngOnInit = function () {
    };
    return NativeComponent;
}());
NativeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'dnd-native',
        template: __webpack_require__(216),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [])
], NativeComponent);

//# sourceMappingURL=native.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NestedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NestedComponent = (function () {
    function NestedComponent() {
    }
    NestedComponent.prototype.ngOnInit = function () {
    };
    return NestedComponent;
}());
NestedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'dnd-nested',
        template: __webpack_require__(217),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [])
], NestedComponent);

//# sourceMappingURL=nested.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleComponent = (function () {
    function SimpleComponent(snackBarService) {
        this.snackBarService = snackBarService;
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
                handle: false
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
        this.draggableWithDragImage = {
            data: "testdata",
            effectAllowed: "copy",
            disable: false,
            handle: false
        };
    }
    SimpleComponent.prototype.onDragStart = function (event) {
        this.currentDragEffectMsg = "";
        this.currentDraggableEvent = event;
        this.snackBarService.dismiss();
        this.snackBarService.open("Drag started!", undefined, { duration: 2000 });
    };
    SimpleComponent.prototype.onDragged = function ($event, effect) {
        this.currentDragEffectMsg = "Drag ended with effect \"" + effect + "\"!";
    };
    SimpleComponent.prototype.onDragEnd = function (event) {
        this.currentDraggableEvent = event;
        this.snackBarService.dismiss();
        this.snackBarService.open(this.currentDragEffectMsg || "Drag ended!", undefined, { duration: 2000 });
    };
    SimpleComponent.prototype.onDrop = function (event) {
        this.snackBarService.dismiss();
        this.snackBarService.open("Something dropped O.O");
    };
    return SimpleComponent;
}());
SimpleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: "dnd-simple",
        template: __webpack_require__(218),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSnackBar */]) === "function" && _a || Object])
], SimpleComponent);

var _a;
//# sourceMappingURL=simple.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypedComponent = (function () {
    function TypedComponent() {
    }
    TypedComponent.prototype.ngOnInit = function () {
    };
    return TypedComponent;
}());
TypedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'dnd-typed',
        template: __webpack_require__(219),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], TypedComponent);

//# sourceMappingURL=typed.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_draggable_directive__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_dropzone_directive__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dnd_handle_directive__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dnd_element_ref_directive__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dnd_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dnd_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__dnd_types__);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DndModule", function() { return DndModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DndModule = (function () {
    function DndModule() {
    }
    return DndModule;
}());
DndModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dnd_draggable_directive__["a" /* DndDraggableDirective */],
            __WEBPACK_IMPORTED_MODULE_3__dnd_dropzone_directive__["a" /* DndDropzoneDirective */],
            __WEBPACK_IMPORTED_MODULE_4__dnd_handle_directive__["a" /* DndHandleDirective */],
            __WEBPACK_IMPORTED_MODULE_5__dnd_element_ref_directive__["a" /* DndElementRefDirective */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__dnd_draggable_directive__["a" /* DndDraggableDirective */],
            __WEBPACK_IMPORTED_MODULE_3__dnd_dropzone_directive__["a" /* DndDropzoneDirective */],
            __WEBPACK_IMPORTED_MODULE_4__dnd_handle_directive__["a" /* DndHandleDirective */],
            __WEBPACK_IMPORTED_MODULE_5__dnd_element_ref_directive__["a" /* DndElementRefDirective */]
        ]
    })
], DndModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 150:
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

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n:host {\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.scrollable {\n\n  -webkit-overflow-scrolling: touch;\n  overflow: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\"\n            class=\"mat-elevation-z4\">\n  <span>{{title}}</span>\n  <span fxFlex></span>\n  <a md-icon-button\n     href=\"https://github.com/reppners/ngx-drag-drop\">\n    <md-icon svgIcon=\"github\"></md-icon>\n  </a>\n</md-toolbar>\n\n<md-list fxFlex\n         fxLayout=\"column\"\n         class=\"scrollable layout-padding\">\n\n  <h1 class=\"mat-title\">Simple</h1>\n\n  <dnd-simple></dnd-simple>\n\n  <md-divider></md-divider>\n\n  <h1 class=\"mat-title\">Lists</h1>\n\n  <dnd-list></dnd-list>\n\n  <md-divider></md-divider>\n\n  <h1 class=\"mat-title\">Nested</h1>\n\n  <dnd-nested></dnd-nested>\n\n  <md-divider></md-divider>\n\n  <h1 class=\"mat-title\">Horizontal</h1>\n\n  <dnd-horizontal-list></dnd-horizontal-list>\n\n  <md-divider></md-divider>\n\n  <h1 class=\"mat-title\">Native</h1>\n\n  <dnd-native></dnd-native>\n\n  <md-divider></md-divider>\n\n  <h1 class=\"mat-title\">Typed</h1>\n\n  <dnd-typed></dnd-typed>\n\n  <md-divider></md-divider>\n\n</md-list>\n"

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

module.exports = "<p>\n  horizontal-list works!\n</p>\n"

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"\n     class=\"layout-padding\">\n\n  <md-list dndDropzone\n           (dndDrop)=\"onDrop($event, draggableListLeft)\">\n\n    <md-list-item dndPlaceholderRef>\n      placeholder\n    </md-list-item>\n\n    <md-list-item *ngFor=\"let item of draggableListLeft\"\n                  [dndDraggable]=\"item\"\n                  [dndEffectAllowed]=\"item.effectAllowed\"\n                  [dndDisableIf]=\"item.disable\"\n                  (dndStart)=\"onDragStart($event)\"\n                  (dndCopied)=\"onDragged(item, draggableListLeft, 'copy')\"\n                  (dndLinked)=\"onDragged(item, draggableListLeft, 'link')\"\n                  (dndMoved)=\"onDragged(item, draggableListLeft, 'move')\"\n                  (dndCanceled)=\"onDragged(item, draggableListLeft, 'none')\"\n                  (dndEnd)=\"onDragEnd($event)\">\n      <md-icon *ngIf=\"item.handle\"\n               md-list-icon\n               dndHandle>drag_handle\n      </md-icon>\n      <h1 md-line>{{item.content}}</h1>\n      <p md-line>effectAllowed: {{item.effectAllowed}}</p>\n    </md-list-item>\n\n  </md-list>\n\n  <md-list dndDropzone\n           (dndDrop)=\"onDrop($event, draggableListRight)\">\n\n    <md-list-item dndPlaceholderRef>\n      placeholder\n    </md-list-item>\n\n    <md-list-item *ngFor=\"let item of draggableListRight\"\n                  [dndDraggable]=\"item\"\n                  [dndEffectAllowed]=\"item.effectAllowed\"\n                  [dndDisableIf]=\"item.disable\"\n                  (dndStart)=\"onDragStart($event)\"\n                  (dndCopied)=\"onDragged(item, draggableListRight, 'copy')\"\n                  (dndLinked)=\"onDragged(item, draggableListRight, 'link')\"\n                  (dndMoved)=\"onDragged(item, draggableListRight, 'move')\"\n                  (dndCanceled)=\"onDragged(item, draggableListRight, 'none')\"\n                  (dndEnd)=\"onDragEnd($event)\">\n      <md-icon *ngIf=\"item.handle\"\n               md-list-icon\n               dndHandle>drag_handle\n      </md-icon>\n      <h1 md-line>{{item.content}}</h1>\n      <p md-line>effectAllowed: {{item.effectAllowed}}</p>\n    </md-list-item>\n\n  </md-list>\n\n</div>\n"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<img src=\"https://i.imgflip.com/1quv8v.jpg\"/>\n\n<a href=\"https://imgflip.com/i/1quv8v\">Made with imgflip</a>\n\n<div><input value=\"just some text to select and drag\"/></div>\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<p>\n  nested works!\n</p>\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"\n     class=\"layout-padding\">\n\n  <section fxFlex\n           fxLayout=\"column\">\n\n    <md-card *ngFor=\"let draggable of draggables\"\n             [dndDraggable]=\"draggable.data\"\n             [dndEffectAllowed]=\"draggable.effectAllowed\"\n             [dndDisableIf]=\"draggable.disable\"\n             (dndStart)=\"onDragStart($event)\"\n             (dndCopied)=\"onDragged($event, 'copied')\"\n             (dndLinked)=\"onDragged($event, 'linked')\"\n             (dndMoved)=\"onDragged($event, 'moved')\"\n             (dndCanceled)=\"onDragged($event, 'none')\"\n             (dndEnd)=\"onDragEnd($event)\">\n\n      <md-icon *ngIf=\"draggable.handle\"\n               md-list-icon\n               dndHandle>drag_handle\n      </md-icon>\n\n      draggable ({{draggable.effectAllowed}})\n      <span [hidden]=\"!draggable.handle\"> only with handle</span>\n      <span [hidden]=\"!draggable.disable\"> DISABLED</span>\n\n    </md-card>\n\n    <md-card [dndDraggable]=\"draggableWithDragImage\"\n             [dndEffectAllowed]=\"draggableWithDragImage.effectAllowed\"\n             [dndDisableIf]=\"draggableWithDragImage.disable\"\n             (dndStart)=\"onDragStart($event)\"\n             (dndCopied)=\"onDragged($event, 'copied')\"\n             (dndLinked)=\"onDragged($event, 'linked')\"\n             (dndMoved)=\"onDragged($event, 'moved')\"\n             (dndCanceled)=\"onDragged($event, 'none')\"\n             (dndEnd)=\"onDragEnd($event)\">\n\n      <md-icon *ngIf=\"draggableWithDragImage.handle\"\n               md-list-icon\n               dndHandle>drag_handle\n      </md-icon>\n\n      draggable ({{draggableWithDragImage.effectAllowed}})\n      <span [hidden]=\"!draggableWithDragImage.handle\"> only with handle</span>\n      <span [hidden]=\"!draggableWithDragImage.disable\"> DISABLED</span>\n\n      <div dndDragImageRef>MY_CUSTOM_DRAG_IMAGE</div>\n\n    </md-card>\n\n  </section>\n\n  <section dndDropzone\n           (dndDragover)=\"dragover = $event\"\n           (dndDrop)=\"onDrop($event)\">\n\n    <div style=\"border: 1px orangered solid; border-radius: 5px; padding: 15px;\"\n         dndPlaceholderRef>placeholder\n    </div>\n\n  </section>\n\n</div>\n"

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<p>\n  typed works!\n</p>\n"

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(118);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DROP_EFFECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return CUSTOM_MIME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return JSON_MIME_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MSIE_MIME_TYPE; });
/* harmony export (immutable) */ __webpack_exports__["g"] = getWellKnownMimeType;
/* harmony export (immutable) */ __webpack_exports__["k"] = setDragData;
/* harmony export (immutable) */ __webpack_exports__["d"] = getDropData;
/* harmony export (immutable) */ __webpack_exports__["f"] = filterEffects;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDirectChildElement;
/* harmony export (immutable) */ __webpack_exports__["c"] = shouldPositionPlaceholderBeforeElement;
/* harmony export (immutable) */ __webpack_exports__["l"] = setDragImage;
var DROP_EFFECTS = ["move", "copy", "link"];
var CUSTOM_MIME_TYPE = "application/x-dnd";
var JSON_MIME_TYPE = "application/json";
var MSIE_MIME_TYPE = "Text";
function mimeTypeIsCustom(mimeType) {
    return mimeType.substr(0, CUSTOM_MIME_TYPE.length) === CUSTOM_MIME_TYPE;
}
function getWellKnownMimeType(event) {
    var types = event.dataTransfer.types;
    // IE 9 workaround.
    if (!types) {
        return MSIE_MIME_TYPE;
    }
    for (var i = 0; i < types.length; i++) {
        if (types[i] === MSIE_MIME_TYPE
            || types[i] === JSON_MIME_TYPE
            || mimeTypeIsCustom(types[i])) {
            return types[i];
        }
    }
    return null;
}
function setDragData(event, data, effectAllowed) {
    // Internet Explorer and Microsoft Edge don't support custom mime types, see design doc:
    // https://github.com/marceljuenemann/angular-drag-and-drop-lists/wiki/Data-Transfer-Design
    var mimeType = CUSTOM_MIME_TYPE + (data.type ? ("-" + data.type) : "");
    var dataString = JSON.stringify(data);
    try {
        event.dataTransfer.setData(mimeType, dataString);
    }
    catch (e) {
        //   Setting a custom MIME type did not work, we are probably in IE or Edge.
        try {
            event.dataTransfer.setData(JSON_MIME_TYPE, dataString);
        }
        catch (e) {
            //   We are in Internet Explorer and can only use the Text MIME type. Also note that IE
            //   does not allow changing the cursor in the dragover event, therefore we have to choose
            //   the one we want to display now by setting effectAllowed.
            var effectsAllowed = filterEffects(DROP_EFFECTS, effectAllowed);
            event.dataTransfer.effectAllowed = effectsAllowed[0];
            event.dataTransfer.setData(MSIE_MIME_TYPE, dataString);
        }
    }
}
function getDropData(event, dragIsExternal) {
    // check if the mime type is well known
    var mimeType = getWellKnownMimeType(event);
    // drag did not originate from [dndDraggable]
    if (dragIsExternal === true) {
        if (mimeType !== null
            && mimeTypeIsCustom(mimeType)) {
            // the type of content is well known and safe to handle
            return JSON.parse(event.dataTransfer.getData(mimeType));
        }
        // the contained data is unknown, let user handle it
        return {};
    }
    // the type of content is well known and safe to handle
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
    return (event.clientY < bounds.top + bounds.height / 2);
}
function setDragImage(event, dragImage) {
    // TODO include dragImage padding/border into offset calculation?
    var offX = event.offsetX;
    var offY = event.offsetY;
    event.dataTransfer.setDragImage(dragImage, offX, offY);
}
//# sourceMappingURL=dnd-utils.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DndElementRefDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DndElementRefDirective = (function () {
    function DndElementRefDirective(elementRef) {
        this.elementRef = elementRef;
    }
    return DndElementRefDirective;
}());
DndElementRefDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: "[dndPlaceholderRef], [dndDragImageRef]"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _a || Object])
], DndElementRefDirective);

var _a;
//# sourceMappingURL=dnd-element-ref.directive.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_utils__ = __webpack_require__(38);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* HostBinding */])("attr.draggable"),
    __metadata("design:type", Object)
], DndHandleDirective.prototype, "draggable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])("dragstart", ["$event"]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])("dragend", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"]) === "function" && _a || Object]),
    __metadata("design:returntype", void 0)
], DndHandleDirective.prototype, "onDragEvent", null);
DndHandleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: "[dndHandle]"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _b || Object])
], DndHandleDirective);

var _a, _b;
//# sourceMappingURL=dnd-handle.directive.js.map

/***/ }),

/***/ 55:
/***/ (function(module, exports) {

//# sourceMappingURL=dnd-types.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_utils__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_handle_directive__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_state__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dnd_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dnd_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dnd_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dnd_element_ref_directive__ = __webpack_require__(53);
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
        this.dndStart = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.dndEnd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.dndMoved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.dndCopied = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.dndLinked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.dndCanceled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.draggable = true;
    }
    DndDraggableDirective.prototype.ngOnInit = function () {
        // evaluate custom drag image existence
        if (typeof this.dndDragImageRef !== "undefined") {
            this.dragImage = this.dndDragImageRef.elementRef.nativeElement;
        }
        else {
            this.dragImage = this.elementRef.nativeElement;
        }
    };
    DndDraggableDirective.prototype.ngOnChanges = function (changes) {
        // reevaluate dragability
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["k" /* setDragData */])(event, { data: this.dndDraggable, type: this.dndType }, __WEBPACK_IMPORTED_MODULE_3__dnd_state__["f" /* dndState */].effectAllowed);
        // add dragging source css class on first drag event
        var unregister = this.renderer.listen(this.elementRef.nativeElement, "drag", function () {
            _this.renderer.addClass(_this.elementRef.nativeElement, _this.dndDraggingSourceClass);
            unregister();
        });
        // set dragging css class prior to setDragImage so styles are applied before
        this.renderer.addClass(this.dragImage, this.dndDraggingClass);
        // set custom dragimage if present
        // set dragimage if drag is started from dndHandle
        if (typeof this.dndDragImageRef !== "undefined"
            || typeof event._dndHandle !== "undefined") {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["l" /* setDragImage */])(event, this.dragImage);
        }
        this.dndStart.emit(event);
        event.stopPropagation();
    };
    DndDraggableDirective.prototype.onDragEnd = function (event) {
        var _this = this;
        // get drop effect from custom stored state as its not reliable across browsers
        var dropEffect = __WEBPACK_IMPORTED_MODULE_3__dnd_state__["f" /* dndState */].dropEffect;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dnd_state__["g" /* endDrag */])();
        this.renderer.removeClass(this.dragImage, this.dndDraggingClass);
        // IE9 special hammering
        window.setTimeout(function () {
            _this.renderer.removeClass(_this.elementRef.nativeElement, _this.dndDraggingSourceClass);
        }, 0);
        event.stopPropagation();
    };
    return DndDraggableDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], DndDraggableDirective.prototype, "dndDraggable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__dnd_types__["EffectAllowed"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dnd_types__["EffectAllowed"]) === "function" && _a || Object)
], DndDraggableDirective.prototype, "dndEffectAllowed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], DndDraggableDirective.prototype, "dndType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Boolean)
], DndDraggableDirective.prototype, "dndDisableIf", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], DndDraggableDirective.prototype, "dndDraggingClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Object)
], DndDraggableDirective.prototype, "dndDraggingSourceClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _b || Object)
], DndDraggableDirective.prototype, "dndStart", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _c || Object)
], DndDraggableDirective.prototype, "dndEnd", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _d || Object)
], DndDraggableDirective.prototype, "dndMoved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _e || Object)
], DndDraggableDirective.prototype, "dndCopied", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _f || Object)
], DndDraggableDirective.prototype, "dndLinked", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _g || Object)
], DndDraggableDirective.prototype, "dndCanceled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* HostBinding */])("attr.draggable"),
    __metadata("design:type", Object)
], DndDraggableDirective.prototype, "draggable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__dnd_handle_directive__["a" /* DndHandleDirective */]),
    __metadata("design:type", typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__dnd_handle_directive__["a" /* DndHandleDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__dnd_handle_directive__["a" /* DndHandleDirective */]) === "function" && _h || Object)
], DndDraggableDirective.prototype, "dndHandle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_5__dnd_element_ref_directive__["a" /* DndElementRefDirective */]),
    __metadata("design:type", typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_5__dnd_element_ref_directive__["a" /* DndElementRefDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__dnd_element_ref_directive__["a" /* DndElementRefDirective */]) === "function" && _j || Object)
], DndDraggableDirective.prototype, "dndDragImageRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])("dragstart", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"]) === "function" && _k || Object]),
    __metadata("design:returntype", void 0)
], DndDraggableDirective.prototype, "onDragStart", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])("dragend", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDraggableDirective.prototype, "onDragEnd", null);
DndDraggableDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: "[dndDraggable]"
    }),
    __metadata("design:paramtypes", [typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Renderer2 */]) === "function" && _m || Object])
], DndDraggableDirective);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
//# sourceMappingURL=dnd-draggable.directive.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnd_utils__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dnd_state__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_types__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dnd_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dnd_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dnd_element_ref_directive__ = __webpack_require__(53);
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
        this.dndDragoverClass = "dndDragover";
        this.dndDragover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.dndDrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]();
        this.placeholder = null;
    }
    DndDropzoneDirective.prototype.ngOnInit = function () {
        if (typeof this.dndPlaceholder !== "undefined") {
            this.placeholder = this.dndPlaceholder.elementRef.nativeElement;
            this.placeholder.remove();
        }
    };
    DndDropzoneDirective.prototype.isDropAllowed = function (type) {
        // dropzone is disabled -> deny it
        if (this.dndDisableIf === true) {
            return false;
        }
        // if drag did not start from our directive
        // and external drag sources are not allowed -> deny it
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["a" /* isExternalDrag */])() === true
            && this.dndAllowExternal === false) {
            return false;
        }
        // no filtering by types -> allow it
        if (!this.dndDropzone) {
            return true;
        }
        // no type set -> allow it
        if (!type) {
            return true;
        }
        // if dropzone contains type -> allow it
        return this.dndDropzone.indexOf(type) !== -1;
    };
    DndDropzoneDirective.prototype.checkAndUpdatePlaceholderPosition = function (event) {
        if (this.placeholder === null) {
            return;
        }
        // make sure the placeholder is in the DOM
        if (this.placeholder.parentNode !== this.elementRef.nativeElement) {
            this.renderer.appendChild(this.elementRef.nativeElement, this.placeholder);
        }
        // update the position if the event originates from a child element of the dropzone
        var directChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["b" /* getDirectChildElement */])(this.elementRef.nativeElement, event.target);
        // early exit if no direct child or direct child is placeholder
        if (directChild === null
            || directChild === this.placeholder) {
            return;
        }
        var positionPlaceholderBeforeDirectChild = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["c" /* shouldPositionPlaceholderBeforeElement */])(event, directChild, this.dndHorizontal);
        if (positionPlaceholderBeforeDirectChild) {
            // do insert before only if necessary
            if (directChild.previousSibling !== this.placeholder) {
                this.renderer.insertBefore(this.elementRef.nativeElement, this.placeholder, directChild);
            }
        }
        else {
            // do insert after only if necessary
            if (directChild.nextSibling !== this.placeholder) {
                this.renderer.insertBefore(this.elementRef.nativeElement, this.placeholder, directChild.nextSibling);
            }
        }
    };
    DndDropzoneDirective.prototype.getPlaceholderIndex = function () {
        if (this.placeholder === null) {
            return undefined;
        }
        var element = this.elementRef.nativeElement;
        return Array.prototype.indexOf.call(element.children, this.placeholder);
    };
    DndDropzoneDirective.prototype.cleanupDragoverState = function () {
        this.renderer.removeClass(this.elementRef.nativeElement, this.dndDragoverClass);
        if (this.placeholder !== null) {
            this.placeholder.remove();
        }
    };
    DndDropzoneDirective.prototype.onDragEnter = function (event) {
        // check if another dropzone is activated
        if (event._dndDropzoneActive === true) {
            this.cleanupDragoverState();
            return;
        }
        // set as active if the target element is inside this dropzone
        if (typeof event._dndDropzoneActive === "undefined") {
            var newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
            }
        }
        // check if this drag event is allowed to drop on this dropzone
        var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["b" /* getDndType */])(event);
        if (this.isDropAllowed(type) === false) {
            return;
        }
        // allow the dragenter
        event.preventDefault();
    };
    DndDropzoneDirective.prototype.onDragOver = function (event) {
        // check if this drag event is allowed to drop on this dropzone
        var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["b" /* getDndType */])(event);
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
            var type = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["b" /* getDndType */])(event);
            if (this.isDropAllowed(type) === false) {
                return;
            }
            var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dnd_utils__["d" /* getDropData */])(event, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["a" /* isExternalDrag */])());
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
                dropEffect: dropEffect,
                isExternal: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["a" /* isExternalDrag */])(),
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
        if (typeof event._dndDropzoneActive === "undefined") {
            var newTarget = document.elementFromPoint(event.clientX, event.clientY);
            if (this.elementRef.nativeElement.contains(newTarget)) {
                event._dndDropzoneActive = true;
                return;
            }
        }
        this.cleanupDragoverState();
        // cleanup drop effect when leaving dropzone
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dnd_state__["d" /* setDropEffect */])(event, "none");
    };
    return DndDropzoneDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Array)
], DndDropzoneDirective.prototype, "dndDropzone", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__dnd_types__["EffectAllowed"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__dnd_types__["EffectAllowed"]) === "function" && _a || Object)
], DndDropzoneDirective.prototype, "dndEffectAllowed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Boolean)
], DndDropzoneDirective.prototype, "dndDisableIf", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Boolean)
], DndDropzoneDirective.prototype, "dndAllowExternal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", Boolean)
], DndDropzoneDirective.prototype, "dndHorizontal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", String)
], DndDropzoneDirective.prototype, "dndDragoverClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _b || Object)
], DndDropzoneDirective.prototype, "dndDragover", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* EventEmitter */]) === "function" && _c || Object)
], DndDropzoneDirective.prototype, "dndDrop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_4__dnd_element_ref_directive__["a" /* DndElementRefDirective */]),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__dnd_element_ref_directive__["a" /* DndElementRefDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__dnd_element_ref_directive__["a" /* DndElementRefDirective */]) === "function" && _d || Object)
], DndDropzoneDirective.prototype, "dndPlaceholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])("dragenter", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"]) === "function" && _e || Object]),
    __metadata("design:returntype", void 0)
], DndDropzoneDirective.prototype, "onDragEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])("dragover", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDropzoneDirective.prototype, "onDragOver", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])("drop", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DndDropzoneDirective.prototype, "onDrop", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* HostListener */])("dragleave", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnd_utils__["DndEvent"]) === "function" && _f || Object]),
    __metadata("design:returntype", void 0)
], DndDropzoneDirective.prototype, "onDragLeave", null);
DndDropzoneDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Directive */])({
        selector: "[dndDropzone]"
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Renderer2 */]) === "function" && _h || Object])
], DndDropzoneDirective);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=dnd-dropzone.directive.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dnd_utils__ = __webpack_require__(38);
/* harmony export (immutable) */ __webpack_exports__["e"] = startDrag;
/* harmony export (immutable) */ __webpack_exports__["g"] = endDrag;
/* harmony export (immutable) */ __webpack_exports__["d"] = setDropEffect;
/* harmony export (immutable) */ __webpack_exports__["c"] = getDropEffect;
/* harmony export (immutable) */ __webpack_exports__["b"] = getDndType;
/* harmony export (immutable) */ __webpack_exports__["a"] = isExternalDrag;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return dndState; });

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
    if (_dndState.isDragging === true) {
        _dndState.dropEffect = dropEffect;
    }
    event.dataTransfer.dropEffect = dropEffect;
}
function getDropEffect(event, effectAllowed) {
    var effects = __WEBPACK_IMPORTED_MODULE_0__dnd_utils__["e" /* DROP_EFFECTS */];
    effects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["f" /* filterEffects */])(effects, event.dataTransfer.effectAllowed);
    if (_dndState.isDragging === true) {
        effects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["f" /* filterEffects */])(effects, _dndState.effectAllowed);
    }
    if (effectAllowed) {
        effects = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["f" /* filterEffects */])(effects, effectAllowed);
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
function getDndType(event) {
    if (_dndState.isDragging === true) {
        return _dndState.type;
    }
    var mimeType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["g" /* getWellKnownMimeType */])(event);
    if (mimeType === null) {
        return undefined;
    }
    if (mimeType === __WEBPACK_IMPORTED_MODULE_0__dnd_utils__["h" /* MSIE_MIME_TYPE */]
        || mimeType === __WEBPACK_IMPORTED_MODULE_0__dnd_utils__["i" /* JSON_MIME_TYPE */]) {
        return undefined;
    }
    return mimeType.substr(__WEBPACK_IMPORTED_MODULE_0__dnd_utils__["j" /* CUSTOM_MIME_TYPE */].length + 1) || undefined;
}
function isExternalDrag() {
    return _dndState.isDragging === false;
}
var dndState = _dndState;
//# sourceMappingURL=dnd-state.js.map

/***/ })

},[271]);
//# sourceMappingURL=main.bundle.js.map