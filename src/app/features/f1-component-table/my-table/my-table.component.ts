import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss'],
})
export class MyTableComponent implements OnInit {
  @Input() columns!: { headerName: string }[];
  @Input() data!: any[];

  sortedData: (number | string)[][] = [];

  constructor() {}

  ngOnInit() {
    this.sortedData = this.data.map((d) => {
      const toYield: (number | string)[] = [];
      this.columns.forEach(({ headerName }) => {
        if (d[headerName]) {
          toYield.push(d[headerName] as string | number);
        } else {
          toYield.push('');
        }
      });
      return toYield;
    });
  }
}
