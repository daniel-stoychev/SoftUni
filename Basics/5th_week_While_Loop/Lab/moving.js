function moving(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let height = Number(input[2]);

    let appartmentVolume = width * lenght * height;

    let index = 3;
    let command = input[index];
    index++;

    let boxesSum = 0;

    while (command !== "Done") {
        let boxesPerMove = Number(command);
        boxesSum += boxesPerMove;

        if (boxesSum >= appartmentVolume) {
            console.log(`No more free space! You need ${boxesSum - appartmentVolume} Cubic meters more.`);
            break;
        }
        command = input[index]
        index++;

    }

    if (command === "Done") {
        console.log(`${appartmentVolume - boxesSum} Cubic meters left.`);
    }


}

moving(["10",

    "1",

    "2",

    "4",

    "6",

    "Done"])