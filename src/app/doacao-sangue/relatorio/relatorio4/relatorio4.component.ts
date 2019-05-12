import { RelatorioListaService } from './relatorio4.service';
import { Component, OnInit } from '@angular/core';
import { Relatorio4 } from './relatorio4';

@Component({
  selector: 'relatorio4-component',
  templateUrl: './relatorio4.component.html',
  styleUrls: ['./relatorio4.component.css']
})
export class Relatorio4Component implements OnInit {

  relatorios: Relatorio4[];

  constructor(
    private service: RelatorioListaService
  ) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorios = dados);
  }

}
