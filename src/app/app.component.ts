import { Component, Inject } from "@angular/core";
import { AuthService } from './viewer/guards/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  title = 'doacao-sangue-front-end';

  // SESSION_STORAGE
  public data:any=[]



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
    private cookieService: CookieService,
    // SESSION_STORAGE
    @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) { }


  // SESSION_STORAGE
  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);

    console.log(this.data);
   }


  // SESSION_STORAGE   
  getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data[key]= this.storage.get(key);
    console.log('data em app > ', this.data);
   }

  getData() {
    return this.data;
  }

  getStorage(key) {
    return this.storage.get(key);
  }

  sair() {
    this.authService.logout()
    window.location.href = "/"; 
  }


}