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

const routes: Routes = [
  {
    path: 'simple',
    loadComponent: () => import('./simple/simple.component'),
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.component'),
  },
  {
    path: 'nested',
    loadComponent: () => import('./nested/nested.component'),
  },
  {
    path: 'tree',
    loadComponent: () => import('./tree/tree.component'),
  },
  {
    path: 'native',
    loadComponent: () => import('./native/native.component'),
  },
  {
    path: 'typed',
    loadComponent: () => import('./typed/typed.component'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'simple',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

@NgModule({
  declarations: [AppComponent],
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
    DemoLinkComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
