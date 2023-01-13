const express = require('express');

const app = express();

app.use((req, res) => {
  res.status(404).send({ msg: 'Path not found...' });
});

app.listen(8000, () => console.log('Server on 8000'));
