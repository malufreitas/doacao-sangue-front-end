import { Component, OnInit, TemplateRef,   } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Doador } from 'src/app/model/doador';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';
@Component({
  selector: 'app-confirmar-doacao',
  templateUrl: './confirmar-doacao.component.html',
  styleUrls: ['./confirmar-doacao.component.css']
})
export class ConfirmarDoacaoComponent implements OnInit {

  
  modalRef: BsModalRef;
  confirmar: any = {
    cpf: null,
    qtd: null,
    observacao: null,
    cnesHemocentro: 2486199,
  };
  
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  constructor( 
    private modalService: BsModalService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(){
   
  } 

  hideModal(formulario){
    this.modalRef.hide();
    this.enviar(formulario);
  }
  
  justHide(){
    this.modalRef.hide();
  }

  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
    
  enviar(formulario){
    console.log(formulario.value);
    this.httpClient.post('https://doacaodesangue.herokuapp.com/doacao', formulario.value)
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados));
    alert('A doação foi confirmada.');
  }

  continuar(){}

  }


//Caso problemas com CORS ocorra:
//https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related