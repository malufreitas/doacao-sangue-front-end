import { Component, OnInit } from '@angular/core';

import { Relatorio3 } from './relatorio3';
import { Relatorio3Service } from './relatorio3.service';

@Component({
  selector: 'app-relatorio3',
  templateUrl: './relatorio3.component.html',
  styleUrls: ['./relatorio3.component.css']
})
export class Relatorio3Component implements OnInit {

  relatorios: Relatorio3[];

  constructor(
    private service: Relatorio3Service
  ) { 
  }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorios = dados);
  }

}
