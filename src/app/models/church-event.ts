import { NgbDate } from "@ng-bootstrap/ng-bootstrap"
import { NgbTime } from "@ng-bootstrap/ng-bootstrap/timepicker/ngb-time"

export interface ChurchEvent {
    title: string
    description: string
    schedule: {
        startDate: NgbDate
        startTime?: NgbDate
        endDate?: NgbDate
        endTime?: NgbTime
    }
    announcementStart: NgbDate
    address?: string
    imagePath?: string
}