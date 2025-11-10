const mysql = require("mysql2");
//creo connessione con il database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "amleto82",
    database: "movies_db"
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