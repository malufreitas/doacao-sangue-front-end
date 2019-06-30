import { Component } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "doacao-sangue-front-end";

  user: boolean = false;

  constructor(private serviceCookie: CookieService) {}
  usuario_nome = "";
  ngOnInit() {
    this.usuario_nome = this.serviceCookie.get("nome");
    this.user = this.serviceCookie.check("token");
  }

  logout(): void {
    this.serviceCookie.deleteAll();
    window.location.href = "/";
  }
}
