import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class F4ServerApiService {
  data = new Subject<any>();
  isPending = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  fetchData() {
    this.isPending.next(true);
    this.http
      .get(`${environment.apiURL}/feature4`)
      .pipe(delay(2000))
      .subscribe({
        next: (v) => {
          this.data.next(v);
        },
        complete: () => {
          this.isPending.next(false);
        },
        error: (err) => {
          this.isPending.next(false);
          window.alert(JSON.stringify(err));
        },
      });
  }

  postData(data: string, number: string) {
    this.isPending.next(true);
    this.http
      .post(`${environment.apiURL}/feature4`, { data, number })
      .pipe(delay(2000))
      .subscribe({
        complete: () => {
          this.fetchData();
        },
        error: (err) => {
          this.isPending.next(false);
          window.alert(JSON.stringify(err));
        },
      });
  }

  deleteData(id: string) {
    this.isPending.next(true);
    this.http
      .delete(`${environment.apiURL}/feature4/${id}`)
      .pipe(delay(2000))
      .subscribe({
        complete: () => {
          this.fetchData();
        },
        error: (err) => {
          this.isPending.next(false);
          window.alert(JSON.stringify(err));
        },
      });
  }
}
