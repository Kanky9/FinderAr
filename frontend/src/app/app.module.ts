//Importamos las clases, es el modulo raiz de los demas componentes

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { PublicarComponent } from './components/publicar/publicar.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { RouteReuseStrategy, RouterLink } from '@angular/router';

/* ========== Firebase ========== */
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environments';
import { FirebaseService } from './services/firebase.service';
import { UtilsService } from './services/utils.service';
import { CambiarContraseniaComponent } from './components/cambiar-contrasenia/cambiar-contrasenia.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IniciarSesionComponent,
    HomeComponent,
    MenuComponent,
    PropiedadesComponent,
    PublicarComponent,
    RegistrarseComponent,
    MainComponent,
    CambiarContraseniaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [
    FirebaseService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
