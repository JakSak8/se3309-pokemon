import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
=======
import { AppRoutingModule } from './/app-routing.module';
import { HttpModule } from '@angular/http'

>>>>>>> 2fef876a8777415f4609ef702a6498d1fdb1243c

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpModule,
=======
    HttpModule
>>>>>>> 2fef876a8777415f4609ef702a6498d1fdb1243c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
