import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'dnd-demo-link',
  templateUrl: './demo-link.component.html',
  styleUrls: ['./demo-link.component.scss'],
  standalone: true,
  imports: [MatButtonModule],
})
export class DemoLinkComponent {
  @Input()
  name: string | null = null;

  public get url(): string {
    return `https://github.com/reppners/ngx-drag-drop/tree/master/projects/demo/src/app/${this.name}`;
  }
}
