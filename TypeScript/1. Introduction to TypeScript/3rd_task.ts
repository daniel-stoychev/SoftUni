function convertArr(arr: string[]):[string, number] {
    const concat = arr.join('');
    return [concat, concat.length]
}


console.log(convertArr(['How', 'are', 'you?']));
console.log(convertArr(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
