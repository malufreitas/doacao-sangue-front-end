import { RelatorioListaService } from './relatorio1.service';
import { Component, OnInit } from '@angular/core';
import { Relatorio1 } from './relatorio1';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio4.component.html',
  styleUrls: ['./relatorio4.component.css']
})
export class Relatorio1Component implements OnInit {

  relatorio: Relatorio1[];

  constructor(
    private service: RelatorioListaService
  ) { }

  ngOnInit() {
    this.service.list()
    .subscribe(dados => this.relatorio = dados);
  }

}
