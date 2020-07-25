import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionQuestionsComponent } from './suggestion-questions.component';

describe('SuggestionQuestionsComponent', () => {
  let component: SuggestionQuestionsComponent;
  let fixture: ComponentFixture<SuggestionQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
