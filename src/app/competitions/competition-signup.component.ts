import { Component, Inject } from '@angular/core';
import { ICompetition } from '../model/competition';
import { IBand } from '../model/band';
import { IClub } from '../model/club';
import { IPlayer } from '../model/player';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Router, RouterLinkActive, ActivatedRoute} from '@angular/router';
import { CompetitionService } from './competition.service';
import { ICompetitionResponse } from '../model/competitionResponse';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';
;


class CompetitionClass {
  ClassName: string;
  Id: number;
  Pass: number;
}

class Player {
  Name: string;
  Club: string;
  Classes: number[];
  Email: string;
  Comment: string;
  Personnr: string;
}

@Component({
  selector: 'competition-signup',
  templateUrl: './competition-signup.component.html',
  styleUrls: ['./competition-signup.component.scss'],
})
export class CompetitionSignupComponent { 
  form;
  competition: ICompetitionResponse;
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private competitionService: CompetitionService,
    private router: Router,
    private route: ActivatedRoute,
    private globals: Globals) {}

  allClasses: CompetitionClass[];
  classes1: CompetitionClass[];
  classes2: CompetitionClass[];
  classes3: CompetitionClass[];
  classes4: CompetitionClass[];
  classes5: CompetitionClass[];
  classes6: CompetitionClass[];
  newPlayer: Player;
  signedUpPlayer: string;


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
        else if(klass.Pass == 60){
          this.classes6.push(klass);
        }
      })
  });

    




      this.form = this.formBuilder.group({
          club: this.formBuilder.control(''),
          name: this.formBuilder.control(''),
          personnr: this.formBuilder.control(''),
          email: this.formBuilder.control(''),
          comment: this.formBuilder.control(''),
          pass1: this.formBuilder.control(0),
          pass2: this.formBuilder.control(0),
          pass3: this.formBuilder.control(0),
          pass5: this.formBuilder.control(0),
          pass6: this.formBuilder.control(0)
      });
  }

  onSubmit() {
    var newPlayer = new Player();
    console.log(this.form.value);
    newPlayer.Club = this.form.value.club;
    let classes: number[] = [
      this.form.value.pass1,
      this.form.value.pass2,
      this.form.value.pass3,
      this.form.value.pass5,
      this.form.value.pass6];

      var checkbox = document.getElementById("dubbel") as HTMLInputElement;
      if(checkbox.checked == true) {
        classes.push(22);
      }

    newPlayer.Name = this.form.value.name;
    newPlayer.Classes = classes;
    newPlayer.Email = this.form.value.email;
    newPlayer.Personnr = this.form.value.personnr;
    newPlayer.Comment = this.form.value.comment;

    //this.competitionService.add(newPlayer);
    //this.router.navigate(['viewclasses'])
    this.signedUpPlayer = this.form.value.name;
    var popup = document.getElementById('confirm');
    popup.style.visibility = "visible";
    console.log(this.signedUpPlayer);
    
  };

  handleChange(): void {
    var checkbox = document.getElementById("dubbel") as HTMLInputElement;
    if(checkbox.checked == true){
        document.getElementById("comment").removeAttribute("disabled");
    }else{
        document.getElementById("comment").setAttribute("disabled", "disabled");
   }
};

clickedLabel(): void {

  var checkbox = document.getElementById("dubbel") as HTMLInputElement;
  if(checkbox.checked == true){
    checkbox.checked = false;
  } else {
    checkbox.checked = true;
  }
  this.handleChange();
};


}


