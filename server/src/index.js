import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { Routes } from './client/Routes';
import { createStore, renderer } from './helpers';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    // only for this particular api setup, usually this is not necessary!
    proxyReqOptDecorator(opts) {
      opts.header['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  })
);
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
