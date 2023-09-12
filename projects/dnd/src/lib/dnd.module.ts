import { NgModule } from '@angular/core';
import {
  DndDraggableDirective,
  DndDragImageRefDirective,
} from './dnd-draggable.directive';
import {
  DndDropzoneDirective,
  DndPlaceholderRefDirective,
} from './dnd-dropzone.directive';
import { DndHandleDirective } from './dnd-handle.directive';

@NgModule({
  exports: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    DndDragImageRefDirective,
  ],
  imports: [
    DndDragImageRefDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    DndDraggableDirective,
  ],
})
export class DndModule {}
