import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyIFComponent } from './faculty-if.component';

describe('FacultyIFComponent', () => {
  let component: FacultyIFComponent;
  let fixture: ComponentFixture<FacultyIFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyIFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyIFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
