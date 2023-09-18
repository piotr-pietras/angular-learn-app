import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { F2NgRoutingComponent } from './f2-ng-routing.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    F2NgRoutingComponent,
    Route1Component,
    Route2Component,
    Route3Component,
  ],
  imports: [BrowserModule, MatCardModule, MatButtonModule, AppRoutingModule],
  exports: [F2NgRoutingComponent],
})
export class F2NgRoutingModule {}
