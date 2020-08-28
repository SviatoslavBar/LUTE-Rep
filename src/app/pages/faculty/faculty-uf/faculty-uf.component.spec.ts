import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyUFComponent } from './faculty-uf.component';

describe('FacultyUFComponent', () => {
  let component: FacultyUFComponent;
  let fixture: ComponentFixture<FacultyUFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyUFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyUFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
