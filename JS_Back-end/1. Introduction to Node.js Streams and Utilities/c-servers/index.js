import http from "http";
import url from 'url';

const server = http.createServer((req, res) => {
    console.log('Request Received');

    console.log('HTTP Method:', req.method);


    const paresedUrl = url.parse(req.url);

    console.log(paresedUrl);


    // const url = new URL('https://en.wikipedia.org/wiki/HTTP#History');
    const searchParams = new URLSearchParams(paresedUrl.query);
    console.log(searchParams);



    if (paresedUrl.pathname === '/') {
        //This is root page 
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(`
            <html>
                <head>
                   <link rel="stylesheet" href="/css/style.css"> 
                </head>
                <body>
                    <h1>Hello from my first HTTP server</h1>
                </body>
                
            </html>
            `);

    } else if (paresedUrl.pathname === '/cats') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write(`
            <html>
                <head>
                   <link rel="stylesheet" href="/css/style.css"> 
                </head>
                <body>
                    <h1>This is Cats page</h1>
                </body>
                
            </html>
            `)
    } else if (paresedUrl.pathname === '/css/style.css') {
        res.writeHead(200, {
            'content-type': 'text/css'
        });
        res.write(`
                body {
                    background-color: aquamarine;
                    }
            `);
    }


    res.end();


});

server.listen(5000);
console.log('Server is listening on http://localhost:5000...');

