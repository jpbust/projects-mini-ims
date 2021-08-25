import React from 'react'
import noImagePlaceholder from '../images/noImageAvailable.png'



var CurrentInvIndividual = (props)=>{



  var renderImage = props.product.image_url ? <img className='imageThumbnail' alt='Product preview' src={`${props.product.image_url}`} />  :<img className='imageThumbnail' alt='alternate Image' src={noImagePlaceholder} />


  return(
    <div>
      {renderImage}
      <span>{props.product.product_name} </span>
      <span>{props.product.upc} </span>


    </div>
  )
}

export default CurrentInvIndividual;