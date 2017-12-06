import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';
<<<<<<< HEAD
import { TeamComponent } from './team/team.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 37a91a3821ff8dd63cc6e4b37c5d74a89679e52c

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'pokemon', component: PokemonComponent },
<<<<<<< HEAD
  { path: 'team', component: TeamComponent },
=======
  { path: 'home', component: HomeComponent}
>>>>>>> 37a91a3821ff8dd63cc6e4b37c5d74a89679e52c
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
