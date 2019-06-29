import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "ngx-bootstrap";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalModule } from "ngx-bootstrap/modal";

//import { MatButtonModule } from '@angular/material/button';
import { CookieService } from 'ngx-cookie-service';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CatalogoProdutosComponent } from "./viewer/compra-de-produtos/catalogo-produtos/catalogo-produtos.component";
import { EsqueciMinhaSenhaComponent } from "./viewer/esqueci-minha-senha/esqueci-minha-senha.component";
import { CarrinhoDeComprasComponent } from "./viewer/compra-de-produtos/carrinho-de-compras/carrinho-de-compras.component";
import { PagamentoComponent } from "./viewer/compra-de-produtos/pagamento/pagamento.component";
import { DadosEntregaFormModule } from "./viewer/compra-de-produtos/dados-entrega-form/dados-entrega-form.module";
import { FinalizaCompraComponent } from "./viewer/compra-de-produtos/finaliza-compra/finaliza-compra.component";
import { AuthGuard } from "./viewer/guards/auth.guard";
import { DoadorFormComponent } from "./viewer/doador-form/doador-form.component";
import { ConfirmarDoacaoComponent } from "./viewer/doador-form/confirmar-doacao/confirmar-doacao.component";
import { AjudaPageComponent } from "./viewer/ajuda-page/ajuda-page.component";
import { AdminHemocentroComponent } from "./viewer/admin-hemocentro/admin-hemocentro.component";
import { AdminLojaComponent } from "./viewer/admin-loja/admin-loja.component";
import { HomeComponent } from './viewer/home/home';
import { RelatorioComponent } from './viewer/relatorio/relatorio.component';
import { Relatorio1Component } from './viewer/relatorio/relatorio1/relatorio1.component';
import { Relatorio2Component } from './viewer/relatorio/relatorio2/relatorio2.component';
import { Relatorio3Component } from './viewer/relatorio/relatorio3/relatorio3.component';
import { Relatorio4Component } from './viewer/relatorio/relatorio4/relatorio4.component';
import { DemandaFormComponent } from './viewer/admin-hemocentro/demanda-form/demanda-form.component';
import { ProdutoModule } from './viewer/admin-loja/produto/produto.module';
import { LoginModule } from './viewer/login/login.module';
import { AuthService } from './viewer/guards/auth.service';
import { TesteModalComponent } from './viewer/teste-modal/teste-modal.component';
import { CadastroModule } from './viewer/cadastro/cadastro.module';
import { ConfirmarService } from './viewer/doador-form/confirmar-doacao/confirmar-service';


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
    LoginModule,
    CadastroModule,
    DadosEntregaFormModule,
    HttpClientModule,
    ProdutoModule,
    // RelatorioModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule.forRoot()
    //,MatButtonModule  
  ],
  providers: [
    ConfirmarService,
    AuthService, 
    AuthGuard,
    CookieService,
    CarrinhoDeComprasComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
