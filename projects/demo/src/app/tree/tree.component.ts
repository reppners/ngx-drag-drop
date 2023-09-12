import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  DndDraggableDirective,
  DndDropEvent,
  DndDropzoneDirective,
  DndHandleDirective,
  DndPlaceholderRefDirective,
  DropEffect,
} from 'ngx-drag-drop';

interface DraggableItem {
  content: string;
  children: DraggableItem[];
}

@Component({
  selector: 'dnd-tree',
  standalone: true,
  imports: [
    CommonModule,
    DndDropzoneDirective,
    DndHandleDirective,
    DndPlaceholderRefDirective,
    MatIconModule,
    MatListModule,
    DndDraggableDirective,
  ],
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export default class TreeComponent {
  draggableList: DraggableItem[] = [
    {
      content: 'Demo 1',
      children: [
        {
          content: 'Nested 1',
          children: [],
        },
        {
          content: 'Nested 2',
          children: [],
        },
        {
          content: 'Nested 3',
          children: [],
        },
      ],
    },
    {
      content: 'Demo 2',
      children: [],
    },
    {
      content: 'Demo 3',
      children: [],
    },
    {
      content: 'Demo 4',
      children: [],
    },
    {
      content: 'Demo 5',
      children: [],
    },
    {
      content: 'Demo 6',
      children: [],
    },
    {
      content: 'Demo 7',
      children: [],
    },
    {
      content: 'Demo 8',
      children: [],
    },
    {
      content: 'Demo 9',
      children: [],
    },
    {
      content: 'Demo 10',
      children: [
        {
          content: 'Nested 1',
          children: [],
        },
        {
          content: 'Nested 2',
          children: [],
        },
        {
          content: 'Nested 3',
          children: [],
        },
      ],
    },
  ];

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDrop(event: DndDropEvent, list?: any[]) {
    console.log('onDrop', event, list);

    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);
    }
  }
}
