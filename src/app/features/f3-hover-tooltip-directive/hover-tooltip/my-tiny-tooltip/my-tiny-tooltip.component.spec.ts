import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTinyTooltipComponent } from './my-tiny-tooltip.component';

describe('MyTinyTooltipComponent', () => {
  let component: MyTinyTooltipComponent;
  let fixture: ComponentFixture<MyTinyTooltipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTinyTooltipComponent]
    });
    fixture = TestBed.createComponent(MyTinyTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
