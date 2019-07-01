import { Component, OnInit, TemplateRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { environment } from "src/environments/environment";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-demanda-form",
  templateUrl: "./demanda-form.component.html",
  styleUrls: ["./demanda-form.component.css"]
})
export class DemandaFormComponent implements OnInit {
  constructor(
    private modalService: BsModalService,
    private httpClient: HttpClient,
    private serviceCookie: CookieService
  ) {}

  ngOnInit() {}

  modalRef: BsModalRef;

  demanda: any = {
    hemocentro: this.serviceCookie.get("cnes"),
    tiposanguineo: null
  };

  config = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  ret: any = {};

  hideModal() {
    console.log();
    this.modalRef.hide();
    this.enviar();
    window.alert("O cadastro da demanda foi concluído.");
    // window.location.href = "/hemocentro";
    console.log(this.ret);
  }

  setTipo(tipo) {
    this.demanda.tiposanguineo = tipo;
  }

  enviar() {
    this.httpClient
      .post(`${environment.API}` + "demanda", this.demanda)
      .pipe(map(res => res))
      .subscribe(dados => (this.ret = dados), retorno => (this.ret = retorno));
  }

  justHide() {
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
