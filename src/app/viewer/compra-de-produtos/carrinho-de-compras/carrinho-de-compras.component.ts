import { Component, OnInit } from '@angular/core';
import { Observable, Subject, empty } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.component.html',
  styleUrls: ['./carrinho-de-compras.component.css']
})
export class CarrinhoDeComprasComponent implements OnInit {

  // produtos no carrinho
  produtos$: Observable<any>;
  error$ = new Subject<boolean>();

  public produtos: Produto[];
  public sucRequi: boolean = false;
  

  carrinho = {
    compraProdutos: []
  }

  public filtros = {
    id: ''
  }


  constructor(
    private http: HttpClient
  ) { }

  // Ao abrir a pagina, aparece os elementos do carrinho
  ngOnInit() {
    console.log(this.produtos$);

    this.produtos$ = this.http.get('http://localhost:3000/carrinho');
    
    // Não ta funcionando ainda
    if (this.produtos$ == undefined){
      this.error$.next(true);
    }
    //this.pegaProdutoID()
    //this.service.getProdutos();
    //this.produtos$ = this.pegaProdutoID(filtro)
  }

  // Apaga o elemento que o cliente escolheu deletar
  /*
  deletar(id) {
    this.http.delete('http://localhost:3000/carrinho', id)
    .subscribe(
      dados => console.log(dados)
      );
  }
  */

  setCarrinho(produto) {
    this.carrinho.compraProdutos.push(produto);
    console.log(this.carrinho.compraProdutos);
  }

  pegaProdutoID(filtro?) {
    console.log(filtro);
    
    return this.http.get<any[]>('http://localhost:3000/carrinho', { params: filtro })
      .pipe(
        delay(2000),
        tap(console.log)
      )
      .subscribe(produtos => {
        this.produtos = produtos
        this.sucRequi = true
      })

  }

}
