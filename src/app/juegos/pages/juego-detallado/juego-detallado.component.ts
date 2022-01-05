import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from '../../interfaces/juegoDetallado.interface';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-juego-detallado',
  templateUrl: './juego-detallado.component.html',
  styleUrls: ['./juego-detallado.component.css'],
})
export class JuegoDetalladoComponent implements OnInit {
  juego!: Juego;
  isLoading: boolean = true;
  imagenes: string[] = [
    'assets/images/404/1.webp',
    'assets/images/404/2.webp',
    'assets/images/404/3.webp',
    'assets/images/404/4.webp',
    'assets/images/404/5.webp',
    'assets/images/404/6.webp',
  ];
  imagen: string = '';

  constructor(
    private route: ActivatedRoute,
    private JuegosService: JuegosService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ nombre }) => {
      this.imagen =
        this.imagenes[Math.floor(Math.random() * this.imagenes.length)];
      this.JuegosService.getJuegoDetallado(nombre).subscribe((resp) => {
        this.juego = resp.juego;
        this.isLoading = false;
      });
    });
  }
}
