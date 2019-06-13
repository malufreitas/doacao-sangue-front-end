import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../login-form/auth.service';

/* Decorator: padrão de projeto de software que 
permite adicionar um comportamento a um objeto já
existente em tempo de execução, ou seja, agrega
dinamicamente responsabilidades adicionais a um objeto.
*/
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    //else
    this.router.navigate(['/login']);
    return false;
  }
  

}
