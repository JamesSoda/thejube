import { WeekDay } from "@angular/common";

export interface WeekDayRepeat {
    weekDay: WeekDay
}

export interface MonthlyWeekDayRepeat {
    weeks: 1 | 2 | 3 | 4 | 5
    weekDays: WeekDay[]
}