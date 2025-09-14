import fs from 'fs';

const readStream = fs.createReadStream('./index.txt', {
    encoding: 'utf-8',
    highWaterMark: 1000
});

const writeStream = fs.createWriteStream('./output.txt', {
    encoding: 'utf-8'
});

readStream.pipe(writeStream);