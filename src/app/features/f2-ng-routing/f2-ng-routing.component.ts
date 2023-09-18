import { Component } from '@angular/core';

const REDIRECT_TO = [
  { to: '/route1', query: {} },
  { to: '/route1/route2/someParamId/', query: {} },
  { to: '/route1/route2/someParamId/route3', query: { test: 123 } },
];

@Component({
  selector: 'app-f2-ng-routing',
  templateUrl: './f2-ng-routing.component.html',
  styleUrls: ['./f2-ng-routing.component.scss'],
})
export class F2NgRoutingComponent {
  links = REDIRECT_TO;
}
