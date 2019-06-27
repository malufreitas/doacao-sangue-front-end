import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Doador } from 'src/app/model/doador';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doador-form',
  templateUrl: './doador-form.component.html',
  styleUrls: ['./doador-form.component.css']
})
export class DoadorFormComponent implements OnInit {

  modalRef: BsModalRef;
  
  doador: any = {
    cpf:78945612300,
    tipofator: null,
    hepatiteB: false,
    hepatiteC: false,
    hltv: false,
    drogas: false,
    malaria: false,
    aids: false,
    chagas: false,
  };
  
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  setTipo(tipo){
    this.doador.tipofator = tipo;
  }
  
  hideModal(){
    this.justHide();
    if (this.doador.hepatiteB == true ||
        this.doador.hepatiteC == true ||
        this.doador.hltv == true || 
        this.doador.drogas == true || 
        this.doador.malaria == true  ||  
        this.doador.aids == true || 
        this.doador.chagas == true){
           alert('O seu cadastro de doador foi concluído, porém por motivos de saúde você não está apto a doar.'); 
    }else {
      alert('O seu cadastro de doador foi concluído.');
    }
    this.enviar();
  }
  
  justHide(){
    this.modalRef.hide();
  }
  
  enviar(){
    console.log(this.doador);
    this.httpClient.post('https://doacaodesangue.herokuapp.com/doador', this.doador)
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados))
  }
  
  constructor(
    private modalService: BsModalService,
    private httpClient: HttpClient
  ) { }
  
  ngOnInit(){}
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  
  hepatiteBFunction(){
    this.doador.hepatiteB = true;
  }
  hepatiteCFunction(){
    this.doador.hepatiteC = true;
  }  
  hltvFunction(){
    this.doador.hltv = true;
  }
  drogasFunction(){
    this.doador.drogas = true;
  }
  malariaFunction(){
    this.doador.malaria = true;
  }
  aidsFunction(){
    this.doador.aids = true;
  }
  chagasFunction(){
    this.doador.chagas = true;
  }
  
  
}
