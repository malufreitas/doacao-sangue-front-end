import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    sobrenome: null,
    datanascimento: null,
    sexo: null,
    cpf: null,
    telefone: null,
    email: null,
    senha: null,
    confirmarSenha: null
  };


  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  onSubmit(formulario) {
    
    console.log(formulario);

    //this.httpClient.post('https://doacao-de-sangue-helenfranca.c9users.io/pessoa', formulario.value)
    this.httpClient.post('https://doacaodesangue.herokuapp.com/pessoa', formulario.value)
    .pipe(map(res => res))
    .subscribe(dados => console.log(dados))

  }

}
