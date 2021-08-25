import React, { useState, useEffect } from 'react';
const axios = require('axios');
import CurrentInvIndividual from './CurrentInvIndividual.jsx'


var CurrentInv = ()=>{
  var [products, setProducts] = useState('');

  useEffect(()=>{
    axios.get('/allProducts')
    .then((data)=> {
      setProducts(data.data)
    })
    .catch((error)=> {
      console.log('error in Rbreakdown: ', error)
    })
  }, [])



  if (!products.length) {

    return (
    <div>loading...</div>
    )

  } else {
  return (
    <>{products.map((product, index)=>
      <CurrentInvIndividual key={index} product={product}/>
    )}
    </>
  )
  }
}



export default CurrentInv;