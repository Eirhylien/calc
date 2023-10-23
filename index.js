var express = require('express');
var app = express();
let calc = require('./calc.js');

app.get('/', function (req, res) {
  res.send('API calculatrice');
});

app.get('/add/:input1/:input2', function (req, res) {
  var input1 = parseInt(req.params.input1);
  var input2 = parseInt(req.params.input2);

  var result = calc.sum(input1,input2);

  res.send(result.toString());
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
