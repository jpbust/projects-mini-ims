const {Client} = require('pg');

const db = new Client({
  user: 'student',
  password: 'student',
  host: 'localhost',
  port: 5432,
  database: 'ims'
})

db.connect()
  .then(()=>{
    console.log('connection to db succesfully')
  })
  .catch((error)=>{
    console.log(error)
  })



  module.exports = db;