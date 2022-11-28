import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {Row} from 'react-bootstrap'

const Auth = () => {
      const location = useLocation()
      console.log(location)
      const isLogin = location.pathname === LOGIN_ROUTE

  return (
    <Container 
    className="d-flex justify-content-center align-items-center"
    style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
          <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
            <Form.Control 
              className="mt-4"
              placeholder="Введите ваш email..."
            />
            <Form.Control 
              className="mt-4"
              placeholder="Введите ваш пароль..."
            />
            <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
              {isLogin ?
              <div>
                  Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Заведи...</NavLink>
              </div>
              :
              <div>
                  Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Заходи не стесняйся...</NavLink>
              </div>
}
            <Button 
            variant={"outline-success"}>
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
            </Row>
            


          </Form>
      </Card>
    </Container>
  );
};

export default Auth;