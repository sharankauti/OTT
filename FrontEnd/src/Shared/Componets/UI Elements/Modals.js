import React from 'react'
import  ReactDOM  from 'react-dom'
import styles from '../UI Elements/Modal.module.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



const Modals = (props) => {
  return (
    <Modal 
      show={props.show} 
      size={props.size}
      onHide={props.onHide}
      backdrop={props.backdrop}
      keyboard={props.keyboard}
     >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer>
            {props.footerButtons}
        </Modal.Footer>
    </Modal>
  )
}

export default Modals