import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

const routes: Routes = [  
  { path: 'login', component: LoginFormComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
