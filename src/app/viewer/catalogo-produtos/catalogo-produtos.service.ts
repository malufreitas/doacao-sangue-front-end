import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Categoria } from '../../model/categoria';
import { Genero } from '../../model/genero';
import { Produto } from 'src/app/model/produto';

@Injectable({
  providedIn: 'root'
})
export class CatalogoProdutosService {

  private readonly API = `${environment.API}categoria`;
  //private readonly API = 'http://localhost:3000/categoria'

  constructor(
    private http: HttpClient
  ) { }


  getCategorias() {
    return this.http.get<Categoria[]>('http://localhost:3000/categoria')
  }

  getGeneros() {
    return this.http.get<Genero[]>('http://localhost:3000/genero')
  }

  getTamanhos() {
    return this.http.get<Genero[]>('http://localhost:3000/tamanho')
  }

  getMateriais() {
    return this.http.get<Genero[]>('http://localhost:3000/material')
  }

  getProdutos() {
    return this.http.get<Produto[]>('http://localhost:3000/produto')
  }


}
