import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { F1TableComponentModule } from './features/f1-component-table/f1-component-table.module';
import { F2NgRoutingModule } from './features/f2-ng-routing/f2-ng-routing.module';
import { F3HoverTooltipDirectiveModule } from './features/f3-hover-tooltip-directive/f3-hover-tooltip-directive.module';
import { F4FetchAndInputDataModule } from './features/f4-fetch-and-input-data/f4-fetch-and-input-data.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    F1TableComponentModule,
    F2NgRoutingModule,
    F3HoverTooltipDirectiveModule,
    F4FetchAndInputDataModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
