import React, { useState } from 'react';
import { Button , Container, Row } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateRecepte from '../components/modals/CreateRecepte';
import CreateCat from '../components/modals/CreateCat'
import CreateIng from '../components/modals/CreateIng'




const Admin = () => {
  const [catVisible, setcatVisible] = useState(false)
  const [typeVisible, settypeVisible] = useState(false)
  const [ingVisible, setingVisible] = useState(false)
  const [recepteVisible, setrecepteVisible] = useState(false)
  return (
    <Row d-flex flex-column>
      <Button 
      variant={"outline-dark"} 
      className="mt-4 p-2"
      onClick={() => settypeVisible(true)}
      >
        Добавить тип
        </Button>
      <Button 
      variant={"outline-dark"} 
      className="mt-4 p-2"
      onClick={() => setrecepteVisible(true)}
      >
        Добавить рецепт
        </Button>
      <Button 
      variant={"outline-dark"} 
      className="mt-4 p-2"
      onClick={() => setingVisible(true)}
      >
        Добавить ингредиенты
        </Button>
      <Button 
      variant={"outline-dark"} 
      className="mt-4 p-2"
      onClick={() => setcatVisible(true)}
      >
        Добавить категорию
        </Button>
      <CreateType show={typeVisible} onHide={() => settypeVisible(false)}/>
      <CreateCat show={catVisible} onHide={() => setcatVisible(false)}/>
      <CreateRecepte show={recepteVisible} onHide={() => setrecepteVisible(false)}/>
      <CreateIng show={ingVisible} onHide={() => setingVisible(false)}/>
      
    </Row>
  );
};

export default Admin;