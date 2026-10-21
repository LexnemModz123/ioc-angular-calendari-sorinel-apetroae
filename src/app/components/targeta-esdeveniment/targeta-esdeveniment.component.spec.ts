import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TargetaEsdevenimentComponent } from './targeta-esdeveniment.component';
import { Esdeveniment } from '../../models/esdeveniment.model';

describe('TargetaEsdevenimentComponent', () => {
  let component: TargetaEsdevenimentComponent;
  let fixture: ComponentFixture<TargetaEsdevenimentComponent>;

  const esdevenimentProva: Esdeveniment = {
    id: 1,
    titol: 'Concert de prova',
    descripcio: 'Descripció de prova',
    categoria: 'Cultura',
    data: '2026-11-15',
    durada: 60,
    destacat: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaEsdevenimentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaEsdevenimentComponent);
    component = fixture.componentInstance;
    component.esdeveniment = esdevenimentProva;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
