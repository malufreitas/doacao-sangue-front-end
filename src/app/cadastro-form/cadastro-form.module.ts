import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroFormComponent } from './cadastro-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroFormComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CadastroFormComponent
  ]
})
export class CadastroFormModule { }
