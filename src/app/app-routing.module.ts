import { AjudaPageComponent } from './viewer/ajuda-page/ajuda-page.component';
import { ConfirmarDoacaoComponent } from './viewer/doador-form/confirmar-doacao/confirmar-doacao.component';
import { ProdutosListaComponent } from './viewer/produto/produtos-lista/produtos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './viewer/login-form/login-form.component';
import { CadastroFormComponent } from './viewer/cadastro-form/cadastro-form.component';
import { DadosEntregaFormComponent } from './viewer/dados-entrega-form/dados-entrega-form.component';
import { DoacaoSangueComponent } from './viewer/doacao-sangue/doacao-sangue.component';
import { CatalogoProdutosComponent } from './viewer/catalogo-produtos/catalogo-produtos.component';
import { RelatorioComponent } from './viewer/relatorio/relatorio.component';
import { Relatorio1Component } from './viewer/relatorio/relatorio1/relatorio1.component';
import { Relatorio2Component } from './viewer/relatorio/relatorio2/relatorio2.component';
import { Relatorio3Component } from './viewer/relatorio/relatorio3/relatorio3.component';
import { Relatorio4Component } from './viewer/relatorio/relatorio4/relatorio4.component';
import { DoadorFormComponent } from './viewer/doador-form/doador-form.component';
import { DemandaFormComponent } from './viewer/demanda-form/demanda-form.component';
import { AdminHemocentroComponent } from './viewer/admin-hemocentro/admin-hemocentro.component';
import { AdminLojaComponent } from './viewer/admin-loja/admin-loja.component';

const routes: Routes = [  
  { path: 'login', component: LoginFormComponent },
  { path: 'cadastro', component: CadastroFormComponent },
  { path: 'entrega', component: DadosEntregaFormComponent },
  { path: 'produtos', component: ProdutosListaComponent },
  { path: 'catalogo', component: CatalogoProdutosComponent },
  { path: 'relatorios', component: RelatorioComponent },
  { path: 'relatorio1', component: Relatorio1Component },
  { path: 'relatorio2', component: Relatorio2Component },
  { path: 'relatorio3', component: Relatorio3Component },
  { path: 'relatorio4', component: Relatorio4Component },
  { path: 'confirmar', component: ConfirmarDoacaoComponent },
  { path: 'demanda', component: DemandaFormComponent },
  { path: 'doador', component: DoadorFormComponent },
  { path: '', component: DoacaoSangueComponent },
  { path: 'ajuda', component: AjudaPageComponent },
  { path: 'admin-hemo', component: AdminHemocentroComponent },
  { path: 'admin-loja', component: AdminLojaComponent },
  //{ path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
