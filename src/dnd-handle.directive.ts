import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";
import { DndEvent } from "./dnd-utils";

@Directive( {
  selector: "[dndHandle]"
} )
export class DndHandleDirective {

  @HostBinding( "attr.draggable" )
  draggable = true;

  constructor( private elementRef:ElementRef ) {
  }

  @HostListener( "dragstart", [ "$event" ] )
  @HostListener( "dragend", [ "$event" ] )
  onDragEvent( event:DndEvent ) {

    event._dndHandle = this.elementRef.nativeElement as HTMLElement;
  }
}
