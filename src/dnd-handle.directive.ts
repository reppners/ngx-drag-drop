import { Directive, HostBinding, HostListener } from "@angular/core";
import { DndEvent } from "./dnd-utils";
import { DndDraggableDirective } from "./dnd-draggable.directive";

@Directive( {
  selector: "[dndHandle]"
} )
export class DndHandleDirective {

  @HostBinding( "attr.draggable" )
  draggable = true;

  constructor( parent:DndDraggableDirective ) {

    parent.registerDragHandle( this );
  }

  @HostListener( "dragstart", [ "$event" ] )
  @HostListener( "dragend", [ "$event" ] )
  onDragEvent( event:DndEvent ) {

    event._dndUsingHandle = true;
  }
}
