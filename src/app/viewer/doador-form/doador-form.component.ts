import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-doador-form',
  templateUrl: './doador-form.component.html',
  styleUrls: ['./doador-form.component.css']
})
export class DoadorFormComponent implements OnInit {

  doador: any = {nome: null, sobrenome: null,};
  
  handleChange(e) {
    let isChecked = e.checked;
  }

  onSubmit(formulario) {
    console.log(formulario);

    this.httpClient.post('https://doacaodesangue.herokuapp.com/doador', formulario.value).pipe(map(res => res)).subscribe(dados => console.log(dados))
  }
  constructor(private httpClient: HttpClient) { }
  ngOnInit(){}
}
