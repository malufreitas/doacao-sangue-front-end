import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    sobrenome: null,
    dataNascimento: null,
    sexo: null,
    cpf: null,
    telefone: null,
    email: null,
    senha: null,
    confirmarSenha: null
  };

  onSubmit(form) {
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
