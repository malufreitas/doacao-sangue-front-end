import { Component, OnInit } from '@angular/core';

import { CatalogoProdutosService } from './catalogo-produtos.service';
import { Categoria } from 'src/app/model/categoria';
import { Genero } from 'src/app/model/genero';
import { Tamanho } from 'src/app/model/tamanho';
import { Material } from 'src/app/model/material';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-catalogo-produtos',
  templateUrl: './catalogo-produtos.component.html',
  styleUrls: ['./catalogo-produtos.component.css']
})
export class CatalogoProdutosComponent implements OnInit {

  categorias: Categoria[];
  generos: Genero[];
  tamanhos: Tamanho[];
  materiais: Material[];
  produtos: Produto[];

  /*
  filtros = {
    categoria: [],
    genero: [],
    material: [],
    tamanho: [],
    produto: ''
  }
  */

  constructor(
    private service: CatalogoProdutosService,
  ) { }


  ngOnInit() {
    this.service.getCategorias().
      subscribe(categorias => this.categorias = categorias);

    this.service.getGeneros().
      subscribe(generos => this.generos = generos);

    this.service.getTamanhos().
      subscribe(tamanhos => this.tamanhos = tamanhos);

    this.service.getMateriais().
      subscribe(materiais => this.materiais = materiais);

    this.service.getProdutos().
      subscribe(produtos => this.produtos = produtos);

  }



}
