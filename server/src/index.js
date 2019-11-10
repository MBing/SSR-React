const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { Home } = require('../src/client/components/Home');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);

  res.send(content);
});

app.listen(PORT, () => {
  console.log('port listening on', PORT);
});
