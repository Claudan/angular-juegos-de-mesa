import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RECAPTCHA_SETTINGS,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaSettings,
} from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { AgregarJuegoComponent } from './pages/agregar-juego/agregar-juego.component';
import { ApiRestComponent } from './pages/api-rest/api-rest.component';
import { ArquitecturaComponent } from './pages/arquitectura/arquitectura.component';
import { JuegoDetalladoComponent } from './pages/juego-detallado/juego-detallado.component';
import { MasInformacionComponent } from './pages/mas-informacion/mas-informacion.component';
import { JuegosRoutingModule } from './juegos-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodigoDetalladoComponent } from './components/codigo-detallado/codigo-detallado.component';

@NgModule({
  declarations: [
    HomeComponent,
    AgregarJuegoComponent,
    ApiRestComponent,
    ArquitecturaComponent,
    JuegoDetalladoComponent,
    MasInformacionComponent,
    ListadoComponent,
    BuscadorComponent,
    CodigoDetalladoComponent,
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
})
export class JuegosModule {}
