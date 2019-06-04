import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-confirmar-doacao',
  templateUrl: './confirmar-doacao.component.html',
  styleUrls: ['./confirmar-doacao.component.css']
})
export class ConfirmarDoacaoComponent implements OnInit {

  doador: any = {nome: null, sobrenome: null};

  onSubmit(formulario) {
    console.log(formulario);
    if (document.getElementById("cpf")) != ) {
      this.httpClient.get('https://doacaodesangue.herokuapp.com/pessoa', formulario.value).pipe(map(res => res)).subscribe(dados => console.log(dados))
      this.httpClient.post('https://doacaodesangue.herokuapp.com/doacao', formulario.value).pipe(map(res => res)).subscribe(dados => console.log(dados))
   }
   
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {} 
    
}
