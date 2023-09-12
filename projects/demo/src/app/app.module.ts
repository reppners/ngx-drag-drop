import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatLineModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { DndModule } from 'ngx-drag-drop';

import { AppComponent } from './app.component';
import { DemoLinkComponent } from './demo-link/demo-link.component';
import { IndirectDndHandleComponent } from './indirect-dnd-handle/indirect-dnd-handle.component';
import { IndirectDragImageComponent } from './indirect-drag-image/indirect-drag-image.component';
import { ListComponent } from './list/list.component';
import { NativeComponent } from './native/native.component';
import { NestedComponent } from './nested/nested.component';
import { SimpleComponent } from './simple/simple.component';
import { TypedComponent } from './typed/typed.component';

const routes: Routes = [
  { path: 'simple', component: SimpleComponent },
  { path: 'list', component: ListComponent },
  { path: 'nested', component: NestedComponent },
  { path: 'native', component: NativeComponent },
  { path: 'typed', component: TypedComponent },
  { path: '**', component: SimpleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
    IndirectDragImageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DndModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule,
    MatLineModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
