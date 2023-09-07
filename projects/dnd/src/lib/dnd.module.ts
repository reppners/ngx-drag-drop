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

  exports: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    DndDragImageRefDirective,
  ],
  imports: [
    CommonModule,
    DndDragImageRefDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    DndDraggableDirective,
  ],
})
export class DndModule {}
