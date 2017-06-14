import { Component } from "@angular/core";
import { DndDropEvent } from "./dnd/dnd-dropzone.directive";

@Component( {
  selector: "dnd-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
} )
export class AppComponent {
  title = "dnd works!";

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
      handle: false,
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

  dropEvent:DndDropEvent;
  dropEventFiles:any[];
  dropEventTypes:any[];
  dropEventContent:any[];

  onDrop( event:DndDropEvent ) {

    this.dropEvent = event;

    this.dropEventFiles = [];
    for( let i:number = 0; i < event.event.dataTransfer.files.length; i++ ) {

      const file = event.event.dataTransfer.files[ i ];

      this.dropEventFiles.push( {
        name: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModifiedDate
      } );
    }

    this.dropEventTypes = event.event.dataTransfer.types;
    this.dropEventContent = this.dropEventTypes.map( ( type:string ) => {

      return event.event.dataTransfer.getData( type );
    } );
  }
}
