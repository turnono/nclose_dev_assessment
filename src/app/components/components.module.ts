import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksComponent } from './tasks/tasks.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [AddTaskComponent, TasksComponent],
  imports: [CommonModule, MatFormFieldModule, FormsModule, MatIconModule, MatButtonModule, MatInputModule],
  exports: [AddTaskComponent, TasksComponent],
})
export class ComponentsModule {}
