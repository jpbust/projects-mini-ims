import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NewProductQuestions from './NewProductQuestions.jsx'

function NewProductModal(props) {
  return (
    <Modal

      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please complete info:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewProductQuestions/>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default NewProductModal;