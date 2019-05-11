import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoacaoSangueComponent } from './doacao-sangue/doacao-sangue.component';
import { RelatorioComponent } from './doacao-sangue/relatorio/relatorio.component';
import { Relatorio1Component } from './doacao-sangue/relatorio/relatorio1/relatorio1.component';
import { Relatorio2Component } from './doacao-sangue/relatorio/relatorio2/relatorio2.component';
import { Relatorio3Component } from './doacao-sangue/relatorio/relatorio3/relatorio3.component';
import { Relatorio4Component } from './doacao-sangue/relatorio/relatorio4/relatorio4.component';

@NgModule({
  declarations: [
    AppComponent,
    DoacaoSangueComponent,
    RelatorioComponent,
    Relatorio1Component,
    Relatorio2Component,
    Relatorio3Component,
    Relatorio4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
