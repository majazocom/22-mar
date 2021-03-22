const http = require('http');
const port = 8080;
const path = require('path');


console.log(path.normalize('//s/e./rr//../c/'));

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Listening on port 8080');
    res.end('Hello World!');
}).listen(port);

