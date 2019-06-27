import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginFormComponent } from './login.component';
import { CadastroFormModule } from '../cadastro-form/cadastro-form.module';


@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CadastroFormModule
  ]
})
export class LoginFormModule { }
