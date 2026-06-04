import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosCivicsi } from './carros-civicsi';

describe('CarrosCivicsi', () => {
  let component: CarrosCivicsi;
  let fixture: ComponentFixture<CarrosCivicsi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosCivicsi],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosCivicsi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
