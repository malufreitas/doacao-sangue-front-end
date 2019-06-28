import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  
  usuario: any = {
    email: null,
    senha: null
  };


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  logar(formulario) {
    console.log(formulario.value);
    //this.authService.autenticacao(formulario);
    this.authService.login(formulario);
  }

  verificaValidTouched(campo) {
    return (!campo.valid && campo.touched);
  }

}
