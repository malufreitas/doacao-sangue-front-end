import { Component, OnInit } from '@angular/core';

import { Relatorio2 } from './relatorio2';
import { Relatorio2Service } from './relatorio2.service';

@Component({
  selector: 'app-relatorio2',
  templateUrl: './relatorio2.component.html',
  styleUrls: ['./relatorio2.component.css']
})
export class Relatorio2Component implements OnInit {

  relatorios: Relatorio2[];

  constructor(
    private service: Relatorio1Service
  ) { 
  }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorios = dados);
  }

}
