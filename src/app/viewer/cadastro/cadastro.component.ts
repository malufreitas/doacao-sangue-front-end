import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"]
})
export class CadastroComponent implements OnInit {
  usuario: any = {
    nome: null,
    sobrenome: null,
    datanascimento: null,
    sexo: null,
    cpf: null,
    telefone: null,
    email: null,
    senha: null,
    confirmarSenha: null
  };
  user: any = {
    nome: null,
    sobrenome: null,
    datanascimento: null,
    sexo: null,
    cpf: null,
    telefone: null,
    email: null,
    senha: null,
    confirmarSenha: null
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.usuario);

    //this.httpClient.post('https://doacao-de-sangue-helenfranca.c9users.io/pessoa', formulario.value)
    this.httpClient
      .post(`${environment.API}` + "pessoa", this.usuario)
      .pipe(map(res => res))
      .subscribe(dados => {
        this.user = dados;

        if (this.user != null) {
          alert("Usuário já cadastrado!");
          window.location.href = "/login";
        }
      });
  }
}
