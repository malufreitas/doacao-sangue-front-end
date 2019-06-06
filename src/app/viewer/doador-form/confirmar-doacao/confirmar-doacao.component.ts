import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  } from '.confir'
import { Observable, empty, of, Subject, EMPTY } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../shared-confirmar/alert-modal/alert-modal.component';
import { AlertModalService } from '../../shared-confirmar/alert-modal.service';
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
    if (document.getElementById("cpf")) != ) {
      this.httpClient.get('https://doacaodesangue.herokuapp.com/pessoa', formulario.value).pipe(map(res => res)).subscribe(dados => console.log(dados))
      this.httpClient.post('https://doacaodesangue.herokuapp.com/doacao', formulario.value).pipe(map(res => res)).subscribe(dados => console.log(dados))
   }
   
  constructor(
    private httpClient: HttpClient
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {} 

  Continuar(){
    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja continuar?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.add(doacao.id) : EMPTY)
    )
  }
  
  Cancelar(){}

    
}
