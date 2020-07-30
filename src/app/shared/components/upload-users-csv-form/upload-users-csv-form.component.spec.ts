import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUsersCsvFormComponent } from './upload-users-csv-form.component';

describe('UploadUsersCsvFormComponent', () => {
  let component: UploadUsersCsvFormComponent;
  let fixture: ComponentFixture<UploadUsersCsvFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadUsersCsvFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadUsersCsvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
