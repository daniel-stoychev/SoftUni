function cake(input) {

    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let cakeSize = width * lenght;

    let index = 2
    let command = input[index];
    index++;


    while (command !== "STOP") {
        let peaces = Number(command);
        cakeSize -= peaces;

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        command = input[index];
        index++;


    }

    if (command === "STOP") {
        console.log(`${cakeSize} pieces are left.`);
    }



}

cake(["10",

    "10",

    "20",

    "20", "20", "20", "21"])