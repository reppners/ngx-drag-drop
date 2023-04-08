import {
  Directive,
  HostBinding,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { DndDraggableDirective } from './dnd-draggable.directive';
import { DndEvent } from './dnd-utils';

@Directive({ selector: '[dndHandle]' })
export class DndHandleDirective implements OnInit {
  @HostBinding('attr.draggable') draggable = true;

  dndDraggableDirective = inject(DndDraggableDirective);

  ngOnInit() {
    this.dndDraggableDirective.registerDragHandle(this);
  }

  @HostListener('dragstart', ['$event'])
  @HostListener('dragend', ['$event'])
  onDragEvent(event: DndEvent) {
    event._dndUsingHandle = true;
  }
}
