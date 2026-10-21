import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Esdeveniment } from '../../models/esdeveniment.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-targeta-esdeveniment',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './targeta-esdeveniment.component.html',
  styleUrl: './targeta-esdeveniment.component.scss'
})
export class TargetaEsdevenimentComponent {
  @Input({ required: true }) esdeveniment!: Esdeveniment;

  @Output() seleccionat = new EventEmitter<Esdeveniment>();

  seleccionar(): void {
    this.seleccionat.emit(this.esdeveniment);
  }
}
