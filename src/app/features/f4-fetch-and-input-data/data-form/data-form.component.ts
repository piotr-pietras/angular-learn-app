import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
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

  ngOnInit(): void {
    this.dataFormControl.valueChanges.subscribe((v) => (this.dataValue = v));
    this.numberFormControl.valueChanges.subscribe(
      (v) => (this.numberValue = v)
    );
  }

  isPostDisabled() {
    if (
      this.dataValue &&
      this.numberValue &&
      !this.dataFormControl.errors &&
      !this.numberFormControl.errors
    ) {
      return false;
    }
    return true;
  }
}
