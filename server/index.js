let express = require('express');
var db = require('../database/index.js');
let path = require('path');
let app = express();
var router = require('./routes.js');// Router

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));


const port =  3001;

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
})


module.exports.app = app;
