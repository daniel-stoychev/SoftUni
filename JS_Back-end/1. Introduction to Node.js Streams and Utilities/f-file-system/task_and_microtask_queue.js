setTimeout(() => {
    console.log(1);

}, 0);

const result = await Promise.resolve(2);
console.log(result);
