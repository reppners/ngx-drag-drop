import { Component } from "@angular/core";
import { MdSnackBar } from "@angular/material";
import { DndDropEvent } from "../../dnd/dnd-dropzone.directive";
import { DropEffect } from "../../dnd/dnd-types";

@Component( {
  selector: "dnd-list",
  templateUrl: "./list.component.html",
  styleUrls: [ "./list.component.scss" ]
} )
export class ListComponent {

  draggableListLeft = [
    {
      content: "Left",
      effectAllowed: "move",
      disable: false,
      handle: false,
    },
    {
      content: "Lefter",
      effectAllowed: "move",
      disable: false,
      handle: false,
    },
    {
      content: "Leftest",
      effectAllowed: "copyMove",
      disable: false,
      handle: false
    },
    {
      content: "Lefty",
      effectAllowed: "move",
      disable: false,
      handle: true,
    }
  ];

  draggableListRight = [
    {
      content: "I was originally right",
      effectAllowed: "move",
      disable: false,
      handle: false,
    }
  ];
  layout:any;
  horizontalLayoutActive:boolean = false;
  private currentDraggableEvent:DragEvent;
  private currentDragEffectMsg:string;
  private readonly verticalLayout = {
    container: "row",
    list: "column",
    dndHorizontal: false
  };
  private readonly horizontalLayout = {
    container: "row",
    list: "row",
    dndHorizontal: true
  };

  constructor( private snackBarService:MdSnackBar ) {

    this.setHorizontalLayout( this.horizontalLayoutActive );
  }

  setHorizontalLayout( horizontalLayoutActive:boolean ) {

    this.layout = (horizontalLayoutActive) ? this.horizontalLayout : this.verticalLayout;
  }

  onDragStart( event:DragEvent ) {

    this.currentDragEffectMsg = "";
    this.currentDraggableEvent = event;

    this.snackBarService.dismiss();
    this.snackBarService.open( "Drag started!", undefined, {duration: 2000} );
  }

  onDragged( item:any, list:any[], effect:DropEffect ) {

    this.currentDragEffectMsg = `Drag ended with effect "${effect}"!`;

    if( effect === "move" ) {

      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }

  onDragEnd( event:DragEvent ) {

    this.currentDraggableEvent = event;
    this.snackBarService.dismiss();
    this.snackBarService.open( this.currentDragEffectMsg || `Drag ended!`, undefined, {duration: 2000} );
  }

  onDrop( event:DndDropEvent, list?:any[] ) {

    if( list
      && ( event.dropEffect === "copy"
        || event.dropEffect === "move" ) ) {

      let index = event.index;

      if( typeof index === "undefined" ) {

        index = list.length;
      }

      list.splice( index, 0, event.data );
    }
  }

}
