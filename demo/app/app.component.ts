import { Component } from "@angular/core";
import { MdIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component( {
  selector: "dnd-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
} )
export class AppComponent {

  title = "NgxDragDrop Demo";

  constructor( sanitizer:DomSanitizer,
               iconRegistry:MdIconRegistry ) {

    iconRegistry.addSvgIcon( "github", sanitizer.bypassSecurityTrustResourceUrl( "assets/github.svg" ) );
  }
}
