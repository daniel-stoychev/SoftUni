function histogram(input) {

    let numberCount = Number(input[0]);

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let i = 1; i <= numberCount; i++) {

        let curNum = input[i];

        if (curNum < 200) {
            count1 += 1;
        } else if (curNum < 400) {
            count2 += 1;
        } else if (curNum < 600) {
            count3 += 1;
        } else if (curNum < 800) {
            count4 += 1;
        } else {
            count5 += 1;
        }


    }
    console.log(`${(count1 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(count2 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(count3 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(count4 / numberCount * 100).toFixed(2)}%`);
    console.log(`${(count5 / numberCount * 100).toFixed(2)}%`);

}

histogram(["3", "1", "2", "999"])