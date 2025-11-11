const mysql = require("mysql2");
require("dotenv").config();


//creo connessione con il database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//check connnessione
db.connect((err) => {
    if (err) {
        console.error("errore di connessione al db", err);
        return;
    }
    console.log(" connessione al db ok");
});

//esporto la connessione
module.exports = db;