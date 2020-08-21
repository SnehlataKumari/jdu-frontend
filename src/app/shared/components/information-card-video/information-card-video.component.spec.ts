import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCardVideoComponent } from './information-card-video.component';

describe('InformationCardVideoComponent', () => {
  let component: InformationCardVideoComponent;
  let fixture: ComponentFixture<InformationCardVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationCardVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCardVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
