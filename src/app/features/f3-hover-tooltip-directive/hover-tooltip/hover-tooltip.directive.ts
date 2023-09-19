import {
  ComponentRef,
  Directive,
  HostListener,
  Input,
  ViewContainerRef,
} from '@angular/core';
import { MyTinyTooltipComponent } from './my-tiny-tooltip/my-tiny-tooltip.component';

@Directive({
  selector: '[myHoverTooltip]',
})
export class HoverTooltipDirective {
  @Input() myHoverTooltip = '';
  ref: ComponentRef<MyTinyTooltipComponent> | undefined;

  constructor(private viewContainer: ViewContainerRef) {}

  @HostListener('mouseenter') onOver() {
    this.ref = this.viewContainer.createComponent(MyTinyTooltipComponent);
    this.ref?.setInput('color', this.myHoverTooltip);
  }

  @HostListener('mouseleave') onLeave() {
    this.ref = undefined;
    this.viewContainer.remove();
  }

  @HostListener('mousemove', ['$event']) onMove(event: MouseEvent) {
    this.ref?.setInput('x', event.clientX + 10);
    this.ref?.setInput('y', event.clientY);
  }
}
