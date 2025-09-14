import fs from 'fs';

const readStream = fs.createReadStream('./index.txt', {
    encoding: 'utf-8',
    highWaterMark: 1000
});

readStream.on('data', (chunk) => {
    console.log('-------NEW CHUNK-------');

    console.log(chunk);

});

readStream.on('end', () => {
    console.log('Stream ended!');

});