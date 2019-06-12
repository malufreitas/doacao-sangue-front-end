import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable, empty, Subject } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, map } from 'rxjs/operators';

import { ProdutosListaService } from './produtos-lista.service';
import { Produto } from '../../../model/produto';
import { HttpClient } from 'selenium-webdriver/http';


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

  // Parao Modal Pop-up
  modalRef: BsModalRef;
  message: string;

  constructor(
    private service: ProdutosListaService,
    private modalService: BsModalService
    //private httpClient: HttpClient
  ) { }

  ngOnInit() {
    //Subscribe para ativar, fazer a chamada de cursos 
    //Mostra no Network -> XHR
    /* this.service.list()
    .subscribe(dados => this.produtos = dados);
    .subscribe(console.log); */

    this.produtos$ = this.service.list().
    pipe(
      catchError(error =>{
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );    
  }

  novoProdutoModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }


  /*
  salvar(formulario) {
    console.log(formulario);

    this.httpClient.post('https://doacaodesangue.herokuapp.com/produto', formulario.value)
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados))

  }
  */


  cancelar() {

  }


}
