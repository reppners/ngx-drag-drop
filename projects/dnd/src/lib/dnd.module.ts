import { CommonModule } from '@angular/common';
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
  declarations: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    DndDragImageRefDirective,
  ],
  exports: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    DndDragImageRefDirective,
  ],
  imports: [CommonModule],
})
export class DndModule {}
