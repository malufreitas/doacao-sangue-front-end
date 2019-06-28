import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, delay, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Produto } from 'src/app/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosListaService {

  //private readonly API = `${environment.API}produto`;
  private readonly API = 'http://localhost:3000/produto'
  //private readonly API = 'https://doacaodesangue.herokuapp.com/produto'

  

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

  salvarProdutos(formulario) {
    this.http.post(this.API, formulario.value)
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados))
  }

}
