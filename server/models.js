var db = require('../database/index.js')
const axios = require('axios');

module.exports = {
  getAll: (cb) => {
    var pgQuery = `
      SELECT
        *
      FROM
        product;
    `

    return db.query(pgQuery)
      .then((data)=>{
        cb(data)

      })
      .then((error)=>{
        console.log(error)
      })
  },
  postNew: (cb, data)=>{

    var UPC =  data.UPC ? data.UPC : '';
    var ASIN = data.asinCode ? data.asinCode : '';
    var productName = data.Name ? data.Name : '' ;
    var imageUrl = data.imageURL? data.imageURL : '';
    var initInv = data.initInv? data.initInv : '';
    // var clasS = ? : null;
    // var company = ? : null;
    // var cost ? : null;
    // amazon_price,
    // qty integer,

    var pgQuery = `
      INSERT INTO product
    (UPC,
    ASIN,
    product_name,
    image_url,
    qty)
  VALUES
    ('${UPC}',
    '${ASIN}',
    '${productName}',
    '${imageUrl}',
    ${initInv}
    );
    `
    return db.query(pgQuery)
    .then((data)=>{
      cb(data)
      console.log('added to DB successfully')
    })
    .then((error)=>{
      console.log(error)
    })
  },
  getAPIUPC: (cb, upc) =>{

    var url = `https://api.upcitemdb.com/prod/trial/lookup?upc=${upc}`
    return axios.get(url)
      .then((data)=>{
        cb(data.data.items[0])
        // console.log('@@@@@@@@@@@@',data.data.items[0])
      })
      .catch((error)=>{
        console.log(error)
      })
  }

}