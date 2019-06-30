import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { AuthService } from "./auth.service";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class SistemaGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, //Informações da rota
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    //Retorna um observable

    if (
      this.cookieService.check("admin") &&
      this.cookieService.get("admin").slice(0, 2) == "SIS"
    ) {
      return true;
    }
  }
}
