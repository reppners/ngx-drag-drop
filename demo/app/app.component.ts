import { Component } from "@angular/core";
import { MdIconRegistry, MdTabChangeEvent } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component( {
  selector: "dnd-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
} )
export class AppComponent {

  title = "NgxDragDrop Demo";

  activeDemoName = "simple";

  constructor( sanitizer:DomSanitizer,
               iconRegistry:MdIconRegistry ) {

    iconRegistry.addSvgIcon( "github", sanitizer.bypassSecurityTrustResourceUrl( "assets/github.svg" ) );
  }

  onSelectedTabChange( event:MdTabChangeEvent ) {

    this.activeDemoName = event.tab.textLabel.toLowerCase();
  }
}
