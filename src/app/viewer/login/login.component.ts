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

  logar() {
    console.log(this.usuario);
    this.authService.login(this.usuario)
    .subscribe(
      success => {
        console.log('>>>>>>>>', success)
        this.authService.salvacookie(success)
        window.location.href = "";
      },
      error => {
        console.log(error);
      });
  }

  verificaValidTouched(campo) {
    return (!campo.valid && campo.touched);
  }

}
