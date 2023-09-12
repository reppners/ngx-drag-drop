import { JsonPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DndDropEvent, DndDropzoneDirective } from 'ngx-drag-drop';

@Component({
  selector: 'dnd-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss'],
  standalone: true,
  imports: [MatCardModule, DndDropzoneDirective, NgIf, JsonPipe],
})
export default class NativeComponent {
  public lastDropEvent: DndDropEvent | null = null;

  public lastDropTypes?: ReadonlyArray<string>;
  public lastDropFiles?: object[];
  public lastDropItems?: object[];

  constructor(private snackBarService: MatSnackBar) {}

  onDrop(event: DndDropEvent) {
    this.snackBarService.dismiss();
    this.snackBarService.open(`Something dropped O.O`, undefined, {
      duration: 2000,
    });

    this.lastDropEvent = event;

    this.lastDropTypes = this.lastDropEvent.event.dataTransfer?.types;

    this.lastDropFiles = [];
    this.lastDropItems = [];

    if (this.lastDropEvent.event.dataTransfer?.files) {
      for (
        let i: number = 0;
        i < this.lastDropEvent.event.dataTransfer?.files.length;
        i++
      ) {
        const file = this.lastDropEvent.event.dataTransfer?.files[i];
        this.lastDropFiles.push({
          lastModifiedDate: file.lastModified,
          name: file.name,
          type: file.type,
          size: file.size,
        });
      }

      for (
        let i: number = 0;
        i < this.lastDropEvent.event.dataTransfer.items.length;
        i++
      ) {
        const item = this.lastDropEvent.event.dataTransfer.items[i];
        this.lastDropItems.push({
          type: item.type,
          kind: item.kind,
          data: this.lastDropEvent.event.dataTransfer.getData(item.type),
        });
      }
    }
  }
}
