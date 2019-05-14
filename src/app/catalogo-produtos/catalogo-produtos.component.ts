import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produtos-lista/produto';
import { CatalogoProdutosService } from './catalogo-produtos.service';

@Component({
  selector: 'app-catalogo-produtos',
  templateUrl: './catalogo-produtos.component.html',
  styleUrls: ['./catalogo-produtos.component.css']
})
export class CatalogoProdutosComponent implements OnInit {

  public produtos: Produto[]

  public filtros = {
     produto: '', 
     categoria: []
  }

  pegaProdutos(filtro?) {
    console.log(filtro)
    this.produtosService.getProdutosCategoria(filtro).subscribe(produtos => this.produtos = produtos)
  }

  getPlataforma(nome) {
    if (this.filtros.categoria.find(x => x == nome)) {
      this.filtros.categoria = this.filtros.categoria.filter(x => x != nome)
    }
    else {
      this.filtros.categoria.push(nome)
    }
    console.log(this.produtos)
    this.pegaProdutos(this.filtros)
  }

  constructor( 
    private produtosService: CatalogoProdutosService,
   ) { }

  ngOnInit() {
  }

}
