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
      .pipe(delay(1000))
      .subscribe({
        next: (v) => {
          console.log(v);
          this.data.next(v);
        },
        complete: () => {
          console.log('complete');
          this.isPending.next(false);
        },
      });
  }
}
