import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DndDraggableDirective, DndDragImageRefDirective } from "./dnd-draggable.directive";
import { DndDropzoneDirective, DndPlaceholderRefDirective } from "./dnd-dropzone.directive";
import { DndHandleDirective } from "./dnd-handle.directive";

@NgModule( {
  imports: [
    CommonModule
  ],
  declarations: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    DndDragImageRefDirective
  ],
  exports: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    DndDragImageRefDirective
  ]
} )
export class DndModule {
}
