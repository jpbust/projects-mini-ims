import React, { useState, useEffect } from 'react';
const axios = require('axios');
import CurrentInvIndividual from './CurrentInvChilds/CurrentInvIndividual.jsx'
import {CurrentInvContainer} from './CurrentInv.style.js'



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
    <CurrentInvContainer>{products.map((product, index)=>
      <CurrentInvIndividual key={index} product={product}/>
    )}
    </CurrentInvContainer>
  )
  }
}



export default CurrentInv;