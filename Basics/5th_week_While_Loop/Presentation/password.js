function password(input) {
    let user = input[0];
    let pass = input[1];

    let passInput = input[2];;

    let index = 3;
    while (passInput !== pass) {
        index++;
        passInput = input[index];

    }
    console.log(`Welcome ${user}!`);

}

password(["Nakov",

    "1234",

    "Pass",

    "1324",

    "1234"]);