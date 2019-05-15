import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroFormComponent } from './cadastro-form.component';

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
