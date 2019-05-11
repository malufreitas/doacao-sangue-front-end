import { RelatorioListaService } from './relatorio3.service';
import { Component, OnInit } from '@angular/core';
import { Relatorio3 } from './relatorio3';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio3.component.html',
  styleUrls: ['./relatorio3.component.css']
})
export class Relatorio3Component implements OnInit {

  relatorio: Relatorio3[];

  constructor(
    private service: RelatorioListaService
  ) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorio = dados);
  }

}
