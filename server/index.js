var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('this is a proxy server');
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});