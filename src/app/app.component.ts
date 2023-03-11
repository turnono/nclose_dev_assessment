import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: string[] = [];

  addTask(newTask: string) {
    if (newTask?.trim()) {
      this.tasks.push(newTask?.trim());
    }
  }

  deleteTask(task: string) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

  clearTasks() {
    this.tasks = [];
  }
}
