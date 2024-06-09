function salary(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);

    for (let tab = 2; tab <= input.length; tab++) {

        if (input[tab] === "Facebook") {
            salary -= 150;
        } else if (input[tab] === "Instagram") {
            salary -= 100;
        } else if (input[tab] === "Reddit") {
            salary -= 50;
        }

    }




    if (salary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(salary);
    }
}


salary(["10",

    "750",

    "Facebook",

    "Dev.bg",

    "Instagram",

    "Facebook",

    "Reddit",

    "Facebook",

    "Facebook"])