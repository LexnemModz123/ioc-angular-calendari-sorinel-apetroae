import { Component, OnInit, inject, DestroyRef } from '@angular/core';import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Esdeveniment } from '../../models/esdeveniment.model';
import { EsdevenimentsService } from '../../services/esdeveniments.service';
import { TargetaEsdevenimentComponent } from '../targeta-esdeveniment/targeta-esdeveniment.component';
import { BarraFiltresComponent } from '../barra-filtres/barra-filtres.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EsdevenimentApi } from '../../models/esdeveniment-api.model';

@Component({
  selector: 'app-llista-esdeveniments',
  standalone: true,
  imports: [TargetaEsdevenimentComponent,FormsModule,DatePipe,BarraFiltresComponent],
  templateUrl: './llista-esdeveniments.component.html',
  styleUrl: './llista-esdeveniments.component.scss'
})
export class LlistaEsdevenimentsComponent implements OnInit {
  private servei = inject(EsdevenimentsService);
  private destroyRef = inject(DestroyRef);
  public esdeveniments: Esdeveniment[] = [];
  public carregant = false;
  public error = '';

  public esdevenimentSeleccionat: Esdeveniment | null = null;
  public filtreText = '';
  public filtreCategoria = '';
  public creant = false;
  public errorCreacio: string | null = null;
  ngOnInit(): void {

  this.servei.esdeveniments$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(dades => {
      this.esdeveniments = dades;
    });

  this.servei.carregant$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(carregant => {
      this.carregant = carregant;
    });

  this.servei.error$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(error => {
      this.error = error ?? '';
    });

  this.servei.obtenirEsdeveniments()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe();

  this.servei.creant$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(estat => {
      this.creant = estat;
  });

  this.servei.errorCreacio$
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(error => {
      this.errorCreacio = error;
  });
}

carregarEsdeveniments(): void {
  this.servei.reintentar();
}

get esdevenimentsFiltrats(): Esdeveniment[] {
  return this.esdeveniments.filter(esdeveniment => {
    const coincideixText = esdeveniment.titol
      .toLowerCase()
      .includes(this.filtreText.toLowerCase());

    const coincideixCategoria =
      this.filtreCategoria === '' ||
      esdeveniment.categoria === this.filtreCategoria;

    return coincideixText && coincideixCategoria;
     });
}

  aplicarFiltres(filtres: {
  filtreText: string;
  filtreCategoria: string;
  }): void {
    this.filtreText = filtres.filtreText;
    this.filtreCategoria = filtres.filtreCategoria;
  }

  restablirFiltres(): void {
    this.filtreText = '';
    this.filtreCategoria = '';
  }

  seleccionarEsdeveniment(esdeveniment: Esdeveniment): void {
    this.esdevenimentSeleccionat = esdeveniment;
  }

  crearEsdevenimentProva(): void {

  const nouEsdeveniment: Omit<EsdevenimentApi, 'id'> = {
    titol: 'Esdeveniment de prova POST',
    descripcio: 'Aquest esdeveniment s’ha creat mitjançant una petició POST.',
    categoria: 'Cultura',
    data: '2027-01-15',
    durada: 60,
    destacat: true
  };

  this.servei.crearEsdeveniment(nouEsdeveniment).subscribe({
      next: (esdeveniment) => {
        console.log('Esdeveniment creat correctament:', esdeveniment);
      },
      error: (error) => {
        console.error('Error en crear l’esdeveniment:', error);
      }
    });
  }

}
