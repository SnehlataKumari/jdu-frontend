import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjectFormComponent } from './create-subject-form.component';

describe('CreateSubjectFormComponent', () => {
  let component: CreateSubjectFormComponent;
  let fixture: ComponentFixture<CreateSubjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
