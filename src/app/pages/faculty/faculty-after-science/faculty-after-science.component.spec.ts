import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAfterScienceComponent } from './faculty-after-science.component';

describe('FacultyAfterScienceComponent', () => {
  let component: FacultyAfterScienceComponent;
  let fixture: ComponentFixture<FacultyAfterScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyAfterScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyAfterScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
