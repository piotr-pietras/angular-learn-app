import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataJsonOutputComponent } from './data-json-output.component';

describe('DataJsonOutputComponent', () => {
  let component: DataJsonOutputComponent;
  let fixture: ComponentFixture<DataJsonOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataJsonOutputComponent]
    });
    fixture = TestBed.createComponent(DataJsonOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
