import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTemplateWritingComponent } from './todo-template-writing.component';

describe('TodoTemplateWritingComponent', () => {
  let component: TodoTemplateWritingComponent;
  let fixture: ComponentFixture<TodoTemplateWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTemplateWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTemplateWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
