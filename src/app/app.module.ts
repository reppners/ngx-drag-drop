import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DragAndDropModule } from "./html-drag-and-drop/drag-and-drop.module";

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragAndDropModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
