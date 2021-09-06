var models = require('./models.js');

module.exports = {
  getDB: (req, res) => {
    models.getAll((data)=>{
      res.send(data.rows)
    })

  },
  postDB: (req, res) =>{
    models.postNew((data)=>{
      res.sendStatus(200)
    }, req.body)
  },
  getAPIUPC: (req, res) =>{
    models.getAPIUPC((data)=>{
      res.send(data)
    }, req.headers.upc)
  }
}