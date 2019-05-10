import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoacaoSangueComponent } from './doacao-sangue/doacao-sangue.component';
import { FormsModule } from '@angular/forms';
import { CadastroFormModule } from './cadastro-form/cadastro-form.module';
import { LoginFormModule } from './login-form/login-form.module';
import { ProdutosComponent } from './produtos/produtos/produtos.component';
import { ProdutoCadastroComponent } from './produtos/produto-cadastro/produto-cadastro.component';
import { ProdutosConsultaComponent } from './produtos/produtos-consulta/produtos-consulta.component';
import { HttpClientModule } from '/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DoacaoSangueComponent,
    ProdutosComponent,
    ProdutoCadastroComponent,
    ProdutosConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginFormModule,
    CadastroFormModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
