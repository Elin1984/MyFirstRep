const express = require("express");
const bodyParser = require("body-parser");
const authRouter = require("./routes/authRoute");
const app = express();

app.use(bodyParser.json());

app.use("/auth", authRouter);

module.exports = app;
