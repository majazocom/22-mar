const http = require('http');
const port = 8080;
const path = require('path');
const fs = require('fs');


//Läsa från fil med innehåll
fs.readFile('text.txt', 'utf8', (err, contents) => {
    console.log(contents);
});


//Skriva ny fil med innehåll
let quote = 'Be yourself. Everyone else is taken.';

fs.writeFile('quote.txt', quote, (err) => {
    console.log('Quote Saved!');
});

//Testa path-funktioner
console.log(path.normalize('//s/e./rr//../c/'));


//Skriva strömmar
const file = fs.createWriteStream('OscarWilde.txt');

for(let i=0; i < 5; i++) {
    file.write('You can never be overdressed or overeducated \n');
}

//Föra över innehåll i en txt-fil till en annan
let readFile = fs.createReadStream('OscarWilde.txt');
let writeFile = fs.createWriteStream('OscarWilde2.txt');

readFile.pipe(writeFile);

//Skapa node-server
http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Listening on port 8080 \n');
    res.end('Hello World!');
}).listen(port);

