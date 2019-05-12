import { RelatorioListaService } from './relatorio2.service';
import { Component, OnInit } from '@angular/core';
import { Relatorio2 } from './relatorio2';

@Component({
  selector: 'relatorio2-component',
  templateUrl: './relatorio2.component.html',
  styleUrls: ['./relatorio2.component.css']
})
export class Relatorio2Component implements OnInit {

  relatorios: Relatorio2[];

  constructor(
    private service: RelatorioListaService
  ) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorios = dados);
  }

}
