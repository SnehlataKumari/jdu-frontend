import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactsPageComponent } from './impacts-page.component';

describe('ImpactsPageComponent', () => {
  let component: ImpactsPageComponent;
  let fixture: ComponentFixture<ImpactsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpactsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
