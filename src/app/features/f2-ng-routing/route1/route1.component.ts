import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.scss'],
})
export class Route1Component implements OnInit {
  url: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.url = url.toString();
    });
  }
}
