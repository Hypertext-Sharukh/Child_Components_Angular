import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalifoniaComponent } from './califonia.component';

describe('CalifoniaComponent', () => {
  let component: CalifoniaComponent;
  let fixture: ComponentFixture<CalifoniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalifoniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalifoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
