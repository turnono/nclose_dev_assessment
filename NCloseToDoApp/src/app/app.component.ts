import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'NCloseToDoApp';
  userIp = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadUsersInfo();
  }

  loadUsersInfo() {
    this.httpClient
      .get<any>('https://api.ipify.org/?format=json')
      .subscribe((data) => {
        this.userIp = data.ip;
        console.log('User Ip: ' + this.userIp);
      });
  }
}
