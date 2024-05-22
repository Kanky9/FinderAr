import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicarComponent } from './components/publicar/publicar.component';
import { HomeComponent } from './components/home/home.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { CambiarContraseniaComponent } from './components/cambiar-contrasenia/cambiar-contrasenia.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'propiedades',
    component: PropiedadesComponent,
  },
  {
    path: 'publicar',
    component: PublicarComponent,
  },
  {
    path: 'iniciar-sesion',
    component: IniciarSesionComponent,
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent,
  },
  {
    path: 'cambiar-contraseña',
    component: CambiarContraseniaComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
