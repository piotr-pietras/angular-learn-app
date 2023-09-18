import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { F1TableComponent } from './f1-component-table.component';
import { MyTableModule } from './my-table/my-table.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [F1TableComponent],
  imports: [BrowserModule, MyTableModule, MatCardModule],
  exports: [F1TableComponent],
})
export class F1TableComponentModule {}
