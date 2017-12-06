import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
=======
import { AppRoutingModule } from './/app-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
>>>>>>> 503a3d9009c2ce4998546dd6be586ec8b38bd298


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    PokemonComponent
>>>>>>> 503a3d9009c2ce4998546dd6be586ec8b38bd298
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
