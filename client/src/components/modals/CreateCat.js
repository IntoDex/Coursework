import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createCat } from '../../http/recepteAPI';


const CreateCat = ({show, onHide}) => {
  const [value, setValue] = useState('')
  
  
  
  const addCat = () => {
    createCat( {name: value} ).then(data => {
      setValue('')
      onHide()
    })
  }


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить категорию
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control 
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Введите название категории'>

        </Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addCat}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCat;