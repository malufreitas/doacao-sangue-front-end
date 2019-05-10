import { ProdutosListaService } from './produtos-lista.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  produtos: Produto[];

  constructor(
    private service: ProdutosListaService
  ) { }

  ngOnInit() {
    //Subscribe para ativar, fazer a chamada de cursos 
    //Mostra no Network -> XHR
    this.service.list()
    .subscribe(dados => this.produtos = dados);
    //.subscribe(console.log);
  }

}
