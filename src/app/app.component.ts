import { Component } from "@angular/core";

@Component( {
  selector: "dnd-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
} )
export class AppComponent {
  title = "dnd works!";

  draggables = [
    {
      data: "testdata",
      effectAllowed: "copy",
      disable: false,
      handle: false,
    },
    {
      data: "testdata",
      effectAllowed: "move",
      disable: false,
      handle: false,
    },
    {
      data: "testdata",
      effectAllowed: "link",
      disable: false,
      handle: false,
    },
    {
      data: "testdata",
      effectAllowed: "copy",
      disable: true,
      handle: false,
    },
    {
      data: "testdata",
      effectAllowed: "copy",
      disable: false,
      handle: true,
    }
  ];
}
