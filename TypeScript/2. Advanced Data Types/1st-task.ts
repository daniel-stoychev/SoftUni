function dayOfWeek(arg:number): void {
    enum WeekDays {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(WeekDays[arg] || 'error');
}

dayOfWeek(2)
dayOfWeek(10);