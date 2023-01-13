const fs = require('fs/promises');
const express = require('express');
const app = express();

function getList() {
  return fs.readFile('./db/data.json').then(JSON.parse);
}

app.get('/', (req, res) => {
  res.send({ msg: 'Please use path /todo' });
});

app.get('/todo', (req, res) => {
  getList().then((todo) => {
    res.status(200).json(todo);
  });
});

app.get('/todo/:idx', (req, res) => {
  let { idx } = req.params;
  console.log(req.params);
  getList().then((todo) => {
    res.status(200).json(todo[idx - 1]);
  });
});

app.use((req, res) => {
  res.status(404).json({ msg: 'service not found' });
});

app.listen(8000, () => console.log('Start server at port 8000...'));
