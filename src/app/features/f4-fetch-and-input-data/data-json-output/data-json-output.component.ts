import { Component, OnInit } from '@angular/core';
import { F4ServerApiService } from 'src/app/services/f4-server-api.service';

@Component({
  selector: 'app-data-json-output',
  templateUrl: './data-json-output.component.html',
  styleUrls: ['./data-json-output.component.scss'],
})
export class DataJsonOutputComponent implements OnInit {
  isPending: boolean = false;
  data: any = [];

  constructor(private serverApi: F4ServerApiService) {}

  ngOnInit(): void {
    this.serverApi.isPending.subscribe((v) => (this.isPending = v));
    this.serverApi.data.subscribe((v) => (this.data = v));
    this.serverApi.fetchData();
  }
}
