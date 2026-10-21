import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-etiqueta-esdeveniment',
  styleUrl: './etiqueta-esdeveniment.component.scss',
  templateUrl: './etiqueta-esdeveniment.component.html',
  standalone: true
})
export class EtiquetaEsdevenimentComponent {
  @Input() destacat = false;
}
