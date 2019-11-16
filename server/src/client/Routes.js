import React from 'react';
import App from './App';
import AdminsListPage from './pages/AdminsListPage';
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
        ...AdminsListPage,
        path: '/admins',
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
