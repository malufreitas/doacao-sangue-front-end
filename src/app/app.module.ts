import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "ngx-bootstrap";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalModule } from "ngx-bootstrap/modal";
import { CookieService } from "ngx-cookie-service";
import { StorageServiceModule } from "angular-webstorage-service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CatalogoProdutosComponent } from "./viewer/compra-de-produtos/catalogo-produtos/catalogo-produtos.component";
import { EsqueciMinhaSenhaComponent } from "./viewer/esqueci-minha-senha/esqueci-minha-senha.component";
import { CarrinhoDeComprasComponent } from "./viewer/compra-de-produtos/carrinho-de-compras/carrinho-de-compras.component";
import { PagamentoComponent } from "./viewer/compra-de-produtos/pagamento/pagamento.component";
import { FinalizaCompraComponent } from "./viewer/compra-de-produtos/finaliza-compra/finaliza-compra.component";
import { AuthGuard } from "./viewer/guards/auth.guard";
import { DoadorFormComponent } from "./viewer/doador-form/doador-form.component";
import { ConfirmarDoacaoComponent } from "./viewer/doador-form/confirmar-doacao/confirmar-doacao.component";
import { AjudaPageComponent } from "./viewer/ajuda-page/ajuda-page.component";
import { AdminHemocentroComponent } from "./viewer/admin-hemocentro/admin-hemocentro.component";
import { AdminLojaComponent } from "./viewer/admin-loja/admin-loja.component";
import { HomeComponent } from "./viewer/home/home";
import { DemandaFormComponent } from "./viewer/admin-hemocentro/demanda-form/demanda-form.component";
// import { ProdutoModule } from "./viewer/admin-loja/produto/produto.module";
import { LoginModule } from "./viewer/login/login.module";
import { AuthService } from "./viewer/guards/auth.service";
import { TesteModalComponent } from "./viewer/teste-modal/teste-modal.component";
import { CadastroModule } from "./viewer/cadastro/cadastro.module";
import { ConfirmarService } from "./viewer/doador-form/confirmar-doacao/confirmar-service";
import { RelatorioModule } from "./viewer/relatorio/relatorio.module";
import { DadosEntregaFormComponent } from "./viewer/compra-de-produtos/dados-entrega-form/dados-entrega-form.component";
import { MessageService } from "primeng/components/common/messageservice";
import { ProdutosListaComponent } from "./viewer/admin-loja/produto/produtos-lista/produtos-lista.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoProdutosComponent,
    EsqueciMinhaSenhaComponent,
    CarrinhoDeComprasComponent,
    PagamentoComponent,
    FinalizaCompraComponent,
    TesteModalComponent,
    DemandaFormComponent,
    DoadorFormComponent,
    ConfirmarDoacaoComponent,
    AjudaPageComponent,
    AdminHemocentroComponent,
    AdminLojaComponent,
    DadosEntregaFormComponent,
    ProdutosListaComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    CadastroModule,
    HttpClientModule,
    // ProdutoModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    StorageServiceModule,
    RelatorioModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ConfirmarService,
    MessageService,
    CookieService,
    CarrinhoDeComprasComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmarDoacaoComponent]
})
export class AppModule {}
