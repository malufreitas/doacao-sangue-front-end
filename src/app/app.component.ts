import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tumtun Doação de Sangue';

  //mostrarMenu: boolean = false;

  constructor(
    //private authService: AuthService
  ) {}

  ngOnInit() {
    /*
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    */
  }


}
