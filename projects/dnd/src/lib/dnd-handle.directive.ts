import {
  Directive,
  HostBinding,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DndDraggableDirective } from './dnd-draggable.directive';
import { DndEvent } from './dnd-utils';

@Directive({ selector: '[dndHandle]', standalone: true })
export class DndHandleDirective implements OnInit, OnDestroy {
  @HostBinding('attr.draggable') draggable = true;

  dndDraggableDirective = inject(DndDraggableDirective);

  ngOnInit() {
    this.dndDraggableDirective.registerDragHandle(this);
  }

  ngOnDestroy(): void {
    this.dndDraggableDirective.registerDragHandle(undefined);
  }

  @HostListener('dragstart', ['$event'])
  @HostListener('dragend', ['$event'])
  onDragEvent(event: DndEvent) {
    event._dndUsingHandle = true;
  }
}
