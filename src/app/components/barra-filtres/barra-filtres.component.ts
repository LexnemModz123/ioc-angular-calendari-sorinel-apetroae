import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormGroup,FormControl,Validators} from '@angular/forms';
import { cercaEsdevenimentsValidator } from './cerca-esdeveniments.validator';
import { take } from 'rxjs';

@Component({
  selector: 'app-barra-filtres',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './barra-filtres.component.html',
  styleUrl: './barra-filtres.component.scss'
})
export class BarraFiltresComponent implements OnInit {

  public historialCerques: string[] = [];
  private readonly clauHistorial = 'historialCerques';

  @Input() filtreText = '';
  @Input() filtreCategoria = '';

  @Output() filtresAplicats = new EventEmitter<{
    filtreText: string;
    filtreCategoria: string;
  }>();

  @Output() filtresRestablerts = new EventEmitter<void>();

  formulari = new FormGroup({
    filtreText: new FormControl('',{
      validators: [
        Validators.required,
        Validators.minLength(3)
      ],
      asyncValidators: [
        cercaEsdevenimentsValidator()
      ],
      updateOn: 'change'
  }),
    filtreCategoria: new FormControl('')
  });

  aplicar(): void {
    if (this.formulari.invalid) {
      this.formulari.markAllAsTouched();
      return;
    }

    this.guardarCerca(
      this.formulari.value.filtreText || ''
    );

    this.filtresAplicats.emit({
      filtreText: this.formulari.value.filtreText?.trim() || '',
      filtreCategoria: this.formulari.value.filtreCategoria || ''
    });
  }

  restablir(): void {
    this.formulari.reset({
      filtreText: '',
      filtreCategoria: ''
    });

    this.formulari.markAsPristine();
    this.formulari.markAsUntouched();

    this.filtresRestablerts.emit();
  }

  carregarHistorial(): void {
  try {
    const historialGuardat = localStorage.getItem(this.clauHistorial);

    if (historialGuardat) {
      this.historialCerques = JSON.parse(historialGuardat);
    }

    } catch (error) {
    console.error('Error en carregar l’historial:', error);
    this.historialCerques = [];
    }
  }

  ngOnInit(): void {
    this.carregarHistorial();
  }


guardarCerca(terme: string): void {
  try {
    const cerca = terme.trim();

    if (!cerca) {
      return;
    }

    const ultimElement = this.historialCerques[0];

    if (ultimElement?.toLowerCase() === cerca.toLowerCase()) {
      return;
    }

    this.historialCerques.unshift(cerca);

    this.historialCerques = this.historialCerques.slice(0, 5);

    localStorage.setItem(
      this.clauHistorial,
      JSON.stringify(this.historialCerques)
    );

    } catch (error) {
      console.error('Error en guardar l’historial:', error);
    }
  }

  recuperarCerca(terme: string): void {
    this.formulari.patchValue({
      filtreText: terme
    });

    this.formulari.markAllAsTouched();

    this.formulari.statusChanges
      .pipe(take(1))
      .subscribe(estado => {
        if (estado === 'VALID') {
          this.aplicar();
        }
    });
  }
}
