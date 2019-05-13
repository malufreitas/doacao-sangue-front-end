import { ProdutosListaComponent } from './produto/produtos-lista/produtos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { DadosEntregaFormComponent } from './dados-entrega-form/dados-entrega-form.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { Relatorio1Component } from './relatorio/relatorio1/relatorio1.component';
import { Relatorio2Component } from './relatorio/relatorio2/relatorio2.component';
import { Relatorio3Component } from './relatorio/relatorio3/relatorio3.component';
import { Relatorio4Component } from './relatorio/relatorio4/relatorio4.component';

const routes: Routes = [  
  { path: 'login', component: LoginFormComponent },
  { path: 'cadastro', component: CadastroFormComponent },
  { path: 'entrega', component: DadosEntregaFormComponent },
  { path: 'produtos', component: ProdutosListaComponent },
  { path: 'relatorios', component: RelatorioComponent },
  { path: 'relatorio1', component: Relatorio1Component },
  { path: 'relatorio2', component: Relatorio2Component },
  { path: 'relatorio3', component: Relatorio3Component },
  { path: 'relatorio4', component: Relatorio4Component },
  { path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
