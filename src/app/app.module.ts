import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoacaoSangueComponent } from './viewer/doacao-sangue/doacao-sangue.component';
import { CadastroFormModule } from './viewer/cadastro-form/cadastro-form.module';
import { LoginFormModule } from './viewer/login-form/login-form.module';
import { ProdutoModule } from './viewer/produto/produto.module';
import { CatalogoProdutosComponent } from './viewer/compra-de-produtos/catalogo-produtos/catalogo-produtos.component';
import { RelatorioComponent } from './viewer/relatorio/relatorio.component';
import { RelatorioModule } from './viewer/relatorio/relatorio.module';
import { EsqueciMinhaSenhaComponent } from './viewer/esqueci-minha-senha/esqueci-minha-senha.component';
import { CarrinhoDeComprasComponent } from './viewer/compra-de-produtos/carrinho-de-compras/carrinho-de-compras.component';
import { PagamentoComponent } from './viewer/compra-de-produtos/pagamento/pagamento.component';
import { DadosEntregaFormModule } from './viewer/compra-de-produtos/dados-entrega-form/dados-entrega-form.module';
import { FinalizaCompraComponent } from './viewer/compra-de-produtos/finaliza-compra/finaliza-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    DoacaoSangueComponent,
    RelatorioComponent,
    CatalogoProdutosComponent,
    EsqueciMinhaSenhaComponent,
    CarrinhoDeComprasComponent,
    PagamentoComponent,
    FinalizaCompraComponent
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
    RelatorioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
