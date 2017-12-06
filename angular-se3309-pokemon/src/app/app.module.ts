import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';
<<<<<<< HEAD
import { TeamComponent } from './team/team.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 37a91a3821ff8dd63cc6e4b37c5d74a89679e52c



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonComponent,
<<<<<<< HEAD
    TeamComponent,
=======
    HomeComponent,
>>>>>>> 37a91a3821ff8dd63cc6e4b37c5d74a89679e52c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
