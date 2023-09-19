import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-block',
  templateUrl: './hover-block.component.html',
  styleUrls: ['./hover-block.component.scss'],
})
export class HoverBlockComponent {
  @Input() color!: string;
}
