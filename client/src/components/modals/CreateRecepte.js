import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Dropdown, Form, Modal, Col, Row } from 'react-bootstrap';
import { Context } from '../..';
import { createRecepte, fetchCats, fetchTypes } from '../../http/recepteAPI';


const CreateRecepte = ({show, onHide}) => {
    const {recepte} = React.useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [cat, setCat] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        fetchTypes().then(data => recepte.setTypes(data.rows))
        fetchCats().then(data => recepte.setCats(data.rows))
      }, [])


    
    const [ingredient, setIngredient] = useState([])

    const addIngredient = () => {
        setIngredient([...ingredient, {title: '', number: Date.now()}])
    }
    const removeIngredient = (number) => {
        setIngredient(ingredient.filter(i => i.number !== number))
    }

    const changeIngredient = (key, value, number) => {
        setIngredient(ingredient.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addRecepte = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        formData.append('img', file)
        formData.append('typeId', recepte.selectedType.id)
        formData.append('catId', recepte.selectedCat.id)
        formData.append('ingId', JSON.stringify(ingredient))
        createRecepte(formData).then(data => onHide())
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
          Добавить рецепт
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{recepte.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {recepte.types.map(type =>
                        <Dropdown.Item onClick={() => recepte.setSelectedType(type) } key={type.id}>{type.name}</Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle>{recepte.selectedCat.name || "Выберите категорию"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {recepte.cats.map(cats =>
                        <Dropdown.Item onClick={() => recepte.setSelectedCat(cats) } key={cats.id}>{cats.name}</Dropdown.Item>
                        )}
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                value={name}
                onChange={e => setName(e.target.value)}
                className='mt-3'
                placeholder='Введите название рецепта'
            ></Form.Control>
            <Form.Control
                value={description}
                onChange={e => setDescription(e.target.value)}
                className='mt-3'
                placeholder='Дайте описание рецепта ( также укажите способ готовки )'
                type="string"
            ></Form.Control>
            <Form.Control
                className='mt-3'
                type="file"
                onChange={selectFile}
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
                        value={i.title}
                        onChange={(e) => changeIngredient('title', e.target.value, i.number)}
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
        <Button variant="outline-success" onClick={addRecepte}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default observer(CreateRecepte);