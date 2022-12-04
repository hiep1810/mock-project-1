import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CreateTODOPage from '../pages/create-todo';
import LoginPage from '../pages/login';
import LogoutPage from '../pages/logout';
import NoMatchPage from '../pages/no-match';
import RegisterPage from '../pages/register';
import TODOListPage from '../pages/todo-list';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

const AppRouter = () => {
  return (
    <Routes>
      {/*<!-- PUBLIC ROUTE -->*/}
      <Route element={<PublicRoute restricted={true} />} path='/login' exact>
        <Route exact path='/login' element={<LoginPage />} />
      </Route>
      <Route element={<PublicRoute restricted={true} />} path='/register' exact>
        <Route exact path='/register' element={<RegisterPage />} />
      </Route>

      {/*<!-- PRIVATE ROUTE -->*/}
      <Route element={<PrivateRoute />} path='/' exact>
        <Route exact path='/' element={<TODOListPage />} />
      </Route>

      <Route element={<PrivateRoute />} path='/logout' exact>
        <Route exact path='/logout' element={<LogoutPage />} />
      </Route>
      <Route element={<NoMatchPage />} path='*' />
    </Routes>
  );
};

export default AppRouter;
