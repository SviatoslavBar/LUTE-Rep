import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTUSOComponent } from './faculty-tuso.component';

describe('FacultyTUSOComponent', () => {
  let component: FacultyTUSOComponent;
  let fixture: ComponentFixture<FacultyTUSOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyTUSOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTUSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
