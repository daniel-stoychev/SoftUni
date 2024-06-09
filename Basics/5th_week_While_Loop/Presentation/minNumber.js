function min(input) {


    let index = 0;
    let curNumber = input[index];
    let lowestNum = Number.MAX_VALUE;

    while (curNumber !== "Stop") {
        let curNumNum = Number(curNumber);

        if (curNumNum < lowestNum) {
            lowestNum = curNumNum;
        }
        index++;
        curNumber = input[index];

    }
    console.log(lowestNum);

}

min(["100",

    "9",

    "80",

    "70",

    "Stop"]);