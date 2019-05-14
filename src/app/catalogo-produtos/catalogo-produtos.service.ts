import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Produto } from '../produto/produtos-lista/produto';

@Injectable({
  providedIn: 'root'
})
export class CatalogoProdutosService {

  private readonly API = `${environment.API}produto`;
  //private readonly API = 'http://localhost:3000/produto'

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Produto[]>(this.API).
    pipe(
      delay(2000),
      tap(console.log) //para debugar, ver os erros
    );
  }

  
  getProdutosCategoria(filtros?) {
    return this.http.get<Produto[]>(this.API, { params: filtros})
  }

}
