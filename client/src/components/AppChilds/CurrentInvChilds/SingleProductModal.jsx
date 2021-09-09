import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {ModalContainer, LeftSide, RightSide, BottomSide, ImageContainer, TopSide} from './CurrentInvIndividual.style.js'
import axios from 'axios';



export default function SingleProductModal(props) {






  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >


      <ModalContainer>
        <TopSide>
          <LeftSide>
            {props.renderimage}
          </LeftSide>
          <RightSide>
            {props.showedit ? (
            <div>
              <span>Product:</span>
              <input value={props.productname} onChange={event=>props.setproductname(event.target.value)} type="text"/>
            </div>) :
            <div>
              Product: {props.productname}
            </div>}
            {props.showedit ? (<div><span>UPC:</span><input value={props.upc} onChange={(event)=>{props.setupc(event.target.value)}} type="text"/></div>) : (<div>UPC: {props.upc}</div>) }
            {props.showedit ? (<div><span>Amazon ASIN:</span><input value={props.asin} onChange={(event)=>{props.setasin(event.target.value)}} type="text"/></div>) :(<div>Amazon ASIN: {props.asin}</div>)}
            {props.showedit ? (<div><span>Publisher/Manufacturer:</span><input value={props.company} onChange={(event)=>{props.setcompany(event.target.value)}} type="text"/></div>) :(<div>Publisher/Manufacturer: {props.company}</div>)}
            {props.showedit ? (<div><span>Class:</span><input value={props.classname} onChange={(event)=>{props.setclassname(event.target.value)}} type="text"/></div>) :(<div>Class: {props.classname}</div>)}

          </RightSide>
        </TopSide>
        <BottomSide>
          {props.showedit ? (<div><span>Quantity on hand:</span><input min='0'value={props.qty} onChange={(event)=>{props.setqty(event.target.value)}} type="number"/></div>) : <div>Quantity on hand: {props.qty}</div>}

        </BottomSide>
      </ModalContainer>



      <Modal.Footer>
        {props.showedit ? <Button  variant="warning" onClick={props.deleteclickhandler}>Delete Entry</Button> : null}
        {props.showedit ? <Button variant="danger" onClick={props.cancelclickhandler}>Cancel changes</Button> : null}
        {props.showedit ? <Button variant="success" onClick={props.submitclickhandler}>Confirm changes</Button> : null}
        {props.showedit ? null : <Button onClick={props.editclickhandler}>Edit</Button>}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}