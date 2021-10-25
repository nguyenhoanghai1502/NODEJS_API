const express = require("express");
require("./db/mongoose");
const exampleRouter = require("./routers/staff");

const app = express();

app.use(express.json());

app.use(exampleRouter);

module.exports = app;
