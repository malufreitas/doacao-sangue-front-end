import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Pessoa } from 'src/app/model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  //mostrarMenuEmitter =  new EventEmitter<boolean>();
  private resposta;
  pessoas: Pessoa[];
  constructor(private router: Router, private http: HttpClient) { }
  login(formulario) {
    this.http.post<Pessoa[]>('https://doacaodesangue.herokuapp.com/auth/login', formulario.value)
      .pipe()
      .subscribe(success => this.resposta = success, error => console.log(error), () => console.log('request completo'));
    return this.resposta;
  }
  //fazerLoginAutenticacao(formulario) { 
  fazerLoginAutenticacao(resposta) {
    //status: 404 erro  -   200 sucesso
    //console.log(formulario);
    if (this.resposta.status == '200') {
      //if (formulario.value.email == 'usuario@email.com' && formulario.value.senha == '123') {
      // Se usuario for autenticado
      this.usuarioAutenticado = true;
      // Para mostrar o menu caso o usuário estiver logado
      //this.mostrarMenuEmitter.emit(true);
      // Direcionar para tela:
      this.router.navigate(['/produtos']);
    }
  }
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
