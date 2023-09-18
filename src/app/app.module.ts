import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { F1TableComponent } from './features/f1-component-table/f1-component-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MyTableModule } from './features/f1-component-table/my-table/my-table.module';
import { F2NgRoutingComponent } from './features/f2-ng-routing/f2-ng-routing.component';
import { Route1Component } from './features/f2-ng-routing/route1/route1.component';
import { MatButtonModule } from '@angular/material/button';
import { Route2Component } from './features/f2-ng-routing/route2/route2.component';
import { Route3Component } from './features/f2-ng-routing/route3/route3.component';

@NgModule({
  declarations: [
    AppComponent,
    F1TableComponent,
    F2NgRoutingComponent,
    Route1Component,
    Route2Component,
    Route3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MyTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
