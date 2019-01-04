import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IMockDb } from '../model/mockDb';
import { ICompetitionResponse } from '../model/competitionResponse';
import { ICompetition } from '../model/competition';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { ResponseOptions } from '@angular/http';

@Injectable()
export class CompetitionService {
  constructor(private http: HttpClient) {

  }



add(player) {
    var json = JSON.stringify(player);
    console.log(json);
    this.http.post('https://umeabtkapi.azurewebsites.net/home/add/',json, {headers:{'Content-Type': 'application/json'}})
        .subscribe(x => console.log(x))
  }

}