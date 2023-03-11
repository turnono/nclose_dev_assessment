import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get a list of tasks', () => {
    expect(component.tasks).toEqual([]);
  });

  it('should delete a task', () => {
    component.tasks = ['Test Task'];
    const emitSpy = spyOn(component.deleteTask, 'emit');
    component.onDeleteTask('Test Task');
    expect(emitSpy).toHaveBeenCalledWith('Test Task');
  });
});
