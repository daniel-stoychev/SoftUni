import fs, { write } from 'fs';

const writeStream = fs.createWriteStream('./write.txt', {
    encoding: 'utf-8',
    flags: 'a'
});

writeStream.write('First line....');
writeStream.write('\n');
writeStream.write('Second line....');
writeStream.write('\n');

writeStream.end();