import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoacaoSangueComponent } from './doacao-sangue/doacao-sangue.component';
import { RelatorioComponent } from './doacao-sangue/relatorio/relatorio.component';

@NgModule({
  declarations: [
    AppComponent,
    DoacaoSangueComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
