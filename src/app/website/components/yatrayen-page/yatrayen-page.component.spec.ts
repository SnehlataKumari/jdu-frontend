import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YatrayenPageComponent } from './yatrayen-page.component';

describe('YatrayenPageComponent', () => {
  let component: YatrayenPageComponent;
  let fixture: ComponentFixture<YatrayenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YatrayenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YatrayenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
