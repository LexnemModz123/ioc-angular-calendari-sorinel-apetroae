import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-filtres',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-filtres.component.html',
  styleUrl: './barra-filtres.component.scss'
})
export class BarraFiltresComponent {
  @Input() filtreText = '';
  @Input() filtreCategoria = '';

  @Output() filtresAplicats = new EventEmitter<{
    filtreText: string;
    filtreCategoria: string;
  }>();

  @Output() filtresRestablerts = new EventEmitter<void>();

  aplicar(): void {
    this.filtresAplicats.emit({
      filtreText: this.filtreText,
      filtreCategoria: this.filtreCategoria
    });
  }

  restablir(): void {
    this.filtreText = '';
    this.filtreCategoria = '';
    this.filtresRestablerts.emit();
  }
}