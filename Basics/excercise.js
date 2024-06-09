function exercise(input) {

    let visitors = Number(input[0]);

    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let proteinShakeCounter = 0;
    let proteinBarCounter = 0;

    let workOutCount = 0;
    let proteinCount = 0;



    for (let index = 1; index <= visitors; index++) {
        activity = input[index];
        switch (activity) {
            case "Back":
                backCounter++;
                break;
            case "Chest":
                chestCounter++;
                break;
            case "Legs":
                legsCounter++;
                break;
            case "Abs":
                absCounter++;
                break;
            case "Protein shake":
                proteinShakeCounter++;
                break;
            case "Protein bar":
                proteinBarCounter++;
                break;

        }

    }

    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${proteinShakeCounter} - protein shake`);
    console.log(`${proteinBarCounter} - protein bar`);

    workOutCount = (backCounter + chestCounter + legsCounter + absCounter) / visitors;
    proteinCount = (proteinShakeCounter + proteinBarCounter) / visitors;

    console.log(`${(workOutCount * 100).toFixed(2)}% - work out`);
    console.log(`${(proteinCount * 100).toFixed(2)}% - protein`);

}

exercise(["7", "Chest", "Back", "Legs", "Legs", "Abs", "Protein shake", "Protein bar"])