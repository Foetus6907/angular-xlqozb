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

//Material
import { MatButtonModule }  from '@angular/material';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule , HttpClientModule, AppRoutingModule, MatButtonModule,MatToolbarModule,],
  declarations: [ AppComponent, PokemonListComponent, PokemonDetailComponent, MessagesComponent, DashboardComponent],
  bootstrap:    [ AppComponent ],
  providers:    [PokemonStore],
})
export class AppModule { }
