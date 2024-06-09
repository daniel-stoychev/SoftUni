function graduation(input) {
    let name = input[0]
    let grades = 1
    let current = Number(input[grades])
    let gradeSum = 0
    let excluded = 0


    while (grades <= 12) {
        current = Number(input[grades]);
        gradeSum += current;
        grades++;
        if (current < 4) {
            excluded++
        }
        if (excluded > 1) {
            console.log(`${name} has been excluded at ${grades - 2} grade`);
            return;
        }
    }
    let avgCurrents = gradeSum / 12
    console.log(`${name} graduated. Average grade: ${avgCurrents.toFixed(2)}`);


}




graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])