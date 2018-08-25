const http = require('http');
const url = require('url');


const server =  http.createServer( (request, response) => {
    const params = url.parse(request.url, true).query;

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<!DOCTYPE  html>
                    <html>
                        <head>
                            <title>First http Server</title>
                        </head>
                        <body>
                            <h1>Hello ${params.name}, \nWelcome to my page</h1>
                        </body>
                    </html>`);
    response.end();
});

server.listen(4000);
console.log('HTTP Server i s running on port 4000.');
