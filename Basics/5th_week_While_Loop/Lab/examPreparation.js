function exam(input) {

    let lowScoreNum = Number(input[0]);

    let index = 1;
    let command = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let badGrades = 0;

    let gradeSum = 0;
    let gradeCount = 0;

    let lastProblem = "";


    while (command !== "Enough") {
        lastProblem = command;
        if (grade <= 4) {
            badGrades++;
        }
        if (badGrades === lowScoreNum) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }

        gradeCount++;
        gradeSum += grade;

        command = input[index];
        index++;
        grade = Number(input[index]);
        index++;

    }

    if (command === "Enough") {
        let avgGrade = gradeSum / gradeCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

exam(["3",

    "Money",

    "6",

    "Story",

    "4",

    "Spring Time",

    "5",

    "Bus",

    "6",

    "Enough"])