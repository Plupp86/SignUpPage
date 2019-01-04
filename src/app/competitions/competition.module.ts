import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CompetitionComponent } from './competition.component';
import { competitionRouting } from './competition.routing';
import { CompetitionSignupComponent } from './competition-signup.component';
import { CompetitionClassesComponent } from './competition-classes.component';
import { CompetitionService } from './competition.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CompetitionProgramComponent } from './competition-program.component';
import { CompetitionClubsComponent } from './competition-clubs.component';

@NgModule({
  declarations: [
    CompetitionComponent,
    CompetitionSignupComponent,
    CompetitionClassesComponent,
    CompetitionProgramComponent,
    CompetitionClubsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    competitionRouting
  ],
  providers: [CompetitionService],
  bootstrap: [CompetitionComponent]
})
export class CompetitionModule { }
