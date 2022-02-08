import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTemplateDetailComponent } from './todo-template-detail.component';

describe('TodoTemplateDetailComponent', () => {
  let component: TodoTemplateDetailComponent;
  let fixture: ComponentFixture<TodoTemplateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTemplateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTemplateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
