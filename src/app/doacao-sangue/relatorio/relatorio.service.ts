import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Relatorio1 } from './relatorio1/relatorio1';


@Injectable({
  providedIn: 'root'
})
export class RelatorioListaService {

  private readonly API = 'http://localhost:3000/relatorio';

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Relatorio1[]>(this.API).
    pipe(
      tap(console.log) //para debugar, ver os erros
    );
  }

}