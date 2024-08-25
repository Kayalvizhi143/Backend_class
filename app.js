require("dotenv").config();
const movieRoutes = require("./routes/Movies/moviesRoutes");
const bookRoutes = require("./routes/Movies/books");
const express = require("express");
const db = require("./db/index");
const app = new express();
const port = process.env.PORT || 8080;
db()
app.use(express.json)

app.use("/Movies",movieRoutes);
app.use("/book",bookRoutes);
db();
app.listen(port,() => {
    console.log(`express app listening at http://localhost:${port}`);
});
