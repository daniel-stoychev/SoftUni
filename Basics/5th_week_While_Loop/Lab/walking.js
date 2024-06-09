function walking(input) {


    let index = 0;
    let command = input[index];
    index++;

    let sumSteps = 0;


    while (command !== "Going home") {
        let steps = Number(command);
        sumSteps += steps;
        if (sumSteps >= 10000) {
            let stepOverTheGoal = sumSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepOverTheGoal} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;

    }

    if (command === "Going home") {
        let stepsGoingHome = Number(input[index]);
        sumSteps += stepsGoingHome;

        if (sumSteps >= 10000) {
            let stepOverTheGoal = sumSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepOverTheGoal} steps over the goal!`);
        } else {
            console.log(`${10000 - sumSteps} more steps to reach goal.`);
        }

    }
}


walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);