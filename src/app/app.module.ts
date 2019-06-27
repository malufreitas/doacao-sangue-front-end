import { HomeComponent } from './viewer/home/home';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroFormModule } from './viewer/cadastro-form/cadastro-form.module';
import { LoginFormModule } from './viewer/login-form/login-form.module';
import { ProdutoModule } from './viewer/produto/produto.module';
import { CatalogoProdutosComponent } from './viewer/compra-de-produtos/catalogo-produtos/catalogo-produtos.component';
import { EsqueciMinhaSenhaComponent } from './viewer/esqueci-minha-senha/esqueci-minha-senha.component';
import { CarrinhoDeComprasComponent } from './viewer/compra-de-produtos/carrinho-de-compras/carrinho-de-compras.component';
import { PagamentoComponent } from './viewer/compra-de-produtos/pagamento/pagamento.component';
import { DadosEntregaFormModule } from './viewer/compra-de-produtos/dados-entrega-form/dados-entrega-form.module';
import { FinalizaCompraComponent } from './viewer/compra-de-produtos/finaliza-compra/finaliza-compra.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TesteModalComponent } from './viewer/teste-modal/teste-modal.component';
import { RelatorioModule } from './viewer/relatorio/relatorio.module';
import { AuthService } from './viewer/guards/auth.service';
import { AuthGuard } from './viewer/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogoProdutosComponent,
    EsqueciMinhaSenhaComponent,
    CarrinhoDeComprasComponent,
    PagamentoComponent,
    FinalizaCompraComponent,
    TesteModalComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginFormModule,
    CadastroFormModule,
    DadosEntregaFormModule,
    HttpClientModule,
    ProdutoModule,
    RelatorioModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    CarouselModule.forRoot()
    //,MatButtonModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
