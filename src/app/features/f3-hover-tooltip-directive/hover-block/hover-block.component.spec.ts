import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverBlockComponent } from './hover-block.component';

describe('HoverBlockComponent', () => {
  let component: HoverBlockComponent;
  let fixture: ComponentFixture<HoverBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverBlockComponent]
    });
    fixture = TestBed.createComponent(HoverBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
