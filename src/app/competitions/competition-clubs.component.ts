import { Component, Input, OnInit } from '@angular/core';
import { ICompetitionResponse } from '../model/competitionResponse';
import { CompetitionService } from './competition.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Globals } from '../globals';

class ClubList {
  ClubName: string;
  Players: ClubPlayer[];
}

class ClubPlayer {
  PlayerName: string;
  Klasser: string[];
}

@Component({
  selector: 'competition-clubs',
  templateUrl: './competition-clubs.component.html',
  styleUrls: ['./competition-clubs.component.scss']
})
export class CompetitionClubsComponent implements OnInit { 
  constructor(
    private http:HttpClient,
    private globals: Globals
    ) {};

clubList: ClubList;

  ngOnInit() {

   
    this.http
    .get<string>(this.globals.ApiUrl +"getclubs")
    .subscribe(x => {
    this.clubList = JSON.parse(x);
    console.log(this.clubList);
    });
    }

}


