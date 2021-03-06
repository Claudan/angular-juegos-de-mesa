import { Component, OnInit } from '@angular/core';
import { Juego } from '../../interfaces/buscador.interface';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css'],
})
export class ApiRestComponent implements OnInit {
  termino: string = '';
  juegos: Juego[] = [];
  sugerencias: string[] = [];
  sugerenciasIniciales: string[] = [];
  maxSugerencias: number = 7;
  isBusquedaFocus: boolean = false;
  consultado: string = '';

  constructor(private JuegosService: JuegosService) {}

  ngOnInit(): void {
    this.JuegosService.getAutocomplete().subscribe((resp) => {
      let sugerenciasIniciales: string[] = [];
      resp.juegos.map((juego: Juego, i: number) => {
        if (i < this.maxSugerencias) {
          sugerenciasIniciales.push(juego.nombre);
        }
        if (i === 0) {
          this.consultado = juego.nombre;
          this.termino = juego.nombre;
        }
      });
      this.sugerencias = sugerenciasIniciales;
      this.sugerenciasIniciales = sugerenciasIniciales;
      this.juegos = resp.juegos;
    });
  }

  handleSugerencia(sugerencia: string) {
    this.consultado = sugerencia;
    this.termino = sugerencia;
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
    if (encendido) {
      this.termino = '';
      this.sugerencias = this.sugerenciasIniciales;
    }
  }
}
