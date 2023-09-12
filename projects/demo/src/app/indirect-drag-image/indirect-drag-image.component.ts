import { Component } from '@angular/core';
import { DndDragImageRefDirective } from 'ngx-drag-drop';

@Component({
  selector: 'dnd-indirect-drag-image',
  templateUrl: './indirect-drag-image.component.html',
  styleUrls: ['./indirect-drag-image.component.scss'],
  standalone: true,
  imports: [DndDragImageRefDirective],
})
export class IndirectDragImageComponent {}
