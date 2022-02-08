import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTemplateUpdateComponent } from './todo-template-update.component';

describe('TodoTemplateUpdateComponent', () => {
  let component: TodoTemplateUpdateComponent;
  let fixture: ComponentFixture<TodoTemplateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTemplateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTemplateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
