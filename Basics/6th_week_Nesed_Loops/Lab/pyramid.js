function pyramid(input) {

    let num = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurLine = "";

    for (let rows = 1; rows <= num; rows++) {
        for (let cols = 0; cols < rows; cols++) {
            if (current > num) {
                isBigger = true;
                break;
            }
            printCurLine += current + " ";
            current++;
        }
        console.log(printCurLine);
        printCurLine = "";
        if (isBigger) {
            break;
        }

    }

}

pyramid(["6"]);