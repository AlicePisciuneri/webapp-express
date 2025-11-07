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
