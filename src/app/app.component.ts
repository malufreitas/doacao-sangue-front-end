import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "doacao-sangue-front-end";

  //mostrarMenu: boolean = false;

  constructor(
    private serviceCookie: CookieService //private authService: AuthService
  ) {}
  usuario_nome = "";
  ngOnInit() {
    this.usuario_nome = this.serviceCookie.get("nome");
  }

  // usuario_nome = this.serviceCookie.get("nome");
}
