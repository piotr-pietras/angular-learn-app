import { NgModule } from '@angular/core';
import { MyTableComponent } from './my-table.component';
import { MyTablePaginationComponent } from './my-table-pagination/my-table-pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MyTableComponent, MyTablePaginationComponent],
  imports: [BrowserModule, MatButtonModule],
  exports: [MyTableComponent],
})
export class MyTableModule {}
