import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};

export default App;
