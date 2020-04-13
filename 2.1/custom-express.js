var express = require('express');

module.exports = function() {
    var app = express();

    app.set('view engine', 'ejs');

    app.get('/produtos', function(req, res) {
        console.log('Requisição chegou');
        res.render('produtos/lista');
    });
};