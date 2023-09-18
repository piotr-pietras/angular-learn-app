import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route1Component } from './features/f2-ng-routing/route1/route1.component';
import { Route2Component } from './features/f2-ng-routing/route2/route2.component';
import { Route3Component } from './features/f2-ng-routing/route3/route3.component';

const routes: Routes = [
  {
    path: 'route1',
    component: Route1Component,
    children: [
      {
        path: 'route2/:param',
        component: Route2Component,
        children: [{ path: 'route3', component: Route3Component }],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
