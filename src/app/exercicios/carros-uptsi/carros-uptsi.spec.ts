import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosUptsi } from './carros-uptsi';

describe('CarrosUptsi', () => {
  let component: CarrosUptsi;
  let fixture: ComponentFixture<CarrosUptsi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosUptsi],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosUptsi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
