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

async function groupProposal() {
    try {
        const result = await proposal();
        console.log(result);

        console.log('After proposal');
    } catch (err) {
        console.log(err);

    }



}

groupProposal();