import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'my-tiny-tooltip',
  templateUrl: './my-tiny-tooltip.component.html',
  styleUrls: ['./my-tiny-tooltip.component.scss'],
})
export class MyTinyTooltipComponent {
  @HostBinding('style.opacity') @Input() opacity!: number;
  @HostBinding('style.left.px') @Input() x!: number;
  @HostBinding('style.top.px') @Input() y!: number;
  @Input() color!: string;
}
