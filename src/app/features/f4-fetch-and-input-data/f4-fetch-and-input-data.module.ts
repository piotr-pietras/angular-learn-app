import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { F4FetchAndInputDataComponent } from './f4-fetch-and-input-data.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataFormPostComponent } from './data-form-post/data-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataJsonOutputComponent } from './data-json-output/data-json-output.component';
import { MatButtonModule } from '@angular/material/button';
import { F4ServerApiService } from 'src/app/services/f4-server-api.service';
import { HttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DataFormDeleteComponent } from './data-form-delete/data-form-delete.component';

@NgModule({
  declarations: [
    F4FetchAndInputDataComponent,
    DataFormPostComponent,
    DataJsonOutputComponent,
    DataFormDeleteComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    MatProgressSpinnerModule,
  ],
  providers: [HttpClient, F4ServerApiService],
  exports: [F4FetchAndInputDataComponent],
})
export class F4FetchAndInputDataModule {}
