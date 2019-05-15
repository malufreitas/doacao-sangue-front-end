import { Component, OnInit } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';

import { ProdutosListaService } from './produtos-lista.service';
import { Produto } from '../../../model/produto';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {

  //produtos: Produto[];

  //Sempre que tiver um $ do lado é um observable
  //Vai atribuir a variavel produtos$ o : this.service.list()
  produtos$: Observable<Produto[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: ProdutosListaService
  ) { }

  ngOnInit() {
    //Subscribe para ativar, fazer a chamada de cursos 
    //Mostra no Network -> XHR
    //this.service.list()
    //.subscribe(dados => this.produtos = dados);
    //.subscribe(console.log);

    this.produtos$ = this.service.list().
    pipe(
      catchError(error =>{
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );    
  }

}
