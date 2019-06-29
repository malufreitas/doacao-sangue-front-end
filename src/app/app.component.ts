import { Component } from "@angular/core";
import { AuthService } from './viewer/guards/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = 'doacao-sangue-front-end';

  logado: boolean = this.cookieService.check('idpessoa');


  /*
  usuario: any = {
    email: null,
    senha: null
  };

  erro: boolean = false
  admin: boolean = this.cookieService.check('numeroregistro');
  logado: boolean = this.cookieService.check('idpessoa');
  user: any
  */

  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  sair() {
    this.authService.logout()
    window.location.href = "/"; 
  }


}