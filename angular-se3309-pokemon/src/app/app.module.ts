import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
<<<<<<< HEAD
=======


>>>>>>> 4d344f42d3808f7d821139ae550c5982e36e72ca

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
>>>>>>> 4d344f42d3808f7d821139ae550c5982e36e72ca
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
