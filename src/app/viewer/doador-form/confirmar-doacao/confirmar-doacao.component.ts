import { Component, OnInit, TemplateRef  } from '@angular/core';
import { ConfirmarService } from 'src/app/service/confirmar-service';
import { Doador } from 'src/app/model/doador';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmar-doacao',
  templateUrl: './confirmar-doacao.component.html',
  styleUrls: ['./confirmar-doacao.component.css']
})
export class ConfirmarDoacaoComponent implements OnInit {

  public doador: Doador[];
  modalRef: BsModalRef;
  
  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  
  constructor( 
    private modalService: BsModalService,
    private ConfirmarService: ConfirmarService
  ) {}

  ngOnInit(){
     this.ConfirmarService.getDoador().subscribe(doador => this.doador = doador)
  } 

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  continuar(){}

}