import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateRoomPageComponent } from './private-room-page.component';

describe('PrivateRoomPageComponent', () => {
  let component: PrivateRoomPageComponent;
  let fixture: ComponentFixture<PrivateRoomPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateRoomPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateRoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
