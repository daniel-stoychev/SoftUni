import http from 'http';

const server = http.createServer((req, res) => {
    res.write('Hello world');
    res.write('\n');
    res.write('Hello world1');
    res.write('\n');
    res.write('Hello worl2');

    res.end();
});

server.listen(5000);
console.log('Server is listening on http://localhost:5000...');
