export interface Esdeveniment {
  id: number;
  titol: string;
  descripcio: string;
  categoria: string;
  data: string;
  ubicacio: string;
  durada: number;
  destacat?: boolean;
}