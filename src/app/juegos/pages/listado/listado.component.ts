import { Component, OnInit } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { Juego } from '../../interfaces/juegos.interface';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  juegos: Juego[] = [];
  faInfo = faInfo;
  constructor(private JuegosService: JuegosService) {}

  ngOnInit(): void {
    this.JuegosService.getJuegos().subscribe((resp) => {
      this.juegos = resp.juegos;
    });
  }
}
