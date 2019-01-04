import { Time } from "@angular/common";

export interface IBand {
    id: number;
    compId: number;
    name: string;
    date?: Date;
    time?: Time;
}