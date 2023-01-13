const express = require('express');
const productRoute = require('./routes/productRoute');

const app = express();

app.use(express.json());

app.use('/product', productRoute);

app.use((req, res) => {
  res.status(404).json({ msg: 'No Service' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err.message });
});

app.listen(8000, () => console.log('Server on 8000'));
