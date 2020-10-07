const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
app.use(express.json());
app.use('/homes/:id', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('this is a proxy server');
});

app.get('/data/homes/:id', (req, res) => {
  axios({ method: 'get', 'url': `http://localhost:3001/data/homes/${req.params.id}`})
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      res.status(400).send('could not get data');
    });
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});