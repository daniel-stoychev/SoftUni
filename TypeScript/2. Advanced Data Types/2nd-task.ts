function dayOfWeekV2(arg:string): void {
    enum WeekDays {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(WeekDays[arg as keyof typeof WeekDays] ?? 'error');
    // console.log(WeekDays);
}

dayOfWeekV2('Monday')
dayOfWeekV2('Friday');
dayOfWeekV2('something');