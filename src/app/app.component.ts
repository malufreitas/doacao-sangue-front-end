import { AuthService } from "./viewer/login-form/auth.service";
import { Component } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "doacao-sangue-front-end";
  constructor() {}
  // constructor(config: NgbDropdownConfig) {
  //   // customize default values of dropdowns used by this component tree
  //   config.placement = "";
  //   config.autoClose = true;
  // }
  ngOnInit() {
    /*
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    */
  }
}
