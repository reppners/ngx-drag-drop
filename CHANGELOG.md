<a name="v2.0.0"></a>
# [v2.0.0](https://github.com/reppners/ngx-drag-drop/compare/v2.0.0-rc.7...v2.0.0) (2019-06-08)

About time to declare it stable after months of rc's.


<a name="v2.0.0-rc.7"></a>
# [v2.0.0-rc.7](https://github.com/reppners/ngx-drag-drop/compare/v2.0.0-rc.6...v2.0.0-rc.7) (2019-06-08)

* Fixes #67. Thanks @andreroggeri


<a name="v2.0.0-rc.6"></a>
# [v2.0.0-rc.6](https://github.com/reppners/ngx-drag-drop/compare/v2.0.0-rc.5...v2.0.0-rc.6) (2019-04-13)

* Merges #46 to allow separate disabling of drag/drop when an element is a dropzone that is itself draggable. Thanks @VijaySutariaJCD


<a name="v2.0.0-rc.5"></a>
# [v2.0.0-rc.5](https://github.com/reppners/ngx-drag-drop/compare/v2.0.0-rc.4...v2.0.0-rc.5) (2019-03-01)

* Updates to Angular v7 (for demo also updates CDK, Material, Flex)
* adds dndDrag event to dndDraggable
* adds demo for right hand side dndHandle with correct drag image offset


<a name="v2.0.0-rc.4"></a>
# [v2.0.0-rc.4](https://github.com/reppners/ngx-drag-drop/compare/v2.0.0-rc.3...v2.0.0-rc.4) (2018-10-27)

* Handle DragEvent.dataTransfer being null for external drag items in Firefox (#35)


<a name="v1.1.0"></a>
# [v1.1.0](https://github.com/reppners/ngx-drag-drop/compare/v1.0.4...v1.1.0) / [v2.0.0-rc.3](https://github.com/reppners/ngx-drag-drop/compare/v2.0.0-rc.2...v2.0.0-rc.3) (2018-09-19)

* Transport eventually set `dndDraggable.dndType` as `type` in `DndDropEvent` (#42) - thanks to @hordesalik


<a name="v2.0.0-rc.2"></a>
# [v2.0.0-rc.2](https://github.com/reppners/ngx-drag-drop/compare/v2.0.0-rc.1...v2.0.0-rc.2) (2018-09-16)

* Assert placeholder is still attached before removing from DOM (#37)


<a name="v1.0.4"></a>
# [v1.0.4](https://github.com/reppners/ngx-drag-drop/compare/v1.0.3...v1.0.4) (2018-09-07)

Strip rxjs and zone.js from peerDependencies and allow Angular v6 as peerDependency


<a name="v2.0.0-rc.1"></a>
# [v2.0.0-rc.1](https://github.com/reppners/ngx-drag-drop/compare/v2.0.0-rc.0...v2.0.0-rc.1) (2018-06-28)

* Changed .remove() => .parentNode.removeChild() for cross-browser compatibility (#27)

Thanks to @gpaucot


<a name="v2.0.0-rc.0"></a>
# [v2.0.0-rc.0](https://github.com/reppners/ngx-drag-drop/compare/v1.0.3...v2.0.0-rc.0) (2018-06-05)

Release candidate for next version!

* Remove `rxjs` as peer dependency as this lib is not dependent on it.

* Remove `zone.js` as peer dependency as this lib is not dependent on it.

* Adjust `angular` peer dependency to support Angular v6 without warning.

* `dragover` event now bubbles up.

* Handle various drag events outside of Angular zone to improve performance.
  * I'm not entirely clear if this *could* be a **breaking change** to some users so I'm better safe than sorry and raise the major version with this release!

Thanks to @mtraynham for his contributions!


<a name="v1.0.3"></a>
# [v1.0.3](https://github.com/reppners/ngx-drag-drop/compare/v1.0.2...v1.0.3) (2018-01-26)

[dndHandle] and [dndDragImageRef] can now be used when contained in components.
Previously it only worked when in the same template as a content child of [dndDraggable].


<a name="v1.0.2"></a>
# [v1.0.2](https://github.com/reppners/ngx-drag-drop/compare/v1.0.1...v1.0.2) (2018-01-12)

* compatibility with Angular compiler flag `fullTemplateTypeCheck` introduced in Angular v5.2


<a name="v1.0.1"></a>
# [v1.0.1](https://github.com/reppners/ngx-drag-drop/compare/v1.0.0...v1.0.1) (2017-12-01)

* correct angular peer dependency to avoid warnings when using angular >4.x.x


<a name="v1.0.0"></a>
# [v1.0.0](https://github.com/reppners/ngx-drag-drop/compare/v1.0.0-rc.3...v1.0.0) (2017-10-18)

* stable release! 


<a name="v1.0.0-rc.3"></a>
# [v1.0.0-rc.3](https://github.com/reppners/ngx-drag-drop/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2017-09-18)

* adds demo for nested recursive drag and drop
* fixes issue where [dndPlaceholderRef] was not working in nested context because of angular limitation


<a name="v1.0.0-rc.2"></a>
# [v1.0.0-rc.2](https://github.com/reppners/ngx-drag-drop/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2017-09-05)

* adds demo for typed drag and drop
* fixes issue with typed drag and drop not working


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
