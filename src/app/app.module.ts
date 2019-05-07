import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoacaoSangueComponent } from './doacao-sangue/doacao-sangue.component';
import { CadastroFormModule } from './cadastro-form/cadastro-form.module';
import { LoginFormModule } from './login-form/login-form.module';
import { DadosEntregaFormModule } from './dados-entrega-form/dados-entrega-form.module';

@NgModule({
  declarations: [
    AppComponent,
    DoacaoSangueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginFormModule,
    CadastroFormModule,
    DadosEntregaFormModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
