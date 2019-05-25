import { Component, OnInit } from '@angular/core';

import { Relatorio1 } from 'src/app/model/relatorio1';
import { Relatorio1Service } from './relatorio1.service';

@Component({
  selector: 'app-relatorio1',
  templateUrl: './relatorio1.component.html',
  styleUrls: ['./relatorio1.component.css']
})
export class Relatorio1Component implements OnInit {

  relatorios: Relatorio1[];

  constructor(
    private service: Relatorio1Service
  ) { 
  }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorios = dados);
  }

}
