import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosListaComponent } from './produtos-lista/produtos-lista.component';
import { BuscaComponent } from './busca/busca.component';

@NgModule({
  declarations: [
    ProdutosListaComponent,
    BuscaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }
