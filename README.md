# Calendari Sorinel Andrei Apetroae

## Autor/a

Sorinel Andrei Apetroae

## Descripció

Aplicació web desenvolupada amb Angular per consultar esdeveniments d'un calendari, filtrar-los per títol i categoria i consultar-ne els detalls.

El projecte utilitza components standalone, una API local amb JSON Server, serveis HTTP, adaptadors per normalitzar les dades i formularis reactius amb validacions síncrones i asíncrones.

També incorpora gestió d'errors, estats de càrrega, sistema de reintents, historial de cerques amb localStorage, millores d'accessibilitat i un disseny responsive.

## Versions utilitzades

- Node.js: v24.21.0
- npm: 11.19.0
- Angular CLI: 22.1.8
- Angular: 22.2.0
- JSON Server: 1.0.0-beta.15
- Git: 2.55.0.windows.5

## Com instal·lar i executar el projecte

Per instal·lar les dependències:

```bash
npm install
```

### Executar l'aplicació Angular

En una primera terminal:

```bash
ng serve
```

L'aplicació estarà disponible a:

http://localhost:4200/

### Executar l'API local

En una segona terminal:

```bash
npm run api
```

JSON Server iniciarà l'API local al port 3000.

L'endpoint principal dels esdeveniments és:

http://localhost:3000/esdeveniments

Les dades de prova es troben al fitxer `db.json`.

## Comprovació del projecte

Per executar les proves configurades:

```bash
ng test
```

Per comprovar que el projecte es compila correctament:

```bash
ng build
```

## Branca de treball

La branca de treball de l'EAC3 és `ra3-serveis`.

## Estructura i components creats

### Models i adaptadors

- `src/app/models/esdeveniment-api.model.ts`: defineix l'estructura de les dades rebudes de l'API.
- `src/app/models/esdeveniment.model.ts`: defineix el model intern utilitzat per l'aplicació.
- `src/app/adapters/esdeveniment.adapter.ts`: adapta i normalitza les dades rebudes del servidor.

### Serveis i constants

- `src/app/services/esdeveniments.service.ts`: gestiona les peticions HTTP GET i POST, els estats de càrrega, els errors i els reintents.
- `src/app/constants/api.constants.ts`: centralitza l'adreça base de l'API.

### Components

- `LlistaEsdevenimentsComponent`: mostra la llista, aplica els filtres, compta els resultats i permet consultar el detall d'un esdeveniment.
- `TargetaEsdevenimentComponent`: presenta la informació de cada esdeveniment.
- `EtiquetaEsdevenimentComponent`: mostra una etiqueta per als esdeveniments destacats.
- `BarraFiltresComponent`: conté el formulari reactiu de cerca per títol i categoria.

Els components es comuniquen mitjançant `@Input` i `@Output`.

## Funcionalitats implementades

- API local amb JSON Server i almenys 10 esdeveniments de prova.
- Obtenció d'esdeveniments mitjançant peticions HTTP GET.
- Creació d'esdeveniments mitjançant peticions HTTP POST.
- Adaptació de les dades de l'API al model intern.
- Cerca per títol i filtratge per categoria.
- Aplicació combinada dels filtres.
- Formulari reactiu amb validacions `required` i `minLength`.
- Validació asíncrona per comprovar si existeixen esdeveniments amb el títol cercat.
- Retard de 500 mil·lisegons abans de realitzar la validació asíncrona.
- Historial de les últimes cinc cerques mitjançant `localStorage`.
- Recuperació de cerques anteriors.
- Estats de càrrega i gestió d'errors en les peticions HTTP.
- Botó per tornar a intentar la càrrega quan l'API no respon.
- Ús d'operadors RxJS com `switchMap`, `map`, `tap`, `catchError` i `finalize`.
- Control del flux amb `@if`, `@else` i `@for (...; track ...)`.
- Comptador de resultats i missatge quan no hi ha coincidències.
- Panell amb els detalls de l'esdeveniment seleccionat.
- Format de dates amb `DatePipe`.
- Etiquetes associades als camps del formulari.
- Missatges accessibles mitjançant atributs com `role="status"` i `role="alert"`.
- Focus visible per a la navegació amb teclat.
- Disseny responsive per adaptar la interfície a pantalles estretes.

## Documentació

El projecte inclou els documents següents:

- `docs/models.md`: explica els models de dades i el procés d'adaptació.
- `docs/serveis.md`: descriu els serveis HTTP, les peticions i la gestió d'errors.
- `docs/formularis.md`: documenta els formularis, les validacions i l'historial de cerques.

## Repositori

Codi font del projecte: [GitHub - Calendari Sorinel Andrei Apetroae](https://github.com/LexnemModz123/ioc-angular-calendari-sorinel-apetroae)

Branca de l'EAC3: `ra3-serveis`