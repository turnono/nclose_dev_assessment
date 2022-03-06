import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../shared/notification-service.component';
import { ToDo } from '../shared/todo.model';
import { ToDoService } from '../shared/todo.service';

@Component({
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.less'],
})
export class AddToDoComponent implements OnInit {
  inputLabel = 'Add new task...';
  requiredText = 'This field is required, please enter a task';
  successText = 'You have added a task!';
  removedText = 'You have removed a task!';
  todos: ToDo[] = [];
  showValidationErrors: boolean;

  constructor(
    public todoService: ToDoService,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoService.getAllTasks();
  }

  addTodo(form: NgForm) {
    if (form.invalid) {
      this.showValidationErrors = true;
    } else {
      this.todoService.addNewTask({ text: form.value.text });
      this.notification.showSuccessNotification(this.successText, '');
      this.showValidationErrors = false;
      form.reset();
    }
  }

  deleteTodo(todo: ToDo) {
    const index = this.todos.indexOf(todo);
    this.todoService.deleteTask(index);
    this.notification.showRemovedNotification(this.removedText, '');
  }

  clearTasks() {
    this.todoService.clearAllTasks();
  }
}
