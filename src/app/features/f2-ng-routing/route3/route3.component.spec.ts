import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Route3Component } from './route3.component';

describe('Route3Component', () => {
  let component: Route3Component;
  let fixture: ComponentFixture<Route3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Route3Component]
    });
    fixture = TestBed.createComponent(Route3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
