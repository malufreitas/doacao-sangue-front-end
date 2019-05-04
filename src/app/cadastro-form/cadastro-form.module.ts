import { LoginFormComponent } from './../login-form/login-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroFormComponent } from './cadastro-form.component';
import { FormsModule } from '@angular/forms';
import { LoginFormModule } from '../login-form/login-form.module';


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
