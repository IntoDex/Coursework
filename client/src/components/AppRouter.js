import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import {Navigate} from 'react-router'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
  return (
    <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={Component} exact/>
        )}
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={Component} exact/>
        )}
        {!user.isAuth&&<Route path="*" element={<Navigate to={"/"}/>}/>}
    </Routes>
  );
};

export default AppRouter;