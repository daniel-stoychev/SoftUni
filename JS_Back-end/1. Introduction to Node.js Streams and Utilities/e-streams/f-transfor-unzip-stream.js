import fs from 'fs';
import zlib from 'zlib';

const readStream = fs.createReadStream('./gzip_output.txt', { highWaterMark: 1000 });
const writeStream = fs.createWriteStream('./unzip_output.txt', { encoding: 'utf-8' });
const transformStream = zlib.createGunzip();

readStream.pipe(transformStream).pipe(writeStream);


