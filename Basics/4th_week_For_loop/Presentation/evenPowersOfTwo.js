function evenPowers(input) {
    let number = Number(input[0]);

    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            console.log(Math.pow(2, i));
        }
    }
}

evenPowers(["10"]);
