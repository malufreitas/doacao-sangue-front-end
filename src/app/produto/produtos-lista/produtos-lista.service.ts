import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay } from 'rxjs/operators';

import { Produto } from './produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosListaService {

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

}
