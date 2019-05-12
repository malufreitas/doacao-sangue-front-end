import { RelatorioListaService } from './relatorio3.service';
import { Component, OnInit } from '@angular/core';
import { Relatorio3 } from './relatorio3';

@Component({
  selector: 'relatorio3-component',
  templateUrl: './relatorio3.component.html',
  styleUrls: ['./relatorio3.component.css']
})
export class Relatorio3Component implements OnInit {

  relatorios: Relatorio3[];

  constructor(
    private service: RelatorioListaService
  ) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorios = dados);
  }

}
