import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Doador } from 'src/app/model/doador';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-doador-form',
  templateUrl: './doador-form.component.html',
  styleUrls: ['./doador-form.component.css']
})
export class DoadorFormComponent implements OnInit {

  modalRef: BsModalRef;
  
  doador: any = {
    id: 12,
    nome: 'magali',
    email: 'magali@mail.com',
    tipofator: null,
    hepatite: false,
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
  
  myFunction(tipo) {
  this.doador.tipofator = tipo;
  }
  
  hideModal(){
    this.justHide();
    if (this.doador.hepatite == true || this.doador.hltv == true || this.doador.drogas == true || this.doador.malaria == true  ||  this.doador.aids == true || this.doador.chagas == true){
       alert('Não foi possível terminar o seu cadastro de doador. Por favor, visite a página de "Dúvidas Frequentes" para mais informações.');
    }else{
      alert('O cadastro de doador foi concluído.');
      this.enviar();
    }
  }
  
  justHide(){
    this.modalRef.hide();
  }
  
  enviar(){
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
  
  hepatiteFunction(){
    this.doador.hepatite = true;
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
