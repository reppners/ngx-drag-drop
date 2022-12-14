import {Component, HostBinding} from "@angular/core";

@Component( {
  selector: "dnd-indirect-handle",
  templateUrl: "./indirect-dnd-handle.component.html",
  styleUrls: [ "./indirect-dnd-handle.component.scss" ],
} )
export class IndirectDndHandleComponent {
  @HostBinding('class.drag-handle') get dragHandle() {
    return true;
  }
}
