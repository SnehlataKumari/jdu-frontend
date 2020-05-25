import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateResourceFormComponent } from './update-resource-form.component';

describe('UpdateResourceFormComponent', () => {
  let component: UpdateResourceFormComponent;
  let fixture: ComponentFixture<UpdateResourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateResourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
