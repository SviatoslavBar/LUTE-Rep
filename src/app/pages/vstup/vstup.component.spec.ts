import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VstupComponent } from './vstup.component';

describe('VstupComponent', () => {
  let component: VstupComponent;
  let fixture: ComponentFixture<VstupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VstupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VstupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
