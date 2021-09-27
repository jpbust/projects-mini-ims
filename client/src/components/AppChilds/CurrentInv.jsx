import React, { useState, useEffect } from 'react';

import CurrentInvIndividual from './CurrentInvChilds/CurrentInvIndividual.jsx'
import {CurrentInvContainer, AllContainer} from './CurrentInv.style.js'



var CurrentInv = ({inventory})=>{
  return (
    <AllContainer>
      <CurrentInvContainer>{inventory.map((product, index)=>
        <CurrentInvIndividual key={index} product={product}/>
      )}
      </CurrentInvContainer>
    </AllContainer>
  )
};



export default CurrentInv;