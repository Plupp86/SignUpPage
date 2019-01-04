import { ICompetition } from "./competition";
import { IBand } from "./band";
import { IClub } from "./club";
import { IPlayer } from "./player";

export interface IMockDb {
    competitions: ICompetition[],
    bands: IBand[],
    clubs: IClub[],
    players: IPlayer[]
}