import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-demanda-form',
  templateUrl: './demanda-form.component.html',
  styleUrls: ['./demanda-form.component.css']
})
export class DemandaFormComponent implements OnInit {


  modalRef: BsModalRef;
  
    demanda: any = {
    id: 161,
    status: 1,
    nome: 'CRE Metropolitano',
    tipofator: null,
  };
  
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  myFunction(tipo) {
  this.demanda.tipofator = tipo;
  }
  
  hideModal(){
    console.log();
    this.modalRef.hide();
    this.enviar();
    alert('O cadastro de doador foi concluído.')
  }
  
  enviar(){
    console.log(this.demanda);
    this.httpClient.post('https://doacaodesangue.herokuapp.com/demanda', this.demanda)
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados))
  }
  
  justHide(){
    this.modalRef.hide();
  }
  
  constructor(
    private modalService: BsModalService,
    private httpClient: HttpClient
  ) { }
  
  ngOnInit(){}
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
