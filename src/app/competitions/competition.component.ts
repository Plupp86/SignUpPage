import { Component } from '@angular/core';
import { ICompetition } from '../model/competition';
import { IBand } from '../model/band';
import { IClub } from '../model/club';
import { IPlayer } from '../model/player';
import { IMockDb } from '../model/mockDb';
import { CompetitionService } from './competition.service';
import { ICompetitionResponse } from '../model/competitionResponse';

@Component({
  selector: 'competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent {
    
  constructor(
    private competitionService: CompetitionService,
    ) {}

    competitions: ICompetition[];



}
