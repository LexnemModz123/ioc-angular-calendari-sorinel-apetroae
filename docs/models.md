# Models i adaptació de dades

## 1. Separació de models

L'aplicació utilitza dos models diferents per separar les dades que provenen de l'API de les dades que utilitza internament.

- **EsdevenimentApi:** representa l'estructura de les dades rebudes del servidor. Es troba a `src/app/models/esdeveniment-api.model.ts`.
- **Esdeveniment:** representa l'estructura interna utilitzada pels components de l'aplicació. Es troba a `src/app/models/esdeveniment.model.ts`.

Aquesta separació permet adaptar les dades rebudes sense modificar directament els components.

## 2. Taula de correspondència

| Camp API (`EsdevenimentApi`) | Camp intern (`Esdeveniment`) | Transformació |
|---|---|---|
| id | id | Es conserva el valor original. |
| titol | titol | S'eliminen els espais sobrants. Si està buit, s'assigna "Sense títol". |
| descripcio | descripcio | S'eliminen els espais sobrants. Si no existeix, s'assigna "Sense descripció". |
| categoria | categoria | Es normalitza el valor "esport" a "Esports". |
| data | data | S'eliminen els espais i es normalitza el format de data. |
| durada | durada | Es converteix el valor a tipus numèric. Si no és vàlid, s'assigna 0. |
| destacat | destacat | Si no existeix, s'assigna `false`. |
| No disponible | ubicacio | S'assigna el valor per defecte "No especificada". |

## 3. Adaptador

L'adaptació es realitza al fitxer `src/app/adapters/esdeveniment.adapter.ts`.

La funció `adaptarEsdeveniment()` transforma un esdeveniment individual, mentre que `adaptarEsdeveniments()` aplica aquesta transformació a tota la llista mitjançant el mètode `map()`, que recorre els elements i retorna una nova llista adaptada.

## 4. Avantatges

Aquesta estructura separa les dades externes de la lògica interna de l'aplicació, facilita el manteniment del codi i permet adaptar possibles canvis en l'estructura de l'API sense haver de modificar directament els components.