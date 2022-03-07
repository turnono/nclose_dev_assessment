import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
})
export class ToDoListComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete() {
    this.deleteClicked.emit();
  }
}
