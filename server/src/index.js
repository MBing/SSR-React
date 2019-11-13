import 'babel-polyfill'
import express from 'express';
import { createStore, renderer } from './helpers';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // Logic to initialize and
  // load data into the store
  res.send(renderer(req, store));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('port listening on', PORT);
});
