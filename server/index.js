const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
  res.send('this is a proxy server');
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});