import "hammerjs";
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
  MdTabsModule,
  MdToolbarModule
} from "@angular/material";

import { DndModule } from "ngx-drag-drop";
import { AppComponent } from "./app.component";
import { SimpleComponent } from "./simple/simple.component";
import { ListComponent } from "./list/list.component";
import { NativeComponent } from "./native/native.component";
import { TypedComponent } from "./typed/typed.component";
import { NestedComponent } from "./nested/nested.component";
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
    MdListModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
