import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTabsModule} from "@angular/material/tabs";
import {DndModule} from "ngx-drag-drop";
import {NativeComponent} from "./native/native.component";
import {IndirectDragImageComponent} from "./indirect-drag-image/indirect-drag-image.component";
import {IndirectDndHandleComponent} from "./indirect-dnd-handle/indirect-dnd-handle.component";
import {NestedComponent} from "./nested/nested.component";
import {SimpleComponent} from "./simple/simple.component";
import {ListComponent} from "./list/list.component";
import {TypedComponent} from "./typed/typed.component";
import {DemoLinkComponent} from "./demo-link/demo-link.component";

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    ListComponent,
    NativeComponent,
    TypedComponent,
    NestedComponent,
    DemoLinkComponent,
    IndirectDndHandleComponent,
    IndirectDragImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DndModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
