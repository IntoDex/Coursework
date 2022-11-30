import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Row} from 'react-bootstrap'
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const Auth = () => {
      const {user} = React.useContext(Context)
      const location = useLocation()
      const history = useNavigate()
      const isLogin = location.pathname === LOGIN_ROUTE
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const click = async () => {
        try {
          let data;
        if (isLogin) {
          data = await login(email, password);
        } else {
          data = await registration(email, password);
        }
        user.setUser(user)
        user.setIsAuth(true)
        history(SHOP_ROUTE)
        } catch (e) {
          alert(e.response.data.message)
        }
        
       
      }

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
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Control 
              className="mt-4"
              placeholder="Введите ваш пароль..."
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
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
            variant={"outline-success"}
              onClick={click}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
            </Row>
            


          </Form>
      </Card>
    </Container>
  );
};

export default observer(Auth);