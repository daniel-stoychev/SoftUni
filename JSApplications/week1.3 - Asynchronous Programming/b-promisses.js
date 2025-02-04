function proposal() {
    const promise = new Promise((resolve, reject) => {
        console.log('Will you merry me?');
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve('Just merried!')
            } else {
                reject('It\'s not you, it\'s me!');
            }

        }, 1650);

    });
    return promise;
}

const promise = proposal();
promise
    .then(result => {
        console.log(result);

    })
    .catch(err => {
        console.log(err);

    })
