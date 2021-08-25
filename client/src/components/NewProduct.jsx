import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import NewProductModal from './NewProductModal.jsx'


var NewProduct = (props)=> {
  const [modalOnOff, setModalOnOff] = useState(false);






  var newProductClickHandler = ()=>{
    setModalOnOff(true);
  }

  var renderModal = modalOnOff ? <NewProductModal/> : <></>

  return (
    <>
    <Button variant="primary" onClick={newProductClickHandler}> + New Product</Button>{' '}
    <NewProductModal
            show={modalOnOff}
            onHide={() => setModalOnOff(false)}
      />


    </>
  )



}

export default NewProduct;