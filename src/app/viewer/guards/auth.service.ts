import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private options

    private usuarioAutenticado: boolean = false;
    resposta: void;
    //mostrarMenuEmitter =  new EventEmitter<boolean>();

    constructor(
        private http: HttpClient,
        private cookieService: CookieService
    ) {
        this.options = { headers: this.getHeaders() };
    }


    private getHeaders(): HttpHeaders {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        return headers;
    }

    login(auth) {
        return this.http.post<any>('https://doacaodesangue.herokuapp.com/auth/login', auth, this.options);
    }

    logout() {
        this.cookieService.deleteAll()
    }

    salvacookie(pessoa: any) {
        var dt = new Date();
        dt.setHours(dt.getHours() + 2);
    }


    /*
        login(formulario) {
            //this.resposta = this.autenticacao(formulario);
            //console.log('>>>>>>>', this.resposta);
    
            //status: 404 erro  -   200 sucesso
    
            //if (resposta.status == '200') {
            if (formulario.value.email == 'usuario@email.com' && formulario.value.senha == '123') {
                // Se usuario for autenticado
                this.usuarioAutenticado = true;
    
                // Para mostrar o menu caso o usuário estiver logado
                //this.mostrarMenuEmitter.emit(true);
    
                // Direcionar para tela:
                this.router.navigate(['/produtos']);
            }
    */



    usuarioEstaAutenticado() {
        return this.usuarioAutenticado;
    }



    /*
        logout(): void {
            // Limpa o token removendo o usuário do local store para efetuar o logout
            this.token = null;
            localStorage.removeItem('currentUser');
        }
    */



}





