import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWritingComponent } from './client-writing.component';

describe('ClientWritingComponent', () => {
  let component: ClientWritingComponent;
  let fixture: ComponentFixture<ClientWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
