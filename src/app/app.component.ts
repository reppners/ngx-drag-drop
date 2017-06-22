import { Component } from "@angular/core";
import { DndDropEvent } from "./dnd/dnd-dropzone.directive";
import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component( {
  selector: "dnd-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
} )
export class AppComponent {

  title = "NgxDragDrop";

  dropEvent:DndDropEvent;
  dropEventFiles:any[];
  dropEventTypes:any[];
  dropEventContent:any[];

  constructor( sanitizer:DomSanitizer,
               iconRegistry:MdIconRegistry ) {

    iconRegistry.addSvgIcon( "github", sanitizer.bypassSecurityTrustResourceUrl( "assets/github.svg" ) );
  }
}
