import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsComponent } from './features/f1-component-table/f1-component-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MyTableModule } from './features/f1-component-table/my-table/my-table.module';

@NgModule({
  declarations: [AppComponent, BasicsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MyTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
