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
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  })
);
app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);

  // Logic to initialize and
  // load data into the store
  const pendingRequests = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }).map(promise => {
      if (promise) {
          return new Promise(((resolve, reject) => {
              return promise.then(resolve).catch(resolve)
          }))
      }
  });

  Promise.all(pendingRequests)
    .then(() => {
      const context = {}; // use for redirects and error handling
      const content = renderer(req, store, context);

      if (context.url) {
          return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    })
    .catch(err => console.error(err));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('port listening on', PORT);
});
