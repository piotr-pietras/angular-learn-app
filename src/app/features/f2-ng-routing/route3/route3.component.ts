import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss'],
})
export class Route3Component {
  url: string = '';
  query: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.url = url.toString();
    });
    this.route.queryParams.subscribe((query) => {
      this.query = query['test'];
    });
  }
}
