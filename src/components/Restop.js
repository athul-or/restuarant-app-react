import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({ operate }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Working Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Working Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item><b>Monday</b> : {operate.Monday}</ListGroup.Item>
            <ListGroup.Item><b>Tuesday</b> : {operate.Tuesday}</ListGroup.Item>
            <ListGroup.Item><b>Wednesday</b> : {operate.Wednesday}</ListGroup.Item>
            <ListGroup.Item><b>Thursday</b> : {operate.Thursday}</ListGroup.Item>
            <ListGroup.Item><b>Friday</b> : {operate.Friday}</ListGroup.Item>
            <ListGroup.Item><b>Saturday</b> : {operate.Saturday}</ListGroup.Item>
            <ListGroup.Item><b>Sunday</b> : {operate.Sunday}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Restop