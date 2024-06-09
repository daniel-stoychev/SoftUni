function exercise(input) {

    let juriCount = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;

    let allPresentationSum = 0;
    let totalPresentationScoreCounter = 0;

    while (command !== 'Finish') {
        let presentationName = command;
        let presentationNameSum = 0;


        for (let juriScore = 1; juriScore <= juriCount; juriScore++) {
            let grade = Number(input[index]);
            index++;
            presentationNameSum += grade;
        }


        let avgScore = (presentationNameSum / juriCount);
        console.log(`${presentationName} - ${avgScore.toFixed(2)}.`);

        totalPresentationScoreCounter++;
        allPresentationSum += avgScore;

        command = input[index];
        index++;
    }



    console.log(`Student's final assessment is ${(allPresentationSum / totalPresentationScoreCounter).toFixed(2)}.`);


}

exercise(["3",

    "Arrays",

    "4.53",

    "5.23",

    "5.00",

    "Lists",

    "5.83",

    "6.00",

    "5.42",

    "Finish"])