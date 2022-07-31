import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOptionsComponent } from './student-options.component';

describe('StudentOptionsComponent', () => {
  let component: StudentOptionsComponent;
  let fixture: ComponentFixture<StudentOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
