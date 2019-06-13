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

  public doador: Doador;
  modalRef: BsModalRef;
  tipofator: string;
  
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  myFunction(tipo) {
  this.tipofator = tipo;
  }

  onSubmit(formulario) {
    this.httpClient.post('https://doacaodesangue.herokuapp.com/doador', this.tipofator)
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
  
}
