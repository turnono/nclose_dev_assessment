import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  newTask!: string;
  @Output() addTask = new EventEmitter<string>();

  onAddTask() {
    if (this.newTask && this.newTask.length >= 2) {
      this.addTask.emit(this.newTask);
      this.newTask = '';
    }
  }
}
