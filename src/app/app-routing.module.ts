import { ProdutosListaComponent } from './viewer/produto/produtos-lista/produtos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './viewer/login-form/login-form.component';
import { CadastroFormComponent } from './viewer/cadastro-form/cadastro-form.component';
import { DadosEntregaFormComponent } from './viewer/dados-entrega-form/dados-entrega-form.component';
import { RelatorioComponent } from './viewer/relatorio/relatorio.component';
import { Relatorio1Component } from './viewer/relatorio/relatorio1/relatorio1.component';
import { DoacaoSangueComponent } from './viewer/doacao-sangue/doacao-sangue.component';
import { CatalogoProdutosComponent } from './viewer/catalogo-produtos/catalogo-produtos.component';

const routes: Routes = [  
  { path: 'login', component: LoginFormComponent },
  { path: 'cadastro', component: CadastroFormComponent },
  { path: 'entrega', component: DadosEntregaFormComponent },
  { path: 'produtos', component: ProdutosListaComponent },
  { path: 'catalogo', component: CatalogoProdutosComponent },
  { path: 'relatorios', component: RelatorioComponent },
  { path: 'relatorio1', component: Relatorio1Component },
  { path: '', component: DoacaoSangueComponent },
  //{ path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
