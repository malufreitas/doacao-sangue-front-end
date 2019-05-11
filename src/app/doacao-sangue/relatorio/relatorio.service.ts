import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { Produto } from './relatorio';

@Injectable({
  providedIn: 'root'
})
export class ProdutosListaService {

  private readonly API = 'http://localhost:3000/produto';

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Produto[]>(this.API).
    pipe(
      tap(console.log) //para debugar, ver os erros
    );
  }

}