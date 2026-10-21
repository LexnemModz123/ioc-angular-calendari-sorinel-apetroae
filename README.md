# Calendari Sorinel Andrei Apetroae

## Autor/a

Sorinel Andrei Apetroae

## Descripció

Aplicació web desenvolupada amb Angular per consultar esdeveniments d'un calendari, filtrar-los per títol i categoria i consultar-ne els detalls.

El projecte utilitza components standalone, dades mock i formularis amb validació. També incorpora millores d'accessibilitat i un disseny adaptable a diferents mides de pantalla.

## Versions utilitzades

- Node.js: v24.21.0
- npm: 11.19.0
- Angular CLI: 22.1.8
- Git: 2.55.0.windows.5
- Angular: consultar la versió instal·lada al `package.json`

## Com crear i executar el projecte

Per crear el projecte inicial:

```bash
ng new ioc-angular-calendari-sorinel-apetroae --routing --style=scss --ssr=false --standalone --file-name-style-guide=2016 --skip-git --package-manager=npm
```

Per instal·lar les dependències:

```bash
npm install
```

Per executar l'aplicació en desenvolupament:

```bash
ng serve
```

Obre [http://localhost:4200/](http://localhost:4200/) al navegador.

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

La branca de treball de l'EAC2 és `ra2-components`.

## Estructura i components creats

### Model i dades

- `src/app/models/esdeveniment.model.ts`: defineix la interfície `Esdeveniment` i els seus atributs.
- `src/app/models/esdeveniments.mock.ts`: conté les dades mock dels esdeveniments.

### Components

- `LlistaEsdevenimentsComponent`: mostra la llista, aplica els filtres, compta els resultats i permet consultar el detall d'un esdeveniment.
- `TargetaEsdevenimentComponent`: presenta la informació de cada esdeveniment.
- `EtiquetaEsdevenimentComponent`: mostra una etiqueta per als esdeveniments destacats.
- `BarraFiltresComponent`: conté el formulari de cerca per títol i categoria.

Els components es comuniquen mitjançant `@Input` i `@Output`.

## Funcionalitats implementades

- Llista d'almenys 10 esdeveniments de prova.
- Cerca per títol i filtratge per categoria.
- Aplicació combinada dels filtres.
- Formulari amb `FormsModule` i `[(ngModel)]`.
- Validació amb `required` i `minlength`.
- Missatges d'error i botó d'aplicació deshabilitat quan el formulari no és vàlid.
- Botó per restablir els filtres.
- Control del flux amb `@if`, `@else` i `@for (...; track ...)`.
- Comptador de resultats i missatge quan no hi ha coincidències.
- Panell amb els detalls de l'esdeveniment seleccionat.
- Format de dates amb `DatePipe`.
- Enllaç de salt al contingut principal i focus visible per a la navegació amb teclat.
- Etiquetes associades als camps del formulari.
- Disseny responsive per adaptar la interfície a pantalles estretes.

## Repositori

Codi font del projecte: [GitHub - Calendari Sorinel Andrei Apetroae](https://github.com/LexnemModz123/ioc-angular-calendari-sorinel-apetroae)

Branca de l'EAC2: `ra2-components`
