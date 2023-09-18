import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F2NgRoutingComponent } from './f2-ng-routing.component';

describe('F2NgRoutingComponent', () => {
  let component: F2NgRoutingComponent;
  let fixture: ComponentFixture<F2NgRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [F2NgRoutingComponent]
    });
    fixture = TestBed.createComponent(F2NgRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
