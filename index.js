var express = require('express');
var app = express();
let calc = require('./calc.js');
let asyncmod = require('./async.js');

app.get('/', function (req, res) {
  res.send(`API calculatrice
  MANUEL<br>
  /add/:input1/:input2<br>
  /modulo/:input1/:input2<br>
  /minus/:input1/:input2<br>
  /mult/:input1/:input2<br>
  /div/:input1/:input2<br>
  `);
});

app.get('/add/:input1/:input2', function (req, res) {
  var input1 = parseInt(req.params.input1);
  var input2 = parseInt(req.params.input2);

  var result = calc.sum(input1,input2);

  res.send(result.toString());
});

app.get('/modulo/:input1/:input2', function (req, res) {
    var input1 = parseInt(req.params.input1);
    var input2 = parseInt(req.params.input2);
  
    var result = calc.modulo(input1,input2);
  
    res.send(result.toString());
  });
  app.get('/minus/:input1/:input2', function (req, res) {
    var input1 = parseInt(req.params.input1);
    var input2 = parseInt(req.params.input2);
  
    var result = calc.minus(input1,input2);
  
    res.send(result.toString());
  });
  app.get('/mult/:input1/:input2', function (req, res) {
    var input1 = parseInt(req.params.input1);
    var input2 = parseInt(req.params.input2);
  
    var result = calc.mult(input1,input2);
  
    res.send(result.toString());
  });
  app.get('/div/:input1/:input2', function (req, res) {
    var input1 = parseInt(req.params.input1);
    var input2 = parseInt(req.params.input2);
  
    var result = calc.div(input1,input2);
  
    res.send(result.toString());
  });

  app.get('/asynctest/', function (req, res) {
  
    asyncmod.loadDistantFile('./todos.json')
    .then(function (content) {
        console.info('Fichier chargé !');
        res.json(content);
      }).catch(function (err) {
        console.error('Erreur catch loadDistance!');
        console.dir(err);
      });
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
