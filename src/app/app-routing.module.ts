import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: '' },

];

@NgModule({
  imports: [
	RouterModule.forRoot(routes),
	CommonModule,
  	BrowserModule
	],
  exports: [RouterModule]
})
export class AppRoutingModule { }
