import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-codigo-detallado',
  templateUrl: './codigo-detallado.component.html',
  styleUrls: ['./codigo-detallado.component.css'],
})
export class CodigoDetalladoComponent implements OnInit {
  @Input() consultado: string = '';
  codigo: string = '';
  constructor(private JuegosService: JuegosService) {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChange) {
    this.JuegosService.getJuegoDetallado(this.consultado).subscribe((resp) => {
      if (resp.juego) {
        this.codigo = JSON.stringify(resp.juego, null, 4).replace(
          /["[,\\]]/g,
          ''
        );
      }
    });
  }
}
