import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-dados-entrega-form",
  templateUrl: "./dados-entrega-form.component.html",
  styleUrls: ["./dados-entrega-form.component.css"]
})
export class DadosEntregaFormComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  onSubmit(formulario) {
    console.log(formulario);

    this.httpClient
      .post(`${environment.API}` + "pessoa/entrega", formulario.value)
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados));
  }

  consultaCEP(cep, formulario) {
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, "");

    //Verifica se campo cep possui valor informado.
    if (cep != null && cep != "") {
      this.resetaDadosFormulario(formulario);

      this.httpClient
        .get(`//viacep.com.br/ws/${cep}/json`)
        .pipe(map(dados => dados))
        .subscribe(dados => this.populaDadosForm(dados, formulario));
    }
  }

  populaDadosForm(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        numero: "",
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  resetaDadosFormulario(formulario) {
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }
}
