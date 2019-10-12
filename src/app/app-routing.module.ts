import { AjudaPageComponent } from "./viewer/ajuda-page/ajuda-page.component";
import { ConfirmarDoacaoComponent } from "./viewer/doador-form/confirmar-doacao/confirmar-doacao.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DadosEntregaFormComponent } from "./viewer/compra-de-produtos/dados-entrega-form/dados-entrega-form.component";
import { EsqueciMinhaSenhaComponent } from "./viewer/esqueci-minha-senha/esqueci-minha-senha.component";
import { CatalogoProdutosComponent } from "./viewer/compra-de-produtos/catalogo-produtos/catalogo-produtos.component";
import { PagamentoComponent } from "./viewer/compra-de-produtos/pagamento/pagamento.component";
import { CarrinhoDeComprasComponent } from "./viewer/compra-de-produtos/carrinho-de-compras/carrinho-de-compras.component";
import { FinalizaCompraComponent } from "./viewer/compra-de-produtos/finaliza-compra/finaliza-compra.component";
import { AuthGuard } from "./viewer/guards/auth.guard";
import { DoadorFormComponent } from "./viewer/doador-form/doador-form.component";
import { AdminHemocentroComponent } from "./viewer/admin-hemocentro/admin-hemocentro.component";
import { AdminLojaComponent } from "./viewer/admin-loja/admin-loja.component";
import { HomeComponent } from "./viewer/home/home";
import { DemandaFormComponent } from "./viewer/admin-hemocentro/demanda-form/demanda-form.component";
import { TesteModalComponent } from "./viewer/teste-modal/teste-modal.component";
import { LoginComponent } from "./viewer/login/login.component";
import { ProdutosListaComponent } from "./viewer/admin-loja/produto/produtos-lista/produtos-lista.component";
import { CadastroComponent } from "./viewer/cadastro/cadastro.component";
import { HemoGuard } from "./viewer/guards/hemoGuard.guard";
import { SistemaGuard } from "./viewer/guards/sistemaGuard.guard";

const routes: Routes = [
  //Liberadas

  { path: "", component: HomeComponent },
  { path: "info", component: AjudaPageComponent },
  { path: "login", component: LoginComponent },
  { path: "cadastro", component: CadastroComponent },
  { path: "esqueciminhasenha", component: EsqueciMinhaSenhaComponent },
  { path: "catalogo", component: CatalogoProdutosComponent },

  { path: "modal", component: TesteModalComponent },

  // Para usuários comuns
  { path: "doador", component: DoadorFormComponent, canActivate: [AuthGuard] },
  {
    path: "produtos",
    component: ProdutosListaComponent,
    canActivate: [AuthGuard] //Para guardar essa rota
  },
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
  // Somente para Admin Hemocentro
  {
    path: "doacao",
    component: ConfirmarDoacaoComponent,
    canActivate: [HemoGuard]
  },
  {
    path: "demanda",
    component: DemandaFormComponent,
    canActivate: [HemoGuard]
  },
  {
    path: "hemocentro",
    component: AdminHemocentroComponent,
    canActivate: [HemoGuard]
  },

  // Somente para Admin Sistema
  {
    path: "sistema",
    component: AdminLojaComponent,
    canActivate: [SistemaGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
