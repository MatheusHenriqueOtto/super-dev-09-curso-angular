import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosRx7 } from './carros-rx7';

describe('CarrosRx7', () => {
  let component: CarrosRx7;
  let fixture: ComponentFixture<CarrosRx7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosRx7],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosRx7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
