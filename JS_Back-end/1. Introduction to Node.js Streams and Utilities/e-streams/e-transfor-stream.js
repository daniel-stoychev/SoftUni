import fs from 'fs';
import zlib from 'node:zlib';

const readStream = fs.createReadStream('./index.txt', { encoding: 'utf-8', highWaterMark: 1000 });
const writeStream = fs.createWriteStream('./gzip_output.txt', { encoding: 'utf-8' });
const transformStream = zlib.createGzip();

readStream.pipe(transformStream).pipe(writeStream);



// import fs from 'fs';
// import zlib from 'node:zlib';

// const readStream = fs.createReadStream('./index.txt', { encoding: 'utf-8', highWaterMark: 1000 });
// const writeStream = fs.createWriteStream('./gzip-output.txt', { encoding: 'utf-8' });
// const transformStream = zlib.createGzip();

// readStream.pipe(transformStream).pipe(writeStream);