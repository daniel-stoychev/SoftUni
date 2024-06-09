function cinema(input) {
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;

    let index = 0;
    let command = input[index];
    index++;

    while (command !== 'Finish') {
        let movieName = command;
        let totalSeats = Number(input[index]);
        index++;

        let command1 = input[index];
        index++;

        let seatsTaken = 0;

        while (command1 !== 'End') {
            let ticketType = command1;

            if (ticketType === 'standard') {
                standardTickets++;
            } else if (ticketType === 'student') {
                studentTickets++;
            } else {
                kidTickets++;
            }

            seatsTaken++;

            if (seatsTaken === totalSeats) {
                break;
            }

            command1 = input[index];
            index++;
        }

        let percentFull = (seatsTaken / totalSeats) * 100
        console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

        command = input[index];
        index++;
    }
    let totalTickets = standardTickets + studentTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);



    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);



}

cinema(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])