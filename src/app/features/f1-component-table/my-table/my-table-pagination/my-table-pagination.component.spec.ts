import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTablePaginationComponent } from './my-table-pagination.component';

describe('MyTablePaginationComponent', () => {
  let component: MyTablePaginationComponent;
  let fixture: ComponentFixture<MyTablePaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTablePaginationComponent]
    });
    fixture = TestBed.createComponent(MyTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
