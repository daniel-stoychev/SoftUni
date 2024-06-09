function equalSum(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let result = "";

    for (let curNum = startNum; curNum <= endNum; curNum++) {
        let curNumStr = curNum.toString();
        let oddPosiotionSum = 0;
        let evenPositionSum = 0;
        for (let i = 0; i < curNumStr.length; i++) {
            let curDigit = Number(curNumStr[i]);

            if (i % 2 === 0) {
                evenPositionSum += curDigit;
            } else {
                oddPosiotionSum += curDigit;
            }

        }

        if (oddPosiotionSum === evenPositionSum) {
            result += curNumStr + " ";
        }

    }
    console.log(result);
}

equalSum(["100000", "100050"])