import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Usuario } from 'src/app/model/usuario';
import { Pessoa } from 'src/app/model/pessoa';
import { map, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  //mostrarMenuEmitter =  new EventEmitter<boolean>();

  private usuario;
  private dados;

  pessoas: Pessoa[];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }


  login(formulario) {
    return this.http.post<Pessoa[]>('https://doacaodesangue.herokuapp.com/auth/login', formulario.value)
    
  }


  async fazerLoginAutenticacao(formulario) {
    //passando os dados para o heroku
    this.login(formulario).subscribe( (resp) => this.dados = {...resp} );

    //this.dados = await this.login(formulario).subscribe();
    console.log(this.dados)
    

    //Pegar retorno do back
    //status: 404
    //status: 200

    if (this.dados.status == '200') {
    //if (usuario.login == 'usuario@email.com' && usuario.senha == '123') {
      // Se usuario for autenticado
      this.usuarioAutenticado = true;

      // Para mostrar o menu caso o usuário estiver logado
      //this.mostrarMenuEmitter.emit(true);

      // Direcionar para tela home
      this.router.navigate(['/produtos']);
    }
    

  }


  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }


}
