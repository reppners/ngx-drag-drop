import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "dnd-demo-link",
  templateUrl: "./demo-link.component.html",
  styleUrls: ["./demo-link.component.scss"]
})
export class DemoLinkComponent implements OnInit {

  @Input()
  name:string;

  url:string;

  constructor() { }

  ngOnInit() {

    this.url = `https://github.com/reppners/ngx-drag-drop/tree/master/src/app/demo/${this.name}`;
  }
}
