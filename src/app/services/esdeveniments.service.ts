import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Esdeveniment } from '../models/esdeveniment.model';
import {
  BehaviorSubject,
  Subject,
  EMPTY,
  map,
  startWith,
  switchMap,
  tap,
  catchError,
  finalize
} from 'rxjs';
import {adaptarEsdeveniment,adaptarEsdeveniments} from '../adapters/esdeveniment.adapter';
import { API_URL } from '../constants/api.constants';
import { EsdevenimentApi } from '../models/esdeveniment-api.model';


@Injectable({
  providedIn: 'root'
})
export class EsdevenimentsService {

  private http = inject(HttpClient);

  private esdevenimentsSubject = new BehaviorSubject<Esdeveniment[]>([]);
  esdeveniments$ = this.esdevenimentsSubject.asObservable();

  private carregantSubject = new BehaviorSubject<boolean>(false);
  carregant$ = this.carregantSubject.asObservable();

  private errorSubject = new BehaviorSubject<string | null>(null);
  error$ = this.errorSubject.asObservable();

  private creantSubject = new BehaviorSubject<boolean>(false);
  creant$ = this.creantSubject.asObservable();

  private errorCreacioSubject = new BehaviorSubject<string | null>(null);
  errorCreacio$ = this.errorCreacioSubject.asObservable();

  private recarregarSubject = new Subject<void>();

  obtenirEsdeveniments() {
    return this.recarregarSubject.pipe(

      startWith(void 0),

      tap(() => {
        this.carregantSubject.next(true);
        this.errorSubject.next(null);
      }),

      switchMap(() => {
        return this.http.get<EsdevenimentApi[]>(
          `${API_URL}/esdeveniments`
        ).pipe(

          map(dades => adaptarEsdeveniments(dades)),

          tap(dades => {
            this.esdevenimentsSubject.next(dades);
          }),

          catchError(() => {
            this.errorSubject.next(
              'No s’han pogut carregar els esdeveniments.'
            );
            return EMPTY;
          }),

          finalize(() => {
            this.carregantSubject.next(false);
          })
        );
      })
    );
  }

  crearEsdeveniment(esdeveniment: Omit<EsdevenimentApi, 'id'>) {

    this.creantSubject.next(true);
    this.errorCreacioSubject.next(null);

    return this.http.post<EsdevenimentApi>(
      `${API_URL}/esdeveniments`,
      esdeveniment
    ).pipe(

      map(dades => adaptarEsdeveniment(dades)),

      tap(nouEsdeveniment => {
        const esdevenimentsActuals = this.esdevenimentsSubject.value;

        this.esdevenimentsSubject.next([
          ...esdevenimentsActuals,
          nouEsdeveniment
        ]);
      }),

      catchError(error => {
        this.errorCreacioSubject.next('No s’ha pogut crear l’esdeveniment.');
        throw error;
      }),

      finalize(() => {
        this.creantSubject.next(false);
      })
    );
  }

  reintentar(): void {
    this.recarregarSubject.next();
  }
}

