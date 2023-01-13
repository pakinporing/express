const express = require('express');
const app = express();

const notFound = (req, res) =>
  res.status(404).send('<h1>Error 404, Page Not Found!!</h1>');
const testGet = (req, res) => res.json({ method: 'get' });
const testPost = (req, res) => res.json({ method: 'post' });
const testPut = (req, res) => res.json({ method: 'put' });
const testDelete = (req, res) => res.json({ method: 'delete' });

app.get('/todo', testGet);
app.post('/todo', testPost);
app.put('/todo', testPut);
app.delete('/todo', testDelete);
app.use(notFound);

app.listen(8000, () => console.log('Start server at port 8000...'));
