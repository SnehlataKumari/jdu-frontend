import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamerComponent } from './live-streamer.component';

describe('LiveStreamerComponent', () => {
  let component: LiveStreamerComponent;
  let fixture: ComponentFixture<LiveStreamerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStreamerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
