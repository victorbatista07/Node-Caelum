var http = require('http');
var ip = "localhost";
var porta = 3000;

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url == "/produtos") {
        res.end("<html><body>Listando produtos</body></html>");
    } else {
        res.end("<html><body>Outra url</body></html>");
    }
}).listen(porta, ip);