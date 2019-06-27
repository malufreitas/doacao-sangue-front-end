import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pessoa } from 'src/app/model/pessoa';


@Injectable({
    providedIn: 'root'
})
export class AuthService {


    private usuarioAutenticado: boolean = false;
    resposta: void;
    //mostrarMenuEmitter =  new EventEmitter<boolean>();

    constructor(
        private router: Router,
        private http: HttpClient
    ) { }



    autenticacao(formulario) {
        this.http.post<any>('https://doacaodesangue.herokuapp.com/auth/login', formulario.value)
            .pipe()
            .subscribe(
                success => this.login(success), //resposta do servidor com o status 404 ou 200
                error => console.log(error),
                () => console.log('request completo')
            );
    }




    login(resposta) {
        //this.resposta = this.autenticacao(formulario);
        //console.log('>>>>>>>', this.resposta);

        //status: 404 erro  -   200 sucesso

        if (resposta.status == '200') {
        //if (formulario.value.email == 'usuario@email.com' && formulario.value.senha == '123') {
            // Se usuario for autenticado
            this.usuarioAutenticado = true;

            // Para mostrar o menu caso o usuário estiver logado
            //this.mostrarMenuEmitter.emit(true);

            // Direcionar para tela:
            this.router.navigate(['/produtos']);
        }


    }


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





