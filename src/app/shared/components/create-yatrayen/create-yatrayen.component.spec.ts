import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYatrayenComponent } from './create-yatrayen.component';

describe('CreateYatrayenComponent', () => {
  let component: CreateYatrayenComponent;
  let fixture: ComponentFixture<CreateYatrayenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateYatrayenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYatrayenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
