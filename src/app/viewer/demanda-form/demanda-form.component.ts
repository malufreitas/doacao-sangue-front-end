import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-demanda-form',
  templateUrl: './demanda-form.component.html',
  styleUrls: ['./demanda-form.component.css']
})
export class DemandaFormComponent implements OnInit {

  demanda: any = {nome: null,sobrenome: null};

  onSubmit(formulario) {
    console.log(formulario);
    this.httpClient.post('https://doacaodesangue.herokuapp.com/pessoa', formulario.value).pipe(map(res => res)).subscribe(dados => console.log(dados))
  }

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {}
}
