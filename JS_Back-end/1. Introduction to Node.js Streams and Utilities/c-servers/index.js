import http from "http";

const server = http.createServer((req, res) => {
    console.log('Request Received');

    const url = new URL('https://en.wikipedia.org/wiki/HTTP#History');
    const searchParams = new URLSearchParams(req.url.split('?')[1]);
    console.log(searchParams);




    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.write('<h1>Hello from my first HTTP server</h1>');
    res.end();
});

server.listen(5000);
console.log('Server is listening on http://localhost:5000...');

