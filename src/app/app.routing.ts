import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { CompetitionSignupComponent } from './competitions/competition-signup.component';



const appRoutes: Routes = [

    {
        path: '',
        redirectTo: '/competition/(competitionOutlet:signup)',
        pathMatch: 'full'
      },
      {
        path: 'viewclasses',
        redirectTo: '/competition/(competitionOutlet:viewclasses)',
        pathMatch: 'full'
      },
    { path: 'home', component: WelcomeComponent, data: {state: 'home'} },
    
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {
        useHash: true
    });