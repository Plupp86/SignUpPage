import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { CompetitionModule } from './competitions/competition.module';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionComponent } from './competitions/competition.component';
import { Globals } from './globals'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    CompetitionModule,
    routing,
    HttpClientModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
