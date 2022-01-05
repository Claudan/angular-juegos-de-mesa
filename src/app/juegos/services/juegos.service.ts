import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { JuegosResponse } from '../interfaces/juegos.interface';
import { JuegoDetalladoResponse } from '../interfaces/juegoDetallado.interface';
import { BuscadorInicialResponse } from '../interfaces/buscador.interface';

@Injectable({
  providedIn: 'root',
})
export class JuegosService {
  private baseUrl: string = environment.backend;
  constructor(private http: HttpClient) {}

  getJuegos(): Observable<JuegosResponse> {
    return this.http.get<JuegosResponse>(`${this.baseUrl}/juego`);
  }

  getJuegoDetallado(nombre: string): Observable<JuegoDetalladoResponse> {
    return this.http.post<JuegoDetalladoResponse>(
      `${this.baseUrl}/juego/getJuegoDetallado`,
      {
        nombre: nombre,
      }
    );
  }

  getAutocomplete(): Observable<BuscadorInicialResponse> {
    return this.http.get<BuscadorInicialResponse>(
      `${this.baseUrl}/buscador/autocomplete`
    );
  }
}
