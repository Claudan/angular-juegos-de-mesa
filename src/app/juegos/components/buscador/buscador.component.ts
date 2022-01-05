import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Juego } from '../../interfaces/buscador.interface';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  faSearch: IconDefinition = faSearch;
  termino: string = '';
  juegos: Juego[] = [];
  sugerencias: string[] = [];
  maxSugerencias: number = 8;
  isBusquedaFocus: boolean = false;

  constructor(private JuegosService: JuegosService, private router: Router) {}

  ngOnInit(): void {
    this.JuegosService.getAutocomplete().subscribe((resp) => {
      let sugerenciasIniciales: string[] = [];
      resp.juegos.map((juego: Juego, i: number) => {
        if (i <= this.maxSugerencias) {
          sugerenciasIniciales.push(juego.nombre);
        }
      });
      this.sugerencias = sugerenciasIniciales;
      this.juegos = resp.juegos;
    });
  }

  buscaSugerencias() {
    let sugerencias: string[] = [];
    let nombreJuego: string = '';
    let termino: string = '';
    this.juegos.map((juego: Juego) => {
      nombreJuego = juego.nombre.toLowerCase();
      termino = this.termino.toLocaleLowerCase();
      if (
        nombreJuego.includes(termino) &&
        sugerencias.length < this.maxSugerencias
      ) {
        sugerencias.push(juego.nombre);
      }
    });
    this.sugerencias = sugerencias;
  }

  focus(encendido: boolean) {
    this.isBusquedaFocus = encendido;
  }

  onEnter() {
    this.router.navigateByUrl('/juegos/juego-detallado/' + this.termino);
  }

  navegar(sugerencia: string) {
    this.router.navigateByUrl('/juegos/juego-detallado/' + sugerencia);
  }
}
