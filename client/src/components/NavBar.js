import React from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import {observer} from "mobx-react-lite"
import {useNavigate} from "react-router-dom"

const NavBar = () => {
    const {user} = React.useContext(Context)
    const history = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }

    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to={"/"} style={{color: 'white', textDecoration: "none" }}>IngCook</NavLink>
          {user.isAuth ?
          <Nav className="ml-auto" style={{color: 'white'}}>
            <Button 
            variant={"outline-light"} 
            onClick={() => history(ADMIN_ROUTE)}
            >
              Админ панель
              </Button>
            <Button className="ms-3" variant={"outline-light"}
             onClick={() => logOut()}
             >
              Выйти
              </Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{color: 'white'}}>
          <Button variant={"outline-light"} onClick={() => history(LOGIN_ROUTE)}>Авторизоваться</Button>
        </Nav>
}
        </Container>
      </Navbar>
    </>
    )
}

export default observer(NavBar);