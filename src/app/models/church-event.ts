export interface ChurchEvent {
    title: string,
    description: string,
    eventStart: Date,
    eventEnd: Date,
    announcementStart: Date,
    address?: string
    imagePath: string
}