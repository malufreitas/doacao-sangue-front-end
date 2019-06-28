import { OnInit, TemplateRef, Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Doador } from "src/app/model/doador";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { environment } from "src/environments/environment";
import { Pessoa } from "src/app/model/pessoa";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-confirmar-doacao",
  templateUrl: "./confirmar-doacao.component.html",
  styleUrls: ["./confirmar-doacao.component.css"]
})
export class ConfirmarDoacaoComponent implements OnInit {
  modalRef: BsModalRef;
  message: any = {
    nome: null,
    sobrenome: null,
    cpf: null
  };
  pessoa: Pessoa;
  doador: Doador;

  confirmar: any = {
    qtd: null,
    observacao: "",
    cnesHemocentro: 2486199
  };

  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(
    private modalService: BsModalService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {}

  hideModal(formulario) {
    this.modalRef.hide();
    this.enviar(formulario);
  }

  justHide() {
    this.modalRef.hide();
  }

  async openModal(template: TemplateRef<any>, formulario) {
    await this.httpClient
      .get<Pessoa>(`${environment.API}` + "pessoa/" + formulario.value.cpf)
      .subscribe(async dados => await (this.pessoa = dados));

    if (this.verificaNull(this.pessoa)) {
      this.renderiza(template);
    }
    this.message = this.pessoa;
    this.confirmar = formulario.value;
  }

  verificaNull(pessoa) {
    if (pessoa != null) {
      return true;
    }
  }

  renderiza(template) {
    this.modalRef = this.modalService.show(template, { class: "modal-body" });
  }

  async enviar(formulario) {
    console.log(formulario.value);
    await this.httpClient
      // .post("https://doacaodesangue.herokuapp.com/doacao", formulario.value)
      .post(`${environment.API}` + "doacao", formulario.value)
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados));
    alert("A doação foi confirmada.");
  }

  continuar() {}
}

//Caso problemas com CORS ocorra:
//https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related
