import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { skipWhile, take } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @Input() tasks: string[] = [];
  @Output() deleteTask = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getIPAddress();
  }

  getIPAddress() {
    this.http
      .get('https://api.ipify.org/?format=json')
      .pipe(
        skipWhile((response: any) => !response?.ip),
        take(1)
      )
      .subscribe((response: any) => console.log('Your IP is: ', response?.ip));
  }

  onDeleteTask(task: string): void {
    this.deleteTask.emit(task);
  }
}
