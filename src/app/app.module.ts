import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { PokemonStore } from './pokemon-store';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { DashboardPokCardComponent } from './dashboard-pok-card/dashboard-pok-card.component';

//Material
import { MatButtonModule }  from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { TypeComponent } from './type/type.component';













@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule , HttpClientModule, AppRoutingModule, MatButtonModule,MatToolbarModule, MatCardModule, MatBadgeModule, MatDividerModule, MatChipsModule,MatGridListModule, MatListModule],
  declarations: [ AppComponent, PokemonListComponent, PokemonDetailComponent, MessagesComponent, DashboardComponent, AppNavbarComponent, DashboardPokCardComponent, TypeComponent],
  bootstrap:    [ AppComponent ],
  providers:    [PokemonStore],
})
export class AppModule { }
