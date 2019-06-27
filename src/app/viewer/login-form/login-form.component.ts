import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/model/usuario';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  logar(formulario) {
    console.log(formulario.value);
    this.authService.login(formulario);
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
