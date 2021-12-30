import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import {DndDropEvent, DropEffect, EffectAllowed} from "ngx-drag-drop";

interface DraggableItem {
  content: string;
  effectAllowed: EffectAllowed;
  disable: boolean;
  handle: boolean;
}

interface DropzoneLayout {
  container: string;
  list: string;
  dndHorizontal: boolean;
}


@Component( {
  selector: "dnd-list",
  templateUrl: "./list.component.html",
  styleUrls: [ "./list.component.scss" ]
} )
export class ListComponent {

  draggableListLeft: DraggableItem[] = [
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
    },
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
    },
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

  draggableListRight: DraggableItem[] = [
    {
      content: "I was originally right",
      effectAllowed: "move",
      disable: false,
      handle: false,
    }
  ];
  horizontalLayoutActive:boolean = false;
  private currentDraggableEvent?:DragEvent;
  private currentDragEffectMsg?:string;
  private readonly verticalLayout: DropzoneLayout = {
    container: "row",
    list: "column",
    dndHorizontal: false
  };
  private readonly horizontalLayout: DropzoneLayout = {
    container: "row",
    list: "row wrap",
    dndHorizontal: true
  };

  layout:DropzoneLayout = this.verticalLayout;

  constructor( private snackBarService:MatSnackBar ) {

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
      && (event.dropEffect === "copy"
        || event.dropEffect === "move") ) {

      let index = event.index;

      if( typeof index === "undefined" ) {

        index = list.length;
      }

      list.splice( index, 0, event.data );
    }
  }

}
