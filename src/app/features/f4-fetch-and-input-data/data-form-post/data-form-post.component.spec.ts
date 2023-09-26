import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormPostComponent } from './data-form.component';

describe('DataFormComponent', () => {
  let component: DataFormPostComponent;
  let fixture: ComponentFixture<DataFormPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataFormPostComponent]
    });
    fixture = TestBed.createComponent(DataFormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
