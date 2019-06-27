import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "ngx-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DoacaoSangueComponent } from "./viewer/doacao-sangue/doacao-sangue.component";
import { CadastroFormModule } from "./viewer/cadastro-form/cadastro-form.module";
import { LoginFormModule } from "./viewer/login-form/login-form.module";
import { ProdutoModule } from "./viewer/produto/produto.module";
import { CatalogoProdutosComponent } from "./viewer/compra-de-produtos/catalogo-produtos/catalogo-produtos.component";
import { EsqueciMinhaSenhaComponent } from "./viewer/esqueci-minha-senha/esqueci-minha-senha.component";
import { CarrinhoDeComprasComponent } from "./viewer/compra-de-produtos/carrinho-de-compras/carrinho-de-compras.component";
import { PagamentoComponent } from "./viewer/compra-de-produtos/pagamento/pagamento.component";
import { DadosEntregaFormModule } from "./viewer/compra-de-produtos/dados-entrega-form/dados-entrega-form.module";
import { FinalizaCompraComponent } from "./viewer/compra-de-produtos/finaliza-compra/finaliza-compra.component";
import { TesteModalComponent } from "./viewer/teste-modal/teste-modal.component";
import { AuthService } from "./viewer/login-form/auth.service";
import { AuthGuard } from "./viewer/guards/auth.guard";
// import { RelatorioModule } from "./viewer/relatorio/relatorio.module";
import { DemandaFormComponent } from "./viewer/demanda-form/demanda-form.component";
import { DoadorFormComponent } from "./viewer/doador-form/doador-form.component";
import { ConfirmarDoacaoComponent } from "./viewer/doador-form/confirmar-doacao/confirmar-doacao.component";
import { AjudaPageComponent } from "./viewer/ajuda-page/ajuda-page.component";
//Bootstrap
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalModule } from "ngx-bootstrap/modal";
//Bootstrap
//Services
import { ConfirmarService } from "./service/confirmar-service";
import { AdminHemocentroComponent } from "./viewer/admin-hemocentro/admin-hemocentro.component";
import { AdminLojaComponent } from "./viewer/admin-loja/admin-loja.component";
import { RelatorioComponent } from "./viewer/relatorio/relatorio.component";
import { Relatorio1Component } from "./viewer/relatorio/relatorio1/relatorio1.component";
import { Relatorio2Component } from "./viewer/relatorio/relatorio2/relatorio2.component";
import { Relatorio3Component } from "./viewer/relatorio/relatorio3/relatorio3.component";
import { Relatorio4Component } from "./viewer/relatorio/relatorio4/relatorio4.component";
//Services

@NgModule({
  declarations: [
    AppComponent,
    DoacaoSangueComponent,
    CatalogoProdutosComponent,
    EsqueciMinhaSenhaComponent,
    CarrinhoDeComprasComponent,
    PagamentoComponent,
    FinalizaCompraComponent,
    TesteModalComponent,
    RelatorioComponent,
    Relatorio1Component,
    Relatorio2Component,
    Relatorio3Component,
    Relatorio4Component,
    DemandaFormComponent,
    DoadorFormComponent,
    ConfirmarDoacaoComponent,
    AjudaPageComponent,
    AdminHemocentroComponent,
    AdminLojaComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginFormModule,
    CadastroFormModule,
    DadosEntregaFormModule,
    HttpClientModule,
    ProdutoModule,
    // RelatorioModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule.forRoot()
    //,MatButtonModule
  ],
  providers: [AuthService, AuthGuard, ConfirmarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
