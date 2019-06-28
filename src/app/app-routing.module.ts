import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent }   from './dashboard/dashboard.component';
import { PokemonListComponent }      from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent }  from './pokemon-detail/pokemon-detail.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: PokemonDetailComponent },
  { path: 'pokemon', component: PokemonListComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}