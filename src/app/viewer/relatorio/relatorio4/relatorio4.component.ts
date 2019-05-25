import { Component, OnInit } from '@angular/core';

import { Relatorio4 } from 'src/app/model/relatorio4';
import { Relatorio4Service } from './relatorio4.service';

@Component({
  selector: 'app-relatorio4',
  templateUrl: './relatorio4.component.html',
  styleUrls: ['./relatorio4.component.css']
})
export class Relatorio4Component implements OnInit {

  relatorios: Relatorio4[];

  constructor(
    private service: Relatorio4Service
  ) { 
  }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorios = dados);
  }

}
