import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import { Routes } from './client/Routes';
import { createStore, renderer } from './helpers';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // Logic to initialize and
  // load data into the store
  const pendingRequests = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(pendingRequests)
    .then(() => res.send(renderer(req, store)))
    .catch(err => console.error(err));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('port listening on', PORT);
});
