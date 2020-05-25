import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResourceFormComponent } from './create-resource-form.component';

describe('CreateResourceFormComponent', () => {
  let component: CreateResourceFormComponent;
  let fixture: ComponentFixture<CreateResourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
