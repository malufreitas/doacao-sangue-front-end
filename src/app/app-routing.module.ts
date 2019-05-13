import { ProdutosListaComponent } from './produto/produtos-lista/produtos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { DadosEntregaFormComponent } from './dados-entrega-form/dados-entrega-form.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { Relatorio1Component } from './relatorio/relatorio1/relatorio1.component';

const routes: Routes = [  
  { path: 'login', component: LoginFormComponent },
  { path: 'cadastro', component: CadastroFormComponent },
  { path: 'entrega', component: DadosEntregaFormComponent },
  { path: 'produtos', component: ProdutosListaComponent },
  { path: 'relatorios', component: RelatorioComponent },
  { path: 'relatorio1', component: Relatorio1Component },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
