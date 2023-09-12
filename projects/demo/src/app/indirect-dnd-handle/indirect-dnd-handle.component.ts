import { Component, HostBinding } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DndHandleDirective } from 'ngx-drag-drop';

@Component({
  selector: 'dnd-indirect-handle',
  templateUrl: './indirect-dnd-handle.component.html',
  styleUrls: ['./indirect-dnd-handle.component.scss'],
  standalone: true,
  imports: [MatIconModule, DndHandleDirective],
})
export class IndirectDndHandleComponent {
  @HostBinding('class.drag-handle') get dragHandle() {
    return true;
  }
}
