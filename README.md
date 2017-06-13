**This project is currently under development!**

# NgxDragDrop

Port of [angular-drag-drop-lists](https://github.com/marceljuenemann/angular-drag-and-drop-lists) but without the lists :wink:
Credits go to contributors of this repository.

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
    data: "myDragData",
    effectAllowed: "all",
    disable: false,
    handle: false
  };
  
  onDragStart(event:DragEvent) {

    console.log("drag started");
  }
  
  onDragEnd(event:DragEvent) {
    
    console.log("drag ended");
  }
  
  onDraggableCopied(event:DragEvent) {
    
    console.log("draggable copied");
  }
  
  onDraggableLinked(event:DragEvent) {
      
    console.log("draggable linked");
  }
    
  onDraggableMoved(event:DragEvent) {
    
    console.log("draggable moved");
  }
      
  onDragCanceled(event:DragEvent) {
    
    console.log("drag cancelled");
  }
  
  onDragover(event:DragEvent) {
    
    console.log("dragover");
  }
  
  onDrop(event:DndDropEvent) {
  
    console.log("dropped");
  }
}
```

```HTML
<div [dndDraggable]="draggable.data"
     [dndEffectAllowed]="draggable.effectAllowed"
     [dndDisableIf]="draggable.disable"
     (dndStart)="onDragStart()"
     (dndCopied)="onDraggableCopied()"
     (dndLinked)="onDraggableLinked()"
     (dndMoved)="onDraggableMoved()"
     (dndCanceled)="onDragCanceled()"
     (dndEnd)="onDragEnd()">
      
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
    dndDraggable: any;
    dndEffectAllowed: EffectAllowed;
    dndType?: string;
    dndDisableIf: boolean;
    dndDraggingClass: string;
    dndDraggingSourceClass: string;
    readonly dndStart: EventEmitter<DndEvent>;
    readonly dndEnd: EventEmitter<DragEvent>;
    readonly dndMoved: EventEmitter<DragEvent>;
    readonly dndCopied: EventEmitter<DragEvent>;
    readonly dndLinked: EventEmitter<DragEvent>;
    readonly dndCanceled: EventEmitter<DragEvent>;
}
```

```TS
export interface DndDropEvent {
    event: DragEvent;
    dropEffect: DropEffect;
    data?: any;
    index?: number;
}

export declare class DndDropzoneDirective implements OnInit {
    dndDropzone?: string[];
    dndEffectAllowed: EffectAllowed;
    dndDisableIf: boolean;
    dndAllowExternal: boolean;
    dndHorizontal: boolean;
    dndPlaceholder: Element | null;
    dndDragoverClass: string;
    readonly dndDragover: EventEmitter<DragEvent>;
    readonly dndDrop: EventEmitter<DndDropEvent>;
}
```

### Maintenance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.
For the library build it uses the workflow from [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library).

#### Library

* build library with `npm run build:lib`
* publish library with `npm publish dist`

#### Docs

* build docs site with `npm run build`
* commit and push changes in `docs` to `master`
