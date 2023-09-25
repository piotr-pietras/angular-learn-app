import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F4FetchAndInputDataComponent } from './f4-fetch-and-input-data.component';

describe('F4FetchAndInputDataComponent', () => {
  let component: F4FetchAndInputDataComponent;
  let fixture: ComponentFixture<F4FetchAndInputDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [F4FetchAndInputDataComponent]
    });
    fixture = TestBed.createComponent(F4FetchAndInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
