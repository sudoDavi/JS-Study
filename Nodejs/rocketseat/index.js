const express = require('express');
const mongoose = require('mongoose');
const requireDir = require("require-dir");

//Start app
const app = express();

//Start DB
mongoose.connect(
    "mongodb://localhost:27017/nodeapi", 
    {useNewUrlParser: true, useUnifiedTopology: true}
);
requireDir("./src/models");



//Rotas
app.use('/', require('./src/routes'))

app.listen(3001);