function oldBooks(input) {
    let desiredBook = input[0];

    index = 1;
    curBook = input[index];
    let booksChecked = 0;

    while (curBook !== "No More Books") {
        if (curBook === desiredBook) {
            console.log(`You checked ${booksChecked} books and found it.`);
            break;
        }
        booksChecked++;
        index++;
        curBook = input[index];
    }
    if (curBook === "No More Books") {
        console.log("The book you search is not here!");
        console.log(`You checked ${booksChecked} books.`);
    }

}

oldBooks(["Troy",

    "Stronger",

    "Life Style",

    "Troy"]);