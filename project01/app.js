const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'hello' });
});

app.post('/testpost', (req, res) => {
  res.json();
});

app.use((req, res) => {
  res.status(404).send({ msg: 'path not found' });
});

app.listen(8000, () => console.log('server start at 8000...'));
