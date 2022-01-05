import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarJuegoComponent } from './pages/agregar-juego/agregar-juego.component';
import { ApiRestComponent } from './pages/api-rest/api-rest.component';
import { ArquitecturaComponent } from './pages/arquitectura/arquitectura.component';
import { HomeComponent } from './pages/home/home.component';
import { JuegoDetalladoComponent } from './pages/juego-detallado/juego-detallado.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MasInformacionComponent } from './pages/mas-informacion/mas-informacion.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'juego-detallado/:nombre',
        component: JuegoDetalladoComponent,
      },
      {
        path: 'agregar-juego',
        component: AgregarJuegoComponent,
      },
      {
        path: 'api-rest',
        component: ApiRestComponent,
      },
      {
        path: 'mas-informacion',
        component: MasInformacionComponent,
      },
      {
        path: 'arquitectura',
        component: ArquitecturaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule {}
