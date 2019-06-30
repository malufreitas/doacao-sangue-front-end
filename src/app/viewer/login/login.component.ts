import { Component, OnInit } from "@angular/core";
import { AuthService } from "../guards/auth.service";

// const DADOS_CRIPTOGRAFAR = {
//   algoritmo: "aes256",
//   codificacao: "utf8",
//   segredo: "chaves",
//   tipo: "hex"
// };

// const crypto = require("crypto");

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  usuario = {
    login: null,
    senha: null
  };

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  logar() {
    // this.usuario.senha = this.criptografar(this.usuario.senha);
    console.log(this.usuario);
    this.authService.autenticacao(this.usuario);
    //this.authService.login(formulario);
  }
}
