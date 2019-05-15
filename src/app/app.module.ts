import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoacaoSangueComponent } from './viewer/doacao-sangue/doacao-sangue.component';
import { CadastroFormModule } from './viewer/cadastro-form/cadastro-form.module';
import { LoginFormModule } from './viewer/login-form/login-form.module';
import { DadosEntregaFormModule } from './viewer/dados-entrega-form/dados-entrega-form.module';
import { ProdutoModule } from './viewer/produto/produto.module';
import { RelatorioComponent } from './viewer/relatorio/relatorio.component';
import { RelatorioModule } from './viewer/relatorio/relatorio.module';
import { CatalogoProdutosComponent } from './viewer/catalogo-produtos/catalogo-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    DoacaoSangueComponent,
    RelatorioComponent,
    CatalogoProdutosComponent
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
