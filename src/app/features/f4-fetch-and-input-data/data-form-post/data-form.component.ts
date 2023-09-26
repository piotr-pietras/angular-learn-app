import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { F4ServerApiService } from 'src/app/services/f4-server-api.service';

@Component({
  selector: 'app-data-form-post',
  templateUrl: './data-form-post.component.html',
  styleUrls: ['./data-form-post.component.scss'],
})
export class DataFormPostComponent implements OnInit {
  dataValue: string | null = null;
  numberValue: string | null = null;
  dataFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  numberFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('[0-9]*'),
  ]);
  isPending: boolean = false;

  constructor(private serverApi: F4ServerApiService) {}

  ngOnInit(): void {
    this.dataFormControl.valueChanges.subscribe((v) => (this.dataValue = v));
    this.numberFormControl.valueChanges.subscribe(
      (v) => (this.numberValue = v)
    );
    this.serverApi.isPending.subscribe((v) => (this.isPending = v));
  }

  resetInput() {
    this.dataFormControl.reset();
    this.numberFormControl.reset();
  }

  onClick() {
    if (this.dataValue && this.numberValue) {
      this.serverApi.postData(this.dataValue, this.numberValue);
      this.resetInput();
    }
  }

  isPostDisabled() {
    if (
      this.dataValue &&
      this.numberValue &&
      !this.dataFormControl.errors &&
      !this.numberFormControl.errors
    )
      return false;
    return true;
  }
}
