var http  = require("http");

http.createServer(function (request, response) {

    // send the HTTP header
    // HTTP Status: 200 : ok
    // content Type: text/plain
    response.writeHead(200, {'content-Type': 'text/plain'});
    // send the response body a "Hello World"
    response.end('Hello world in node js\n');
    }).listen(3000);

// console will print the message
console.log('Server running at http://127.0.0.1:3000/');