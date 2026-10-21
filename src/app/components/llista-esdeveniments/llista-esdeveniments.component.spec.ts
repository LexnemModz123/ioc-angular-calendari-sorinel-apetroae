import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LlistaEsdeveniments } from './llista-esdeveniments.component';

describe('LlistaEsdeveniments', () => {
  let component: LlistaEsdeveniments;
  let fixture: ComponentFixture<LlistaEsdeveniments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaEsdeveniments],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaEsdeveniments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
