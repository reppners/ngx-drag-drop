import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DndModule } from "./dnd/index";

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DndModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
