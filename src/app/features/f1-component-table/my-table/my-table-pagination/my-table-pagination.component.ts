import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-table-pagination',
  templateUrl: './my-table-pagination.component.html',
  styleUrls: ['./my-table-pagination.component.scss'],
})
export class MyTablePaginationComponent implements OnInit {
  @Input() dataLength!: number;
  @Output() rowsToDisplayChanged = new EventEmitter<[number, number]>();

  rowsPerPage: number = 5;
  pageNumber: number = 1;
  totalNumbeOfPages: number = 0;
  rowsToDisplay: [number, number] = [0, this.rowsPerPage];

  isButtonDisabled = { next: true, back: true };

  constructor() {}

  ngOnInit() {
    this.totalNumbeOfPages = Math.ceil(this.dataLength / this.rowsPerPage);
    this.rowsToDisplayChanged.emit(this.rowsToDisplay);
    this.checkIfDisabled();
  }

  onNext() {
    this.pageNumber++;
    this.rowsToDisplay = this.rowsToDisplay.map(
      (v) => v + this.rowsPerPage
    ) as [number, number];
    this.rowsToDisplayChanged.emit(this.rowsToDisplay);
    this.checkIfDisabled();
  }

  onBack() {
    this.pageNumber--;
    this.rowsToDisplay = this.rowsToDisplay.map(
      (v) => v - this.rowsPerPage
    ) as [number, number];
    this.rowsToDisplayChanged.emit(this.rowsToDisplay);
    this.checkIfDisabled();
  }

  checkIfDisabled() {
    if (this.pageNumber <= 1) this.isButtonDisabled.back = true;
    else this.isButtonDisabled.back = false;
    if (this.pageNumber >= this.totalNumbeOfPages)
      this.isButtonDisabled.next = true;
    else this.isButtonDisabled.next = false;
  }
}
