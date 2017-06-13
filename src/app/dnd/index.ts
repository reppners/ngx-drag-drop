import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DndDraggableDirective } from "./dnd-draggable.directive";
import { DndDropzoneDirective } from "./dnd-dropzone.directive";
import { DndHandleDirective } from "./dnd-handle.directive";

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
    DndHandleDirective
  ],
  exports: [
    DndDraggableDirective,
    DndDropzoneDirective,
    DndHandleDirective
  ]
} )
export class DndModule {
}
