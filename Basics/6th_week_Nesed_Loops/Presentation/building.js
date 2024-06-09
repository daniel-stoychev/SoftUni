function nestedLoops(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for (let a = floors; a > 0; a--) {
        let curRow = "";

        for (let b = 0; b < rooms; b++) {

            if (a === floors) {
                curRow += `L${a}${b} `;
            } else if (a % 2 === 0) {
                curRow += `O${a}${b} `;
            } else {
                curRow += `A${a}${b} `;
            }

        }
        console.log(curRow);

    }


}

nestedLoops(["4", "4"])