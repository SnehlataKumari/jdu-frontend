import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandBiharPageComponent } from './brand-bihar-page.component';

describe('BrandBiharPageComponent', () => {
  let component: BrandBiharPageComponent;
  let fixture: ComponentFixture<BrandBiharPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandBiharPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandBiharPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
