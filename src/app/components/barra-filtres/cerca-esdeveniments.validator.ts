import { AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constants/api.constants';
import {
  Observable,
  of,
  timer,
  switchMap,
  map,
  catchError
} from 'rxjs';
import { EsdevenimentApi } from '../../models/esdeveniment-api.model';

export function cercaEsdevenimentsValidator(): AsyncValidatorFn {

  const http = inject(HttpClient);

  return (control): Observable<ValidationErrors | null> => {

    const terme = control.value?.trim().toLowerCase();

    if (!terme || terme.length < 3) {
      return of(null);
    }

    return timer(500).pipe(

      switchMap(() =>
        http.get<EsdevenimentApi[]>(
          `${API_URL}/esdeveniments`
        )
      ),

      map(esdeveniments => {

        const resultats = esdeveniments.filter(esdeveniment =>
          esdeveniment.titol.toLowerCase().includes(terme)
        );

        return resultats.length > 0
          ? null
          : { senseResultats: true };

      }),

      catchError(() => of({ errorConsulta: true }))
    );
  };
}
