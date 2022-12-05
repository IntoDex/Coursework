import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { deleteRecepte } from '../../http/recepteAPI';


const DeleteRecepte = ({show, onHide}) => {
  const [value, setValue] = useState('')
 
  
  
  
  const delRecepte = () => {
    deleteRecepte(value).then(data => {
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
          Удалить рецепт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control 
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='Введите номер рецепта'>

        </Form.Control>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark"  onClick={onHide}>Закрыть</Button>
        <Button variant="outline-danger" onClick={delRecepte}>Удалить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteRecepte;