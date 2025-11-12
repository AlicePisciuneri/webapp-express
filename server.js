const express = require("express");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
app.use(express.static("public"));

const port = 3000;


app.use("/movies", movieRoutes);

app.get("/", (req, res) => {
    res.send("welcome in my movies app");
});

app.listen(port, () => {
    console.log("Server avviato su http://localhost:3000");
});

//aggiungo middleware 404 rotta not found
app.use((req, res) => {
    res.status(404).json({ error: "not found" });
});
// middleware 500 errore generico 
app.use((err, req, res, next) => {
    console.error("errore:", err.message);
    res.status(500).json({ error: "errore nel server" });
});