import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBiharBrandComponent } from './manage-bihar-brand.component';

describe('ManageBiharBrandComponent', () => {
  let component: ManageBiharBrandComponent;
  let fixture: ComponentFixture<ManageBiharBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBiharBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBiharBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
