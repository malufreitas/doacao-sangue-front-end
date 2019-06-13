import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-demanda-form',
  templateUrl: './demanda-form.component.html',
  styleUrls: ['./demanda-form.component.css']
})
export class DemandaFormComponent implements OnInit {

  demanda: any = {nome: null,sobrenome: null};
  tipofator: string;
  modalRef: BsModalRef;
  
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  onSubmit(formulario) {
    console.log(formulario);
    this.httpClient.post('https://doacaodesangue.herokuapp.com/demanda', this.tipofator).pipe(map(res => res)).subscribe(dados => console.log(dados))
  }

  myFunction(tipo) {
  this.tipofator = tipo;
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
  
  constructor(
    private modalService: BsModalService,
    private httpClient: HttpClient
  ) { }
  ngOnInit() {}
}
