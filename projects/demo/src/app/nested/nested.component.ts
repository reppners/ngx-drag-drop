import { Component } from "@angular/core";
import { DndDropEvent, DropEffect } from "ngx-drag-drop";
import { MatSnackBar } from "@angular/material/snack-bar";

interface NestableListItem {
  content:string;
  disable?:boolean;
  handle?:boolean;
  customDragImage?:boolean;
  children?:NestableListItem[];
}

@Component( {
  selector: "dnd-nested",
  templateUrl: "./nested.component.html",
  styleUrls: [ "./nested.component.scss" ]
} )
export class NestedComponent {

  nestableList:NestableListItem[] = [
    {
      content: "Got something nested",
      children: [
        {
          content: "Nested",
          customDragImage: true
        }
      ]
    },
    {
      content: "No nested dropping here"
    },
    {
      content: "Got more than one",
      children: [
        {
          content: "Nested 1",
          handle: true
        },
        {
          content: "Nested 2"
        },
        {
          content: "Nested 3"
        }
      ]
    },
    {
      content: "Drop something, I'll catch!",
      children: []
    }
  ];

  private currentDraggableEvent?:DragEvent;
  private currentDragEffectMsg?:string;

  constructor( private snackBarService:MatSnackBar ) {
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
