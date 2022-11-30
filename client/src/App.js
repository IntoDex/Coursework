import React, { useEffect, useState } from 'react';
import useContext from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = () => {
  const {user} = React.useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={'grow'}/>
  }




  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};

export default observer(App);
