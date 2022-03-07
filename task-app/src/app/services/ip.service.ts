import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IPService {
  constructor(private http: HttpClient) {}

  getIP() {
    this.http.get('https://api.ipify.org/?format=json').subscribe((data) => {
      console.log(data);
    });
  }
}
