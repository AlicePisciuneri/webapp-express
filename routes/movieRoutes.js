// importo express
const express = require("express");

//creo un router per gestire le rotte
const router = express.Router();

//importo connessione al database
const db = require("../config/db");

//rotta index per mostrare tutti i film
router.get("/", (req, res) => {
    //query per prendere tutti i film
    const sql = "SELECT * FROM movies";

    //do il via alla query
    db.query(sql, (err, results) => {
        if (err) {
            console.error("errore della query", err);
            res.status(500).json({ error: "Errore nel server" });
            return;
        }

        // se va a buon fine restituirà i dato json
        res.json(results);
    })

    console.log(" Query eseguita con successo!");
    res.json(results);
});

//export
module.exports = router;