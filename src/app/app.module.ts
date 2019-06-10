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
import { CatalogoProdutosComponent } from './viewer/catalogo-produtos/catalogo-produtos.component';
import { RelatorioComponent } from './viewer/relatorio/relatorio.component';
import { RelatorioModule } from './viewer/relatorio/relatorio.module';
import { DemandaFormComponent } from './viewer/demanda-form/demanda-form.component';
import { DoadorFormComponent } from './viewer/doador-form/doador-form.component';
import { ConfirmarDoacaoComponent } from './viewer/doador-form/confirmar-doacao/confirmar-doacao.component';
import { HelpPageComponent } from './viewer/hemocentro-page/help-page.component';
import { AjudaPageComponent } from './viewer/ajuda-page/ajuda-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DoacaoSangueComponent,
    RelatorioComponent,
    CatalogoProdutosComponent,
    DemandaFormComponent,
    DoadorFormComponent,
    ConfirmarDoacaoComponent,
    HelpPageComponent,
    AjudaPageComponent
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
