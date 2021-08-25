var models = require('./models.js');

module.exports = {
  get: (req, res) => {
    models.getAll((data)=>{
      res.send(data.rows)
    })
  }
}