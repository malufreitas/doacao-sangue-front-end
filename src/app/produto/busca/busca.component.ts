import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  busca: any = {
    pesquisa: null
  };

  onSubmit(form) {
    console.log(form);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
