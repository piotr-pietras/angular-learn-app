import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { F1TableComponent } from './features/f1-component-table/f1-component-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MyTableModule } from './features/f1-component-table/my-table/my-table.module';

@NgModule({
  declarations: [AppComponent, F1TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MyTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
