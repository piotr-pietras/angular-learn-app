import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { F1TableComponentModule } from './features/f1-component-table/f1-component-table.module';
import { F2NgRoutingModule } from './features/f2-ng-routing/f2-ng-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    F1TableComponentModule,
    F2NgRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
