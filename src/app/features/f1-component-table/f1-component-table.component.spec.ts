import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1TableComponent } from './f1-component-table.component';

describe('BasicsComponent', () => {
  let component: F1TableComponent;
  let fixture: ComponentFixture<F1TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [F1TableComponent]
    });
    fixture = TestBed.createComponent(F1TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
