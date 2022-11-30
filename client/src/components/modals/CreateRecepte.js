import React, { useContext, useState } from 'react';
import { Button, Dropdown, Form, Modal, Col, Row } from 'react-bootstrap';
import { Context } from '../..';


const CreateRecepte = ({show, onHide}) => {
    const {recepte} = React.useContext(Context)
    const [ingredient, setIngredient] = useState([])

    const addIngredient = () => {
        setIngredient([...ingredient, {tittle: '', number: Date.now()}])
    }
    const removeIngredient = (number) => {
        setIngredient(ingredient.filter(i => i.number !== number))
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
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                <Dropdown.Menu>
                    {recepte.types.map(type =>
                        <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle>Выберите категорию</Dropdown.Toggle>
                <Dropdown.Menu>
                    {recepte.cats.map(cats =>
                        <Dropdown.Item key={cats.id}>{cats.name}</Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                className='mt-3'
                placeholder='Введите название рецепта'
            ></Form.Control>
            <Form.Control
                className='mt-3'
                placeholder='Дайте описание рецепта ( также укажите способ готовки )'
                type="string"
            ></Form.Control>
            <Form.Control
                className='mt-3'
                type="file"
            ></Form.Control>
            <hr />
            <Button
                variant={'outline-dark'}
                onClick={addIngredient}
            >
                Добавить ингредиенты в рецепт
                </Button>
            {ingredient.map(i =>
                <Row className='mt-3' key={i.number}>
                   <Col md={4}>
                    <Form.Control 
                        placeholder='Введите название ингредиента'
                    />
                    </Col>
                    <Col md={4}>
                        <Button 
                        onClick={() => removeIngredient(i.number)}
                        variant={"outline-danger"}>
                            Удалить
                        </Button>
                    </Col>     
                </Row>
            )}                     
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateRecepte;