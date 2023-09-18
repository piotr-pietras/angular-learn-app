import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss'],
})
export class Route2Component {
  url: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.url = url.toString();
    });
  }
}
