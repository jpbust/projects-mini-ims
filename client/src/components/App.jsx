import React, { useState, useEffect } from 'react';
import NewProduct from './AppChilds/NewProduct.jsx'
import CurrentInv from './AppChilds/CurrentInv.jsx'
import SalesMain from './AppChilds/SalesMain.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {AppContainer} from './styledComponent.js';
import {HeaderContainer} from './Header.style.js'

// const GlobalStyle = createGlobalStyle`
//   body{
//     background: white;
//     min-height: 100vh;
//     margin: 0;
//     color: black;
//     font-family: 'Roboto'
//   }
// `;


var App = ()=> {


  return (
      <AppContainer>
          <h1>Mini Inventory Management System </h1>
          <HeaderContainer/>


          <NewProduct/>
          <CurrentInv/>


      </AppContainer>



  )
}

export default App;