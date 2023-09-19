import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverTooltipDirective } from './hover-tooltip.directive';
import { MyTinyTooltipComponent } from './my-tiny-tooltip/my-tiny-tooltip.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HoverTooltipDirective, MyTinyTooltipComponent],
  imports: [CommonModule, MatCardModule],
  exports: [HoverTooltipDirective],
})
export class HoverTooltipModule {}
