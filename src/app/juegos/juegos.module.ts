import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AgregarJuegoComponent } from './pages/agregar-juego/agregar-juego.component';
import { ApiRestComponent } from './pages/api-rest/api-rest.component';
import { ArquitecturaComponent } from './pages/arquitectura/arquitectura.component';
import { JuegoDetalladoComponent } from './pages/juego-detallado/juego-detallado.component';
import { MasInformacionComponent } from './pages/mas-informacion/mas-informacion.component';
import { JuegosRoutingModule } from './juegos-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    AgregarJuegoComponent,
    ApiRestComponent,
    ArquitecturaComponent,
    JuegoDetalladoComponent,
    MasInformacionComponent,
    ListadoComponent,
  ],
  imports: [CommonModule, JuegosRoutingModule, FontAwesomeModule],
})
export class JuegosModule {}
