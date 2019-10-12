import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { Categoria } from "src/app/model/categoria";
import { Genero } from "src/app/model/genero";
import { Produto } from "src/app/model/produto";
import { Tamanho } from "src/app/model/tamanho";
import { Material } from "src/app/model/material";

@Injectable({
  providedIn: "root"
})
export class CatalogoProdutosService {
  constructor(private http: HttpClient) {}

  getCategorias() {
    return this.http.get<Categoria[]>(`${environment.API}` + "categorias");
  }

  getGeneros() {
    return this.http.get<Genero[]>(`${environment.API}` + "generos");
  }

  getTamanhos() {
    return this.http.get<Tamanho[]>(`${environment.API}` + "tamanhos");
  }

  getMateriais() {
    return this.http.get<Material[]>(`${environment.API}` + "materiais");
  }

  // Passando de uma maneira muito ruim, argumento pela url
  // Prencher o banco e fazer as rotas de busca e filtro funcionar
  getProdutos(filtros?) {
    return this.http.get<Produto[]>(`${environment.API}` + "produto", {
      params: filtros
    });
  }
}
