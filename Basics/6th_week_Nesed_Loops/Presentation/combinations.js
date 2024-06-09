function combinations(input) {
    let num = Number(input[0]);
    let comb = 0;

    for (let x1 = 0; x1 <= num; x1++) {

        for (let x2 = 0; x2 <= num; x2++) {

            for (let x3 = 0; x3 <= num; x3++) {
                let sum = Number(x1 + x2 + x3);
                if (sum === num) {
                    // console.log(`${x1} - ${x2} - ${x3}`);
                    comb++;
                }



            }

        }

    }
    console.log(comb);
}


combinations([25]);