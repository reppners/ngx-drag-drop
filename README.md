[![npm](https://img.shields.io/npm/v/ngx-drag-drop.svg)](https://www.npmjs.com/package/ngx-drag-drop)
[![GitHub issues](https://img.shields.io/github/issues/reppners/ngx-drag-drop.svg)](https://github.com/reppners/ngx-drag-drop/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/reppners/ngx-drag-drop.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


**This project is currently under development!**

# NgxDragDrop

Port of [angular-drag-drop-lists](https://github.com/marceljuenemann/angular-drag-and-drop-lists) but without the lists :wink:

This has `dropzones` though :+1:
The idea is that the directive does not handle lists internally so the `dndDropzone` can be general purpose.

For touch support please use this [polyfill](https://github.com/timruffles/ios-html5-drag-drop-shim/tree/rewrite).

## Usage

`npm install ngx-drag-drop`

```JS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DndModule, DndDropEvent } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  draggable = {
    // note that data is handled with JSON.stringify/JSON.parse
    // only set simple data or POJO's as methods will be lost 
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };
  
  onDragStart(event:DragEvent) {

    console.log("drag started", JSON.stringify(event, null, 2));
  }
  
  onDragEnd(event:DragEvent) {
    
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  
  onDraggableCopied(event:DragEvent) {
    
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  
  onDraggableLinked(event:DragEvent) {
      
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }
    
  onDraggableMoved(event:DragEvent) {
    
    console.log("draggable moved", JSON.stringify(event, null, 2));
  }
      
  onDragCanceled(event:DragEvent) {
    
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  
  onDragover(event:DragEvent) {
    
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  
  onDrop(event:DndDropEvent) {
  
    console.log("dropped", JSON.stringify(event, null, 2));
  }
}
```

```HTML
<div [dndDraggable]="draggable.data"
     [dndEffectAllowed]="draggable.effectAllowed"
     [dndDisableIf]="draggable.disable"
     (dndStart)="onDragStart($event)"
     (dndCopied)="onDraggableCopied($event)"
     (dndLinked)="onDraggableLinked($event)"
     (dndMoved)="onDraggableMoved($event)"
     (dndCanceled)="onDragCanceled($event)"
     (dndEnd)="onDragEnd($event)">
      
    <!--if [dndHandle] is used inside dndDraggable drag can only start from the handle-->
    <div *ngIf="draggable.handle"
         dndHandle>HANDLE
    </div>
    
    draggable ({{draggable.effectAllowed}}) <span [hidden]="!draggable.disable">DISABLED</span>
    
</div>

<div style="border: 1px orangered solid; border-radius: 5px; padding: 15px;"
     #placeholder>
    placeholder
</div>

<section dndDropzone
         (dndDragover)="onDragover($event)"
         (dndDrop)="onDrop($event)">
      
    dropzone 

</section>
```

## API

```TS
// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect
export type DropEffect = "move" | "copy" | "link" | "none";

// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed
export type EffectAllowed = DropEffect | "move" | "copy" | "link" | "copyMove" | "copyLink" | "linkMove" | "all";
```

```TS
export declare class DndDraggableDirective {

    // the data attached to the drag
    dndDraggable: any;
    
    // the allowed drop effect
    dndEffectAllowed: EffectAllowed;
    
    // optionally set the type of dragged data to restrict dropping on compatible dropzones
    dndType?: string;
    
    // conditionally disable the draggability
    dndDisableIf: boolean;
    
    // set a custom class that is applied while dragging
    dndDraggingClass: string = "dndDragging";
    
    // set a custom class that is applied to only the src element while dragging
    dndDraggingSourceClass: string = "dndDraggingSource";
    
    // emits on drag start
    readonly dndStart: EventEmitter<DragEvent>;
    
    // emits on drag end
    readonly dndEnd: EventEmitter<DragEvent>;
    
    // emits when the dragged item has been dropped with effect "move"
    readonly dndMoved: EventEmitter<DragEvent>;
    
    // emits when the dragged item has been dropped with effect "copy"
    readonly dndCopied: EventEmitter<DragEvent>;
    
    // emits when the dragged item has been dropped with effect "link"
    readonly dndLinked: EventEmitter<DragEvent>;
    
    // emits when the drag is canceled
    readonly dndCanceled: EventEmitter<DragEvent>;
}
```

```TS
export interface DndDropEvent {

    // the original drag event
    event: DragEvent;
    
    // the actual drop effect
    dropEffect: DropEffect;
    
    // the data set on the draggable
    data?: any;
    
    // the index where the draggable was dropped in a dropzone
    // set only when using a placeholder
    index?: number;
}

export declare class DndDropzoneDirective {

    // optionally restrict the allowed types
    dndDropzone?: string[];
    
    // set the allowed drop effect
    dndEffectAllowed: EffectAllowed;
    
    // conditionally disable the dropzone
    dndDisableIf: boolean;
    
    // if draggables that are not [dndDraggable] are allowed to be dropped
    // set to true if dragged text, images or files should be handled
    dndAllowExternal: boolean;
    
    // if its a horizontal list this influences how the placeholder position
    // is calculated
    dndHorizontal: boolean;
    
    // optionally pass a placeholder to indicate the drop position
    dndPlaceholder: Element | null;
    
    // set the class applied to the dropzone
    // when a draggable is dragged over it
    dndDragoverClass: string = "dndDragover";
    
    // emits when a draggable is dragged over the dropzone
    readonly dndDragover: EventEmitter<DragEvent>;
    
    // emits on successful drop
    readonly dndDrop: EventEmitter<DndDropEvent>;
}
```

### Why?

Native drag and drop API's are not behaving the same way across browsers.

The directives contained in this module enable declarative drag and drop that "just works" across browsers in a consistent way.

Credits go to the author and contributors of [angular-drag-drop-lists](https://github.com/marceljuenemann/angular-drag-and-drop-lists). 

### Maintenance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.
For the library build it uses the workflow from [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library).

#### Library

* build library with `npm run build:lib`
* publish library with `npm publish dist`

#### Docs

* build docs site with `npm run build`
* commit and push changes in `docs` to `master`
