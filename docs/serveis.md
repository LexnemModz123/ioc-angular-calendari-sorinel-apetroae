# Serveis HTTP

## 1. Servei d'esdeveniments

Les peticions HTTP de l'aplicació es gestionen mitjançant el servei `EsdevenimentsService`, situat a `src/app/services/esdeveniments.service.ts`.

Aquest servei utilitza `HttpClient` per comunicar-se amb l'API local de JSON Server. L'adreça base de l'API està centralitzada al fitxer `src/app/constants/api.constants.ts`.

## 2. Obtenció d'esdeveniments (GET)

El mètode `obtenirEsdeveniments()` realitza una petició GET a l'endpoint `/esdeveniments` per obtenir la llista d'esdeveniments.

Les dades rebudes s'adapten mitjançant la funció `adaptarEsdeveniments()` abans de ser utilitzades per l'aplicació.

Durant la petició, el servei controla els estats de càrrega i error mitjançant els observables `carregant$` i `error$`.

## 3. Creació d'esdeveniments (POST)

El mètode `crearEsdeveniment()` realitza una petició POST al mateix endpoint per crear un esdeveniment nou.

Quan la petició finalitza correctament, les dades rebudes s'adapten amb `adaptarEsdeveniment()` i s'afegeixen a la llista actual d'esdeveniments.

El servei també controla l'estat de creació mitjançant `creant$` i els possibles errors amb `errorCreacio$`.

## 4. Gestió d'errors i reintents

El servei utilitza `catchError()` per detectar errors durant les peticions HTTP i mostrar missatges informatius.

Per tornar a carregar les dades, disposa del mètode `reintentar()`, que emet un nou esdeveniment mitjançant `recarregarSubject`.

Això permet repetir la petició GET quan el servidor no respon correctament.

## 5. Operadors RxJS

El servei utilitza diferents operadors de RxJS:

- **switchMap():** permet iniciar una nova petició GET i cancel·lar l'anterior si encara està pendent.
- **map():** transforma les dades rebudes mitjançant els adaptadors.
- **tap():** actualitza els estats i la llista d'esdeveniments.
- **catchError():** gestiona els errors de les peticions.
- **finalize():** actualitza els estats de càrrega quan finalitza una petició.

Aquests operadors permeten gestionar les peticions HTTP i els seus estats de manera reactiva.