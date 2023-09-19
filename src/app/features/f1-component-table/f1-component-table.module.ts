import { NgModule } from '@angular/core';
import { F1TableComponent } from './f1-component-table.component';
import { MyTableModule } from './my-table/my-table.module';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [F1TableComponent],
  imports: [CommonModule, MyTableModule, MatCardModule],
  exports: [F1TableComponent],
})
export class F1TableComponentModule {}
