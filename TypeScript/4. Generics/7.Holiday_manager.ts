enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}

enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}

enum BeachVacation {
    Pool = 'Pool',
    Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday{
    
    private _start!: Date;
    private _end!: Date; 

    constructor (startDat: Date, endDate: Date) {
        this._start = startDat;
        this._end = endDate;
    }

    set start(val:Date) {
        if (val > this._end) {
            throw new Error("Start date must be before end date!");
        } else {
            this._start = val;
        }
    }
    set end(val:Date) {
        if (val < this._start) {
            throw new Error("Start date must be before end date!");
        } else {
            this._end = val;
        }
    }
    
    getInfo(): string {
        return `Holiday: ${this._start.getDate()}/${this._start.getMonth()}/${this._start.getFullYear()} - ${this._end.getDate()}/${this._end.getMonth()}/${this._end.getFullYear()}`;
    }
}


let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));

console.log(holiday.getInfo());





