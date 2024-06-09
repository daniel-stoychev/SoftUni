function cinema(input) {
    let film = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);

    let fullTeater = rows * cols;

    switch (film) {
        case "Premiere":
            console.log((fullTeater * 12.0).toFixed(2) + " leva");
            break;
        case "Normal":
            console.log((fullTeater * 7.5).toFixed(2) + " leva");
            break;
        case "Discount":
            console.log((fullTeater * 5.0).toFixed(2) + " leva");
            break;

        default:
            break;
    }
}

cinema(["Premiere", "10", "12"]);
