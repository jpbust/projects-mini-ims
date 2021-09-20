import React, { useState, useEffect } from 'react';
import NewProduct from './AppChilds/NewProduct.jsx'
import CurrentInv from './AppChilds/CurrentInv.jsx'
import SalesMain from './AppChilds/SalesMain.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {AppContainer} from './App.style.js';
import {HeaderContainer, TotalCount, TotalSummary, TotalQuantity} from './Header.style.js'
const axios = require('axios');



var App = ()=> {
  const [products, setProducts] = useState('');
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);


  useEffect(()=>{
    axios.get('/allProducts')
    .then((data)=> {
      setProducts(data.data);
      setCount(data.data.length);
      var quantity = 0
      data.data.forEach(product=>{
        quantity+= product.qty;
      })

      setQuantity(quantity)


    })
    .catch((error)=> {
      console.log('error in Rbreakdown: ', error)
    })
  }, [])


  // var renderWithProduct =




  return (
      <AppContainer>
          <h1>Mini Inventory Management System </h1>
          <HeaderContainer>
            <TotalCount> Total products count: {count}
            </TotalCount>
            <TotalQuantity> Total individual unit quantity: {quantity}
            </TotalQuantity>
          </HeaderContainer>
          <NewProduct/>
          {products? <CurrentInv inventory={products}/> : <div>Loading...</div>}


      </AppContainer>



  )
}

export default App;