const express = require('express');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT")
  next();
});

app.use(express.static('public'));

require('./routes')(app);

const port = 8080;

app.listen(port, () => {
  console.log('server listening on port ', port);
});