import React from 'react';
import App from './App'
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

const Routes = [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage,
        exact: true,
      },
      {
        path: '/users',
        ...UsersListPage,
      },
    ],
  },
];

export { Routes };
