import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Usuario } from 'src/app/model/usuario';
import { Pessoa } from 'src/app/model/pessoa';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter =  new EventEmitter<boolean>();

  pessoas: Pessoa[];
  
  constructor(
    private router: Router,
    private http: HttpClient
    ) { }

/*
  getPessoas() {
    return this.http.get<Pessoa[]>('http://localhost:3000/pessoa').
    pipe(
      tap(console.log) //para debugar, ver os erros
    );; 
  }

  pegaPessoas() {
   return this.getPessoas().subscribe(pessoas => this.pessoas = pessoas);
  }
*/

  fazerLogin(usuario: Usuario) {
    //this.pegaPessoas();
    
    if (usuario.login == 'usuario@email.com' && usuario.senha == '123') {
      // Se usuario for autenticado
      this.usuarioAutenticado = true;
      
      // Para mostrar o menu caso o usuário estiver logado
      this.mostrarMenuEmitter.emit(true);

      // Direcionar para tela home
      this.router.navigate(['/produtos']);
    }
  }


  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
  

}
