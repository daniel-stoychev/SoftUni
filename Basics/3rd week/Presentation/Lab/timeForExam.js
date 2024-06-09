function timeForExam(input) {

    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arivalHour = Number(input[2]);
    let arivalMin = Number(input[3]);

    let examHourMin = examHour * 60;
    let arivalHourMin = arivalHour * 60;

    let totalTimeDifference = (examHourMin + examMin) - (arivalHourMin + arivalMin);

    if (examHour === arivalHour) {
        if (examMin < arivalMin) {
            console.log("Late");
            console.log(`${Math.abs(arivalMin - examMin)} minutes after the start`);
        } else if ((examMin - arivalMin) > 30) {
            console.log("Early");
            console.log(`${examMin - arivalMin} minutes before the start`);
        } else if (examMin > arivalMin) {
            console.log("On time");
            console.log(`${examMin - arivalMin} minutes before the start`);
        }
        else {
            console.log("On time");
        }
    } else if (examHour < arivalHour) {
        if (examMin < arivalMin || examMin === arivalMin) {
            console.log("Late");
            if (Math.abs(examMin - arivalMin) < 10) {
                console.log(`${arivalHour - examHour}:0${Math.abs(examMin - arivalMin)} hours after the start`);
            } else {
                console.log(`${arivalHour - examHour}:${Math.abs(examMin - arivalMin)} hours after the start`);
            }
        } else if (examMin > arivalMin) {
            console.log("Late");
            console.log(`${Math.abs(totalTimeDifference)} minutes after the start`);
        }
    } else { //examHour > arivalHour
        if (examMin < arivalMin) {
            if ((totalTimeDifference) > 30) {
                console.log("Early");
                if ((totalTimeDifference) < 60) {
                    console.log(`${totalTimeDifference} minutes before the start`);
                } else {
                    if ((((examHourMin + examMin) - (arivalHourMin + arivalMin)) % 60) < 10) {
                        console.log(`${Math.floor((totalTimeDifference) / 60)}:0${(((examHourMin + examMin) - (arivalHourMin + arivalMin)) % 60)} hours before the start`);
                    } else {
                        console.log(`${Math.floor((totalTimeDifference) / 60)}:${(((examHourMin + examMin) - (arivalHourMin + arivalMin)) % 60)} hours before the start`);
                    }

                }

            } else {
                console.log("On time");
                console.log(`${(examHourMin + examMin) - (arivalHourMin + arivalMin)} minutes before the start`);
            }

        } else {

            if (((examHourMin + examMin) - (arivalHourMin + arivalMin)) > 30) {
                console.log("Early");
                if ((examMin - arivalMin) < 10) {
                    console.log(`${examHour - arivalHour}:0${examMin - arivalMin} hours before the start`);
                } else {
                    console.log(`${examHour - arivalHour}:${examMin - arivalMin} hours before the start`);
                }

            } else {
                console.log("On time");
                if ((examMin - arivalMin) < 10) {
                    console.log(`${examHour - arivalHour}:0${examMin - arivalMin} hours before the start`);
                } else {
                    console.log(`${examHour - arivalHour}:${examMin - arivalMin} hours before the start`);
                }
            }

        }
    }

}

timeForExam(["14", "00", "10", "58"]);


// · Първият съдържа час на изпита – цяло число от 0 до 23.

// · Вторият съдържа минута на изпита – цяло число от 0 до 59.

// · Третият съдържа час на пристигане – цяло число от 0 до 23.

// · Четвъртият съдържа минута на пристигане – цяло число от 0 до 59.