import React, {useState} from 'react'
import noImagePlaceholder from '../../../images/noImageAvailable.png'
import {IndividualContainer, ImageContainer, TextDescription, TextDescription2} from './CurrentInvIndividual.style.js'
import Button from 'react-bootstrap/Button';
import axios from 'axios'






var CurrentInvIndividual = (props)=>{
  var [imageLocation, setimageLocation] = useState('');





  var renderImage = props.product.image_url || props.product.image_url === 'null'  ? <img className='imageThumbnail' alt='Product preview' src={`${props.product.image_url}`} />  :<img className='imageThumbnail' alt='alternate Image' src={noImagePlaceholder} />

  var renderAsin = props.product.asin ?  props.product.asin: 'Not available';
  var renderAmzPrice = props.product.amazon_price ?  props.product.amazon_price : 'Not available';

  return(
    <IndividualContainer>
      <ImageContainer>{renderImage}</ImageContainer>
      <TextDescription>
      <span>Product: {props.product.product_name}</span>
      <br></br>
      <span>UPC Code: {props.product.upc}</span>
      <br></br>
      <span>Available Quantity: {props.product.qty} </span>
      </TextDescription>
      <TextDescription2>
        <span>ASIN: {renderAsin}</span>
        <br></br>
        <span>Amazon Price: {renderAmzPrice}</span>

      </TextDescription2>

      <Button variant="secondary" size="sm" active>
        details
      </Button>


    </IndividualContainer>
  )
}

export default CurrentInvIndividual;