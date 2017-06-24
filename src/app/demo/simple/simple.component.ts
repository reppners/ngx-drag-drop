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
      content: "testdata",
      effectAllowed: "copy",
      disable: false,
      handle: false,
    },
    {
      content: "testdata2",
      effectAllowed: "move",
      disable: false,
      handle: false,
    },
    {
      content: "testdata3",
      effectAllowed: "link",
      disable: false,
      handle: false
    },
    {
      content: "testdata4",
      effectAllowed: "copy",
      disable: true,
      handle: false,
    },
    {
      content: "testdata5",
      effectAllowed: "copy",
      disable: false,
      handle: true,
    }
  ];

  draggableWithDragImage = {
    content: "testdata6",
    effectAllowed: "copy",
    disable: false,
    handle: true
  };

  public dropzoneEnabled:boolean = true;

  private currentDraggableEvent:DragEvent;
  private currentDragEffectMsg:string;
  private lastDropEvent:DndDropEvent | null = null;

  constructor( private snackBarService:MdSnackBar ) {
  }

  onDragStart( event:DragEvent ) {

    this.lastDropEvent = null;

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

    this.lastDropEvent = event;
  }
}
