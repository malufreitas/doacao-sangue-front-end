import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  //onSubmit(formulario) {
  fazerLogin(formulario) {
    //console.log(formulario.value);
    //this.authService.fazerLoginAutenticacao(this.usuario);
    this.authService.fazerLoginAutenticacao(formulario);
    //this.authService.login(formulario);

    /*
    this.httpClient.post('https://doacaodesangue.herokuapp.com/login', formulario.value)
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados))
    */
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
