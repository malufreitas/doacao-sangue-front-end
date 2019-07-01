import { Component, OnInit } from "@angular/core";
import { AuthService } from "../guards/auth.service";

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
    this.authService.autenticacao(this.usuario);
  }
}
