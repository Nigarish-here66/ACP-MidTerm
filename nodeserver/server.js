// /server/server.js
const express = require('express');
const app = express();
const myLogger = require('./middleware/mylogger');

app.use(myLogger);

app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
