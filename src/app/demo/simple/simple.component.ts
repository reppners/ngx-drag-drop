import { Component } from "@angular/core";
import { MdSnackBar } from "@angular/material";
import { DndDropEvent } from "../../dnd/dnd-dropzone.directive";

@Component( {
  selector: "dnd-simple",
  templateUrl: "./simple.component.html",
  styleUrls: [ "./simple.component.scss" ]
} )
export class SimpleComponent {

  draggables = [
    {
      data: "testdata",
      effectAllowed: "copy",
      disable: false,
      handle: false,
    },
    {
      data: "testdata",
      effectAllowed: "move",
      disable: false,
      handle: false,
    },
    {
      data: "testdata",
      effectAllowed: "link",
      disable: false,
      handle: false
    },
    {
      data: "testdata",
      effectAllowed: "copy",
      disable: true,
      handle: false,
    },
    {
      data: "testdata",
      effectAllowed: "copy",
      disable: false,
      handle: true,
    }
  ];

  draggableWithDragImage = {
    data: "testdata",
    effectAllowed: "copy",
    disable: false,
    handle: true
  };

  private currentDraggableEvent:DragEvent;
  private currentDragEffectMsg:string;

  constructor( private snackBarService:MdSnackBar ) {
  }

  onDragStart( event:DragEvent ) {

    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;

    this.snackBarService.dismiss();
    this.snackBarService.open( "Drag started!", undefined, {duration: 2000} );
  }

  onDragged( $event:DragEvent, effect:string ) {

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;
  }

  onDragEnd( event:DragEvent ) {

    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open( this.currentDragEffectMsg || `Drag ended!`, undefined, {duration: 2000} );
  }

  onDrop( event:DndDropEvent ) {

    this.snackBarService.dismiss();
    this.snackBarService.open( `Something dropped O.O` );
  }
}
