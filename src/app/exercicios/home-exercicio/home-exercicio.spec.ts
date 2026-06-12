import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExercicio } from './home-exercicio';

describe('HomeExercicio', () => {
  let component: HomeExercicio;
  let fixture: ComponentFixture<HomeExercicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeExercicio],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeExercicio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
