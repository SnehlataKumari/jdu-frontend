import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowYatraComponent } from './show-yatra.component';

describe('ShowYatraComponent', () => {
  let component: ShowYatraComponent;
  let fixture: ComponentFixture<ShowYatraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowYatraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowYatraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
