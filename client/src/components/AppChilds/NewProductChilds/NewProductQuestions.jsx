import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
const axios = require('axios');



var NewProductQuestions = (props)=>{
  var [UPC, setUPC] = useState('');
  var [asinCode, setasinCode] = useState('');
  var [Name, setName] = useState('');
  var [imageURL, setImageURL] = useState('');
  var [initInv, setinitInv] = useState('');


  var handleFetch = ()=>{

    if(UPC.length=== 12) {
      console.log('right Length')
      axios.get('./fetchAPI', {
        headers: {
          upc: UPC
        }

      })
      .then((response)=> {

        if(response.data.asin) {setasinCode(response.data.asin)}
        if(response.data.title) {setName(response.data.title)}
        if(response.data.images[0]) {setImageURL(response.data.images[0])}

      })
      .catch((error)=> {
        console.log(error);
      });

    } else {
      alert('check your code, UPC standard is 12 digits')
    }

    return;
  }



  var handleSubmit = ()=>{
    if(UPC && Name && initInv) {
      console.log('validation of 3 ')

      axios.post('/allProducts', {
        UPC,
        asinCode,
        Name,
        imageURL,
        initInv,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });



    }


  }



  return (
    <>
    <FloatingLabel controlId="floatingInput" label="UPC"  className="mb-3">
      <Form.Control type="text" placeholder="name@example.com" value={UPC} onChange={(event)=>(setUPC(event.target.value))}/>
    </FloatingLabel>

    <Button variant="primary" type="submit" onClick={handleFetch}>
    Fetch
  </Button>


    <FloatingLabel controlId="asinCode" label="asinCode">
      <Form.Control type="text" placeholder="ASIN Code" value={asinCode} onChange={(event)=>(setasinCode(event.target.value))}/>
    </FloatingLabel>

    <FloatingLabel controlId="productName" label="Product Name">
      <Form.Control type="text" placeholder="Product Name" value={Name} onChange={(event)=>(setName(event.target.value))}/>
    </FloatingLabel>

    <FloatingLabel controlId="imageUrl" label="image Url">
      <Form.Control type="text" placeholder="image Url" value={imageURL} onChange={(event)=>(setImageURL(event.target.value))}/>
    </FloatingLabel>

    <FloatingLabel controlId="initialInventory" label="Initial Inventory quantity">
      <Form.Control type="number" placeholder="Initial Inventory quantity" value={initInv} onChange={(event)=>(setinitInv(event.target.value))}/>
    </FloatingLabel>


  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>





    </>
  )



}


export default NewProductQuestions;