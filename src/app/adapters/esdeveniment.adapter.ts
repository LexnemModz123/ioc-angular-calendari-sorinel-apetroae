import { EsdevenimentApi } from '../models/esdeveniment-api.model';
import { Esdeveniment } from '../models/esdeveniment.model';


export function adaptarEsdeveniment(api: EsdevenimentApi): Esdeveniment {
  const durada = Number(api.durada);

  let dataNormalitzada = api.data.trim();

  const dataComprovada = new Date(`${dataNormalitzada}T00:00:00Z`);
  
  if (!isNaN(dataComprovada.getTime())) {
    dataNormalitzada = dataComprovada.toISOString().slice(0, 10);
  }

  let categoria = api.categoria.trim();

  if (categoria.toLowerCase() === 'esport') {
    categoria = 'Esports';
  }

  return {
    id: api.id,
    titol: api.titol.trim() || 'Sense títol',
    descripcio: api.descripcio?.trim() || 'Sense descripció',
    categoria: categoria,
    data: dataNormalitzada,
    ubicacio: 'No especificada',
    durada: Number.isFinite(durada) ? durada : 0,
    destacat: api.destacat ?? false
  };
}

export function adaptarEsdeveniments(api: EsdevenimentApi[]): Esdeveniment[] {
  return api.map(esdeveniment => adaptarEsdeveniment(esdeveniment));
}
