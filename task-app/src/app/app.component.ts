import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { IPService } from './services/ip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Array<string> = []; // Can also be a Task Model
  currentTask!: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private alert: MatSnackBar, private IPService: IPService) {}

  ngOnInit() {
    this.IPService.getIP();
  }

  addTask() {
    this.tasks.push(this.currentTask);
    this.currentTask = '';
    this.showAlert('add', 'You have added a task!');
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    this.showAlert('remove', 'You have removed a task!');
  }

  clearTasks() {
    this.tasks.length = 0;
    this.showAlert('remove', 'You have removed all tasks!');
  }

  showAlert(type: string, message: string) {
    this.alert.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000,
      panelClass: [`alert-${type}`],
    });
  }
}
