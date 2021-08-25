import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


var NewProductQuestions = (props)=>{
  var [UPC, setUPC] = useState('');
  var [Name, setName] = useState('');







  return (
    <>
    <FloatingLabel
      controlId="floatingInput"
      label="UPC"
      className="mb-3"
    >
    <Form.Control type="text" placeholder="name@example.com" value={UPC}/>
    </FloatingLabel>


    <FloatingLabel controlId="floatingPassword" label="Password">
      <Form.Control type="password" placeholder="Password" />
    </FloatingLabel>
    </>
  )



}


export default NewProductQuestions;