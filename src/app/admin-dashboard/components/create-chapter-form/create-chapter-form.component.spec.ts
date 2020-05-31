import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChapterFormComponent } from './create-chapter-form.component';

describe('CreateChapterFormComponent', () => {
  let component: CreateChapterFormComponent;
  let fixture: ComponentFixture<CreateChapterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChapterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChapterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
