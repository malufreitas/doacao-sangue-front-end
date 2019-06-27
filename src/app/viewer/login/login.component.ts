import { Component, OnInit, Input } from '@angular/core';

import { Usuario } from 'src/app/model/usuario';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginFormComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  private res;

  fazerLogin(formulario) {
    this.res = this.authService.login(formulario);
    //this.authService.fazerLoginAutenticacao(formulario);
    this.authService.fazerLoginAutenticacao(this.res);
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
