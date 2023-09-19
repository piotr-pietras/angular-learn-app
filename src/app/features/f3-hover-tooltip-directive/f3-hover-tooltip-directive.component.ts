import { Component } from '@angular/core';

const COLORS = ['#6B2737', '#E08E45', '#F8F4A6', '#BDF7B7', '#3943B7']

@Component({
  selector: 'app-f3-hover-tooltip-directive',
  templateUrl: './f3-hover-tooltip-directive.component.html',
  styleUrls: ['./f3-hover-tooltip-directive.component.scss'],
})
export class F3HoverTooltipDirectiveComponent {
  colors = COLORS;
}
