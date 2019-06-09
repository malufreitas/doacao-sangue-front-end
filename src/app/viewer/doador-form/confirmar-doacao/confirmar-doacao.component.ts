import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, empty, of, Subject, EMPTY } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-doacao',
  templateUrl: './confirmar-doacao.component.html',
  styleUrls: ['./confirmar-doacao.component.css']
})
export class ConfirmarDoacaoComponent implements OnInit {

  deleteModalRef: BsModalRef;
  doador: any = {nome: null, sobrenome: null};

  onSubmit(formulario) {
    console.log(formulario);

    this.httpClient.post('https://doacaodesangue.herokuapp.com/doacao', formulario.value).pipe(map(res => res)).subscribe(dados => console.log(dados))
  }
 
  constructor( private httpClient: HttpClient) {}

  ngOnInit(){} 

  Continuar(){}
  
  Cancelar(){}

    
}
