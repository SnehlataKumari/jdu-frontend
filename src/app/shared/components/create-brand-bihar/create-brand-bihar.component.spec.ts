import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBrandBiharComponent } from './create-brand-bihar.component';

describe('CreateBrandBiharComponent', () => {
  let component: CreateBrandBiharComponent;
  let fixture: ComponentFixture<CreateBrandBiharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBrandBiharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBrandBiharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
