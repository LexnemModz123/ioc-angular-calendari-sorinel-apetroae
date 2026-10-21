import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ESDEVENIMENTS_MOCK } from '../../models/esdeveniments.mock';
import { Esdeveniment } from '../../models/esdeveniment.model';
import { TargetaEsdevenimentComponent } from '../targeta-esdeveniment/targeta-esdeveniment.component';


@Component({
  selector: 'app-llista-esdeveniments',
  standalone: true,
  imports: [TargetaEsdevenimentComponent,FormsModule,DatePipe],
  templateUrl: './llista-esdeveniments.component.html',
  styleUrl: './llista-esdeveniments.component.scss'
})
export class LlistaEsdevenimentsComponent {
  public esdeveniments = ESDEVENIMENTS_MOCK;
  public esdevenimentSeleccionat: Esdeveniment | null = null;
  public filtreText = '';
  public filtreCategoria = '';

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

  seleccionarEsdeveniment(esdeveniment: Esdeveniment): void {
    this.esdevenimentSeleccionat = esdeveniment;
  }
}
