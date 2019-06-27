import { AjudaPageComponent } from "./viewer/ajuda-page/ajuda-page.component";
import { ConfirmarDoacaoComponent } from "./viewer/doador-form/confirmar-doacao/confirmar-doacao.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginFormComponent } from "./viewer/login-form/login-form.component";
import { CadastroFormComponent } from "./viewer/cadastro-form/cadastro-form.component";
import { ProdutosListaComponent } from "./viewer/produto/produtos-lista/produtos-lista.component";
import { DadosEntregaFormComponent } from "./viewer/compra-de-produtos/dados-entrega-form/dados-entrega-form.component";
import { DoacaoSangueComponent } from "./viewer/doacao-sangue/doacao-sangue.component";
import { RelatorioComponent } from "./viewer/relatorio/relatorio.component";
import { Relatorio1Component } from "./viewer/relatorio/relatorio1/relatorio1.component";
import { Relatorio2Component } from "./viewer/relatorio/relatorio2/relatorio2.component";
import { Relatorio3Component } from "./viewer/relatorio/relatorio3/relatorio3.component";
import { Relatorio4Component } from "./viewer/relatorio/relatorio4/relatorio4.component";
import { EsqueciMinhaSenhaComponent } from "./viewer/esqueci-minha-senha/esqueci-minha-senha.component";
import { CatalogoProdutosComponent } from "./viewer/compra-de-produtos/catalogo-produtos/catalogo-produtos.component";
import { PagamentoComponent } from "./viewer/compra-de-produtos/pagamento/pagamento.component";
import { CarrinhoDeComprasComponent } from "./viewer/compra-de-produtos/carrinho-de-compras/carrinho-de-compras.component";
import { FinalizaCompraComponent } from "./viewer/compra-de-produtos/finaliza-compra/finaliza-compra.component";
import { TesteModalComponent } from "./viewer/teste-modal/teste-modal.component";
import { AuthGuard } from "./viewer/guards/auth.guard";
import { DoadorFormComponent } from "./viewer/doador-form/doador-form.component";
import { DemandaFormComponent } from "./viewer/demanda-form/demanda-form.component";
import { AdminHemocentroComponent } from "./viewer/admin-hemocentro/admin-hemocentro.component";
import { AdminLojaComponent } from "./viewer/admin-loja/admin-loja.component";

const routes: Routes = [
  { path: "login", component: LoginFormComponent },
  { path: "cadastro", component: CadastroFormComponent },
  { path: "esqueciminhasenha", component: EsqueciMinhaSenhaComponent },
  {
    path: "produtos",
    component: ProdutosListaComponent,
    canActivate: [AuthGuard] //Para guardar essa rota
  },
  { path: "catalogo", component: CatalogoProdutosComponent },
  {
    path: "carrinho",
    component: CarrinhoDeComprasComponent,
    canActivate: [AuthGuard] //Para guardar essa rota
  },
  {
    path: "enderecodeentrega",
    component: DadosEntregaFormComponent,
    canActivate: [AuthGuard] //Para guardar essa rota
  },
  {
    path: "pagamento",
    component: PagamentoComponent,
    canActivate: [AuthGuard] //Para guardar essa rota
  },
  {
    path: "finalizacompra",
    component: FinalizaCompraComponent,
    canActivate: [AuthGuard] //Para guardar essa rota
  },
  { path: "modal", component: TesteModalComponent },
  { path: "relatorios", component: RelatorioComponent },
  { path: "relatorio1", component: Relatorio1Component },
  { path: "relatorio2", component: Relatorio2Component },
  { path: "relatorio3", component: Relatorio3Component },
  { path: "relatorio4", component: Relatorio4Component },
  { path: "confirmar", component: ConfirmarDoacaoComponent },
  { path: "demanda", component: DemandaFormComponent },
  { path: "doador", component: DoadorFormComponent },
  { path: "", component: DoacaoSangueComponent },
  { path: "ajuda", component: AjudaPageComponent },
  { path: "admin-hemo", component: AdminHemocentroComponent },
  { path: "admin-loja", component: AdminLojaComponent }
  //{ path: '', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
