import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTemplateListComponent } from './todo-template-list.component';

describe('TodoTemplateListComponent', () => {
  let component: TodoTemplateListComponent;
  let fixture: ComponentFixture<TodoTemplateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTemplateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
