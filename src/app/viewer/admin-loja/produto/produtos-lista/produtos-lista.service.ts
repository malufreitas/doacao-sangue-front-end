import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, delay, map } from "rxjs/operators";

import { environment } from "src/environments/environment";
import { Produto } from "src/app/model/produto";

@Injectable({
  providedIn: "root"
})
export class ProdutosListaService {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Produto[]>(`${environment.API}` + "produto").pipe(
      delay(2000),
      tap(console.log) //para debugar, ver os erros
    );
  }

  salvarProdutos(formulario) {
    this.http
      .post(`${environment.API}` + "produto", formulario.value)
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados));
  }
}
