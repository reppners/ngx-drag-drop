**This project is currently under heavy construction!**

# NgxDragDrop

Port of [angular-drag-drop-lists](https://github.com/marceljuenemann/angular-drag-and-drop-lists) but without the lists :D

We have `dropzones` though :+1:

For touch support please use this [polyfill](https://github.com/timruffles/ios-html5-drag-drop-shim/tree/rewrite).

## How to install

`npm install ngx-drag-drop`

```JS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DndModule } from 'ngx-drag-drop';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    DndModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## API

`TODO`

### Maintenance

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.
For the library build it uses the workflow from [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library).

#### Library

* build library with `npm run build:lib`
* publish library with `npm publish dist`

#### Docs

* build docs site with `npm run build`
* commit and push changes in `docs` to `master`
