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

  filtros = {
    produto: '',
    categoria: [],
    genero: [],
    tamanho: [],
    material: [],
  }

  campoCategoria = [];
  campoGenero = [];
  campoMaterial = [];
  campoTamanho = [];

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


  pegaProduto(filtros?) {
    console.log(filtros);
    this.service.getProdutos(filtros).subscribe(produtos => this.produtos = produtos);
  }


  getCategoria(nome) {
    if (this.filtros.categoria.find(x => x == nome)) {
      this.filtros.categoria = this.filtros.categoria.filter(x => x != nome);
    }
    else {
      this.filtros.categoria.push(nome);
    }
    console.log(this.produtos);
    this.pegaProduto(this.filtros);
  }


  getGenero(nome) {
    if (this.filtros.genero.find(x => x == nome)) {
      this.filtros.genero = this.filtros.genero.filter(x => x != nome);
    }
    else {
      this.filtros.genero.push(nome);
    }
    console.log(this.produtos);
    this.pegaProduto(this.filtros);
  }


  getMaterial(nome) {
    if (this.filtros.material.find(x => x == nome)) {
      this.filtros.material = this.filtros.material.filter(x => x != nome);
    }
    else {
      this.filtros.material.push(nome);
    }
    console.log(this.produtos);
    this.pegaProduto(this.filtros);
  }


  getTamanho(nome) {
    if (this.filtros.tamanho.find(x => x == nome)) {
      this.filtros.tamanho = this.filtros.tamanho.filter(x => x != nome);
    }
    else {
      this.filtros.tamanho.push(nome);
    }
    console.log(this.produtos);
    this.pegaProduto(this.filtros);
  }


  limpar() {
    this.campoCategoria  = [];
    this.campoGenero = [];
    this.campoMaterial  = [];
    this.campoTamanho = [];

    this.filtros = {
      produto: '',
      categoria: [],
      genero: [],
      tamanho: [],
      material: [],
    }

    this.pegaProduto();
  }

  
  comprar() {
    
  }

}
