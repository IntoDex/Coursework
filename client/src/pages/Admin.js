import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

const Admin = () => {
  return (
    <Row d-flex flex-column>
      <Button variant={"outline-dark"} className="mt-4 p-2">Добавить тип</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2">Добавить рецепт</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2">Добавить ингредиенты</Button>
      <Button variant={"outline-dark"} className="mt-4 p-2">Добавить категорию</Button>





    </Row>
  );
};

export default Admin;