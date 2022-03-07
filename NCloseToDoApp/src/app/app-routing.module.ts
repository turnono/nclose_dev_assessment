import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToDoComponent } from './add-todo/add-todo.component';

const routes: Routes = [
  { path: '', component: AddToDoComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
