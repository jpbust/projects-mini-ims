const express = require('express');
const db = require('../database/index.js');
const path = require('path');
const app = express();
const router = require('./routes.js');// Router

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


const port =  3002;

app.use('/', router);


app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});