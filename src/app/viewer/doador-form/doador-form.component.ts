import { Component, OnInit, TemplateRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-doador-form",
  templateUrl: "./doador-form.component.html",
  styleUrls: ["./doador-form.component.css"]
})
export class DoadorFormComponent implements OnInit {
  constructor(
    private modalService: BsModalService,
    private httpClient: HttpClient,
    private serviceCookie: CookieService
  ) {}

  ngOnInit() {}

  modalRef: BsModalRef;

  doador: any = {
    cpf: "", //mudar para pegar do usuário da sessão
    tiposanguineo: null,
    malaria: false,
    hepatite11: false,
    hepatiteb: false,
    hepatitec: false,
    droga: false,
    chagas: false,
    htlv: false,
    hiv: false
  };

  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };

  setTipo(tipo) {
    this.doador.tiposanguineo = tipo;
  }

  hideModal(ngForm) {
    this.justHide();
    if (
      this.doador.hepatite11 == true ||
      this.doador.hepatiteb == true ||
      this.doador.hepatitec == true ||
      this.doador.htlv == true ||
      this.doador.droga == true ||
      this.doador.malaria == true ||
      this.doador.hiv == true ||
      this.doador.chagas == true
    ) {
      alert(
        "O seu cadastro de doador foi concluído, porém por motivos de saúde você não está apto a doar."
      );
    } else {
      alert("O seu cadastro de doador foi concluído com sucesso!");
    }
    this.enviar();
  }

  justHide() {
    this.modalRef.hide();
  }

  enviar() {
    this.doador.cpf = this.serviceCookie.get("cpf");
    console.log(this.doador);

    this.httpClient
      .post(`${environment.API}` + "doador", this.doador)
      .pipe(map(res => res))
      .subscribe(val => console.log(val));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  hepatiteBFunction() {
    this.doador.hepatiteb = true;
  }
  hepatiteCFunction() {
    this.doador.hepatitec = true;
  }
  hepatite11Function() {
    this.doador.hepatite11 = true;
  }
  htlvFunction() {
    this.doador.htlv = true;
  }
  drogasFunction() {
    this.doador.droga = true;
  }
  malariaFunction() {
    this.doador.malaria = true;
  }
  hivFunction() {
    this.doador.hiv = true;
  }
  chagasFunction() {
    this.doador.chagas = true;
  }
}
