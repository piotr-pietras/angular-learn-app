import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { F4ServerApiService } from 'src/app/services/f4-server-api.service';

@Component({
  selector: 'app-data-form-delete',
  templateUrl: './data-form-delete.component.html',
  styleUrls: ['./data-form-delete.component.scss'],
})
export class DataFormDeleteComponent {
  idValue: string | null = null;
  idFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('[0-9]*'),
  ]);
  isPending: boolean = false;

  constructor(private serverApi: F4ServerApiService) {}

  ngOnInit(): void {
    this.idFormControl.valueChanges.subscribe((v) => (this.idValue = v));
    this.serverApi.isPending.subscribe((v) => (this.isPending = v));
  }

  resetInput() {
    this.idFormControl.reset();
  }

  onClick() {
    if (this.idValue) {
      this.serverApi.deleteData(this.idValue);
      this.resetInput();
    }
  }

  isDeleteDisabled() {
    if (this.idValue && !this.idFormControl.errors) return false;
    return true;
  }
}
