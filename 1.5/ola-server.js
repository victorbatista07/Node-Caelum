var http = require('http');
var ip = "localhost";
var porta = 3000;

http.createServer(function(req, res) {
    console.log('Recebendo request!');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<html><body>Uma mensagem na tela!</body></html>");
}).listen(porta, ip);

console.log("Servidor rodando em http://" + ip + ":" + porta);