import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAfterInfoComponent } from './faculty-after-info.component';

describe('FacultyAfterInfoComponent', () => {
  let component: FacultyAfterInfoComponent;
  let fixture: ComponentFixture<FacultyAfterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyAfterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAfterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
