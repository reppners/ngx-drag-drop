import { Component, Input } from "@angular/core";

@Component( {
  selector: "dnd-demo-link",
  templateUrl: "./demo-link.component.html",
  styleUrls: [ "./demo-link.component.scss" ]
} )
export class DemoLinkComponent {

  @Input()
  name:string | null = null;

  public get url():string {

    return `https://github.com/reppners/ngx-drag-drop/tree/master/demo/app/${this.name}`;
  }
}
