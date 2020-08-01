import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuggestionsFormComponent } from './add-suggestions-form.component';

describe('AddSuggestionsFormComponent', () => {
  let component: AddSuggestionsFormComponent;
  let fixture: ComponentFixture<AddSuggestionsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSuggestionsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSuggestionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
