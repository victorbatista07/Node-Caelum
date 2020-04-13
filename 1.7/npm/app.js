var express = require('express');
var app = express();

//ejs serve para rederizar o html
//.set() cria uma nova variável dentro do express
app.set('view engine', 'ejs');
//'view engine' responsável por buscar o módulo que irá rederizar as views

/*app.get('/produtos', function(req, res) {
    res.send("listagem de produtos");
});*/

app.get('/produtos', function(req, res) {
    console.log('Requisição chegou');
    res.render('produtos/lista');
});

var server = app.listen(3000, function() {
    console.log("Servidor rodando");
});