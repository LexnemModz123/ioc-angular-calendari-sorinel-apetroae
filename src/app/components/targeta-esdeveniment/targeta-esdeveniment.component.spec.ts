import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaEsdeveniment } from './targeta-esdeveniment.component';

describe('TargetaEsdeveniment', () => {
  let component: TargetaEsdeveniment;
  let fixture: ComponentFixture<TargetaEsdeveniment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaEsdeveniment],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaEsdeveniment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
