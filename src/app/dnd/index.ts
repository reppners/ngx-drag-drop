import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DndDraggableDirective } from "./dnd-draggable.directive";
import { DndDropzoneDirective } from "./dnd-dropzone.directive";
import { DndHandleDirective } from "./dnd-handle.directive";
import { DndElementRefDirective } from "./dnd-element-ref.directive";

export * from "./dnd-draggable.directive";
export * from "./dnd-dropzone.directive";
export * from "./dnd-handle.directive";
export * from "./dnd-types";

@NgModule( {
  imports: [
    CommonModule
  ],
  declarations: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndElementRefDirective
  ],
  exports: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective,
    DndElementRefDirective
  ]
} )
export class DndModule {
}
