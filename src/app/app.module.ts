import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpModule } from "@angular/http";
import {
  MdButtonModule,
  MdCardModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdToolbarModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { DndModule } from "./dnd/index";
import { SimpleComponent } from "./demo/simple/simple.component";
import { ListComponent } from "./demo/list/list.component";
import { NativeComponent } from "./demo/native/native.component";
import { TypedComponent } from "./demo/typed/typed.component";
import { NestedComponent } from "./demo/nested/nested.component";
import { DemoLinkComponent } from "./demo-link/demo-link.component";

@NgModule( {
  declarations: [
    AppComponent,
    SimpleComponent,
    ListComponent,
    NativeComponent,
    TypedComponent,
    NestedComponent,
    DemoLinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    DndModule,
    FlexLayoutModule,
    HttpModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdCardModule,
    MdSnackBarModule,
    MdSlideToggleModule,
    MdIconModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
