import { Component } from "@angular/core";
import { DndDropEvent } from "ngx-drag-drop";

@Component( {
  selector: "dnd-typed",
  templateUrl: "./typed.component.html",
  styleUrls: [ "./typed.component.scss" ]
} )
export class TypedComponent {

  public fruits:string[] = [
    "apple",
    "apple",
    "banana",
    "apple",
    "banana",
    "banana",
    "apple",
    "banana",
    "apple",
  ];

  public apples:string[] = [
    "apple",
    "apple"
  ];

  public bananas:string[] = [
    "banana",
    "banana"
  ];

  onDragged( initialIndex: number, list:any[] ) {

    list.splice( initialIndex, 1 );
  }

  onDrop( event:DndDropEvent, list:any[] ) {

    let index = event.index;

    if( typeof index === "undefined" ) {

      index = list.length;
    }

    list.splice( index, 0, event.data );
  }
}
