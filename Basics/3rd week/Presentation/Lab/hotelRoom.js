function hotelRoom(input) {
    let month = (input[0]);
    let numberOfNights = Number(input[1]);

    let pricePerNightStudio = 0;
    let pricePerNightApartment = 0;
    let totalPriceStudio = 0;
    let totalPriceApartment = 0;

    if (month === "May" || month === "October") {
        pricePerNightStudio = 50;
        pricePerNightApartment = 65;
        totalPriceStudio = numberOfNights * pricePerNightStudio;
        totalPriceApartment = numberOfNights * pricePerNightApartment;
        if (numberOfNights > 7) {
            totalPriceStudio *= 0.95;
        }
        if (numberOfNights > 14) {
            totalPriceStudio = numberOfNights * pricePerNightStudio * 0.70;
        }
    } else if (month === "June" || month === "September") {
        pricePerNightStudio = 75.20;
        pricePerNightApartment = 68.70;
        totalPriceStudio = numberOfNights * pricePerNightStudio;
        totalPriceApartment = numberOfNights * pricePerNightApartment;
        if (numberOfNights > 14) {
            totalPriceStudio = numberOfNights * pricePerNightStudio * 0.80;
        }
    } else if (month === "July" || month === "August") {
        pricePerNightStudio = 76;
        pricePerNightApartment = 77;
        totalPriceStudio = numberOfNights * pricePerNightStudio;
        totalPriceApartment = numberOfNights * pricePerNightApartment;
    }
    if (numberOfNights > 14) {
        totalPriceApartment = numberOfNights * pricePerNightApartment * 0.90;
    }
    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);

}

hotelRoom(["August", "20"]);