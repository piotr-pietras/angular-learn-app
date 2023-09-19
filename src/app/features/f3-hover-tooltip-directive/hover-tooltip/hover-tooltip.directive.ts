import {
  ComponentRef,
  Directive,
  HostListener,
  ViewContainerRef,
} from '@angular/core';
import { MyTinyTooltipComponent } from './my-tiny-tooltip/my-tiny-tooltip.component';

@Directive({
  selector: '[myHoverTooltip]',
})
export class HoverTooltipDirective {
  ref: ComponentRef<MyTinyTooltipComponent> | undefined;

  constructor(private viewContainer: ViewContainerRef) {}

  @HostListener('mouseenter') onOver() {
    console.log('enter');
    this.ref = this.viewContainer.createComponent(MyTinyTooltipComponent);
  }

  @HostListener('mouseleave') onLeave() {
    console.log('leave');
    this.ref = undefined;
    this.viewContainer.remove();
  }

  @HostListener('mousemove', ['$event']) onMove(event: MouseEvent) {
    this.ref?.setInput('x', event.clientX + 10);
    this.ref?.setInput('y', event.clientY);
  }
}
