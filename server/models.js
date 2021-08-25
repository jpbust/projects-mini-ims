var db = require('../database/index.js')

module.exports = {
  getAll: (cb) => {
    var pgQuery = `
      SELECT
        *
      FROM
        product;
    `
    db.query(pgQuery)
      .then((data)=>{
        cb(data)
      })
      .then((error)=>{
        console.log(error)
      })
  }
}