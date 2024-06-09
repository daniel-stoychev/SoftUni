function trekking(input) {
    groupNumber = Number(input[0]);

    let totalPeople = 0;

    let groupMusala = 0;
    let groupMontblanc = 0;
    let groupKilimanjaro = 0;
    let groupK2 = 0;
    let groupEverest = 0;

    for (let i = 1; i < input.length; i++) {
        let group = Number(input[i]);
        totalPeople += group;

        if (group <= 5) {
            groupMusala += group;
        } else if (group <= 12) {
            groupMontblanc += group;
        } else if (group <= 25) {
            groupKilimanjaro += group;
        } else if (group <= 40) {
            groupK2 += group;
        } else {
            groupEverest += group;
        }
    }

    console.log(`${((groupMusala / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((groupMontblanc / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((groupKilimanjaro / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((groupK2 / totalPeople) * 100).toFixed(2)}%`);
    console.log(`${((groupEverest / totalPeople) * 100).toFixed(2)}%`);
}

trekking(["5", "25", "41", "31", "250", "6"]);
