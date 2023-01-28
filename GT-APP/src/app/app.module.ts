import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroImageComponent } from './components/hero-img/hero-img.component';
import { WeaponImageComponent } from './components/weapon-img/weapon-img.component';
import { HomePage } from './pages/home/home.page';
import { RaidTeamsPage } from './pages/raid_teams/raid_teams.page';

const PAGES = [
  RaidTeamsPage,
  HomePage
];

const COMPONENTS = [
  AppComponent,
  HeroImageComponent,
  WeaponImageComponent
];

@NgModule({
  declarations: [
    ...PAGES,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }