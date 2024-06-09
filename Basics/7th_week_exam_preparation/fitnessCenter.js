function fitness(input) {

    let people = Number(input[0]);

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;

    let proteinShake = 0;
    let proteinBlock = 0;

    for (let index = 1; index <= people; index++) {
        let activity = input[index];
        switch (activity) {
            case "Back":
                backCount++;
                break;
            case "Chest":
                chestCount++;
                break;
            case "Legs":
                legsCount++;
                break;
            case "Abs":
                absCount++;
                break;
            case "Protein shake":
                proteinShake++;
                break;
            case "Protein bar":
                proteinBlock++;
                break;
        }

    }

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBlock} - protein bar`);

    let trainPeople = (backCount + chestCount + legsCount + absCount) / people;
    let proteinPeople = (proteinShake + proteinBlock) / people;

    console.log(`${(trainPeople * 100).toFixed(2)}% - work out`);
    console.log(`${(proteinPeople * 100).toFixed(2)}% - protein`);


}

fitness(["10", "Back", "Chest", "Legs", "Abs", "Protein shake", "Protein bar", "Protein shake", "Protein bar", "Legs", "Abs"])