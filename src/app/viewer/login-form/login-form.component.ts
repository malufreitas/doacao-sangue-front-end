import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  
  usuario: any = {
    email: null,
    senha: null
  };

  onSubmit(formulario) {
    console.log(formulario);

    this.httpClient.post('https://doacaodesangue.herokuapp.com/login', formulario.value)
      .pipe(map(res => res))
      .subscribe(dados => console.log(dados))
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return (!campo.valid && campo.touched);
  }

}
