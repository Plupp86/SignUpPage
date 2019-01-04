import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionComponent } from './competition.component';
import { CompetitionSignupComponent } from './competition-signup.component';
import { CompetitionClassesComponent } from './competition-classes.component';
import { CompetitionProgramComponent } from './competition-program.component';
import { CompetitionClubsComponent } from './competition-clubs.component';




const appRoutes: Routes = [
    {
        path: 'competition',
        component: CompetitionComponent,
        children: [
            { path: 'signup', component: CompetitionSignupComponent, outlet: 'competitionOutlet' },
            { path: 'viewclasses', component: CompetitionClassesComponent, outlet: 'competitionOutlet' },
            { path: 'program', component: CompetitionProgramComponent, outlet: 'competitionOutlet' },
            { path: 'clubs', component: CompetitionClubsComponent, outlet: 'competitionOutlet' }
    ] },
    
    /* { path: 'signup', component: WelcomeComponent, data: {state: 'home'} }, */
];

export const competitionRouting: ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {
        useHash: true
    });