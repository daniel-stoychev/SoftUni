function train(input) {

    let juriCount = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let presentationCounter = 0;
    let allPresentationSum = 0;

    while (command !== 'Finish') {
        let presentationName = command;
        let presentationNameSum = 0;

        for (let curJudge = 1; curJudge <= juriCount; curJudge++) {
            let grade = Number(input[index])
            index++;
            presentationNameSum += grade;

        }

        let avgGrade = presentationNameSum / juriCount;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);

        allPresentationSum += avgGrade;
        presentationCounter++;

        command = input[index];
        index++;
    }

    if (command === 'Finish') {
        console.log(`Student's final assessment is ${(allPresentationSum / presentationCounter).toFixed(2)}.`);
    }

}

train(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"])