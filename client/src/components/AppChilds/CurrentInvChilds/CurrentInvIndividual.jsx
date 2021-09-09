import React, {useState} from 'react'
import noImagePlaceholder from '../../../images/noImageAvailable.png'
import {IndividualContainer, ImageContainer, TextDescription, TextDescription2} from './CurrentInvIndividual.style.js'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import SingleProductModal from './SingleProductModal.jsx'






var CurrentInvIndividual = ({product})=>{
  const [showEdit, setShowEdit] = useState(false);
  const [imageLocation, setimageLocation] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [upc, setUPC] = useState(product.upc || 'N/A');
  const [productName, setProductName] = useState(product.product_name || 'N/A');
  const [asin, setASIN] = useState(product.asin || 'N/A');
  const [company, setCompany] = useState(product.company || 'N/A');
  const [className, setClassName] = useState(product.class || 'N/A');
  const [qty, setQty] = useState(product.qty || 'N/A');


  var deleteClickHandler = ()=>{
    console.log('delete click')


    // var options = product.id

    axios.delete('/allProducts', { data: { id: product.id } })
    .then(()=>{
      window.location.reload(false);
    })
    .catch((error)=>{console.log(error)})
    setShowEdit(false);

    setShowEdit(false);
  }

  var editClickHandler = ()=>{
    setShowEdit(true);
  };


  var cancelClickHandler = ()=>{
    setUPC(product.upc || 'N/A');
    setProductName(product.product_name || 'N/A');
    setASIN(product.asin || 'N/A');
    setCompany(product.company || 'N/A');
    setClassName(product.class || 'N/A');
    setQty(product.qty || 'N/A');
    setShowEdit(false);
  };

  var detailsButtonClickHandler = ()=>{
    setModalShow(true)
  };

  var submitClickHandler = ()=>{
    var form ={
      id: product.id,
      productName,
      upc,
      asin,
      publisher: company,
      classItem: className,
      stockQuantity: qty
    };
    axios.patch('/allProducts', form)
    .then(()=>{})
    .catch((error)=>{console.log(error)})
    setShowEdit(false);
  };


  var renderImage = product.image_url || product.image_url === 'null'  ? <img className='imageThumbnail' alt='Product preview' src={`${product.image_url}`} />  :<img className='imageThumbnail' alt='alternate Image' src={noImagePlaceholder} />

  var renderAsin = product.asin ?  product.asin: 'Not available';
  var renderAmzPrice = product.amazon_price ?  product.amazon_price : 'Not available';

  return(
    <IndividualContainer>
      <ImageContainer>{renderImage}</ImageContainer>
      <TextDescription>
      <span>Product: {productName}</span>
      <br></br>
      <span>UPC Code: {product.upc}</span>
      <br></br>
      <span>Available Quantity: {product.qty} </span>
      </TextDescription>
      <TextDescription2>
        <span>Amazon's ASIN: {renderAsin}</span>
        <br></br>
        {/* <span>Amazon Price: {renderAmzPrice}</span> */}

      </TextDescription2>

      <Button variant="secondary" size="sm" active onClick={detailsButtonClickHandler}>
        details
      </Button>

      <SingleProductModal
        productname={productName}
        setproductname={(newValue)=>{setProductName(newValue)}}
        upc={upc}
        setupc={(newValue)=>setUPC(newValue)}
        asin={asin}
        company={company}
        setcompany={(newValue)=>{setCompany(newValue)}}
        classname={className}
        setclassname={newValue=>{setClassName(newValue)}}
        setasin={(newValue)=>{setASIN(newValue)}}
        qty={qty}
        setqty={(newValue)=>{setQty(newValue)}}

        showedit={showEdit}

        //click handlers
        cancelclickhandler={cancelClickHandler}
        deleteclickhandler={deleteClickHandler}
        submitclickhandler={submitClickHandler}
        editclickhandler={editClickHandler}

        noimgplaceholder={noImagePlaceholder}
        show={modalShow}
        onHide={() => setModalShow(false)}
        renderimage={renderImage}

      />


    </IndividualContainer>
  )
}

export default CurrentInvIndividual;