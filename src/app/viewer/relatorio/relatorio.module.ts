import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Relatorio1Component } from './relatorio1/relatorio1.component';
import { Relatorio2Component } from './relatorio2/relatorio2.component';
import { Relatorio3Component } from './relatorio3/relatorio3.component';
import { Relatorio4Component } from './relatorio4/relatorio4.component';

@NgModule({
  declarations: [
    Relatorio1Component,
    Relatorio2Component,
    Relatorio3Component,
    Relatorio4Component
  ],
  imports: [
    CommonModule
  ]
})
export class RelatorioModule { }
