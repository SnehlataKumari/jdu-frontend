import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageYatrayenComponent } from './manage-yatrayen.component';

describe('ManageYatrayenComponent', () => {
  let component: ManageYatrayenComponent;
  let fixture: ComponentFixture<ManageYatrayenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageYatrayenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageYatrayenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
