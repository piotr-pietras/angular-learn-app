import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormDeleteComponent } from './data-form-delete.component';

describe('DataFormDeleteComponent', () => {
  let component: DataFormDeleteComponent;
  let fixture: ComponentFixture<DataFormDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataFormDeleteComponent]
    });
    fixture = TestBed.createComponent(DataFormDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
