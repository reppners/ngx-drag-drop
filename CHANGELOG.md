<a name="v1.0.0-rc.1"></a>
# [v1.0.0-rc.1](https://github.com/reppners/ngx-drag-drop/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2017-09-04)

Changes build process to use [ng-packagr](https://github.com/dherges/ng-packagr) for less manual AOT compatible
library builds.

Demo is updated to use latest dependencies.


<a name="v1.0.0-rc.0"></a>
# [v1.0.0-rc.0](https://github.com/reppners/ngx-drag-drop/compare/v1.0.0-beta.2...v1.0.0-rc.0) (2017-06-29)

### Bug Fixes

* **DndDropzone:** fixes issue on placeholder positioning algorithm where direct child element was missed


<a name="v1.0.0-beta.2"></a>
# [v1.0.0-beta.2](https://github.com/reppners/ngx-drag-drop/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2017-06-22)

### Bug Fixes

* **DndElementRef:** access @ContentChild() in ngAfterContentInit to ensure its properly initialized
* **DndModule:** re-export DndElementRef in index module


<a name="v1.0.0-beta.1"></a>
# [v1.0.0-beta.1](https://github.com/reppners/ngx-drag-drop/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2017-06-22)

### Bug Fixes

* **DndDropzone:** correctly handle dragenter to ensure only a single active dropzone on nested dropzones
* **DndDropzone:** cleanup dropEffect on dropzone leave to avoid unwanted effects when dropzone was hovered, left and the draggable is then released


### Features

* **DndDropzone:** specify a placeholder element by using `[dndPlaceholderRef]` on a child element of `[dndDropzone]`
* **DndDropzone:** `DndDropEvent` defines property `isExternal:boolean` to ease handling of external drops
* **DndDraggable:** specify a custom drag image by using `[dndDragImageRef]` on a child element of `[dndDraggable]`


### BREAKING CHANGES

* **DndDropzone:** removed input binding `[dndPlaceholder]` in favor of `[dndPlaceholderRef]`

BEFORE
```HTML
<section dndDropzone
         (dndDragover)="dragover = $event"
         (dndDrop)="onDrop($event)"
         [dndPlaceholder]="placeholder">
   
   dropzone
   
   <div #placeholder>placeholder
   </div>
   
</section>
```

AFTER
```HTML
<section dndDropzone
         (dndDragover)="dragover = $event"
         (dndDrop)="onDrop($event)">
   
   dropzone
   
   <div dndPlaceholderRef>placeholder
   </div>
   
</section>
```

This breaking change is needed to provide compatibility with custom elements / components.
