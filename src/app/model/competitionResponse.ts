import { IBand } from "./band";
import { IClub } from "./club";
import { IPlayer } from "./player";

export interface ICompetitionResponse {
    
    name: string;
    location: string;
    startDate?: Date;
    endDate?: Date;
    
    bands: IBand[];
    clubs: IClub[];
    players: IPlayer[];
}