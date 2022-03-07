import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  todos: ToDo[] = [];
  constructor() {}

  getAllTasks() {
    return this.todos;
  }

  addNewTask(todo: ToDo) {
    this.todos.push(todo);
  }

  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }

  clearAllTasks() {
    this.todos.length = 0;
  }
}
