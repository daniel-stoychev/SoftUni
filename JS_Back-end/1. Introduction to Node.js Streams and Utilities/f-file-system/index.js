import fs from 'fs';
import fsPromises from 'fs/promises'


// Synchronous Usecase
const loremText = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
// console.log(loremText);

//Asynchronous with Callback

fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, result) => {
    if (err) {
        return console.log(err.message);
    }

    console.log(`callback: ${result}`);

});

// Asynchronous with Promises. (DOES NOT BLOCK THE MIN THREAD)

const promiseResult = await fsPromises.readFile('./input.txt', { encoding: 'utf-8' });
console.log('promise: ' + promiseResult);

//read directory
const dirList = await fsPromises.readdir('.');
console.log(dirList);

//remove dir if exists 
if (dirList.includes('created_dir')) {
    await fsPromises.rmdir('created_dir');
}

//create dir
await fsPromises.mkdir('created_dir');

//rename file OR dir

//// await fsPromises.rename('input.txt', 'input2.txt');

//write a file
await fsPromises.writeFile('./output.txt', 'Something good is about to happen', { encoding: 'utf-8' });

//delete a file
await fsPromises.unlink('./output.txt');
