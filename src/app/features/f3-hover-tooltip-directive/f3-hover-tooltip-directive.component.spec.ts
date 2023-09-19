import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F3HoverTooltipDirectiveComponent } from './f3-hover-tooltip-directive.component';

describe('F3HoverTooltipDirectiveComponent', () => {
  let component: F3HoverTooltipDirectiveComponent;
  let fixture: ComponentFixture<F3HoverTooltipDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [F3HoverTooltipDirectiveComponent]
    });
    fixture = TestBed.createComponent(F3HoverTooltipDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
