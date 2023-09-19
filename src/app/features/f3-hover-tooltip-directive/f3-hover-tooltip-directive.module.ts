import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { F3HoverTooltipDirectiveComponent } from './f3-hover-tooltip-directive.component';
import { MatCardModule } from '@angular/material/card';
import { HoverBlockComponent } from './hover-block/hover-block.component';
import { HoverTooltipModule } from './hover-tooltip/hover-tooltip.module';

@NgModule({
  declarations: [F3HoverTooltipDirectiveComponent, HoverBlockComponent],
  imports: [CommonModule, MatCardModule, HoverTooltipModule],
  exports: [F3HoverTooltipDirectiveComponent],
})
export class F3HoverTooltipDirectiveModule {}
