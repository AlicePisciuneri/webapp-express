# Progetto Finale Boolean — Movies App

Questo progetto è la mia prima applicazione completa **Express + MySQL**,  
basata su un database di film e recensioni.

---

## Step 1 — Creazione del Database

**Obiettivo:** importare il database movies_db in MySQL Workbench.

### Procedura
1. Aprire MySQL Workbench e connettersi alla Local instance.
2. Creare un nuovo schema chiamato movies_db.
3. Aprire il file movies_db.sql (fornito dal corso).
4. Selezionare tutto e cliccare ** Execute** per eseguire lo script.
5. Aggiornare la lista degli “Schemas” → comparirà movies_db.
6. Verificare con:
   sql
   USE movies_db;
   SHOW TABLES;

Risultato atteso:

movies
reviews
Verifica finale
Database visibile in “Schemas”
Tabelle correttamente importate
Query SELECT * FROM movies; restituisce i film


---

## Step 2 — Creazione dell'applicazione Express

**Obiettivo:** creare il server Express di base per la Movies App.

### Procedura
1. Creata una nuova cartella chiamata express-movies-app.
2. Inizializzato il progetto con:
   bash
   npm init -y

npm install express

Creato il file principale server.js con il seguente codice base:
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome in my Movies App");
});

app.listen(port, () => {
    console.log("Server avviato su http://localhost:3000");
});

Avviato il server con:
node server.js

Aperto il browser su http://localhost:3000 = risposta corretta:

Welcome in my Movies App 
Verifica finale
Server Express attivo sulla porta 3000
Rotta di test / funzionante
Messaggio visibile nel browser

## Prepariamo una rotta index per ottenere la lista dei film,
Connessione al database e API “Index”

# Obiettivo:
Collegare l’app Express al database movies_db e creare la prima API /movies per mostrare tutti i film.

Passaggi completati:
Creata la cartella config e il file db.js con la connessione a MySQL tramite mysql2.
Testata la connessione: “Connessione al database riuscita!”
Creata la cartella routes e il file movieRoutes.js per gestire le rotte dei film.
scritta la query SQL:

SELECT * FROM movies;
Collegata la rotta al server con:

const movieRoutes = require("./routes/movieRoutes");
app.use("/movies", movieRoutes);


Testata l’API con Postman:
Metodo: GET

Endpoint: http://localhost:3000/movies
Risposta corretta in formato JSON con tutti i film presenti nel database.

Risultato finale:
L’app comunica correttamente con MySQL, e la rotta /movies restituisce la lista completa dei film.
(Postman mostra correttamente i dati, mentre il browser non li visualizza perché si tratta di JSON.)

### Rotta SHOW per singolo film

Ho aggiunto una nuova rotta **GET** per ottenere i dettagli di un singolo film dal database.

**Percorso:**  
GET /movies/:id`

**Funzionamento:**  
- L’id viene preso direttamente dall’URL (es. /movies/3` restituisce il film con id = 3).  
- La query SQL cerca il film corrispondente:  
  sql
  SELECT * FROM movies WHERE id = ?;
  Se il film esiste → viene restituito in formato JSON.

Se non esiste  viene restituito un errore 404 con messaggio "Film non trovato".

In caso di errore nel server viene restituito un errore 500.

Esempio di risposta:

{
  "id": 3,
  "title": "The Dark Knight",
  "director": "Christopher Nolan",
  "year": 2008
}
Testata con Postman e sul browser , funziona correttamente sia per ID validi che non validi.

