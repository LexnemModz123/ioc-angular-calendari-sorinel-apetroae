
import { Esdeveniment } from './esdeveniment.model';

export const ESDEVENIMENTS_MOCK: Esdeveniment[] = [
  {
    id: 1,
    titol: 'Concert de música',
    descripcio: 'Concert de música en directe al centre cultural.',
    categoria: 'Cultura',
    data: '2026-11-05',
    durada: 120,
    destacat: true
  },
  {
    id: 2,
    titol: 'Cursa popular',
    descripcio: 'Cursa oberta a tots els nivells.',
    categoria: 'Esports',
    data: '2026-11-07',
    durada: 90,
    destacat: true
  },
  {
    id: 3,
    titol: 'Club de lectura',
    descripcio: 'Trobada per comentar una novel·la.',
    categoria: 'Cultura',
    data: '2026-11-09',
    durada: 60,
    destacat: false
  },
  {
    id: 4,
    titol: 'Taller de cuina',
    descripcio: 'Taller pràctic de receptes saludables.',
    categoria: 'Gastronomia',
    data: '2026-11-11',
    durada: 120,
    destacat: false
  },
  {
    id: 5,
    titol: 'Fira tecnològica',
    descripcio: 'Exposició de novetats tecnològiques.',
    categoria: 'Tecnologia',
    data: '2026-11-14',
    durada: 180,
    destacat: true
  },
  {
    id: 6,
    titol: 'Partit de futbol',
    descripcio: 'Partit amistós entre equips locals.',
    categoria: 'Esports',
    data: '2026-11-16',
    durada: 90,
    destacat: false
  },
  {
    id: 7,
    titol: 'Exposició de fotografia',
    descripcio: 'Mostra de fotografies d\'artistes locals.',
    categoria: 'Cultura',
    data: '2026-11-18',
    durada: 75,
    destacat: false
  },
  {
    id: 8,
    titol: 'Xerrada sobre ciberseguretat',
    descripcio: 'Consells per navegar de manera segura.',
    categoria: 'Tecnologia',
    data: '2026-11-20',
    durada: 60,
    destacat: true
  },
  {
    id: 9,
    titol: 'Mercat artesanal',
    descripcio: 'Parades amb productes fets a mà.',
    categoria: 'Comerç',
    data: '2026-11-22',
    durada: 240,
    destacat: false
  },
  {
    id: 10,
    titol: 'Caminada popular',
    descripcio: 'Ruta guiada pels voltants del municipi.',
    categoria: 'Esports',
    data: '2026-11-25',
    durada: 150,
    destacat: true
  }
];
