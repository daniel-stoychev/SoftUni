function max(input) {


    let index = 0;
    let curNumber = input[index];
    let highestNum = -9999999999;

    while (curNumber !== "Stop") {
        let curNumNum = Number(curNumber);

        if (curNumNum > highestNum) {
            highestNum = curNumNum;
        }
        index++;
        curNumber = input[index];

    }
    console.log(highestNum);
}

max(["98",

    "9",

    "80",

    "700",

    "Stop"]);