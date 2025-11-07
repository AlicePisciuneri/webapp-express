const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
    res.send("welcome in my movies app");
});
app.listen(port, () => {
    console.log("Server avviato su http://localhost:3000");
});