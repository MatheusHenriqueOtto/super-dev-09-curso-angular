import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosHome } from './carros-home';

describe('CarrosHome', () => {
  let component: CarrosHome;
  let fixture: ComponentFixture<CarrosHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrosHome],
    }).compileComponents();

    fixture = TestBed.createComponent(CarrosHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
