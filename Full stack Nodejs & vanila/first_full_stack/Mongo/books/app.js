const express = require("express");
const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const app = express();

app.use(express.json());

app.use("/author", authorRouter);
app.use("/book", bookRouter);

module.exports = app;
