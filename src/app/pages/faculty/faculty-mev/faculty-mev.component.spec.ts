import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyMevComponent } from './faculty-mev.component';

describe('FacultyMevComponent', () => {
  let component: FacultyMevComponent;
  let fixture: ComponentFixture<FacultyMevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyMevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyMevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
