import { Component } from '@angular/core';
import { LlistaEsdevenimentsComponent } from './components/llista-esdeveniments/llista-esdeveniments.component';

@Component({
  imports: [LlistaEsdevenimentsComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public nomApp = 'Calendari de Sorinel Andrei Apetroae';
}
