import { Component, OnInit } from '@angular/core';

import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logar(formulario) {
    console.log(formulario.value);
    this.authService.autenticacao(formulario);
    //this.authService.login(formulario);
  }

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return (!campo.valid && campo.touched);
  }

}
