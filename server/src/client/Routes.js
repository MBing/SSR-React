import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

const Routes = [
  {
    path: '/',
    ...HomePage,
    exact: true,
  },
  {
    path: '/users',
    ...UsersListPage,
  },
];

export { Routes };
