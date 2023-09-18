import { NgModule } from '@angular/core';
import { MyTableComponent } from './my-table.component';
import { MyTablePaginationComponent } from './my-table-pagination/my-table-pagination.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [MyTableComponent, MyTablePaginationComponent],
  imports: [BrowserModule],
  exports: [MyTableComponent],
})
export class MyTableModule {}
