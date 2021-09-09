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
      })
      .catch((error)=>{
        console.log(error)
      })
  },
  patchOneEntry: (data) => {
    var query =`
    select * from product where id=1;
    UPDATE
      product
    SET
      UPC = '${data.upc}',
      ASIN = '${data.asin}',
      product_name = '${data.productName}',
      class = '${data.classItem}',
      company = '${data.publisher}',
      qty = '${data.stockQuantity}'
    WHERE
      id=${data.id};
    `;

    return db.query(query)
    .then(()=>{}) //console.log('success patch one', data)
    .catch((error)=>{ console.log()})
  },
  deleteOneEntry: (data)=>{
    var query=`
    DELETE FROM
      product
    where id=${data}
    `;
    return db.query(query)
    .then(()=>{})
    .catch((error)=>{console.log('errorAtDeleteOneEntryModels', error)})
  }
}