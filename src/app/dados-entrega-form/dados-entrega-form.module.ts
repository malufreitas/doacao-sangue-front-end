import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DadosEntregaFormComponent } from './dados-entrega-form.component';
import { CampoControlErroComponent } from './../campo-control-erro/campo-control-erro.component';

@NgModule({
  declarations: [
    DadosEntregaFormComponent,
    CampoControlErroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class DadosEntregaFormModule { }
