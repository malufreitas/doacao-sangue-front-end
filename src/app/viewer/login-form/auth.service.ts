import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter =  new EventEmitter<boolean>();
  
  constructor(
    private router: Router
    ) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.login == 'usuario@email.com' && usuario.senha == '123') {
      // Se usuario for autenticado
      this.usuarioAutenticado = true;
      
      // Para mostrar o menu caso o usuário estiver logado
      this.mostrarMenuEmitter.emit(true);

      // Direcionar para tela home
      this.router.navigate(['/']);
    }
  }


  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
  

}
