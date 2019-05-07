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
    FormsModule
  ],
  exports: [
    CadastroFormComponent
  ]
})
export class CadastroFormModule { }
