const express = require("express");
const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/", (req, res) => {
    res.render('login')
});

app.listen(3002, () => console.log("Server ready on port 3002."));

module.exports = app;