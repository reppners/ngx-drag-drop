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
