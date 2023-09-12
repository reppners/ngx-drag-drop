import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {
  DndDraggableDirective,
  DndDropEvent,
  DndDropzoneDirective,
  DndPlaceholderRefDirective,
} from 'ngx-drag-drop';

type Apple = 'apple';
type Banana = 'banana';
type FruitType = Apple | Banana;

interface Fruit {
  id: number;
  type: FruitType;
}

let id = 0;

function createFruit(type: FruitType) {
  return {
    id: id++,
    type: type,
  };
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => i);
}

@Component({
  selector: 'dnd-typed',
  templateUrl: './typed.component.html',
  styleUrls: ['./typed.component.scss'],
  standalone: true,
  imports: [
    MatListModule,
    DndDropzoneDirective,
    DndPlaceholderRefDirective,
    NgForOf,
    DndDraggableDirective,
  ],
})
export default class TypedComponent {
  public fruits: Fruit[] = range(0, 100).map(_ => {
    const randomFruitType: FruitType = Math.random() < 0.5 ? 'apple' : 'banana';
    return createFruit(randomFruitType);
  });

  public apples: Fruit[] = range(0, 12).map(_ => {
    return createFruit('apple');
  });

  public bananas: Fruit[] = range(0, 10).map(_ => {
    return createFruit('banana');
  });

  trackByFruit(index: number, fruit: Fruit) {
    return fruit;
  }

  onDragged(index: number, fruit: Fruit, list: Fruit[]) {
    const removeIndex = list.indexOf(fruit);
    console.log(
      `onDragged ngFor-index=${index}, item=${fruit}, removeIndex=${removeIndex}, list=${list.length}`
    );
    list.splice(removeIndex, 1);
  }

  onDrop(event: DndDropEvent, list: Fruit[]) {
    console.log('onDrop', event, list.length);
    let index = event.index;
    if (typeof index === 'undefined') {
      index = list.length;
    }
    list.splice(index, 0, event.data);
  }
}
