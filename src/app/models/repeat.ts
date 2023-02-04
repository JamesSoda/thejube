import { WeekDay } from "@angular/common";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export type Repeat = WeekDayRepeat | DateRepeat

export interface WeekDayRepeat {
    weekDays: WeekDay[]
    weeks?: 1 | 2 | 3 | 4 | 5
}

export interface DateRepeat {
    dates: NgbDateStruct[]
}