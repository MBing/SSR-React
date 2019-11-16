import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
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
      {
        ...NotFoundPage,
      },
    ],
  },
];

export { Routes };
