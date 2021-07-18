import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceDetailsComponent } from './province-details.component';

describe('ProvinceDetailsComponent', () => {
  let component: ProvinceDetailsComponent;
  let fixture: ComponentFixture<ProvinceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
