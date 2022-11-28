import React from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import {observer} from "mobx-react-lite"

const NavBar = () => {
    const {user} = React.useContext(Context)
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>IngCook</Navbar.Brand>
          {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button className="ms-3" variant={"outline-light"}>Войти</Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
          <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизоваться</Button>
        </Nav>
}
        </Container>
      </Navbar>
    </>
    )
}

export default observer(NavBar);