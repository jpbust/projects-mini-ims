import React, { useState, useEffect } from 'react';

import CurrentInvIndividual from './CurrentInvChilds/CurrentInvIndividual.jsx'
import {CurrentInvContainer} from './CurrentInv.style.js'



var CurrentInv = ({inventory})=>{



  return (
    <CurrentInvContainer>{inventory.map((product, index)=>
      <CurrentInvIndividual key={index} product={product}/>
    )}
    </CurrentInvContainer>
  )

}



export default CurrentInv;