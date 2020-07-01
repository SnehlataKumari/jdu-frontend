import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamPlayerComponent } from './live-stream-player.component';

describe('LiveStreamPlayerComponent', () => {
  let component: LiveStreamPlayerComponent;
  let fixture: ComponentFixture<LiveStreamPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStreamPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
