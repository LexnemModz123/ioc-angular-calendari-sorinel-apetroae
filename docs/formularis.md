# Formularis i validacions

## 1. Formulari reactiu

L'aplicació utilitza formularis reactius d'Angular mitjançant `ReactiveFormsModule`.

El formulari de filtres es troba al component `BarraFiltresComponent`, situat a `src/app/components/barra-filtres/`.

Disposa de dos camps:
- **filtreText:** permet cercar esdeveniments pel títol.
- **filtreCategoria:** permet filtrar els esdeveniments segons la categoria.

## 2. Validacions síncrones

El camp `filtreText` incorpora dues validacions síncrones:

- `Validators.required`: obliga a introduir un text de cerca.
- `Validators.minLength(3)`: exigeix un mínim de tres caràcters.

Els missatges d'error es mostren quan el camp ha estat modificat o tocat.

## 3. Validació asíncrona

El camp `filtreText` també utilitza el validador asíncron `cercaEsdevenimentsValidator()`, definit a `src/app/components/barra-filtres/cerca-esdeveniments.validator.ts`.

Aquest validador consulta l'API per comprovar si existeixen esdeveniments amb un títol que contingui el text introduït.

S'utilitza `timer(500)` per aplicar un retard de 500 mil·lisegons abans de fer la consulta i evitar peticions innecessàries mentre l'usuari escriu.

Si no es troben resultats, es retorna l'error `senseResultats`. Si la consulta falla, es retorna `errorConsulta`.

## 4. Historial de cerques

L'aplicació guarda les cerques realitzades correctament mitjançant `localStorage`.

L'historial:
- Emmagatzema un màxim de cinc cerques.
- Evita guardar consecutivament el mateix terme, sense distingir entre majúscules i minúscules.
- Permet recuperar una cerca anterior i tornar-la a aplicar.

Les operacions de lectura i escriptura utilitzen `try/catch` per gestionar possibles errors de `localStorage`.

La informació es desa amb la clau `historialCerques`.

## 5. Restabliment dels filtres

El botó «Restablir filtres» neteja els camps del formulari i elimina els filtres aplicats a la llista d'esdeveniments.

També marca el formulari com a net i sense camps tocats.