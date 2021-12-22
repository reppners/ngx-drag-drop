import { Component } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry} from "@angular/material/icon";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'dnd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "NgxDragDrop Demo";

  activeDemoName = "simple";

  constructor( sanitizer:DomSanitizer,
               iconRegistry:MatIconRegistry ) {

    iconRegistry.addSvgIcon( "github", sanitizer.bypassSecurityTrustResourceUrl( "assets/github.svg" ) );
  }

  onSelectedTabChange( event:MatTabChangeEvent ) {

    this.activeDemoName = event.tab.textLabel.toLowerCase();
  }
}
