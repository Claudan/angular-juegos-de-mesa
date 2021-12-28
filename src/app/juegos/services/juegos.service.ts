import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Juego, JuegosResponse } from '../interfaces/juegos.interface';

@Injectable({
  providedIn: 'root',
})
export class JuegosService {
  private baseUrl: string = environment.backend;
  constructor(private http: HttpClient) {}

  getJuegos(): Observable<JuegosResponse> {
    return this.http.get<JuegosResponse>(`${this.baseUrl}/juego`);
  }
}
