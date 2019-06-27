import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, //Informações da rota
    state: RouterStateSnapshot     
  ): Observable<boolean> | boolean {  //Retorna um observable

    // Usuario autenticado
    if (this.authService.usuarioEstaAutenticado()) {
      return true;
    }

    // else
    this.router.navigate(['/login']);
    return false;
  }

}
