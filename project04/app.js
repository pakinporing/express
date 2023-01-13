const express = require('express');

const app = express();

app.use(['/public', '/static'], express.static('./public'));

app.use((req, res) => {
  res.status(404).json({ msg: 'Path not found...' });
});

app.listen(8000, () => console.log('Server on 8000'));
