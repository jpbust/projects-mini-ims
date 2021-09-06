import React, { useState, useEffect } from 'react';
import {NewProductContainer} from './NewProduct.style.js'
import NewProductModal from './NewProductChilds/NewProductModal.jsx'
import Button1 from '../common/Button.js'


var NewProduct = (props)=> {
  const [modalOnOff, setModalOnOff] = useState(false);






  var newProductClickHandler = ()=>{
    setModalOnOff(true);
  }

  var renderModal = modalOnOff ? <NewProductModal/> : <></>

  return (

    <NewProductContainer>
      <Button1 onClick={newProductClickHandler}> Add New Product</Button1>{' '}
      <NewProductModal
            show={modalOnOff}
            onHide={() => setModalOnOff(false)}
      />
    </NewProductContainer>


  )



}

export default NewProduct;