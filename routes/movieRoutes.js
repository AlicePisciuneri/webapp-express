// importo express
const express = require("express");

// creo un router per gestire le rotte
const router = express.Router();

// importo connessione al database
const db = require("../config/db");

// rotta INDEX MI mostra tutti i film
router.get("/", (req, res) => {
    const sql = "SELECT * FROM movies";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Errore della query:", err);
            res.status(500).json({ error: "Errore nel server" });
            return;
        }

        console.log("Query INDEX eseguita con successo!");
        res.json(results);
    });
});

// rotta SHOW PER VEDERE un singolo film
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM movies WHERE id = ?";

    db.query(sql, [id], (err, results) => {
        if (err) {
            console.error("Errore nella query:", err);
            res.status(500).json({ error: "Errore del server" });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: "Film non trovato" });
            return;
        }

        console.log(" Query SHOW eseguita");
        res.json(results[0]);
    });
});

// export
module.exports = router;
