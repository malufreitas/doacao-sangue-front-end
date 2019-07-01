import { OnInit, TemplateRef, Component, Input } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Doador } from "src/app/model/doador";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { environment } from "src/environments/environment";
import { Pessoa } from "src/app/model/pessoa";

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

  confirmar = {
    quantidade: null,
    observacao: "",
    cnes: 2486199,
    cpf: null
  };

  cnes = 123;

  retorno: any = {};
  response: any = {};
  bla: any = {};

  body = {
    quantidade: null,
    observacao: "",
    cnes: null,
    cpf: null
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

  hideModal() {
    this.modalRef.hide();
    this.enviar();
  }

  justHide() {
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    if (this.confirmar.cpf != null && this.confirmar.cpf != "") {
      // this.confirmar.cpf = formulario.cpf;

      this.httpClient
        .get<Pessoa>(`${environment.API}` + "pessoa/" + this.confirmar.cpf)
        .subscribe(
          val => {
            //Caso ok
            this.pessoa = val;
            if (this.verificaNull(this.pessoa)) {
              this.renderiza(template);
            }
            this.message = this.pessoa;
            this.confirmar = this.confirmar;
          },
          error => {
            //Caso Erro
            alert("Doador não encontrado! Por favor, verifique o cpf");
          }
        );
    }
  }
  verificaNull(pessoa) {
    if (pessoa != null) {
      return true;
    }
  }

  renderiza(template) {
    this.modalRef = this.modalService.show(template, { class: "modal-body" });
  }

  async enviar() {
    this.body = this.confirmar;
    this.body.cnes = this.cnes;

    this.httpClient
      // .post("https://doacaodesangue.herokuapp.com/doacao", formulario.value)
      .post(`${environment.API}` + "doacao", this.body)
      .pipe(map(res => (this.bla = res)))
      .subscribe(val => val, response => response);

    alert("Doação confirmada com sucesso!");
  }

  continuar() {}
}

//Caso problemas com CORS ocorra:
//https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related
