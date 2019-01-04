import { Component, Input, OnInit } from '@angular/core';
import { ICompetitionResponse } from '../model/competitionResponse';
import { CompetitionService } from './competition.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { Globals } from '../globals';

class CompetitionClass {
  ClassName: string;
  Id: number;
  Pass: number;
}

class Player {
  Name: string;
  Club: string;
  Classes: number[];
  Id: number;
}

@Component({
  selector: 'competition-classes',
  templateUrl: './competition-classes.component.html',
  styleUrls: ['./competition-classes.component.scss']
})
export class CompetitionClassesComponent implements OnInit { 
  constructor(
    private http:HttpClient,
    private globals: Globals
    ) {};

    allClasses: CompetitionClass[];
    classes1: CompetitionClass[];
    classes2: CompetitionClass[];
    classes3: CompetitionClass[];
    classes4: CompetitionClass[];
    classes5: CompetitionClass[];
    classes6: CompetitionClass[];

    players: Player[];

  ngOnInit() {

    this.classes1 = new Array;
    this.classes2 = new Array;
    this.classes3 = new Array;
    this.classes4 = new Array;
    this.classes5 = new Array;
    this.classes6 = new Array;


   
    this.http
    .get<string>(this.globals.ApiUrl + "getclasses")
    .subscribe(x => {
    this.allClasses = JSON.parse(x);

      this.allClasses.forEach(klass => {
        if(klass.Pass == 1){
          this.classes1.push(klass);
        }
        else if(klass.Pass == 2){
          this.classes2.push(klass);
        }
        else if(klass.Pass == 3){
          this.classes3.push(klass);
        }
        else if(klass.Pass == 4){
          this.classes4.push(klass);
        }
        else if(klass.Pass == 5){
          this.classes5.push(klass);
        }
        else if(klass.Pass == 6){
          this.classes6.push(klass);
        }
      })
  });
    

      this.http
      .get<string>(this.globals.ApiUrl + "getallplayers")
      .subscribe(p => this.players = JSON.parse(p));


    }

}


