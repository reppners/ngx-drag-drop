import { Directive, ElementRef } from "@angular/core";

@Directive( {
  selector: "[dndPlaceholderRef], [dndDragImageRef]"
} )
export class DndElementRefDirective {

  constructor( public readonly elementRef:ElementRef ) {
  }
}
