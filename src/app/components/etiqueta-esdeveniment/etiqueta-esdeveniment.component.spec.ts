import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EtiquetaEsdevenimentComponent } from './etiqueta-esdeveniment.component';

describe('EtiquetaEsdeveniment', () => {
  let component: EtiquetaEsdevenimentComponent;
  let fixture: ComponentFixture<EtiquetaEsdevenimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtiquetaEsdevenimentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EtiquetaEsdevenimentComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
